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
      
tailwind.config = {
theme: {
extend: {
fontFamily: { inter: ['Inter', 'ui-sans-serif', 'system-ui'] },
}
}
}



      // Icons
      lucide.createIcons();

      // Sidebar toggle (mobile)
      const sidebar = document.getElementById('sidebar');
      const openSidebar = document.getElementById('openSidebar');
      openSidebar?.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('fixed');
        sidebar.classList.toggle('inset-0');
        sidebar.classList.toggle('z-40');
      });

      // Segments activation
      const segGroups = {};
      document.querySelectorAll('.seg-btn').forEach(btn => {
        const group = btn.dataset.seg;
        segGroups[group] ||= [];
        segGroups[group].push(btn);
        btn.addEventListener('click', () => {
          segGroups[group].forEach(b => b.classList.replace('text-neutral-300','text-neutral-400'));
          segGroups[group].forEach(b => b.classList.remove('border-emerald-500/30','bg-emerald-500/10','text-emerald-300'));
          btn.classList.add('text-neutral-300');
          // Highlight active group with accent underline look
          btn.classList.add('border-emerald-500/30','bg-emerald-500/10','text-emerald-300');
          updateTimeframe(btn.dataset.value || '');
          showToast();
        });
      });

      // Tabs
      const tabs = ['calendar','assets','trades','fills','funding'];
      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.addEventListener('click', () => {
          const t = b.dataset.tab;
          document.querySelectorAll('.tab-btn').forEach(x => {
            x.classList.remove('text-emerald-300','border-b-2','border-emerald-400');
            x.classList.add('text-neutral-400');
          });
          b.classList.add('text-emerald-300','border-b-2','border-emerald-400');
          tabs.forEach(id => {
            document.getElementById('tab-'+id).classList.toggle('hidden', id !== t);
          });
        });
      });

      // Toast
      let toastTimer;
      function showToast() {
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.add('hidden');
          toast.classList.remove('flex');
        }, 3500);
      }

      // Chart helpers
      const commonGrid = 'rgba(255,255,255,0.06)';
      const neutralTick = '#737373'; // neutral-500
      const textNeutral = '#e5e5e5'; // neutral-200-ish
      const emerald = '#34d399';
      const emeraldBg = 'rgba(16,185,129,0.15)';
      const rose = '#fb7185';
      const roseBg = 'rgba(251,113,133,0.12)';

      function genSeries(n, base=0, vol=1.0) {
        const arr = [];
        let v = base;
        for (let i=0;i<n;i++){
          v += (Math.random()-0.5)*vol;
          arr.push(parseFloat(v.toFixed(2)));
        }
        return arr;
      }

      // PnL Chart
      const pnlCtx = document.getElementById('pnlChart').getContext('2d');
      const labels = Array.from({length: 48}, (_,i)=> `${Math.floor(i/2)}:${i%2?'30':'00'}`);
      let pnlChart = new Chart(pnlCtx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'P&L',
              data: genSeries(48, 0, 2.5),
              borderColor: rose,
              backgroundColor: roseBg,
              tension: 0.35,
              fill: true,
              borderWidth: 2
            },
            {
              label: 'Benchmark',
              data: genSeries(48, 0, 1.7),
              borderColor: emerald,
              backgroundColor: emeraldBg,
              tension: 0.35,
              fill: false,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
          scales: {
            x: { ticks: { color: neutralTick, maxTicksLimit: 8 }, grid: { color: commonGrid } },
            y: { ticks: { color: neutralTick }, grid: { color: commonGrid } }
          }
        }
      });

      // Secondary charts
      const ddChart = new Chart(document.getElementById('ddChart').getContext('2d'), {
        type: 'bar',
        data: {
          labels: Array.from({length: 10}, (_,i)=>`W${i+1}`),
          datasets: [{
            data: Array.from({length:10},()=> -Math.round(Math.random()*8+2)),
            backgroundColor: 'rgba(99,102,241,0.25)', // indigo-ish but subdued
            borderColor: 'rgba(99,102,241,0.45)',
            borderWidth: 1.5
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display:false } },
          scales: {
            x: { ticks: { color: neutralTick }, grid: { color: commonGrid } },
            y: { ticks: { color: neutralTick }, grid: { color: commonGrid } }
          }
        }
      });

      const wlChart = new Chart(document.getElementById('wlChart').getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [
            { label:'Wins', data:[5,7,6,8,4,2,3], backgroundColor: emeraldBg, borderColor: emerald, borderWidth: 1.5 },
            { label:'Losses', data:[3,2,4,3,5,1,2], backgroundColor: roseBg, borderColor: rose, borderWidth: 1.5 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textNeutral } } },
          scales: {
            x: { ticks: { color: neutralTick }, grid: { color: commonGrid } },
            y: { ticks: { color: neutralTick }, grid: { color: commonGrid } }
          }
        }
      });

      const allocChart = new Chart(document.getElementById('allocChart').getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['BTC','ETH','SOL','USDT'],
          datasets: [{
            data: [42, 27, 11, 20],
            backgroundColor: ['#f59e0b','#22c55e','#06b6d4','#737373'],
            borderColor: '#111827',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: textNeutral, boxWidth: 10 } }
          },
          cutout: '62%'
        }
      });

      const feeChart = new Chart(document.getElementById('feeChart').getContext('2d'), {
        type: 'line',
        data: {
          labels: Array.from({length: 15}, (_,i)=>`D${i+1}`),
          datasets: [{
            label:'Fees',
            data: Array.from({length:15},()=> (Math.random()*-6).toFixed(2)),
            borderColor: '#a3a3a3',
            backgroundColor: 'rgba(163,163,163,0.15)',
            tension: 0.35,
            fill: true,
            borderWidth: 2
          }]
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          plugins: { legend: { display:false } },
          scales: {
            x:{ ticks:{ color: neutralTick }, grid:{ color: commonGrid }},
            y:{ ticks:{ color: neutralTick }, grid:{ color: commonGrid }}
          }
        }
      });

      // Update on timeframe change
      function updateTimeframe(tf){
        const lenMap = { '24h': 48, '7d': 84, '30d': 120, 'all': 160 };
        const n = lenMap[tf] || 48;
        pnlChart.data.labels = Array.from({length: n}, (_,i)=> i);
        pnlChart.data.datasets[0].data = genSeries(n, 0, 2.4);
        pnlChart.data.datasets[1].data = genSeries(n, 0, 1.6);
        pnlChart.update();

        // KPI colors based on final value
        const last = pnlChart.data.datasets[0].data.at(-1);
        const total = document.getElementById('kpiTotal');
        const perp = document.getElementById('kpiPerp');
        const spot = document.getElementById('kpiSpot');
        const fmt = (v)=> (v>=0?'+$':'-$') + Math.abs(v*12).toFixed(2);
        total.textContent = fmt(last);
        perp.textContent = fmt(last*0.6);
        spot.textContent = fmt(last*0.4);
        [total,perp,spot].forEach(el=>{
          el.classList.toggle('text-emerald-300', last>=0);
          el.classList.toggle('text-rose-300', last<0);
        });
      }

      // Calendar generator
      const calendarGrid = document.getElementById('calendarGrid');
      const monthLabel = document.getElementById('monthLabel');
      const prevMonth = document.getElementById('prevMonth');
      const nextMonth = document.getElementById('nextMonth');

      let current = new Date();
      current.setDate(1);

      function randomPnL() {
        const val = Math.round((Math.random()*2-1)*5000)/100; // -50..+50
        return val;
      }

      function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = current.getFullYear();
        const month = current.getMonth();
        const monthName = current.toLocaleString('default', { month: 'long' });
        monthLabel.textContent = `${monthName} ${year}`;

        const firstDay = new Date(year, month, 1);
        const startOffset = firstDay.getDay();
        const daysInMonth = new Date(year, month+1, 0).getDate();

        // Fill leading blanks
        for (let i=0;i<startOffset;i++) {
          const cell = document.createElement('div');
          cell.className = 'min-h-[92px] rounded-xl bg-neutral-900/40 border border-white/10';
          calendarGrid.appendChild(cell);
        }

        // Days
        for (let d=1; d<=daysInMonth; d++) {
          const pnl = randomPnL();
          const positive = pnl >= 0;
          const cell = document.createElement('div');
          cell.className = 'relative min-h-[92px] rounded-xl bg-neutral-900/70 border border-white/10 p-2 hover:bg-neutral-800/80 transition';
          cell.innerHTML = `
            <div class="flex items-start justify-between">
              <span class="text-xs text-neutral-500">${d}</span>
            </div>
            ${Math.random() > 0.7 ? `
              <div class="absolute bottom-2 left-2 right-2">
                <div class="rounded-lg px-2 py-1 border ${positive?'border-emerald-500/20 bg-emerald-500/10 text-emerald-300':'border-rose-500/20 bg-rose-500/10 text-rose-300'} text-xs flex items-center justify-between">
                  <span>${positive?'+':''}$${Math.abs(pnl).toFixed(2)}</span>
                  <span class="text-neutral-500"> ${Math.random()>0.5? '1 trade':'2 trades'} </span>
                </div>
              </div>` : ''
            }
          `;
          calendarGrid.appendChild(cell);
        }
      }

      prevMonth.addEventListener('click', () => { current.setMonth(current.getMonth()-1); renderCalendar(); });
      nextMonth.addEventListener('click', () => { current.setMonth(current.getMonth()+1); renderCalendar(); });

      // Fees toggle impacts feeChart opacity
      const feesToggle = document.getElementById('feesToggle');
      feesToggle.addEventListener('change', () => {
        feeChart.data.datasets[0].borderColor = feesToggle.checked ? '#d4d4d4' : '#a3a3a3';
        feeChart.update();
      });

      // Initial render
      renderCalendar();
    
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
      
<div className="min-h-screen flex">

<aside className="hidden md:flex w-72 shrink-0 flex-col border-r border-white/10 bg-neutral-950/70 backdrop-blur-xl" id="sidebar">
<div className="px-5 py-4 flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-neutral-900/70 border border-white/10 grid place-items-center shadow-2xl">
<i aria-label="logo" className="h-4 w-4 text-emerald-300" data-lucide="line-chart"></i>
</div>
<div className="min-w-0">
<p className="text-sm text-neutral-400">Portfolio</p>
<p className="text-lg font-semibold tracking-tight text-neutral-200">Crypto Dashboard</p>
</div>
</div>
<nav className="px-3 pt-2 pb-6 space-y-1">
<button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg text-sm text-neutral-400 border border-white/10 bg-neutral-900/70 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 transition">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span>Overview</span>
</button>
<button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg text-sm border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-300 focus:outline-none focus:ring-2 focus:ring-white/20 transition">
<i className="h-4 w-4" data-lucide="activity"></i>
<span>Analysis</span>
</button>
<button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg text-sm text-neutral-400 border border-white/10 bg-neutral-900/70 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 transition">
<i className="h-4 w-4" data-lucide="receipt"></i>
<span>Orders</span>
</button>
<button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg text-sm text-neutral-400 border border-white/10 bg-neutral-900/70 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 transition">
<i className="h-4 w-4" data-lucide="layers"></i>
<span>Staking</span>
</button>
</nav>
<div className="mt-auto p-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4 space-y-3">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=120&auto=format&fit=crop" />
<div className="min-w-0">
<p className="text-sm text-neutral-200 leading-tight">Account Value</p>
<p className="text-xl font-semibold tracking-tight">$87,607.37</p>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">24H P&L</span>
<span className="text-emerald-300">+2.41%</span>
</div>
<button className="w-full h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm hover:bg-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition">Deposit</button>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10">
<div className="px-4 md:px-6 lg:px-8 h-16 flex items-center gap-3">
<button className="md:hidden h-10 w-10 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20" id="openSidebar">
<i aria-label="open sidebar" className="h-4 w-4" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<i className="h-4 w-4" data-lucide="chart-line"></i>
<span className="text-sm">Analysis</span>
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<span className="text-sm text-neutral-200">Trading & History</span>
</div>
<div className="flex-1 min-w-0"></div>
<div className="hidden md:flex items-center gap-3">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" data-lucide="search"></i>
<input className="h-10 w-56 bg-neutral-800 border border-white/10 rounded-lg pl-9 pr-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Search markets, pairs..." />
</div>
<button className="h-10 px-3 rounded-lg bg-neutral-900/70 border border-white/10 text-neutral-300 text-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Aug 2025</span>
</button>
<button className="h-10 px-3 rounded-lg bg-neutral-900/70 border border-white/10 text-neutral-300 text-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="download"></i>
<span>Export</span>
</button>
<button className="relative h-10 w-10 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-200 grid place-items-center">3</span>
</button>
</div>
</div>
</header>

<section className="px-4 md:px-6 lg:px-8 py-6 space-y-6">

<div className="rounded-2xl bg-neutral-900/70 backdrop-blur border border-white/10 shadow-2xl p-5 md:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Trading Analysis</h1>
<p className="text-sm text-neutral-400 mt-1">Detailed performance and bias across spot and derivatives.</p>
</div>

<div className="hidden lg:flex items-center gap-3">
<div className="flex items-center gap-1">
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800" data-seg="metric" data-value="pnl">P&L</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="metric" data-value="roi">ROI</button>
</div>
<div className="flex items-center gap-1">
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800" data-seg="market" data-value="combined">Combined</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="market" data-value="perp">Perp</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="market" data-value="spot">Spot</button>
</div>
<div className="flex items-center gap-1">
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-300 hover:bg-neutral-800" data-seg="tf" data-value="24h">24H</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="tf" data-value="7d">7D</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="tf" data-value="30d">30D</button>
<button className="seg-btn h-9 px-3 rounded-lg text-sm border border-white/10 bg-neutral-900/70 text-neutral-400 hover:bg-neutral-800" data-seg="tf" data-value="all">All</button>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="space-y-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4">
<p className="text-sm text-neutral-400">Account Value</p>
<p className="text-3xl font-semibold tracking-tight mt-1">$87,607.37</p>
<div className="mt-3 flex items-center gap-2 text-sm">
<span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
<i className="h-4 w-4" data-lucide="trending-up"></i> +3.59%
                    </span>
<span className="text-neutral-500">24H change</span>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-400">Recently Traded</span>
<div className="flex items-center gap-1">
<img alt="asset" className="h-6 w-6 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1621416894569-0f39a2b805d6?q=80&w=64&auto=format&fit=crop" />
<img alt="asset" className="h-6 w-6 rounded-md object-cover border border-white/10 -ml-2" src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=64&auto=format&fit=crop" />
<img alt="asset" className="h-6 w-6 rounded-md object-cover border border-white/10 -ml-2" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=64&auto=format&fit=crop" />
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-400">Directional Bias</span>
<span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-emerald-300 text-sm">Mostly Long</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Win Rate</p>
<p className="text-lg font-semibold tracking-tight text-emerald-300">54.0%</p>
</div>
<div className="rounded-lg bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Sharpe (30D)</p>
<p className="text-lg font-semibold tracking-tight">1.12</p>
</div>
</div>

<label className="mt-1 flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" id="feesToggle" type="checkbox" />
<span className="h-4 w-4 rounded-[6px] bg-neutral-800 border border-white/10 grid place-items-center peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/30 transition">
<svg className="h-3 w-3 text-emerald-300 opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<span className="text-xs text-neutral-400">Include fees in P&L</span>
</label>
</div>
</div>

<div className="lg:col-span-2 space-y-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
<span className="text-xs text-neutral-400">P&L</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
<span className="text-xs text-neutral-400">Benchmark</span>
</div>
</div>
<div className="lg:hidden flex items-center gap-1">
<button className="seg-btn h-8 px-2.5 rounded-lg text-xs border border-white/10 bg-neutral-900/70 text-neutral-300" data-seg="tf" data-value="24h">24H</button>
<button className="seg-btn h-8 px-2.5 rounded-lg text-xs border border-white/10 bg-neutral-900/70 text-neutral-400" data-seg="tf" data-value="7d">7D</button>
<button className="seg-btn h-8 px-2.5 rounded-lg text-xs border border-white/10 bg-neutral-900/70 text-neutral-400" data-seg="tf" data-value="30d">30D</button>
<button className="seg-btn h-8 px-2.5 rounded-lg text-xs border border-white/10 bg-neutral-900/70 text-neutral-400" data-seg="tf" data-value="all">All</button>
</div>
</div>
<div className="mt-3">
<div className="relative">
<div className="h-[260px] md:h-[300px]">
<div className="h-full"><canvas id="pnlChart"></canvas></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Total P&L</p>
<p className="text-lg font-semibold tracking-tight text-rose-300" id="kpiTotal">-$304.88</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Perpetual P&L</p>
<p className="text-lg font-semibold tracking-tight text-rose-300" id="kpiPerp">-$205.45</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Spot P&L</p>
<p className="text-lg font-semibold tracking-tight text-rose-300" id="kpiSpot">-$99.43</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Avg Trade Duration</p>
<p className="text-lg font-semibold tracking-tight">6h 12m</p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 backdrop-blur border border-white/10 shadow-2xl p-5 md:p-6 space-y-5">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Historical Breakdown</h2>
<p className="text-sm text-neutral-400 mt-1">Calendar returns, asset profitability, and trade history.</p>
</div>

<div className="flex items-center gap-6 border-b border-white/10">
<button className="tab-btn py-2 text-sm text-emerald-300 border-b-2 border-emerald-400 -mb-px" data-tab="calendar">Trading Calendar</button>
<button className="tab-btn py-2 text-sm text-neutral-400 hover:text-neutral-200" data-tab="assets">Asset Profitability</button>
<button className="tab-btn py-2 text-sm text-neutral-400 hover:text-neutral-200" data-tab="trades">Completed Trades</button>
<button className="tab-btn py-2 text-sm text-neutral-400 hover:text-neutral-200" data-tab="fills">Fills History</button>
<button className="tab-btn py-2 text-sm text-neutral-400 hover:text-neutral-200" data-tab="funding">Funding History</button>
</div>

<div className="space-y-4" id="tab-calendar">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20" id="prevMonth">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<div className="px-3 h-9 rounded-lg bg-neutral-900/70 border border-white/10 text-sm grid place-items-center" id="monthLabel">August 2025</div>
<button className="h-9 w-9 grid place-items-center rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20" id="nextMonth">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Legend</span>
<span className="inline-flex items-center gap-1 text-xs text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400/80"></span> Profit</span>
<span className="inline-flex items-center gap-1 text-xs text-rose-300"><span className="h-2 w-2 rounded-full bg-rose-400/80"></span> Loss</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">P&L (Month)</p>
<p className="text-lg font-semibold tracking-tight text-rose-300" id="calPnl">-$12,632.20</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Volume</p>
<p className="text-lg font-semibold tracking-tight" id="calVol">$613,606.91</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Most Profitable</p>
<p className="text-lg font-semibold tracking-tight text-emerald-300" id="calBest">ETH +$422.42</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<p className="text-xs text-neutral-500">Win Rate</p>
<p className="text-lg font-semibold tracking-tight" id="calWin">50%</p>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 p-3 md:p-4">
<div className="grid grid-cols-7 gap-2 text-xs text-neutral-500 mb-2">
<div className="text-center">Sun</div>
<div className="text-center">Mon</div>
<div className="text-center">Tue</div>
<div className="text-center">Wed</div>
<div className="text-center">Thu</div>
<div className="text-center">Fri</div>
<div className="text-center">Sat</div>
</div>
<div className="grid grid-cols-7 gap-2" id="calendarGrid"></div>
</div>
</div>

<div className="hidden space-y-4" id="tab-assets">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4 lg:col-span-1">
<h3 className="text-lg font-semibold tracking-tight">Allocation</h3>
<p className="text-xs text-neutral-500">Holdings distribution</p>
<div className="mt-3">
<div className="h-[260px]">
<div className="h-full"><canvas id="allocChart"></canvas></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4 lg:col-span-2">
<h3 className="text-lg font-semibold tracking-tight">Asset Profitability</h3>
<p className="text-xs text-neutral-500">Top performers this month</p>
<div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">BTC</span>
<span className="text-xs text-emerald-300">+4.2%</span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight">$42,106</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">ETH</span>
<span className="text-xs text-emerald-300">+6.8%</span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight">$21,488</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">SOL</span>
<span className="text-xs text-rose-300">-1.3%</span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight">$8,911</p>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">USDT</span>
<span className="text-xs text-neutral-400">—</span>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight">$15,102</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="tab-trades">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl overflow-hidden">
<div className="grid grid-cols-12 px-4 py-3 text-xs text-neutral-500 border-b border-white/10">
<div className="col-span-3">Time</div>
<div className="col-span-2">Pair</div>
<div className="col-span-2">Side</div>
<div className="col-span-2">Size</div>
<div className="col-span-3 text-right">P&L</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 px-4 py-3 text-sm">
<div className="col-span-3 text-neutral-400">2025-08-14 10:22</div>
<div className="col-span-2">ETH/USDT</div>
<div className="col-span-2"><span className="text-emerald-300">Long</span></div>
<div className="col-span-2">$12,500</div>
<div className="col-span-3 text-right text-emerald-300">+$422.42</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 text-sm">
<div className="col-span-3 text-neutral-400">2025-08-14 15:04</div>
<div className="col-span-2">BTC/USDT</div>
<div className="col-span-2"><span className="text-rose-300">Short</span></div>
<div className="col-span-2">$35,000</div>
<div className="col-span-3 text-right text-rose-300">-$356.22</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 text-sm">
<div className="col-span-3 text-neutral-400">2025-08-12 08:40</div>
<div className="col-span-2">SOL/USDT</div>
<div className="col-span-2"><span className="text-emerald-300">Long</span></div>
<div className="col-span-2">$4,800</div>
<div className="col-span-3 text-right text-emerald-300">+$98.60</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="tab-fills">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl overflow-hidden">
<div className="grid grid-cols-12 px-4 py-3 text-xs text-neutral-500 border-b border-white/10">
<div className="col-span-3">Time</div>
<div className="col-span-3">Pair</div>
<div className="col-span-3">Price</div>
<div className="col-span-3 text-right">Fee</div>
</div>
<div className="divide-y divide-white/10 text-sm">
<div className="grid grid-cols-12 px-4 py-3">
<div className="col-span-3 text-neutral-400">2025-08-14 10:22:19</div>
<div className="col-span-3">ETH/USDT</div>
<div className="col-span-3">$2,498.12</div>
<div className="col-span-3 text-right text-neutral-400">$-1.12</div>
</div>
<div className="grid grid-cols-12 px-4 py-3">
<div className="col-span-3 text-neutral-400">2025-08-14 15:04:02</div>
<div className="col-span-3">BTC/USDT</div>
<div className="col-span-3">$61,202.30</div>
<div className="col-span-3 text-right text-neutral-400">$-2.44</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="tab-funding">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl overflow-hidden">
<div className="grid grid-cols-12 px-4 py-3 text-xs text-neutral-500 border-b border-white/10">
<div className="col-span-4">Time</div>
<div className="col-span-4">Market</div>
<div className="col-span-4 text-right">Funding</div>
</div>
<div className="divide-y divide-white/10 text-sm">
<div className="grid grid-cols-12 px-4 py-3">
<div className="col-span-4 text-neutral-400">2025-08-14 04:00</div>
<div className="col-span-4">BTC-PERP</div>
<div className="col-span-4 text-right text-neutral-400">+$6.20</div>
</div>
<div className="grid grid-cols-12 px-4 py-3">
<div className="col-span-4 text-neutral-400">2025-08-13 20:00</div>
<div className="col-span-4">ETH-PERP</div>
<div className="col-span-4 text-right text-neutral-400">-$3.42</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4">
<h3 className="text-lg font-semibold tracking-tight">Drawdown (30D)</h3>
<p className="text-xs text-neutral-500">Max vs current</p>
<div className="mt-3 h-[220px]">
<div className="h-full"><canvas id="ddChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4">
<h3 className="text-lg font-semibold tracking-tight">Win/Loss by Weekday</h3>
<p className="text-xs text-neutral-500">Trade outcomes</p>
<div className="mt-3 h-[220px]">
<div className="h-full"><canvas id="wlChart"></canvas></div>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl p-4">
<h3 className="text-lg font-semibold tracking-tight">Fees (30D)</h3>
<p className="text-xs text-neutral-500">Impact on net returns</p>
<div className="mt-3 h-[220px]">
<div className="h-full"><canvas id="feeChart"></canvas></div>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed bottom-4 right-4 hidden items-center gap-3 px-4 h-12 rounded-xl bg-neutral-900/95 border border-white/10 shadow-xl" id="toast">
<i className="h-4 w-4 text-emerald-300" data-lucide="check-circle"></i>
<span className="text-sm text-neutral-200">Updated time range</span>
</div>


    </>
  );
}
