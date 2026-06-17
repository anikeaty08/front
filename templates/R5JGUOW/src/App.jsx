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



      // Lucide
      if (window.lucide) {
        lucide.createIcons();
      }

      // Charts
      const spendRevenueCtx = document.getElementById('spendRevenueChart');
      if (spendRevenueCtx) {
        new Chart(spendRevenueCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [
              {
                label: 'Receita',
                data: [120000, 135000, 128000, 150000, 172000, 180000, 190000, 210000, 205000, 230000, 240000, 260000],
                borderColor: '#0f172a',
                backgroundColor: 'rgba(15, 23, 42, 0.08)',
                fill: true,
                borderWidth: 2.5,
                tension: 0.35,
                pointRadius: 4,
                pointHoverRadius: 5,
                pointBackgroundColor: '#0f172a',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
              },
              {
                label: 'Investimento',
                data: [40000, 45000, 48000, 52000, 56000, 60000, 64000, 68000, 72000, 74000, 76000, 80000],
                borderColor: '#94a3b8',
                backgroundColor: 'rgba(148, 163, 184, 0.08)',
                fill: true,
                borderWidth: 2,
                tension: 0.35,
                pointRadius: 3,
                pointHoverRadius: 4,
                pointBackgroundColor: '#94a3b8',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 12 } }
              },
              y: {
                grid: { color: '#eef2f7' },
                ticks: {
                  color: '#64748b',
                  font: { size: 12 },
                  callback: (v) => 'R$ ' + (v / 1000) + 'k'
                }
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: { usePointStyle: true, padding: 16, color: '#475569', font: { size: 12 } }
              },
              tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#0f172a',
                bodyColor: '#475569',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                cornerRadius: 10,
                padding: 12,
                callbacks: {
                  label: (ctx) => `${ctx.dataset.label}: R$ ${ctx.parsed.y.toLocaleString('pt-BR')}`
                }
              }
            }
          }
        });
      }

      const channelsCtx = document.getElementById('channelsChart');
      if (channelsCtx) {
        new Chart(channelsCtx, {
          type: 'bar',
          data: {
            labels: ['Search', 'Social', 'Display', 'Email', 'Referral'],
            datasets: [
              {
                label: 'Receita (R$)',
                data: [92000, 74000, 38000, 54000, 31000],
                backgroundColor: ['#0f172a', '#334155', '#64748b', '#94a3b8', '#cbd5e1'],
                borderRadius: 8,
                borderSkipped: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 12 } }
              },
              y: {
                grid: { color: '#eef2f7' },
                ticks: {
                  color: '#64748b',
                  font: { size: 12 },
                  callback: (v) => 'R$ ' + (v / 1000) + 'k'
                }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#0f172a',
                bodyColor: '#475569',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                cornerRadius: 10,
                padding: 12,
                callbacks: {
                  label: (ctx) => `R$ ${ctx.parsed.y.toLocaleString('pt-BR')}`
                }
              }
            }
          }
        });
      }
    
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

<aside className="hidden lg:flex w-60 flex-col border-r border-slate-200 bg-white/70 backdrop-blur-md">

<div className="flex items-center gap-3 px-5 py-5 border-b border-slate-200/70">
<div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center tracking-tight" style={{letterSpacing: '-0.02em'}}>
<span className="text-base font-semibold">M</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight">Métrica</span>
<span className="text-xs text-slate-500">Marketing Intelligence</span>
</div>
</div>

<nav className="flex-1 px-3 py-4">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200/70 hover:border-slate-300 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<span className="text-sm font-medium">Dashboard</span>
</button>
<button className="w-full mt-1 flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-sm font-medium">Canais</span>
</button>
<button className="w-full mt-1 flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 14.5 20 19"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="text-sm font-medium">Audiências</span>
</button>
<button className="w-full mt-1 flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 17 6-6 4 4 5-5"></path>
<path d="M2 7h20"></path>
</svg>
<span className="text-sm font-medium">Conteúdo</span>
</button>
<button className="w-full mt-1 flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 13l3 3 7-7"></path>
</svg>
<span className="text-sm font-medium">Anúncios</span>
</button>
<button className="w-full mt-1 flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 border border-transparent hover:text-slate-900 hover:bg-slate-100 hover:border-slate-200 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v7H3z"></path>
<path d="M14 3h7v7h-7z"></path>
<path d="M14 14h7v7h-7z"></path>
<path d="M3 14h7v7H3z"></path>
</svg>
<span className="text-sm font-medium">Relatórios</span>
</button>
</nav>
<div className="mt-auto px-3 pb-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-colors">
<span className="text-sm">Configurações</span>
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<button className="w-full mt-2 flex items-center justify-between px-3 py-2 rounded-xl text-red-600 border border-red-200 hover:bg-red-50 transition-colors">
<span className="text-sm">Sair</span>
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 17 5-5-5-5"></path>
<path d="M21 12H9"></path>
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
</svg>
</button>
</div>
</aside>

<main className="flex-1 px-5 md:px-8 py-6">

<header className="flex flex-col gap-4 md:gap-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center tracking-tight lg:hidden" style={{letterSpacing: '-0.02em'}}>
<span className="text-base font-semibold">M</span>
</div>
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Bem-vindo(a) de volta</h1>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span>Resumo de desempenho — Q3 • Q4</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<input className="w-44 md:w-72 rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm outline-none ring-0 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-shadow" placeholder="Buscar insights..." type="text"/>
<svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<button className="h-10 w-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors">
<svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
</button>
<button className="h-10 w-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors">
<svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</button>
</div>
</div>
</header>

<section className="mt-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl font-medium tracking-tight">Indicadores-chave</h2>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
              Atualizado há 5 min
            </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

<div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 13l3 3 7-7"></path>
</svg>
</div>
<span className="text-xs font-medium rounded-full px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">+22%</span>
</div>
<div className="mt-4">
<p className="text-sm text-slate-500">ROI de Campanhas</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900 mt-1">342%</p>
<p className="text-xs text-slate-400 mt-1">Últimos 30 dias</p>
</div>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v22"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="text-xs font-medium rounded-full px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200">-9%</span>
</div>
<div className="mt-4">
<p className="text-sm text-slate-500">Custo por Aquisição (CPA)</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900 mt-1">R$ 27,40</p>
<p className="text-xs text-slate-400 mt-1">vs. mês anterior</p>
</div>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20V10"></path>
<path d="m7 15 5-5 5 5"></path>
</svg>
</div>
<span className="text-xs font-medium rounded-full px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200">+0,6 pp</span>
</div>
<div className="mt-4">
<p className="text-sm text-slate-500">CTR Médio</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900 mt-1">3,8%</p>
<p className="text-xs text-slate-400 mt-1">Display • Search • Social</p>
</div>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18"></path>
<path d="M8 21V8"></path>
<path d="M16 21V12"></path>
</svg>
</div>
<span className="text-xs font-medium rounded-full px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">+1,2 pp</span>
</div>
<div className="mt-4">
<p className="text-sm text-slate-500">Taxa de Conversão</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900 mt-1">5,4%</p>
<p className="text-xs text-slate-400 mt-1">Meta: 6,0%</p>
</div>
</div>
</div>
</section>

<section className="mt-8">
<h2 className="text-xl font-medium tracking-tight mb-4">Análises de Marketing</h2>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

<div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Investimento vs Receita</h3>
<p className="text-sm text-slate-500">Comparativo mensal</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200">Últimos 6 meses</button>
<button className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-600 hover:bg-slate-100">12 meses</button>
</div>
</div>
<div className="relative">
<div className="w-full h-72">
<canvas id="spendRevenueChart"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Funil de Marketing</h3>
<span className="text-xs text-slate-500">Últimos 30 dias</span>
</div>
<div className="space-y-4">

<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm text-slate-600">Impressões</span>
<span className="text-sm font-medium text-slate-900">1,2M</span>
</div>
<div className="h-2 w-full rounded-md bg-slate-100 border border-slate-200 overflow-hidden">
<div className="h-full bg-slate-900" style={{width: '100%'}}></div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm text-slate-600">Cliques</span>
<span className="text-sm font-medium text-slate-900">45,3k</span>
</div>
<div className="h-2 w-full rounded-md bg-slate-100 border border-slate-200 overflow-hidden">
<div className="h-full bg-slate-900/90" style={{width: '38%'}}></div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm text-slate-600">Leads</span>
<span className="text-sm font-medium text-slate-900">6,4k</span>
</div>
<div className="h-2 w-full rounded-md bg-slate-100 border border-slate-200 overflow-hidden">
<div className="h-full bg-slate-900/80" style={{width: '14%'}}></div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-1">
<span className="text-sm text-slate-600">Vendas</span>
<span className="text-sm font-medium text-slate-900">1,1k</span>
</div>
<div className="h-2 w-full rounded-md bg-slate-100 border border-slate-200 overflow-hidden">
<div className="h-full bg-slate-900/70" style={{width: '4.5%'}}></div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-500">CPL</p>
<p className="text-base font-semibold text-slate-900 tracking-tight mt-0.5">R$ 4,10</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-500">CPA</p>
<p className="text-base font-semibold text-slate-900 tracking-tight mt-0.5">R$ 27,4</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-500">LTV/CAC</p>
<p className="text-base font-semibold text-slate-900 tracking-tight mt-0.5">3,7x</p>
</div>
</div>
</div>

<div className="xl:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Performance por Canal</h3>
<p className="text-sm text-slate-500">Receita atribuída por canal</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200">Receita</button>
<button className="px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-600 hover:bg-slate-100">Cliques</button>
</div>
</div>
<div className="relative">
<div className="w-full h-80">
<canvas id="channelsChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl font-medium tracking-tight">Atividades Recentes</h2>
<button className="text-sm text-slate-700 hover:text-slate-900 flex items-center gap-1.5">
              Ver todas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full">
<thead className="bg-slate-50">
<tr>
<th className="text-left text-sm font-medium text-slate-600 px-6 py-3">Usuário</th>
<th className="text-left text-sm font-medium text-slate-600 px-6 py-3">Ação</th>
<th className="text-left text-sm font-medium text-slate-600 px-6 py-3">Quando</th>
<th className="text-left text-sm font-medium text-slate-600 px-6 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="user" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&amp;q=80"/>
<span className="text-sm font-medium text-slate-900">Alex Chen</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">Publicou nova campanha “Outubro Search”</td>
<td className="px-6 py-4 text-sm text-slate-500">há 2 horas</td>
<td className="px-6 py-4">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Ativo</span>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="user" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;q=80"/>
<span className="text-sm font-medium text-slate-900">Maya Rodriguez</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">Atualizou budget: Social +R$ 8.000</td>
<td className="px-6 py-4 text-sm text-slate-500">há 4 horas</td>
<td className="px-6 py-4">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Em análise</span>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="user" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80"/>
<span className="text-sm font-medium text-slate-900">James Wilson</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">Integração Google Ads sincronizada</td>
<td className="px-6 py-4 text-sm text-slate-500">há 6 horas</td>
<td className="px-6 py-4">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Pendente</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
