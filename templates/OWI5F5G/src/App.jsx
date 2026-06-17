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



    // Icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });

    // Charts palette
    const gridColor = 'rgba(71,85,105,0.25)'; // slate-600/25
    const textColor = 'rgba(203,213,225,0.9)'; // slate-300
    Chart.defaults.font.family = 'Inter, ui-sans-serif, system-ui';
    Chart.defaults.color = textColor;

    // Line: contracts
    const contractsCtx = document.getElementById('contractsLine').getContext('2d');
    new Chart(contractsCtx, {
      type: 'line',
      data: {
        labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг'],
        datasets: [{
          label: 'Контракты',
          data: [2,3,3.5,5.2,7.1,8.5,10.9,10.8],
          borderColor: '#22c55e',
          pointRadius: 0,
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: 'rgba(148,163,184,0.6)', font: { size: 10 } } },
          y: { grid: { color: gridColor, drawTicks: false }, ticks: { display: false }, border: { dash: [4,4] } }
        }
      }
    });

    // Line: potential deals
    const potentialCtx = document.getElementById('potentialLine').getContext('2d');
    new Chart(potentialCtx, {
      type: 'line',
      data: {
        labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг'],
        datasets: [{
          label: 'Потенциал',
          data: [80,120,180,240,260,300,360,360.9],
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56,189,248,0.08)',
          fill: true,
          pointRadius: 2,
          pointBackgroundColor: '#38bdf8',
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: 'rgba(148,163,184,0.6)', font: { size: 10 } } },
          y: { grid: { color: gridColor }, ticks: { display: false } }
        }
      }
    });

    // Bar: efficiency
    const effCtx = document.getElementById('efficiencyBar').getContext('2d');
    new Chart(effCtx, {
      type: 'bar',
      data: {
        labels: ['Янв','Мар','Май','Июл','Сен','Ноя','Дек'],
        datasets: [
          { label: 'Клиенты', data: [22,28,24,30,32,26,28], backgroundColor: 'rgba(100,116,139,0.65)', borderRadius: 6, barPercentage: 0.5, categoryPercentage: 0.6 },
          { label: 'Встречи', data: [12,16,14,18,20,15,19], backgroundColor: 'rgba(56,189,248,0.8)', borderRadius: 6, barPercentage: 0.5, categoryPercentage: 0.6 },
          { label: 'Сделки', data: [8,10,9,12,14,12,15], backgroundColor: 'rgba(16,185,129,0.9)', borderRadius: 6, barPercentage: 0.5, categoryPercentage: 0.6 }
        ]
      },
      options: {
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: { grid: { display: false }, ticks: { color: 'rgba(148,163,184,0.6)' } },
          y: { grid: { color: gridColor }, ticks: { color: 'rgba(148,163,184,0.6)' }, suggestedMax: 40 }
        }
      }
    });

    // Radar: actions
    const radarCtx = document.getElementById('actionsRadar').getContext('2d');
    new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [
          { label: 'Звонки', data: [200,280,150,190,300,180,220], borderColor: '#e879f9', backgroundColor: 'rgba(232,121,249,0.15)', pointRadius: 0, borderWidth: 2 },
          { label: 'Рассылки', data: [120,260,210,80,140,90,240], borderColor: '#ec4899', backgroundColor: 'rgba(236,72,153,0.12)', pointRadius: 0, borderWidth: 2 },
          { label: 'Встречи', data: [90,160,130,100,140,120,160], borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.12)', pointRadius: 0, borderWidth: 2 }
        ]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          r: {
            angleLines: { color: gridColor },
            grid: { color: gridColor },
            suggestedMin: 0, suggestedMax: 320,
            pointLabels: { color: 'rgba(148,163,184,0.7)', font: { size: 10 } },
            ticks: { display: false }
          }
        }
      }
    });

    // Tabs state (visual only)
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('bg-slate-800/40','text-slate-100'));
        btn.classList.add('bg-slate-800/40','text-slate-100');
      });
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
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:w-72 xl:w-80 border-r border-slate-800/70 bg-[#0C1218]/70 backdrop-blur-sm sticky top-0 h-screen flex-col">
<div className="px-5 pt-5 pb-4 flex items-center gap-3">
<div className="relative">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 p-[2px]">
<div className="h-full w-full rounded-[10px] bg-[#0B0F14] grid place-items-center">
<i className="w-5 h-5 text-sky-400" data-lucide="sparkles"></i>
</div>
</div>
</div>
<div className="text-slate-100 text-[20px] tracking-tight font-semibold">Zion-city</div>
</div>
<div className="px-4">
<label className="flex items-center gap-2 bg-[#0F141B] border border-slate-800/70 rounded-xl px-3 py-2.5 text-slate-400 focus-within:border-slate-700">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none placeholder:text-slate-500 text-sm" placeholder="Поиск"/>
<span className="text-xs text-slate-500 px-1.5 py-0.5 border border-slate-700 rounded-md">⌘K</span>
</label>
</div>
<nav className="mt-4 flex-1 overflow-y-auto">
<ul className="px-2 text-[14px]">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="radio"></i>
<span>Помехи</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#111824] text-slate-100 border border-slate-800 shadow-inner" href="#">
<i className="w-4.5 h-4.5 text-sky-400" data-lucide="layout-dashboard"></i>
<span className="font-medium">Рабочий стол</span>
<span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400/90"></span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="handshake"></i>
<span>Сделки</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="check-square"></i>
<span>Задачи</span>
<span className="ml-auto text-[11px] text-slate-300 bg-[#0D131A] border border-slate-800 rounded-md px-1.5 py-0.5">8</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="bar-chart-3"></i>
<span>Аналитика</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="list-tree"></i>
<span>Списки</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="mail"></i>
<span>Почта</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="settings"></i>
<span>Настройки</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-[#0F141B] border border-transparent hover:border-slate-800" href="#">
<i className="w-4.5 h-4.5 text-slate-500" data-lucide="map"></i>
<span>CRM-Mapser</span>
</a>
</li>
</ul>
</nav>
<div className="p-4 mt-auto">
<div className="rounded-2xl border border-slate-800 bg-[#0F141B] p-3">
<div className="flex items-center justify-between mb-2">
<div className="text-[13px] text-slate-400">AI Ассистент</div>
<i className="w-4 h-4 text-slate-500" data-lucide="bot"></i>
</div>
<textarea className="w-full h-24 bg-transparent text-sm outline-none placeholder:text-slate-600" placeholder="Опишите вашу задачу..."></textarea>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-4 h-4" data-lucide="image"></i>
<i className="w-4 h-4" data-lucide="paperclip"></i>
<i className="w-4 h-4" data-lucide="send"></i>
</div>
<button className="text-xs text-slate-400 border border-slate-800 rounded-md px-2 py-1 hover:border-slate-700">AI Эрик</button>
</div>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 bg-[#0B0F14]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F14]/60 border-b border-slate-800/70">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-800 hover:border-slate-700 bg-[#0F141B]">
<i className="w-4.5 h-4.5 text-slate-400" data-lucide="menu"></i>
</button>
<h1 className="text-[22px] sm:text-[24px] tracking-tight text-slate-100 font-semibold">Рабочий стол</h1>
<div className="hidden md:flex items-center ml-4">
<div className="inline-flex rounded-xl border border-slate-800 bg-[#0F141B] p-1">
<button className="px-3 py-1.5 text-sm rounded-lg text-slate-100 bg-sky-600/20 border border-sky-700/40">Сегодня</button>
<button className="px-3 py-1.5 text-sm rounded-lg text-slate-300 hover:text-slate-100">Неделя</button>
<button className="px-3 py-1.5 text-sm rounded-lg text-slate-300 hover:text-slate-100">Месяц</button>
<button className="px-3 py-1.5 text-sm rounded-lg text-slate-300 hover:text-slate-100">Период</button>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-slate-800 bg-[#0F141B] hover:border-slate-700">
<i className="w-4 h-4 text-slate-400" data-lucide="plus"></i>
<span className="text-sm text-slate-200">Новая сделка</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-sky-700 bg-sky-600/90 text-white hover:bg-sky-500">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span className="text-sm">Запланировать</span>
</button>
<div className="ml-1 h-9 w-9 rounded-full border border-slate-800 overflow-hidden">
<img alt="user" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-6">

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-4 space-y-6">

<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm">
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[13px] text-slate-400">Сумма контрактов</p>
<div className="mt-1 flex items-end gap-2">
<div className="text-[30px] leading-none tracking-tight font-semibold text-slate-100">10.8 млн. ₽</div>
<div className="text-emerald-400 text-xs inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
<span>100%</span>
</div>
</div>
</div>
<button className="text-slate-500 hover:text-slate-300">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="mt-3">
<div className="h-[120px] rounded-xl border border-slate-800 bg-[#0C1218] p-2">
<div className="h-full w-full rounded-lg overflow-hidden">
<div className="h-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="relative h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">

<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full"><div className="h-full"><canvas id="contractsLine"></canvas></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm">
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[13px] text-slate-400">Количество потенциальных сделок</p>
<div className="mt-1 flex items-end gap-2">
<div className="text-[30px] leading-none tracking-tight font-semibold text-slate-100">360.9 млн. ₽</div>
<div className="text-sky-400 text-xs inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
<span>300%</span>
</div>
</div>
</div>
<button className="text-slate-500 hover:text-slate-300">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="mt-3">
<div className="h-[120px] rounded-xl border border-slate-800 bg-[#0C1218] p-2">
<div className="h-full w-full rounded-lg overflow-hidden">
<div><canvas id="potentialLine"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5">
<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm h-full">
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[16px] tracking-tight text-slate-100 font-medium">Эффективность</h3>
<p className="text-[12px] text-slate-500 mt-0.5">за год</p>
</div>
<button className="text-slate-500 hover:text-slate-300">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="mt-3 flex items-center gap-2">
<div className="inline-flex rounded-xl border border-slate-800 bg-[#0D131A] p-1">
<button className="px-3 py-1.5 text-xs rounded-lg text-slate-200 bg-slate-800/40">12м</button>
<button className="px-3 py-1.5 text-xs rounded-lg text-slate-300 hover:text-slate-100">30д</button>
<button className="px-3 py-1.5 text-xs rounded-lg text-slate-300 hover:text-slate-100">7д</button>
</div>
<button className="ml-auto inline-flex items-center gap-1.5 text-xs rounded-lg px-3 py-1.5 border border-slate-800 hover:border-slate-700 text-slate-300">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                    Подробнее
                  </button>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="text-[11px] text-slate-400">Клиенты</div>
<div className="text-[22px] leading-none tracking-tight font-semibold text-slate-100 mt-1">12м</div>
</div>
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="text-[11px] text-slate-400">Лиды</div>
<div className="text-[22px] leading-none tracking-tight font-semibold text-slate-100 mt-1">30л</div>
</div>
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="text-[11px] text-slate-400">Сделки</div>
<div className="text-[22px] leading-none tracking-tight font-semibold text-slate-100 mt-1">7л</div>
</div>
</div>

<div className="mt-3 flex items-center gap-4 text-[11px]">
<div className="flex items-center gap-1 text-slate-400">
<span className="h-2 w-2 rounded-full bg-slate-500"></span> Клиенты
                  </div>
<div className="flex items-center gap-1 text-slate-400">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> Встречи
                  </div>
<div className="flex items-center gap-1 text-slate-400">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Сделки
                  </div>
</div>

<div className="mt-3 h-[220px] rounded-xl border border-slate-800 bg-[#0C1218] p-2">
<div className="h-full"><div className="h-full"><canvas id="efficiencyBar"></canvas></div></div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-3">
<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm h-full">
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[16px] tracking-tight text-slate-100 font-medium">Действия</h3>
<p className="text-[12px] text-slate-500 mt-0.5">за неделю</p>
</div>
<button className="text-slate-500 hover:text-slate-300">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="mt-3 h-[260px] rounded-xl border border-slate-800 bg-[#0C1218] p-2">
<div className="h-full"><div className="h-full"><canvas id="actionsRadar"></canvas></div></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[12px]">
<div className="flex items-center gap-1 text-slate-400"><span className="h-2 w-2 rounded-full bg-fuchsia-400"></span> Звонки</div>
<div className="flex items-center gap-1 text-slate-400"><span className="h-2 w-2 rounded-full bg-pink-500"></span> Рассылки</div>
<div className="flex items-center gap-1 text-slate-400"><span className="h-2 w-2 rounded-full bg-sky-400"></span> Встречи</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm">
<div className="p-4 border-b border-slate-800/70">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="flex items-center gap-3">
<h3 className="text-[16px] tracking-tight text-slate-100 font-medium">Ближайшие встречи</h3>
<button className="inline-flex items-center gap-1 text-[12px] text-slate-300 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 hover:border-slate-700">
                  За месяц
                  <i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-[13px] rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-1.5 text-slate-300 hover:border-slate-700">
<i className="w-4 h-4" data-lucide="message-square"></i>
                  Prompt
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-sky-600/90 border border-sky-700 text-white px-3 py-1.5 hover:bg-sky-500">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
                  Запланировать
                </button>
</div>
</div>

<div className="mt-3 inline-flex rounded-xl border border-slate-800 bg-[#0D131A] p-1">
<button className="tab-btn px-3 py-1.5 text-sm rounded-lg text-slate-100 bg-slate-800/40" data-tab="all">Все компании</button>
<button className="tab-btn px-3 py-1.5 text-sm rounded-lg text-slate-300 hover:text-slate-100" data-tab="active">Активные</button>
<button className="tab-btn px-3 py-1.5 text-sm rounded-lg text-slate-300 hover:text-slate-100" data-tab="inactive">Неактивные</button>
</div>
</div>

<div className="px-4 py-3 flex flex-col lg:flex-row lg:items-center gap-3">
<div className="flex-1">
<label className="flex items-center gap-2 bg-[#0F141B] border border-slate-800 rounded-xl px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500" placeholder="Найти"/>
<span className="text-xs text-slate-500 px-1.5 py-0.5 border border-slate-700 rounded-md">⌘K</span>
</label>
</div>
<div className="flex items-center gap-2">
<span className="text-[12px] text-slate-400">Категории:</span>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 text-[12px] text-slate-300 hover:border-slate-700">
                Active <span className="ml-1 text-slate-500">• 12</span>
</button>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 text-[12px] text-slate-300 hover:border-slate-700">
                Customer data <span className="ml-1 text-slate-500">• 8</span>
</button>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 text-[12px] text-slate-300 hover:border-slate-700">
                Admin <span className="ml-1 text-slate-500">• 5</span>
</button>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 text-[12px] text-slate-300 hover:border-slate-700">
                +4
              </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-slate-400">
<th className="text-left font-medium py-3 px-4 border-t border-b border-slate-800 bg-[#0C1218]">Vendor</th>
<th className="text-left font-medium py-3 px-4 border-t border-b border-slate-800 bg-[#0C1218]">Вероятность продаж</th>
<th className="text-left font-medium py-3 px-4 border-t border-b border-slate-800 bg-[#0C1218]">Last assessed</th>
<th className="text-left font-medium py-3 px-4 border-t border-b border-slate-800 bg-[#0C1218]">Категории</th>
<th className="text-left font-medium py-3 px-4 border-t border-b border-slate-800 bg-[#0C1218]">Статус</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">

<tr className="hover:bg-[#0D131A] transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full border border-slate-800 overflow-hidden bg-[#0C1218]">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-slate-100 font-medium">Ephemeral</div>
<div className="text-[12px] text-slate-500">ephemeral.io</div>
</div>
</div>
</td>
<td className="py-3 px-4 w-[280px]">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="text-slate-200 tabular-nums">60%</div>
<div className="text-emerald-400 text-xs flex items-center gap-0.5">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i> 3%
                      </div>
</div>
</td>
<td className="py-3 px-4 text-slate-300">22 Jan 2025</td>
<td className="py-3 px-4">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] text-sky-300/90 bg-sky-400/10 border border-sky-500/30 rounded-md px-2 py-0.5">Active</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Customer data</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Admin</span>
<span className="text-[11px] text-slate-400 bg-slate-800/60 border border-slate-700/60 rounded-md px-2 py-0.5">+4</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-[12px] text-emerald-300 bg-emerald-400/10 border border-emerald-500/30 rounded-md px-2 py-0.5">Активные</span>
</td>
</tr>

<tr className="hover:bg-[#0D131A] transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full border border-slate-800 overflow-hidden bg-[#0C1218]">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-slate-100 font-medium">Stack3d Lab</div>
<div className="text-[12px] text-slate-500">stack3dlab.com</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full" style={{width: '72%'}}></div>
</div>
<div className="text-slate-200 tabular-nums">72%</div>
<div className="text-emerald-400 text-xs flex items-center gap-0.5">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i> 6%
                      </div>
</div>
</td>
<td className="py-3 px-4 text-slate-300">20 Jan 2025</td>
<td className="py-3 px-4">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] text-sky-300/90 bg-sky-400/10 border border-sky-500/30 rounded-md px-2 py-0.5">Active</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Business data</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Admin</span>
<span className="text-[11px] text-slate-400 bg-slate-800/60 border border-slate-700/60 rounded-md px-2 py-0.5">+4</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-[12px] text-emerald-300 bg-emerald-400/10 border border-emerald-500/30 rounded-md px-2 py-0.5">Активные</span>
</td>
</tr>

<tr className="hover:bg-[#0D131A] transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full border border-slate-800 overflow-hidden bg-[#0C1218]">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-slate-100 font-medium">Nordic Peak</div>
<div className="text-[12px] text-slate-500">npeak.co</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full" style={{width: '48%'}}></div>
</div>
<div className="text-slate-200 tabular-nums">48%</div>
<div className="text-red-400 text-xs flex items-center gap-0.5">
<i className="w-3.5 h-3.5" data-lucide="arrow-down-right"></i> 2%
                      </div>
</div>
</td>
<td className="py-3 px-4 text-slate-300">18 Jan 2025</td>
<td className="py-3 px-4">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] text-sky-300/90 bg-sky-400/10 border border-sky-500/30 rounded-md px-2 py-0.5">Active</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Customer data</span>
<span className="text-[11px] text-slate-300 bg-slate-700/20 border border-slate-700/60 rounded-md px-2 py-0.5">Admin</span>
</div>
</td>
<td className="py-3 px-4">
<span className="text-[12px] text-sky-300 bg-sky-400/10 border border-sky-500/30 rounded-md px-2 py-0.5">Ожидает</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
<div className="xl:col-span-8">
<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm">
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight text-slate-100 font-medium">Действия за неделю</h3>
<div className="text-[12px] text-slate-400">Sun • Sat • Fri</div>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">

<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-400">Тип</div>
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
</div>
<div className="mt-2 text-[22px] leading-none tracking-tight font-semibold text-slate-100">200</div>
<div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400"></div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-400">Знание</div>
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
</div>
<div className="mt-2 text-[22px] leading-none tracking-tight font-semibold text-slate-100">120</div>
<div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-400">Рассылки</div>
<span className="h-2 w-2 rounded-full bg-pink-500"></span>
</div>
<div className="mt-2 text-[22px] leading-none tracking-tight font-semibold text-slate-100">80</div>
<div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-1/2 bg-gradient-to-r from-pink-500 to-rose-400"></div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-[#0C1218] p-3">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-400">Встречи</div>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<div className="mt-2 text-[22px] leading-none tracking-tight font-semibold text-slate-100">64</div>
<div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[44%] bg-gradient-to-r from-emerald-400 to-teal-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4">
<div className="rounded-2xl border border-slate-800 bg-[#0F141B] shadow-sm">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-sky-400" data-lucide="zap"></i>
<h3 className="text-[16px] tracking-tight text-slate-100 font-medium">Быстрые действия</h3>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-[#0D131A] px-2.5 py-1.5 text-[12px] text-slate-300 hover:border-slate-700">
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i> Настроить
                  </button>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-sm text-slate-300 hover:border-slate-700">
<i className="w-4 h-4" data-lucide="phone-outgoing"></i> Звонок
                  </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-sm text-slate-300 hover:border-slate-700">
<i className="w-4 h-4" data-lucide="mail-plus"></i> Письмо
                  </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-sm text-slate-300 hover:border-slate-700">
<i className="w-4 h-4" data-lucide="messages-square"></i> Чат
                  </button>
</div>
<div className="mt-3">
<label className="flex items-center gap-2 bg-[#0F141B] border border-slate-800 rounded-xl px-3 py-2.5">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500" placeholder="Найти контакт, компанию, задачу..."/>
</label>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="inline-flex items-center justify-between rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-[13px] text-slate-300 hover:border-slate-700">
                    Active <span className="text-slate-500">12</span>
</button>
<button className="inline-flex items-center justify-between rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-[13px] text-slate-300 hover:border-slate-700">
                    Customer data <span className="text-slate-500">8</span>
</button>
<button className="inline-flex items-center justify-between rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-[13px] text-slate-300 hover:border-slate-700">
                    Admin <span className="text-slate-500">5</span>
</button>
<button className="inline-flex items-center justify-between rounded-lg border border-slate-800 bg-[#0D131A] px-3 py-2 text-[13px] text-slate-300 hover:border-slate-700">
                    +4 <span className="text-slate-500">кат.</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
