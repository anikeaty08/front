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



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        document.addEventListener('DOMContentLoaded', () => {
            const spendRange = document.getElementById('spendRange');
            const roiRange = document.getElementById('roiRange');
            
            const spendValue = document.getElementById('spendValue');
            const roiValue = document.getElementById('roiValue');
            
            const revenueOutput = document.getElementById('revenueOutput');
            const profitOutput = document.getElementById('profitOutput');
            const shareOutput = document.getElementById('shareOutput');

            const exSpend = document.getElementById('exSpend');
            const exRev = document.getElementById('exRev');
            const exRoi = document.getElementById('exRoi');
            const exProfit = document.getElementById('exProfit');
            const exShare = document.getElementById('exShare');

            const toggleTable = document.getElementById('toggleTable');
            const tariffTable = document.getElementById('tariffTable');

            // Format Currency
            const formatUSD = (num) => {
                return '$' + Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };

            // Get Team Share Percentage based on ROI
            const getTeamSharePercent = (roi) => {
                if (roi < 20) return 0;
                if (roi < 25) return 0.25;
                if (roi < 30) return 0.30;
                if (roi < 35) return 0.35;
                if (roi < 40) return 0.40;
                if (roi < 45) return 0.45;
                if (roi < 50) return 0.475;
                return 0.50;
            };

            const calculate = () => {
                const spend = parseInt(spendRange.value);
                const roi = parseInt(roiRange.value);

                spendValue.textContent = spend.toLocaleString();
                roiValue.textContent = roi;

                const revenue = spend * (1 + roi / 100);
                const profit = revenue - spend;
                const sharePercent = getTeamSharePercent(roi);
                const teamShare = profit > 0 ? profit * sharePercent : 0;

                revenueOutput.textContent = formatUSD(revenue);
                profitOutput.textContent = formatUSD(profit);
                shareOutput.textContent = formatUSD(teamShare);

                // Update Example Text
                exSpend.textContent = formatUSD(spend);
                exRev.textContent = formatUSD(revenue);
                exRoi.textContent = roi + '%';
                exProfit.textContent = formatUSD(profit);
                exShare.textContent = formatUSD(teamShare);
            };

            spendRange.addEventListener('input', calculate);
            roiRange.addEventListener('input', calculate);

            toggleTable.addEventListener('click', (e) => {
                e.preventDefault();
                tariffTable.classList.toggle('hidden');
            });

            // Init
            calculate();
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
      

<div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden">

<div className="absolute w-full h-full left-0 top-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>


<div className="absolute inset-0 bg-[#050508]/40 backdrop-blur-[1px]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-transparent to-[#050508] pointer-events-none"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050508]/20 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050508]/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex w-8 h-8 rounded items-center justify-center overflow-hidden">
<img alt="Qubix Capital" className="w-full h-full object-cover" src="https://www.aura.build/editor/logo_qubix.png"/>
</div>
<span className="uppercase text-sm font-semibold text-white tracking-tight">Qubix.Capital</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#ecosystem">Экосистема</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#calculator">Калькулятор</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#requirements">Требования</a>
<a className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded transition-all backdrop-blur-md" href="#application_form">
                    Подать заявку
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col z-10 pt-32 pr-6 pb-20 pl-6 relative justify-center" id="hero_section">
<div className="max-w-4xl mx-auto text-center relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-indigo-200 text-xs font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Private Equity &amp; Tech for iGaming
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1] pb-2 gradient-text-deep drop-shadow-2xl">
                Qubix.Capital — Фонд прямых инвестиций в арбитраж трафика.
            </h1>
<h2 className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Финансируем закупку трафика, строим передовую FinTech-платформу.
            </h2>
<div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-left md:text-center text-sm text-slate-300">
<div className="flex items-center gap-3 justify-center bg-black/40 rounded-full px-4 py-2 backdrop-blur-md border border-white/10 shadow-lg">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:wallet-money-linear"></iconify-icon>
<span className="">Инвестиции до <span className="text-white font-mono">$300k</span>/мес</span>
</div>
<div className="flex items-center gap-3 justify-center bg-black/40 rounded-full px-4 py-2 backdrop-blur-md border border-white/10 shadow-lg">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:graph-up-linear"></iconify-icon>
<span className="">Ставки на <span className="text-white font-mono">20–50%</span> выше рынка</span>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<a className="shiny-cta transition-all duration-300 hover:scale-[1.02] hover:shadow-[inset_0_0_0_1px_#1a1818,0_0_30px_rgba(124,58,237,0.6)] hover:brightness-110" href="#application_form">
<span className="">Подать заявку на аккредитацию</span>
</a>
<p className="text-xs text-slate-400 font-mono tracking-wide mt-2">Только для команд с подтвержденным спендом от $30k</p>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-6 border-t border-white/5 bg-black/5 backdrop-blur-sm" id="anti_positioning">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="mt-1 min-w-[24px] text-red-500/80"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></div>
<div>
<h3 className="text-white font-medium mb-1">Мы НЕ партнерская программа</h3>
<p className="text-sm text-slate-400 leading-relaxed">Нам не нужен просто ваш трафик. Мы строим долгосрочные партнерства.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="mt-1 min-w-[24px] text-red-500/80"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></div>
<div>
<h3 className="text-white font-medium mb-1">Мы НЕ сервис аренды аккаунтов</h3>
<p className="text-sm text-slate-400 leading-relaxed">Мы не сдаем инфраструктуру в аренду. Мы инвестируем её в портфельные команды.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="mt-1 min-w-[24px] text-red-500/80"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></div>
<div>
<h3 className="text-white font-medium mb-1">Мы НЕ курсы арбитража</h3>
<p className="text-sm text-slate-400 leading-relaxed">Мы не обучаем новичков. Мы работаем с готовыми экспертами.</p>
</div>
</div>
</div>

<div className="flex flex-col justify-center h-full">
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-[60px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
<div className="flex items-center gap-3 mb-4 text-indigo-400 relative z-10">
<iconify-icon icon="solar:check-circle-bold" width="28"></iconify-icon>
<span className="text-sm font-bold tracking-wider uppercase opacity-80">Private Equity Fund</span>
</div>
<h3 className="text-xl md:text-2xl font-medium leading-snug mb-2 gradient-text-silver relative z-10">
                        МЫ — Private Equity Фонд
                    </h3>
<p className="text-slate-300 leading-relaxed relative z-10">
                        Покупаем вашу экспертизу, предоставляя капитал и технологии для совместного заработка.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 max-w-7xl mx-auto" id="ecosystem">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-medium mb-2 tracking-tight gradient-text-silver">Капитал и Инфраструктура</h2>
<p className="text-slate-400 text-sm">Фундамент вашей масштабируемости</p>
</div>
<div className="space-y-4">
<div className="glass-panel p-5 rounded-xl flex gap-4 items-center hover:bg-white/[0.07] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-slate-200 text-sm">Бесперебойное обеспечение оборотным капиталом (ликвидность 24/7).</span>
</div>
<div className="glass-panel p-5 rounded-xl flex gap-4 items-center hover:bg-white/[0.07] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-slate-200 text-sm">Быстрая замена расходников.</span>
</div>
<div className="glass-panel p-5 rounded-xl flex gap-4 items-center hover:bg-white/[0.07] transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/10">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-slate-200 text-sm">Лучшие технологические инструменты для работы.</span>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-panel-strong rounded-2xl p-8 h-full relative overflow-hidden">

<div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px]"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<h3 className="text-white text-lg font-medium">R&amp;D Roadmap</h3>
<span className="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20 animate-pulse flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> In Development
                        </span>
</div>
<div className="grid gap-6 relative z-10">
<div className="group cursor-default">
<h4 className="text-slate-200 font-medium mb-1 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                AI Recommender System
                                <iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:magic-stick-3-linear"></iconify-icon>
</h4>
<p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Система предиктивной аналитики на базе ИИ для автоматического подбора конвертящих офферов под ваш трафик.</p>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="group cursor-default">
<h4 className="text-slate-200 font-medium mb-1 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                Unified Dashboard (Single Window)
                                <iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:widget-linear"></iconify-icon>
</h4>
<p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Единый кабинет партнера с агрегацией статистики по всем рекламным аккаунтам, расходам и ROI в одном окне.</p>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="group cursor-default">
<h4 className="text-slate-200 font-medium mb-1 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                AI Creative Generator
                                <iconify-icon className="opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:gallery-edit-linear"></iconify-icon>
</h4>
<p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Генеративный модуль для создания креативов на основе нейросетевого анализа данных из Spy-сервисов.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="calculator">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-center mb-12 tracking-tight gradient-text-silver">Калькулятор прибыли</h2>
<div className="glass-panel-strong p-8 rounded-2xl border border-indigo-500/20 shadow-2xl shadow-black/50 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>

<div className="space-y-10 mb-12 relative z-10">

<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-slate-400">Ваш Спенд (Бюджет)</label>
<span className="text-white font-mono font-medium text-lg">$<span id="spendValue">100 000</span></span>
</div>
<input className="w-full" id="spendRange" max="300000" min="10000" step="5000" type="range" value="100000"/>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 font-mono">
<span>$10k</span>
<span>$300k</span>
</div>
</div>

<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-slate-400">Прогнозируемый ROI</label>
<span className="text-white font-mono font-medium text-lg"><span id="roiValue">50</span>%</span>
</div>
<input className="w-full" id="roiRange" max="150" min="0" step="5" type="range" value="50"/>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 font-mono">
<span>0%</span>
<span>150%+</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-white/5 pt-8 relative z-10">
<div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Выручка (Revenue)</div>
<div className="text-slate-200 font-mono text-lg" id="revenueOutput">$150,000</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Чистая Прибыль</div>
<div className="text-slate-200 font-mono text-lg" id="profitOutput">$50,000</div>
</div>
<div className="bg-indigo-500/20 border border-indigo-500/30 rounded-xl p-4 text-center shadow-[0_0_20px_rgba(99,102,241,0.1)]">
<div className="text-[10px] text-indigo-300 uppercase tracking-widest mb-1">Доля Команды</div>
<div className="text-white font-mono text-xl font-bold" id="shareOutput">$25,000</div>
</div>
</div>
<div className="text-xs text-slate-400 leading-relaxed text-center mb-6 relative z-10">
                    Пример: Спенд <span id="exSpend">$100,000</span> → Выручка <span id="exRev">$150,000</span> → ROI <span id="exRoi">50%</span> (Чистая прибыль <span id="exProfit">$50,000</span>). Ваша доля: <span className="text-indigo-400" id="exShare">$25,000</span> (все прозрачно, без скрытых комиссий).
                </div>

<div className="text-center relative z-10">
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors border-b border-dashed border-indigo-400/50 pb-0.5" id="toggleTable">
                        Посмотреть полную сетку тарифов
                    </button>
<div className="hidden mt-6 overflow-hidden transition-all" id="tariffTable">
<div className="overflow-x-auto bg-black/40 rounded-lg border border-white/5">
<table className="w-full text-left text-xs text-slate-400 font-mono">
<thead className="bg-white/5 text-slate-200">
<tr>
<th className="p-3">ROI (фактический)</th>
<th className="p-3 text-right">Доля Команды</th>
<th className="p-3 text-right">Доля Фонда</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr><td className="p-3">&lt; 20%</td><td className="p-3 text-right text-red-400">Stop Loss</td><td className="p-3 text-right">100%</td></tr>
<tr><td className="p-3">20%</td><td className="p-3 text-right">25%</td><td className="p-3 text-right">75%</td></tr>
<tr><td className="p-3">25%</td><td className="p-3 text-right">30%</td><td className="p-3 text-right">70%</td></tr>
<tr><td className="p-3">30%</td><td className="p-3 text-right">35%</td><td className="p-3 text-right">65%</td></tr>
<tr><td className="p-3">35%</td><td className="p-3 text-right">40%</td><td className="p-3 text-right">60%</td></tr>
<tr><td className="p-3">40%</td><td className="p-3 text-right">45%</td><td className="p-3 text-right">55%</td></tr>
<tr><td className="p-3">45%</td><td className="p-3 text-right">47.5%</td><td className="p-3 text-right">52.5%</td></tr>
<tr><td className="p-3">50%+</td><td className="p-3 text-right text-emerald-400">50%</td><td className="p-3 text-right">50%</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="selection_process">
<h2 className="text-3xl font-medium text-center mb-16 tracking-tight gradient-text-silver">Процедура отбора</h2>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent md:-translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
<div className="md:w-1/2 md:pr-12 md:text-right flex-order-1">
<h3 className="text-white text-lg font-medium mb-2">Этап 1: Оформление заявки</h3>
<p className="text-sm text-slate-400">Заполнение формы и первичный скрининг статистики.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full border-4 border-[#050508] transform -translate-x-1/2 z-10 box-content shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="md:w-1/2 md:pl-12 flex-order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
<div className="md:w-1/2 md:pr-12 md:text-right hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full border-4 border-[#050508] transform -translate-x-1/2 z-10 box-content shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-white text-lg font-medium mb-2">Этап 2: Интро-колл (Live Verification)</h3>
<p className="text-sm text-slate-400">Созвон с демонстрацией статистики и кабинетов в реальном времени (Screen Sharing). Подтверждение опыта фактами.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<h3 className="text-white text-lg font-medium mb-2">Этап 3: Решение и подписание</h3>
<p className="text-sm text-slate-400">Проверка СБ, финальное согласование условий и юридическое оформление партнерства.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full border-4 border-[#050508] transform -translate-x-1/2 z-10 box-content shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="md:w-1/2 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
<div className="md:w-1/2 md:pr-12 md:text-right hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white rounded-full border-4 border-[#050508] shadow-[0_0_15px_rgba(255,255,255,0.8)] transform -translate-x-1/2 z-10 box-content"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-white text-lg font-medium mb-2">Этап 4: Онбординг</h3>
<p className="text-sm text-slate-400">Интеграция в экосистему Фонда, выдача доступов к инфраструктуре и выделение первого транша бюджета.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 relative z-10 bg-black/5 backdrop-blur-sm" id="requirements">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-medium mb-10 text-center gradient-text-silver">Портрет партнера</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl glass-panel hover:bg-white/[0.08] transition-colors">
<span className="text-xs font-mono text-indigo-400 block mb-2">01 — Партнер</span>
<p className="text-slate-300 text-sm">Приглашаем как укомплектованные команды, так и сильных соло-арбитражников.</p>
</div>
<div className="p-6 rounded-xl glass-panel hover:bg-white/[0.08] transition-colors">
<span className="text-xs font-mono text-indigo-400 block mb-2">02 — Эффективность (Главный KPI)</span>
<p className="text-slate-300 text-sm">Стабильный подтвержденный ROI выше 40% на дистанции.</p>
</div>
<div className="p-6 rounded-xl glass-panel hover:bg-white/[0.08] transition-colors">
<span className="text-xs font-mono text-indigo-400 block mb-2">03 — Оборот</span>
<p className="text-slate-300 text-sm">Подтвержденный спенд в Gambling-вертикали от $30k/мес.</p>
</div>
<div className="p-6 rounded-xl glass-panel hover:bg-white/[0.08] transition-colors">
<span className="text-xs font-mono text-indigo-400 block mb-2">04 — Экспертиза</span>
<p className="text-slate-300 text-sm">Глубокое понимание Facebook Ads, работы с приложениями (Apps) и PWA.</p>
</div>
<div className="p-6 rounded-xl glass-panel hover:bg-white/[0.08] transition-colors md:col-span-2">
<span className="text-xs font-mono text-indigo-400 block mb-2">05 — Репутация</span>
<p className="text-slate-300 text-sm">Отсутствие в черных списках CPA-рынка и долговых реестрах.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto relative z-10" id="faq">
<h2 className="text-3xl font-medium mb-12 text-center gradient-text-silver">FAQ</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.08]">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 text-sm font-medium hover:text-white transition-colors">
                    С какими источниками трафика вы работаете?
                    <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    Мы работаем строго только с Facebook (Apps / PWA). Любые виды схемного трафика, фрод и мислейд — категорически запрещены.
                </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.08]">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 text-sm font-medium hover:text-white transition-colors">
                    Как часто происходят выплаты?
                    <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    Выплата происходит раз в месяц, 15-го числа месяца, следующего за расчетным.
                </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.08]">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 text-sm font-medium hover:text-white transition-colors">
                    Что будет, если мы "зальем в минус"?
                    <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    Риски тестового периода (первый транш) берет на себя Фонд. В дальнейшем действует правило Stop Loss: если ROI падает ниже 20%, трафик останавливается для анализа ситуации. Мы не требуем от команд возвращать убытки из своего кармана, но прекращаем сотрудничество при систематической неэффективности.
                </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.08]">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 text-sm font-medium hover:text-white transition-colors">
                    Чьи рекламные кабинеты используются?
                    <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    Мы предоставляем собственную инфраструктуру (High-Trust Agency Accounts). Мы даем готовые сетапы с залитым бюджетом в AdsPower.
                </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.08]">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 text-sm font-medium hover:text-white transition-colors">
                    Работаете ли вы с соло-арбитражниками?
                    <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    Мы одинаково открыты для сотрудничества как с укомплектованными командами, так и с сильными соло-арбитражниками. Для всех байеров ключевое условие — стабильный ROI выше 50% при спенде от 30к$/мес. Показывая высокий ROI, вы получаете полный карт-бланш по бюджету и лучшие условия на рынке (50/50).
                </div>
</details>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="application_form">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-white text-center mb-8">Запрос на сотрудничество</h2>
<form className="glass-panel-strong p-8 rounded-2xl space-y-5 border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Имя Контакт <span className="text-indigo-400">*</span></label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 transition-all" placeholder="Ivan Ivanov" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Название команды</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 transition-all" placeholder="Team Name" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Telegram <span className="text-indigo-400">*</span></label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 transition-all" placeholder="@username" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Размер команды</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 appearance-none cursor-pointer">
<option>Соло (1 чел)</option>
<option>2-5 человек</option>
<option>5-10 человек</option>
<option>10+ человек</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Текущий оборот</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 appearance-none cursor-pointer">
<option>$10k – $30k</option>
<option>$30k – $50k</option>
<option>$50k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Основной источник трафика</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 transition-all" placeholder="Facebook / PPC / UAC / In-App..." type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Цель обращения</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 appearance-none cursor-pointer">
<option>Нужны деньги под развитие</option>
<option>Есть крутая связка, нужен бюджет под масштаб</option>
<option>Ищу лучшие условия (Бампы / Холды / Приват)</option>
<option>Переход из найма или другого инвестора</option>
<option>Другое</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 ml-1">Расскажите о себе (ГЕО, рекламодатели)</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-900/10 transition-all h-24 resize-none"></textarea>
</div>
<button className="w-full py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]" type="submit">
                    Отправить заявку
                </button>
<p className="text-[10px] text-slate-600 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050508]/80 backdrop-blur-md text-center relative z-10" id="footer">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-white font-mono font-bold tracking-tight">Qubix.Capital</span>
<div className="text-xs text-slate-500 font-mono">
                © 2026 Qubix.Capital. Private Equity &amp; Tech for iGaming. <a className="hover:text-slate-300 underline decoration-slate-700" href="#">Политика конфиденциальности</a>.
            </div>
</div>
</footer>



    </>
  );
}
