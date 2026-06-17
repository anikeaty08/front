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
      

<aside className="w-64 border-r border-zinc-800/60 hidden md:flex flex-col justify-between h-screen bg-[#080808]">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-800/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-medium text-xs tracking-tighter">
                        CF
                    </div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">CashFlow</span>
</div>
</div>

<nav className="px-3 py-6 space-y-0.5">
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Обзор</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900/50 text-zinc-100 transition-all border border-zinc-800/50 hover:border-zinc-700" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Сводка</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-all" href="#">
<iconify-icon icon="lucide:arrow-right-left" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Транзакции</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-all" href="#">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Аналитика</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-all" href="#">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Счета</span>
</a>
<p className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 mt-8">Управление</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-all" href="#">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Отчеты</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-all" href="#">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Настройки</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-zinc-800/60">
<div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-900/50 p-2 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Александр К.</span>
<span className="text-xs text-zinc-500">Финансовый директор</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#050505]">

<header className="h-16 sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800/60 flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex flex-col">
<h1 className="text-sm font-medium text-zinc-100 tracking-tight">Движение Денежных Средств</h1>
<span className="text-xs text-zinc-500">ООО "Техно Вектор"</span>
</div>
</div>
<div className="flex items-center gap-3">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/30 text-xs text-zinc-300 hover:border-zinc-700 transition-colors">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="14"></iconify-icon>
<span>Окт 2023</span>
<iconify-icon className="text-zinc-600" icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<button className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="14"></iconify-icon>
                    Операция
                </button>
</div>
</header>
<div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 flex flex-col justify-between hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Текущий остаток</span>
<span className="text-2xl font-medium text-zinc-100 tracking-tight">₽ 4,250,890</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:landmark" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="flex items-center text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
<iconify-icon className="mr-1" icon="lucide:trending-up" strokeWidth="1.5" width="12"></iconify-icon>
                            +12.5%
                        </span>
<span className="text-zinc-600">к прошлому месяцу</span>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 flex flex-col justify-between hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Поступления</span>
<span className="text-2xl font-medium text-zinc-100 tracking-tight">₽ 1,850,000</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-emerald-500" icon="lucide:arrow-down-left" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-100 w-[75%]"></div>
</div>
<div className="mt-3 flex justify-between text-xs text-zinc-500">
<span>План выполнен на 75%</span>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 flex flex-col justify-between hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Выбытия</span>
<span className="text-2xl font-medium text-zinc-100 tracking-tight">₽ 620,400</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-rose-500" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="flex items-center text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
<iconify-icon className="mr-1" icon="lucide:trending-down" strokeWidth="1.5" width="12"></iconify-icon>
                            +2.1%
                        </span>
<span className="text-zinc-600">выше бюджета</span>
</div>
</div>
</div>

<div className="w-full p-1 rounded-xl bg-gradient-to-b from-zinc-800/40 to-transparent">
<div className="bg-[#080808] border border-zinc-800/60 rounded-lg p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-medium text-zinc-100">Динамика денежного потока</h2>
<div className="flex gap-2">
<button className="px-2 py-1 text-xs text-zinc-100 bg-zinc-800 rounded">1М</button>
<button className="px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300">3М</button>
<button className="px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300">6М</button>
</div>
</div>

<div className="relative h-64 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-zinc-700 font-mono pointer-events-none">
<div className="border-b border-zinc-800/50 w-full h-0 flex items-end"> <span className="absolute -left-8 -top-2">2M</span> </div>
<div className="border-b border-zinc-800/50 w-full h-0 flex items-end"> <span className="absolute -left-8 -top-2">1.5M</span> </div>
<div className="border-b border-zinc-800/50 w-full h-0 flex items-end"> <span className="absolute -left-8 -top-2">1M</span> </div>
<div className="border-b border-zinc-800/50 w-full h-0 flex items-end"> <span className="absolute -left-8 -top-2">0.5M</span> </div>
<div className="border-b border-zinc-800/50 w-full h-0 flex items-end"> <span className="absolute -left-8 -top-2">0</span> </div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="white" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="white" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,200 C50,180 100,220 150,150 C200,80 250,120 300,100 C350,80 400,20 450,40 C500,60 550,100 600,80 C650,60 700,10 750,30 C800,50 850,40 900,20 L900,256 L0,256 Z" fill="url(#chartGradient)"></path>
<path d="M0,200 C50,180 100,220 150,150 C200,80 250,120 300,100 C350,80 400,20 450,40 C500,60 550,100 600,80 C650,60 700,10 750,30 C800,50 850,40 900,20" fill="none" stroke="white" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-[20%] left-[48%] flex flex-col items-center">
<div className="w-2 h-2 bg-white rounded-full border-2 border-[#080808] shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
<div className="mt-2 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded shadow-xl text-xs flex flex-col items-center">
<span className="text-zinc-400 mb-0.5">15 Окт</span>
<span className="text-white font-medium font-mono">₽ 1,240,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-100">Последние операции</h3>
<div className="flex gap-2">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-2 text-zinc-500" icon="lucide:search" width="14"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-xs bg-[#080808] border border-zinc-800 rounded-md text-zinc-300 focus:outline-none focus:border-zinc-600 transition-colors w-48" placeholder="Поиск..." type="text"/>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#080808] border border-zinc-800 rounded-md text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:filter" width="12"></iconify-icon>
                            Фильтр
                        </button>
</div>
</div>
<div className="w-full overflow-x-auto border border-zinc-800/60 rounded-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800/60 bg-zinc-900/20">
<th className="py-3 px-4 w-12">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all hover:border-zinc-500">
<svg className="hidden w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Дата</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Контрагент</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Категория</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Счет</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Сумма</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-center">Статус</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/40 bg-[#080808]">

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="hidden w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs text-zinc-400">Сегодня, 14:30</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">O</div>
                                    OOO "Вектор"
                                </td>
<td className="py-3 px-4 text-xs text-zinc-400">Реализация услуг</td>
<td className="py-3 px-4 text-xs text-zinc-400">Тинькофф ••4021</td>
<td className="py-3 px-4 text-sm font-medium text-emerald-400 text-right">+ 120,000 ₽</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                        Проведен
                                    </span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="hidden w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs text-zinc-400">Вчера, 10:15</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px]">A</div>
                                    AWS Emea Sarl
                                </td>
<td className="py-3 px-4 text-xs text-zinc-400">Хостинг и ПО</td>
<td className="py-3 px-4 text-xs text-zinc-400">Stripe USD</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 text-right">- $ 450.00</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                                        Обработка
                                    </span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="hidden w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs text-zinc-400">22 Окт, 18:00</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px]">M</div>
                                    ИП Марков А.В.
                                </td>
<td className="py-3 px-4 text-xs text-zinc-400">Аренда офиса</td>
<td className="py-3 px-4 text-xs text-zinc-400">Альфа ••9912</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 text-right">- 85,000 ₽</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                        Проведен
                                    </span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="py-3 px-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-transparent flex items-center justify-center transition-all">
<svg className="hidden w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 text-xs text-zinc-400">21 Окт, 09:12</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">S</div>
                                    Softline Trade
                                </td>
<td className="py-3 px-4 text-xs text-zinc-400">Лицензии</td>
<td className="py-3 px-4 text-xs text-zinc-400">Тинькофф ••4021</td>
<td className="py-3 px-4 text-sm font-medium text-zinc-200 text-right">- 42,500 ₽</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                        Проведен
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-xs text-zinc-500">Показано 4 из 128 операций</span>
<div className="flex gap-2">
<button className="px-2 py-1 text-xs border border-zinc-800 rounded bg-[#080808] text-zinc-400 disabled:opacity-50 hover:bg-zinc-900" disabled="">Предыдущая</button>
<button className="px-2 py-1 text-xs border border-zinc-800 rounded bg-[#080808] text-zinc-400 hover:bg-zinc-900">Следующая</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
