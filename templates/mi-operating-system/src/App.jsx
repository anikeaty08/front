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



tailwind.config = {
theme: { extend: {} },
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateValues = [0, 4, 10, 15, 20];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `perspective(2000px) rotateX(var(--tw-rotate-x))`,
};
});
addUtilities(rotateXUtilities);
}
]
};


 
document.addEventListener('DOMContentLoaded', () => { 
    // Intersection Observer for animations 
    const stats = document.querySelectorAll('.reveal-stat'); 
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                const target = entry.target; 
                const delay = target.dataset.delay || 0; 
                setTimeout(() => { target.classList.add('is-visible'); }, delay); 
                observer.unobserve(target); 
            } 
        }); 
    }, { threshold: 0.3 }); 
    stats.forEach((stat, index) => { 
        stat.dataset.delay = index * 50; 
        observer.observe(stat); 
    }); 
    
    // Simple form handler visual
    const btn = document.getElementById('submit-btn'); 
    const btnText = document.getElementById('btn-text'); 
    const btnLoader = document.getElementById('btn-loader'); 
    btn.addEventListener('click', function(e) { 
        const form = document.getElementById('contact-form'); 
        if(form.checkValidity()) { 
            e.preventDefault();
            btnText.classList.add('hidden'); 
            btnLoader.classList.remove('hidden'); 
            btn.classList.add('opacity-80'); 
            setTimeout(() => {
                btnLoader.classList.add('hidden');
                btnText.textContent = "Запрос отправлен";
                btnText.classList.remove('hidden');
            }, 1500);
        } 
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group outline-none" href="#">
<div className="w-7 h-7 bg-indigo-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="16"></span>
</div>
<span className="text-white font-medium text-lg tracking-tight">MIOS</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-indigo-400 transition-colors outline-none" href="#transformation">Система</a>
<a className="hover:text-indigo-400 transition-colors outline-none" href="#architecture">Архитектура</a>
<a className="hover:text-indigo-400 transition-colors outline-none" href="#roi">ROI</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal hover:text-white transition-colors hidden sm:block outline-none" href="#login">Войти</a>
<a className="px-4 py-2 text-xs font-medium bg-white text-slate-950 rounded-full hover:bg-indigo-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all outline-none" href="#contact">Запросить Демо</a>
</div>
</div>
</nav>
<main>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] glow-spot pointer-events-none opacity-60"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-normal mb-8 shadow-[0_0_15px_-4px_rgba(99,102,241,0.3)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span> 
            Marketing Intelligence Operating System
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.05]"> 
            Разверните свой роботизированный<br/>
<span className="text-gradient">Giga-Отдел.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"> 
            Хватит зависеть от интуиции и редких кадров. MIOS превращает маркетинг из хаотичного ремесла в управляемый, масштабируемый и самообучающийся <strong>R&amp;D-процесс</strong> за 60 секунд.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]" href="#contact"> 
                Запросить Демо
                <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-slate-200 text-sm font-medium rounded-full hover:bg-white/10 hover:border-indigo-500/30 transition-all border border-white/5"> 
                Системный Маркетинг
            </button>
</div>
</div>

<div aria-hidden="true" className="mt-24 max-w-6xl mx-auto px-4">
<div className="glass-card rounded-xl border-b-0 p-1 md:p-1.5 rotate-x-4 opacity-100 shadow-2xl overflow-hidden relative group bg-[#020617] hover:border-indigo-500/20 transition-colors duration-500">

<div className="h-10 border-b border-white/5 bg-[#020617] rounded-t-lg flex items-center px-4 justify-between z-20 relative">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0f172a] border border-white/5 text-[10px] text-indigo-400 font-mono tracking-wider">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span> 
                    mios.ai/orchestrator 
                </div>
<div className="w-10"></div>
</div>

<div className="relative w-full h-[500px] bg-[#020617] overflow-hidden rounded-b-lg font-sans">

<div className="absolute inset-0 flex items-center justify-center z-20" style={{animation: 'inputPhase 12s infinite'}}>
<div className="w-full max-w-lg mx-auto transform translate-y-[-20px]">
<div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-lg bg-indigo-500/10 items-center justify-center text-indigo-400 border border-indigo-500/20 flex">
<span className="iconify" data-icon="lucide:bot" data-width="14"></span>
</div>
<span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">MIOS Orchestrator</span>
</div>
<div className="relative h-10 flex items-center">
<div className="text-2xl text-slate-200 font-medium whitespace-nowrap overflow-hidden border-r-2 border-indigo-500 pr-1 tracking-tight" style={{animation: 'typing 12s steps(40, end) infinite, cursor.75s step-end infinite'}}> 
                                    Анализ рынка SaaS и стратегия на Q4...
                                </div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 text-slate-400 bg-[#020617]">

<div className="absolute bg-[#0f172a] border-r border-white/5 shadow-[4px_0_24px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col" style={{'--final-top': '0', '--final-left': '0', '--final-width': '240px', '--final-height': '100%', '--final-radius': '0', animation: 'blockExpand 12s infinite ease-in-out'}}>
<div className="flex-1 p-6 opacity-0 flex flex-col h-full" style={{animation: 'uiContentFade 12s infinite'}}>
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
<span className="iconify" data-icon="lucide:hexagon" data-width="18"></span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Corp Strategy</span>
</div>
<div className="space-y-1">
<div className="h-9 w-full bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center px-3 border border-indigo-500/20">
<span className="iconify mr-2" data-icon="lucide:layout-grid" data-width="14"></span>
<span className="text-xs font-medium">Cockpit</span>
</div>
<div className="h-9 w-full hover:bg-white/5 text-slate-500 rounded-lg flex items-center px-3">
<span className="iconify mr-2" data-icon="lucide:globe-2" data-width="14"></span>
<span className="text-xs font-medium">Market Research</span>
</div>
<div className="h-9 w-full hover:bg-white/5 text-slate-500 rounded-lg flex items-center px-3">
<span className="iconify mr-2" data-icon="lucide:wallet" data-width="14"></span>
<span className="text-xs font-medium">Unit Economics</span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-[10px] text-indigo-300">AI</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200">Система Активна</span>
<span className="text-[10px] text-green-400">Точность 98%</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 flex items-center px-8 justify-between z-10" style={{'--final-top': '0', '--final-left': '240px', '--final-width': 'calc(100% - 240px)', '--final-height': '64px', '--final-radius': '0', animation: 'blockExpand 12s infinite ease-in-out'}}>
<div className="opacity-0 w-full flex justify-between items-center" style={{animation: 'uiContentFade 12s infinite'}}>
<div className="flex flex-col gap-1">
<h2 className="text-sm font-semibold text-white">Симуляция стратегии Q4</h2>
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
<span>Анализ</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="10"></span>
<span>Моделирование</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="10"></span>
<span className="text-indigo-400">Черновик v4</span>
</div>
</div>
<div className="flex gap-3">
<div className="h-7 px-3 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-2 text-[10px] font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Live Data
                                </div>
</div>
</div>
</div>

<div className="absolute bg-[#020617]" style={{'--final-top': '64px', '--final-left': '240px', '--final-width': 'calc(100% - 240px)', '--final-height': 'calc(100% - 64px)', '--final-radius': '0', animation: 'blockExpand 12s infinite ease-in-out'}}>
<div className="p-8 opacity-0 h-full overflow-hidden" style={{animation: 'uiContentFade 12s infinite'}}>

<div className="flex gap-4 mb-6">
<div className="h-28 flex-1 bg-[#0f172a]/50 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Прогноз CAC</span>
<span className="text-[10px] text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded border border-green-900/30">-12%</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">$42.50</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-1"><div className="h-full bg-green-500 w-[70%]"></div></div>
</div>
<div className="h-28 flex-1 bg-[#0f172a]/50 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Доля Рынка</span>
<span className="text-[10px] text-indigo-400 bg-indigo-900/20 px-1.5 py-0.5 rounded border border-indigo-900/30">+4.2%</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">18.4%</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-1"><div className="h-full bg-indigo-500 w-[45%]"></div></div>
</div>
<div className="h-28 flex-1 bg-[#0f172a]/50 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Эффективность</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">High</div>
<div className="flex gap-1">
<div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
<div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
<div className="h-1 flex-1 bg-indigo-500/30 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-[#0f172a]/50 rounded-xl border border-white/5 w-full p-0 overflow-hidden">
<div className="px-5 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<span className="text-xs font-semibold text-slate-300">Рекомендации Стратегии</span>
<span className="iconify text-indigo-400" data-icon="lucide:download" data-width="12"></span>
</div>
<div className="divide-y divide-white/5">
<div className="flex items-center justify-between px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20"><span className="iconify" data-icon="lucide:trending-up" data-width="12"></span></div>
<div className="flex flex-col">
<span className="text-[11px] font-medium text-slate-200">Увеличить бюджет в EMEA</span>
<span className="text-[9px] text-slate-500">Сигнал слабости конкурента</span>
</div>
</div>
<span className="text-[10px] font-mono text-green-400 border border-green-900/30 bg-green-900/10 px-1.5 rounded">High Conf</span>
</div>
<div className="flex items-center justify-between px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20"><span className="iconify" data-icon="lucide:alert-triangle" data-width="12"></span></div>
<div className="flex flex-col">
<span className="text-[11px] font-medium text-slate-200">Скорректировать Tier 2 Pricing</span>
<span className="text-[9px] text-slate-500">Модель эластичности: риск оттока</span>
</div>
</div>
<span className="text-[10px] font-mono text-orange-400 border border-orange-900/30 bg-orange-900/10 px-1.5 rounded">Action Req</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 z-30" style={{animation: 'badgePop 12s infinite'}}>
<div className="bg-[#0f172a] text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(99,102,241,0.25)] flex items-center gap-3 border border-indigo-500/30">
<div className="bg-indigo-500 rounded-full p-0.5 text-white">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs font-medium pr-1 tracking-tight">Исследование завершено. Стратегия готова.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#020617]" id="transformation">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Трансформация:<br/>От Хаоса к Системе</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                    Современный маркетинг сложен и дорог. Фрагментированные инструменты, зависимость от "звездных" сотрудников и потеря знаний при их уходе делают рост непредсказуемым.
                </p>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                    MIOS меняет модель. Мы объединили лучшие мировые фреймворки (от JTBD до Unit Economics) в автономный пайплайн. MIOS думает системно, работает 24/7 и накапливает институциональную память.
                </p>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2"></span>
                        Интеллектуальный актив
                     </div>
<div className="flex items-center gap-2 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2"></span>
                        R&amp;D процесс
                     </div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent blur-3xl opacity-20"></div>
<div className="glass-card rounded-2xl overflow-hidden relative z-10">
<div className="grid grid-cols-2 border-b border-white/5 bg-white/5">
<div className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest text-center">Маркетинг как Ремесло</div>
<div className="p-4 text-xs font-semibold text-indigo-400 uppercase tracking-widest text-center bg-indigo-500/10 border-l border-white/5">MIOS Система</div>
</div>
<div className="divide-y divide-white/5">

<div className="grid grid-cols-2">
<div className="p-6 text-sm text-slate-400 flex flex-col justify-center gap-2">
<span className="iconify text-red-400 mb-1" data-icon="lucide:user-x" data-width="20"></span>
                                Зависимость от редких "звезд"
                            </div>
<div className="p-6 text-sm text-white bg-white/[0.02] border-l border-white/5 flex flex-col justify-center gap-2">
<span className="iconify text-green-400 mb-1" data-icon="lucide:bot" data-width="20"></span>
<strong>Роботизированный гига-отдел 24/7</strong>
</div>
</div>

<div className="grid grid-cols-2">
<div className="p-6 text-sm text-slate-400 flex flex-col justify-center gap-2">
<span className="iconify text-red-400 mb-1" data-icon="lucide:scatter-chart" data-width="20"></span>
                                Хаос идей и инструментов
                            </div>
<div className="p-6 text-sm text-white bg-white/[0.02] border-l border-white/5 flex flex-col justify-center gap-2">
<span className="iconify text-green-400 mb-1" data-icon="lucide:flask-conical" data-width="20"></span>
<strong>Идеи как проверенные гипотезы</strong>
</div>
</div>

<div className="grid grid-cols-2">
<div className="p-6 text-sm text-slate-400 flex flex-col justify-center gap-2">
<span className="iconify text-red-400 mb-1" data-icon="lucide:brain-circuit" data-width="20"></span>
                                Потеря знаний при уходе
                            </div>
<div className="p-6 text-sm text-white bg-white/[0.02] border-l border-white/5 flex flex-col justify-center gap-2">
<span className="iconify text-green-400 mb-1" data-icon="lucide:database" data-width="20"></span>
<strong>Накопление опыта в системе</strong>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020617] border-t border-white/5 relative overflow-hidden" id="architecture">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Архитектура Интеллекта</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                MIOS — это оркестр из 18+ специализированных AI-ролей, работающих параллельно.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-all">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Контур Понимания</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Market Research Agent</h4>
<p className="text-xs text-slate-500 mt-1">Факты о рынке и конкурентах. Объективная основа.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Customer Truth &amp; Feedback</h4>
<p className="text-xs text-slate-500 mt-1">Реальный опыт пользователей без искажений.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Foresight &amp; Evolution</h4>
<p className="text-xs text-slate-500 mt-1">Тренды и культурные сдвиги.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
<span className="iconify" data-icon="lucide:lightbulb" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Контур Стратегии</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Sensemaking &amp; Insight</h4>
<p className="text-xs text-slate-500 mt-1">Превращает сигналы в инсайт-гипотезы.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Data-Creative Fusion</h4>
<p className="text-xs text-slate-500 mt-1">Прорывные идеи на стыке данных и культуры.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Value &amp; Offer Architect</h4>
<p className="text-xs text-slate-500 mt-1">JTBD, ценность и коммерческая логика.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-green-500/30 transition-all">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
<span className="iconify" data-icon="lucide:play-circle" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Контур Исполнения</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Marketing Finance &amp; Unit Econ</h4>
<p className="text-xs text-slate-500 mt-1">ROI, бюджеты, сходимость экономики.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Legal, Ethics &amp; Compliance</h4>
<p className="text-xs text-slate-500 mt-1">Проверка рисков и границ допустимого.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Narrative &amp; Activation</h4>
<p className="text-xs text-slate-500 mt-1">Упаковка смыслов и выбор каналов.</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-orange-500/30 transition-all">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Контур Оркестровки</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">Analytics &amp; Learning</h4>
<p className="text-xs text-slate-500 mt-1">Анализ результатов и переобучение системы.</p>
</div>
</div>
<div className="flex gap-4">
<span className="w-px bg-white/10 h-auto"></span>
<div>
<h4 className="text-sm font-semibold text-slate-200">CMIO Orchestrator</h4>
<p className="text-xs text-slate-500 mt-1">Управляет всей системой и ролями.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative bg-[#020617]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-16 tracking-tight text-center">Синергия в Действии</h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="relative pl-8 border-l border-white/10">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
<h3 className="text-xl font-medium text-white mb-6">Сценарий 1: Запуск Продукта</h3>
<p className="text-slate-400 text-sm mb-8">Глубокий линейный контур для избегания слепых зон.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="text-xs font-mono text-slate-500 w-8">01</div>
<div className="p-3 bg-[#0f172a] rounded-lg border border-white/5 flex-1">
<span className="text-sm text-slate-300 block mb-1 font-semibold">Диагностика</span>
<span className="text-xs text-slate-500">Market Research + Customer Truth агенты.</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-xs font-mono text-slate-500 w-8">02</div>
<div className="p-3 bg-[#0f172a] rounded-lg border border-white/5 flex-1">
<span className="text-sm text-slate-300 block mb-1 font-semibold">Стратегия</span>
<span className="text-xs text-slate-500">Strategy Agent выбирает позиционирование.</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-xs font-mono text-slate-500 w-8">03</div>
<div className="p-3 bg-[#0f172a] rounded-lg border border-white/5 flex-1">
<span className="text-sm text-slate-300 block mb-1 font-semibold">Проверка Рисков</span>
<span className="text-xs text-slate-500">Finance &amp; Legal проверяют модель.</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-xs font-mono text-slate-500 w-8">04</div>
<div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex-1">
<span className="text-sm text-indigo-300 block mb-1 font-semibold">Запуск</span>
<span className="text-xs text-indigo-400/70">CMIO запускает цельный кампайн.</span>
</div>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-white/10">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
<h3 className="text-xl font-medium text-white mb-6">Сценарий 2: Рост и R&amp;D</h3>
<p className="text-slate-400 text-sm mb-8">Самообучающаяся система регулярного роста.</p>
<div className="relative h-[300px] flex items-center justify-center">
<div className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300">Гипотеза</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#020617] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300">Обучение</div>
<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300">Анализ</div>
<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#020617] px-4 py-2 border border-white/10 rounded-full text-xs text-slate-300">Тест</div>
<div className="text-center max-w-[200px]">
<div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="20"></span>
</div>
<p className="text-sm text-white font-medium">Интеллектуальный Актив</p>
<p className="text-[10px] text-slate-500 mt-2">Каждый цикл делает систему умнее, сохраняя знания.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] border-y border-white/5" id="roi">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Финансовая Трансформация</h2>
<p className="text-slate-400 text-lg">MIOS переводит маркетинг из категории неконтролируемых расходов в самообучающийся актив.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-16">
<div className="glass-card p-6 rounded-xl">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Cost of Failure</div>
<div className="text-3xl font-semibold text-white mb-2">$100 <span className="text-lg text-slate-500 font-normal">vs $10k</span></div>
<p className="text-xs text-slate-400">Проверка гипотез на моделях вместо слива бюджета.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Time-to-Value</div>
<div className="text-3xl font-semibold text-white mb-2">Дни <span className="text-lg text-slate-500 font-normal">vs Месяцы</span></div>
<p className="text-xs text-slate-400">Сокращение цикла от идеи до исполнения.</p>
</div>
<div className="glass-card p-6 rounded-xl">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Cost of Talent</div>
<div className="text-3xl font-semibold text-white mb-2">1 Система</div>
<p className="text-xs text-slate-400">Заменяет найм дорогостоящего штата экспертов.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden overflow-x-auto">
<table className="comparison-table text-sm">
<thead>
<tr className="bg-white/5 text-xs text-slate-400 font-medium uppercase tracking-wider">
<th className="w-1/3">Метрика</th>
<th className="w-1/3">Традиционный Маркетинг</th>
<th className="w-1/3 text-indigo-400">MIOS (Marketing OS)</th>
</tr>
</thead>
<tbody className="text-slate-300">
<tr>
<td className="font-medium text-white">Зависимость от Людей</td>
<td className="text-slate-400">Высокая. Знания теряются при уходе.</td>
<td className="text-white">Низкая. Институциональная память.</td>
</tr>
<tr>
<td className="font-medium text-white">Стоимость Ошибки</td>
<td className="text-slate-400">Высокая. Ошибки интуиции.</td>
<td className="text-white">Низкая. Превентивная проверка.</td>
</tr>
<tr>
<td className="font-medium text-white">Time-to-Market</td>
<td className="text-slate-400">Месяцы (найм, исследования).</td>
<td className="text-white">Дни (параллельные агенты).</td>
</tr>
<tr>
<td className="font-medium text-white">Масштабируемость</td>
<td className="text-slate-400">Линейная (рост штата = расходы).</td>
<td className="text-white">Экспоненциальная (роботы 24/7).</td>
</tr>
<tr>
<td className="font-medium text-white">Ценность</td>
<td className="text-slate-400">Расходная статья.</td>
<td className="text-indigo-400 font-medium">Накопительный актив.</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="md:py-48 overflow-hidden bg-[#020617] border-white/5 border-t pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-100 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tighter">Перестаньте управлять людьми.<br/>Начните управлять Системой.</h2>
<p className="text-xl text-slate-400 mb-12 font-light">MIOS не заменяет вас, а усиливает до уровня гениального маркетолога. Станьте оркестратором сегодня.</p>
<form action="#" className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto relative" id="contact-form" method="POST">
<input className="bg-white/5 border border-white/10 text-white px-5 py-3.5 rounded-lg w-full focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-colors placeholder:text-slate-600 text-sm" name="email" placeholder="work@email.com" required="" type="email"/>
<button className="bg-white text-slate-950 font-medium px-8 py-3.5 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap text-sm focus:outline-none hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center min-w-[160px]" id="submit-btn" type="submit">
<span id="btn-text">Запросить Демо</span>
<div className="hidden w-4 h-4 border-2 border-slate-900 border-l-transparent rounded-full animate-spin" id="btn-loader"></div>
</button>
</form>
<p className="mt-6 text-xs text-slate-600">Ограниченный доступ к Beta. Enterprise security ready.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-16 bg-[#020617]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2.5">
<span className="iconify text-slate-400" data-icon="lucide:cpu" data-width="18"></span>
<span className="text-slate-400 font-medium tracking-wide text-xs">MIOS INTELLIGENCE</span>
</div>
<div className="flex gap-8 text-xs text-slate-500 items-center font-normal">
<a className="hover:text-white transition-colors outline-none" href="#">Privacy</a>
<a className="hover:text-white transition-colors outline-none" href="#">Terms</a>
<a className="hover:text-white transition-colors outline-none" href="#">Security</a>
</div>
<div className="flex gap-5">
<a className="text-slate-600 hover:text-indigo-400 transition-colors outline-none" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-indigo-400 transition-colors outline-none" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</footer>


    </>
  );
}
