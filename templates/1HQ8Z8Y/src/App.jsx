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
      
    /* ------------ ICONS ------------- */
    lucide.createIcons();

    /* ------------ DATA -------------- */
    const states = ['MA', 'NY', 'CT', 'WI', 'OR', 'RI'];
    const installTypes = [
      'Roof Replacement', 'Gutter Shutter', 'Siding', 'Roof Repair',
      'Cleaning', 'Insulation', 'RainDrop', 'Doors', 'Windows', 'Gutter Repair'
    ];

    // Monthly demo data
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const baseRevenue = [170000, 180000, 152000, 140000, 192000, 210000, 199000, 175000, 165000, 183000, 176000, 190000];
    const baseCost    = [154200, 160000, 130000, 115000, 165000, 180000, 170000, 150000, 143000, 157000, 149000, 160000];

    // Revenue by state & type matrix
    const baseStateType = {
      'CT': [390000, 60000, 45000, 18000, 12000, 15000, 7000, 11000, 24000, 8000],
      'MA': [450000, 80000, 62000, 29000, 17000, 21000, 9000, 13000, 31000, 12000],
      'NY': [420000, 70000, 50000, 24000, 16000, 20000, 8000, 12000, 28000, 10000],
      'RI': [240000, 38000, 30000, 12000, 8000, 10000, 5000, 7000, 16000, 6000],
      'WI': [170000, 30000, 22000, 9000, 6000, 7000, 3000, 5000, 11000, 4000],
      'OR': [150000, 27000, 20000, 8000, 5000, 6000, 3000, 4000, 9000, 3000]
    };

    /* ------------ HELPERS ----------- */
    const fmt = n => '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 });
    const qs  = s => document.querySelector(s);

    /* ------------ FILTER PILL MAKER -- */
    function createPill(name, group, container) {
      const id = `${group}-${name}`;
      const lbl = document.createElement('label');
      lbl.className = 'cursor-pointer';
      lbl.innerHTML = `
        <input type="checkbox" id="${id}" name="${group}" value="${name}"
          class="peer sr-only" aria-label="${name}">
        <span tabindex="0"
          class="px-3 py-1.5 rounded-full border border-gray-300 bg-gray-50 text-xs font-medium
          peer-checked:bg-gray-900 peer-checked:text-white focus:outline-dashed focus:outline-1 transition-colors">${name}</span>`;
      container.appendChild(lbl);
    }

    /* ------------ BUILD PILLS -------- */
    const stateContainer = qs('#stateFilter');
    const typeContainer  = qs('#typeFilter');

    // "All" pills
    createPill('All', 'state', stateContainer);
    createPill('All', 'type',  typeContainer);

    states.forEach(s => createPill(s, 'state', stateContainer));
    installTypes.forEach(t => createPill(t, 'type', typeContainer));

    // Default check "All"
    qs('#state-All').checked = true;
    qs('#type-All').checked  = true;

    /* ------------ KPI CARDS ---------- */
    const kpiConfig = [
      { key: 'revenue', title: 'Total Revenue',   sub: '' },
      { key: 'cost',    title: 'Total Cost',      sub: 'costPct'  },
      { key: 'profit',  title: 'Total Profit',    sub: 'profitPct' },
      { key: 'margin',  title: 'Avg Margin %',    sub: '' }
    ];
    const kpiSection = qs('#kpiCards');
    const kpiTemplate = qs('#kpiTemplate');

    kpiConfig.forEach(k => {
      const clone = kpiTemplate.content.firstElementChild.cloneNode(true);
      clone.querySelector('.kpi-title').textContent = k.title;
      clone.querySelector('.kpi-value').id = `kpi-${k.key}`;
      if (k.sub) clone.querySelector('.kpi-sub').id = `kpi-${k.sub}`;
      else clone.querySelector('.kpi-sub').remove();
      kpiSection.appendChild(clone);
    });

    /* ------------ CHART SETUP -------- */
    const palette = ['#6366f1', '#3b82f6', '#8b5cf6', '#ec4899', '#22c55e', '#14b8a6', '#f97316', '#facc15', '#94a3b8', '#0ea5e9'];

    const stateCtx  = document.getElementById('stateInstallChart');
    const monthCtx  = document.getElementById('monthlyChart');
    const stateChart = new Chart(stateCtx, { type: 'bar', data: {}, options: {} });
    const monthChart = new Chart(monthCtx, {  data: {}, options: {} });

    /* ------------ UTILITIES ---------- */
    function getSelected(group) {
      const allChk = qs(`#${group}-All`);
      const chks   = Array.from(document.querySelectorAll(`input[name="${group}"]:not(#${group}-All)`));
      if (allChk.checked) {
        chks.forEach(c => c.checked = false);
        return group === 'state' ? states : installTypes;
      }
      return chks.filter(c => c.checked).map(c => c.value);
    }
    function syncAllCheckbox(group) {
      const allChk = qs(`#${group}-All`);
      const chks = Array.from(document.querySelectorAll(`input[name="${group}"]:not(#${group}-All)`));
      allChk.checked = chks.every(c => !c.checked);
    }

    /* ------------ LOGIC -------------- */
    function calcKPIs(selStates, selTypes) {
      let revenue = 0;
      selStates.forEach(s => {
        selTypes.forEach(t => {
          revenue += baseStateType[s][installTypes.indexOf(t)];
        });
      });
      const cost = revenue * 0.46;
      const profit = revenue - cost;
      const margin = profit / revenue * 100;
      return { revenue, cost, profit, margin };
    }

    function updateKPI(kpi) {
      qs('#kpi-revenue').textContent = fmt(kpi.revenue);
      qs('#kpi-cost').textContent    = fmt(kpi.cost);
      qs('#kpi-profit').textContent  = fmt(kpi.profit);
      qs('#kpi-margin').textContent  = kpi.margin.toFixed(0) + '%';

      // Subtexts
      if (qs('#kpi-costPct'))   qs('#kpi-costPct').textContent   = (kpi.cost / kpi.revenue * 100).toFixed(0) + '% of revenue';
      if (qs('#kpi-profitPct')) qs('#kpi-profitPct').textContent = (kpi.profit / kpi.revenue * 100).toFixed(0) + '% of revenue';
    }

    function updateStateChart(selStates, selTypes) {
      const labels = selStates;
      const datasets = selTypes.map((t, i) => ({
        label: t,
        data: labels.map(s => baseStateType[s][installTypes.indexOf(t)]),
        backgroundColor: palette[i % palette.length],
        barPercentage: .8, categoryPercentage: .8
      }));
      stateChart.data = { labels, datasets };
      stateChart.options = {
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: { stacked: true, ticks: { callback: v => '$' + v / 1e3 + 'k' } },
          y: { stacked: true }
        },
        plugins: { legend: { position: 'bottom' } }
      };
      stateChart.update();
    }

    function updateMonthChart(selStates, selTypes) {
      // Scale base data proportionally for demo
      const stateRatio = selStates.length / states.length;
      const typeRatio  = selTypes.length  / installTypes.length;
      const rev = baseRevenue.map(v => v * stateRatio * typeRatio);
      const cost = baseCost.map(v => v * stateRatio * typeRatio);
      const profit = rev.map((v, i) => v - cost[i]);
      const profitPct = profit.map((p, i) => (p / rev[i] * 100));

      monthChart.data = {
        labels: monthLabels,
        datasets: [
          { type: 'bar', label: 'Revenue', data: rev, backgroundColor: '#3b82f6', yAxisID: 'y' },
          { type: 'bar', label: 'Cost',    data: cost, backgroundColor: '#ef4444', yAxisID: 'y' },
          { type: 'line', label: 'Profit', data: profit, borderColor: '#10b981', backgroundColor: '#10b981',
            yAxisID: 'y', tension: .3, fill: false, pointRadius: 3, pointHoverRadius: 5 }
        ]
      };
      monthChart.options = {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        scales: { y: { ticks: { callback: v => '$' + v / 1e3 + 'k' } } },
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: ctx => {
                if (ctx.dataset.type === 'line') {
                  return `Profit: ${fmt(profit[ctx.dataIndex])} (${profitPct[ctx.dataIndex].toFixed(0)}%)`;
                }
                return `${ctx.dataset.label}: ${fmt(ctx.parsed.y)}`;
              }
            }
          }
        }
      };
      monthChart.update();

      // Draw percentage labels
      Chart.register({
        id: 'profitPct',
        afterDatasetsDraw(c) {
          const { ctx } = c, meta = c.getDatasetMeta(2);
          ctx.save();
          meta.data.forEach((pt, i) => {
            ctx.fillStyle = '#10b981';
            ctx.font = '10px Inter';
            ctx.textAlign = 'center';
            ctx.fillText('(' + profitPct[i].toFixed(0) + '%)', pt.x, pt.y - 6);
          });
        }
      });
    }

    function updateAll() {
      const selStates = getSelected('state');
      const selTypes  = getSelected('type');
      const kpi = calcKPIs(selStates, selTypes);

      updateKPI(kpi);
      updateStateChart(selStates, selTypes);
      updateMonthChart(selStates, selTypes);
    }

    /* ------------ EVENT LISTENERS ---- */
    document.addEventListener('change', e => {
      if (e.target.name === 'state' || e.target.name === 'type') {
        syncAllCheckbox(e.target.name);
        updateAll();
      }
    });

    /* ------------ INIT --------------- */
    updateAll();
  
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
      

<header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">Profit Dashboard for 2025</h1>
<button aria-label="Switch to list view" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 px-3 py-2 text-sm font-medium shadow transition" id="listToggle">
<i className="w-4 h-4" data-lucide="list"></i><span className="hidden sm:inline">List View</span>
</button>
</div>
</header>
<main className="flex-1 max-w-7xl mx-auto space-y-10 mt-8">

<section aria-labelledby="filters-heading" className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden animate-fade-in">
<h2 className="sr-only" id="filters-heading">Filters</h2>
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 p-8">

<fieldset aria-label="Filter by state" className="flex-1">
<legend className="text-sm font-medium mb-3">State</legend>
<div className="flex flex-wrap gap-3" id="stateFilter">

</div>
</fieldset>

<fieldset aria-label="Filter by install type" className="flex-1">
<legend className="text-sm font-medium mb-3">Install Type</legend>
<div className="flex flex-wrap gap-3 max-h-40 overflow-y-auto pr-2" id="typeFilter">

</div>
</fieldset>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 animate-slide-in" id="kpiCards">

<template id="kpiTemplate">
<div className="group rounded-xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:ring-gray-300">
<p className="text-[11px] uppercase text-gray-500 mb-1 kpi-title"></p>
<h2 className="text-2xl font-semibold kpi-value"></h2>
<p className="text-xs text-gray-500 mt-1 kpi-sub"></p>
</div>
</template>

</section>

<section className="grid lg:grid-cols-12 gap-8 px-4 animate-fade-in [animation-delay:0.15s]">

<div aria-labelledby="chart-state-install" className="lg:col-span-5 rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-6 flex flex-col space-y-4" role="region">
<h2 className="text-lg font-semibold" id="chart-state-install">Revenue by State &amp; Install Type</h2>
<div className="relative h-[320px]">
<canvas aria-label="Revenue by State and Install Type" id="stateInstallChart"></canvas>
</div>
</div>

<div aria-labelledby="chart-monthly" className="lg:col-span-7 rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-6 flex flex-col space-y-4" role="region">
<h2 className="text-lg font-semibold" id="chart-monthly">Monthly Revenue, Cost &amp; Profit</h2>
<div className="relative h-[320px]">
<canvas aria-label="Monthly Revenue, Cost and Profit" id="monthlyChart"></canvas>
</div>
</div>
</section>
</main>



<style>
    @keyframes fade-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
    @keyframes slide-in { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
    .animate-fade-in { animation: fade-in .6s forwards }
    .animate-slide-in { animation: slide-in .6s forwards }
  </style>

    </>
  );
}
