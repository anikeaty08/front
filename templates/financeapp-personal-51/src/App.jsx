import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Initialize Lucide icons
  document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
  });

  // Gráfico de Fluxo de Caixa
  const cashflowEl = document.getElementById('cashflowChart');
  if (cashflowEl) {
    const cashflowCtx = cashflowEl.getContext('2d');
    new Chart(cashflowCtx, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Receitas',
            data: [0, 0, 0, 5200, 0, 0, 0],
            borderColor: 'rgba(52,211,153,1)',
            backgroundColor: 'rgba(52,211,153,0.1)',
            borderWidth: 2.5,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(52,211,153,1)'
          },
          {
            label: 'Despesas',
            data: [45, 82, 67, 124, 89, 387, 128],
            borderColor: 'rgba(251,113,133,1)',
            backgroundColor: 'rgba(251,113,133,0.1)',
            borderWidth: 2.5,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(251,113,133,1)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(2,6,23,0.9)',
            titleColor: '#E2E8F0',
            bodyColor: '#CBD5E1',
            padding: 10,
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 11, family: 'Inter' } }
          },
          y: {
            grid: { color: 'rgba(148,163,184,0.15)' },
            ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 11, family: 'Inter' } }
          }
        }
      }
    });
  }

  // Gráfico de Supermercado
  const supermarketEl = document.getElementById('supermarketChart');
  if (supermarketEl) {
    const supermarketCtx = supermarketEl.getContext('2d');
    new Chart(supermarketCtx, {
      type: 'line',
      data: {
        labels: ['14/10', '15/10', '16/10', '17/10', '18/10', '19/10', '20/10'],
        datasets: [
          {
            label: 'Gastos',
            data: [67, 45, 89, 127, 34, 198, 58],
            borderColor: 'rgba(34,211,238,1)',
            backgroundColor: 'rgba(34,211,238,0.2)',
            borderWidth: 2.5,
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(34,211,238,1)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(2,6,23,0.9)',
            titleColor: '#E2E8F0',
            bodyColor: '#CBD5E1',
            padding: 10,
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return 'R$ ' + context.parsed.y.toFixed(2);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 10, family: 'Inter' } }
          },
          y: {
            grid: { color: 'rgba(148,163,184,0.15)' },
            ticks: { 
              color: 'rgba(203,213,225,0.9)', 
              font: { size: 10, family: 'Inter' },
              callback: function(value) {
                return 'R$ ' + value;
              }
            }
          }
        }
      }
    });
  }

  // Gráfico Pizza de Categorias
  const categoryPieEl = document.getElementById('categoryPieChart');
  if (categoryPieEl) {
    const categoryPieCtx = categoryPieEl.getContext('2d');
    new Chart(categoryPieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Supermercado', 'Moradia', 'Transporte', 'Lazer', 'Saúde'],
        datasets: [
          {
            data: [842, 740, 475, 318, 265],
            backgroundColor: [
              'rgba(34,211,238,0.9)',
              'rgba(139,92,246,0.9)',
              'rgba(251,191,36,0.9)',
              'rgba(251,113,133,0.9)',
              'rgba(52,211,153,0.9)'
            ],
            borderColor: 'rgba(2,6,23,0.5)',
            borderWidth: 2,
            hoverOffset: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(2,6,23,0.9)',
            titleColor: '#E2E8F0',
            bodyColor: '#CBD5E1',
            padding: 10,
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return 'R$ ' + context.parsed.toFixed(2);
              }
            }
          }
        }
      }
    });
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e357e9e5-97fe-48d5-ae99-58b71d8233f0_3840w.jpg\')'}}></div>

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"></div>
<div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/3 h-72 w-72 translate-y-1/3 rounded-full bg-teal-500/20 blur-3xl"></div>
</div>
<header className="relative z-10 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-4 pl-6">
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-[28px] md:text-[32px] tracking-tight font-semibold text-white">FinanceApp</h1>
<p className="text-sm text-slate-400 mt-1 font-normal">Controle suas finanças e gastos com supermercado</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 bg-white/5 hover:bg-white/10 text-slate-200 transition">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-sm font-medium">Exportar</span>
</button>
<button className="inline-flex items-center justify-center rounded-xl p-2.5 bg-white/5 hover:bg-white/10 transition">
<svg className="w-5 h-5 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</header>
<main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative ring-1 ring-white/10 overflow-hidden bg-gradient-to-br from-slate-900/70 to-slate-900/30 rounded-[34px] shadow-2xl">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-5 h-5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">Início</span>
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 ring-1 ring-white/20">
<svg className="w-[14px] h-[14px] text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
<button className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition ring-1 ring-emerald-400/50">
<svg className="w-4 h-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 flex items-center justify-between px-1">
<button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-sm font-semibold text-slate-200">OUTUBRO 2025</span>
<button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="mt-3 grid grid-cols-4 gap-1.5">
<button className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[11px] font-medium">Ontem</button>
<button className="px-2 py-1.5 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/50 text-emerald-200 text-[11px] font-medium">Hoje</button>
<button className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[11px] font-medium">7 dias</button>
<button className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[11px] font-medium">Mês</button>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-[13px] text-slate-400 font-normal">Saldo Atual</p>
<p className="text-[26px] tracking-tight font-semibold text-emerald-400 mt-1">R$ 3.847,20</p>
<p className="text-xs text-slate-400 font-normal">Receitas - Despesas</p>
</div>
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 ring-1 ring-white/30 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-2.5">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 5 5L20 7"></path></svg>
</div>
<span className="text-[11px] text-slate-400 font-medium">Receitas</span>
</div>
<p className="text-[18px] tracking-tight font-semibold text-emerald-400">R$ 6.500,00</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg bg-rose-500/20 ring-1 ring-rose-400/30 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 17 5-5 5 5 10-10"></path></svg>
</div>
<span className="text-[11px] text-slate-400 font-medium">Despesas</span>
</div>
<p className="text-[18px] tracking-tight font-semibold text-rose-400">R$ 2.652,80</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<span className="text-[11px] text-slate-400 font-medium">Supermercado</span>
</div>
<p className="text-[18px] tracking-tight font-semibold text-cyan-400">R$ 842,50</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg bg-amber-500/20 ring-1 ring-amber-400/30 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-[11px] text-slate-400 font-medium">Economia</span>
</div>
<p className="text-[18px] tracking-tight font-semibold text-amber-400">R$ 3.847,20</p>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between mb-4">
<div>
<h2 className="text-[18px] tracking-tight font-semibold text-white">Fluxo de Caixa</h2>
<p className="text-xs text-slate-400 font-normal">Últimos 7 dias</p>
</div>
</div>
<div className="relative h-48">
<canvas id="cashflowChart"></canvas>
</div>
<div className="mt-4 flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-slate-300 font-medium">Receitas</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-rose-400"></span>
<span className="text-slate-300 font-medium">Despesas</span>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-white mb-3">Transações Recentes</h3>
<div className="space-y-2.5">
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Supermercado Extra</p>
<p className="text-[11px] text-slate-500">Hoje, 14:30</p>
</div>
<span className="text-[14px] font-semibold text-rose-400">-R$ 127,90</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Salário</p>
<p className="text-[11px] text-slate-500">Ontem, 08:00</p>
</div>
<span className="text-[14px] font-semibold text-emerald-400">+R$ 5.200,00</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-violet-500/20 ring-1 ring-violet-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Netflix</p>
<p className="text-[11px] text-slate-500">19 Out</p>
</div>
<span className="text-[14px] font-semibold text-rose-400">-R$ 39,90</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0">
<div className="ring-1 ring-white/10 bg-slate-900/60 rounded-2xl mr-3 mb-3 ml-3 backdrop-blur">
<nav className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<button className="flex flex-col items-center gap-1 text-[11px] text-emerald-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="font-medium">Início</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-medium">Finanças</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-emerald-500/20">
<svg className="w-[22px] h-[22px] text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="font-medium">Supermercado</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<span className="font-medium">Relatórios</span>
</button>
</nav>
</div>
</div>
</div>

<div className="relative ring-1 ring-white/10 overflow-hidden bg-gradient-to-br from-slate-900/70 to-slate-900/30 rounded-[34px] shadow-2xl">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-5 h-5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">Supermercado</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
<button className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition ring-1 ring-emerald-400/50">
<svg className="w-4 h-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 flex items-center justify-between px-1">
<button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-sm font-semibold text-slate-200">OUTUBRO 2025</span>
<button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[13px] text-slate-400 font-normal">Total em Supermercado</p>
<p className="text-[26px] tracking-tight font-semibold text-cyan-400 mt-1">R$ 842,50</p>
<p className="text-xs text-slate-400 font-normal">no mês atual</p>
</div>
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 ring-1 ring-white/30 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
</div>

<div className="mt-4">
<div className="relative h-40">
<canvas id="supermarketChart"></canvas>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-blue-500/20 ring-1 ring-blue-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<span className="text-[15px] font-semibold text-blue-400">R$ 387,50</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Mercado</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-amber-500/20 ring-1 ring-amber-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
</div>
<span className="text-[15px] font-semibold text-amber-400">R$ 124,80</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Padaria</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-red-500/20 ring-1 ring-red-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></svg>
</div>
<span className="text-[15px] font-semibold text-red-400">R$ 198,40</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Açougue</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-[15px] font-semibold text-emerald-400">R$ 67,20</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Farmácia</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-purple-500/20 ring-1 ring-purple-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</div>
<span className="text-[15px] font-semibold text-purple-400">R$ 42,90</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Feira</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3.5 hover:bg-white/10 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="h-9 w-9 rounded-full bg-slate-500/20 ring-1 ring-slate-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="text-[15px] font-semibold text-slate-400">R$ 21,70</span>
</div>
<p className="text-[13px] font-medium text-slate-200">Outros</p>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Histórico de Compras</h3>
</div>

<div className="mb-3 relative">
<input className="w-full bg-white/5 ring-1 ring-white/10 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Buscar produto..." type="text"/>
<svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Arroz 5kg</p>
<p className="text-[11px] text-slate-500">Hoje • 2 unidades</p>
</div>
<span className="text-[13px] font-semibold text-slate-300">R$ 58,90</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-amber-500/20 ring-1 ring-amber-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-3.5 h-3.5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Pão Francês</p>
<p className="text-[11px] text-slate-500">Hoje • 1kg</p>
</div>
<span className="text-[13px] font-semibold text-slate-300">R$ 18,50</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-red-500/20 ring-1 ring-red-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-3.5 h-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Picanha</p>
<p className="text-[11px] text-slate-500">Ontem • 1.2kg</p>
</div>
<span className="text-[13px] font-semibold text-slate-300">R$ 89,90</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-purple-500/20 ring-1 ring-purple-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-slate-200 truncate">Alface • Tomate</p>
<p className="text-[11px] text-slate-500">18 Out • Mix</p>
</div>
<span className="text-[13px] font-semibold text-slate-300">R$ 12,40</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0">
<div className="ring-1 ring-white/10 bg-slate-900/60 rounded-2xl mr-3 mb-3 ml-3 backdrop-blur">
<nav className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="font-medium">Início</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-medium">Finanças</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-cyan-500/20">
<svg className="w-[22px] h-[22px] text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-cyan-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="font-medium">Supermercado</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<span className="font-medium">Relatórios</span>
</button>
</nav>
</div>
</div>
</div>

<div className="relative rounded-[34px] bg-gradient-to-br from-slate-900/70 to-slate-900/30 ring-1 ring-white/10 shadow-2xl overflow-hidden">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-5 h-5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">Relatórios</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
<button className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition ring-1 ring-emerald-400/50">
<svg className="w-4 h-4 text-emerald-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-2">
<button className="px-3 py-2 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/50 text-emerald-200 text-[13px] font-medium">Geral</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Mercado</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Comparar</button>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-[18px] tracking-tight font-semibold text-white">Despesas por Categoria</h2>
<p className="text-xs text-slate-400 font-normal">Outubro 2025</p>
</div>
</div>
<div className="relative h-48">
<canvas id="categoryPieChart"></canvas>
</div>
<div className="mt-4 grid grid-cols-2 gap-2 text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
<span className="text-slate-300 font-medium">Supermercado</span>
<span className="ml-auto text-slate-400 font-medium">32%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-violet-400"></span>
<span className="text-slate-300 font-medium">Moradia</span>
<span className="ml-auto text-slate-400 font-medium">28%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
<span className="text-slate-300 font-medium">Transporte</span>
<span className="ml-auto text-slate-400 font-medium">18%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-rose-400"></span>
<span className="text-slate-300 font-medium">Lazer</span>
<span className="ml-auto text-slate-400 font-medium">12%</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-slate-300 font-medium">Saúde</span>
<span className="ml-auto text-slate-400 font-medium">10%</span>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-white mb-3">Estatísticas do Mês</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
<div className="h-9 w-9 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</div>
<div className="flex-1">
<p className="text-[13px] font-medium text-slate-200">Média Diária</p>
<p className="text-[11px] text-slate-500">Gastos médios por dia</p>
</div>
<span className="text-[15px] font-semibold text-emerald-400">R$ 88,10</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
<div className="h-9 w-9 rounded-lg bg-amber-500/20 ring-1 ring-amber-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<div className="flex-1">
<p className="text-[13px] font-medium text-slate-200">Maior Gasto</p>
<p className="text-[11px] text-slate-500">Supermercado</p>
</div>
<span className="text-[15px] font-semibold text-amber-400">R$ 842,50</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
<div className="h-9 w-9 rounded-lg bg-cyan-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="flex-1">
<p className="text-[13px] font-medium text-slate-200">Dia com Mais Gastos</p>
<p className="text-[11px] text-slate-500">Sábado</p>
</div>
<span className="text-[15px] font-semibold text-cyan-400">R$ 387,50</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
<div className="h-9 w-9 rounded-lg bg-violet-500/20 ring-1 ring-violet-400/30 flex items-center justify-center flex-shrink-0">
<svg className="w-4 h-4 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
</div>
<div className="flex-1">
<p className="text-[13px] font-medium text-slate-200">Taxa de Economia</p>
<p className="text-[11px] text-slate-500">Do salário recebido</p>
</div>
<span className="text-[15px] font-semibold text-violet-400">59,2%</span>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-white mb-3">Metas do Mês</h3>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-xs mb-1.5">
<span className="text-slate-300 font-medium">Meta Supermercado</span>
<span className="text-emerald-400 font-medium">R$ 842 / R$ 1.000</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{width: '84.2%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1.5">
<span className="text-slate-300 font-medium">Meta Geral Despesas</span>
<span className="text-cyan-400 font-medium">R$ 2.653 / R$ 3.500</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{width: '75.8%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1.5">
<span className="text-slate-300 font-medium">Meta de Economia</span>
<span className="text-amber-400 font-medium">R$ 3.847 / R$ 3.000</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-500 to-orange-500" style={{width: '100%'}}></div>
</div>
<p className="text-[10px] text-amber-400 font-medium mt-1">✓ Meta atingida!</p>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 mt-6">
<div className="mx-3 mb-3 rounded-2xl bg-slate-900/60 backdrop-blur ring-1 ring-white/10">
<nav className="flex items-center justify-between px-4 py-3">
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="font-medium">Início</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-medium">Finanças</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-emerald-500/20">
<svg className="w-[22px] h-[22px] text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="font-medium">Supermercado</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-emerald-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<span className="font-medium">Relatórios</span>
</button>
</nav>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
