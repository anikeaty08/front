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



        lucide.createIcons();
    
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
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63dc04f1-a9b6-4ab3-a7f3-236f7013f912_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-orange-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid z-0 opacity-50"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-stone-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="tracking-tight text-lg text-white font-bold" style={{}}>CSML</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-orange-400 transition-colors font-bold" href="#flagship" style={{}}>Флагман</a>
<a className="hover:text-orange-400 transition-colors font-bold" href="#projects" style={{}}>Проекты</a>
<a className="hover:text-orange-400 transition-colors font-bold" href="#team" style={{}}>Команда</a>
<a className="hover:text-orange-400 transition-colors font-bold" href="#publications" style={{}}>Публикации</a>
<a className="hover:text-orange-400 transition-colors font-bold" href="#rnd" style={{}}>Разработки</a>
</nav>

<div className="flex items-center gap-4">

<div className="flex items-center text-xs font-mono border border-white/10 rounded-lg overflow-hidden">
<button className="hover:bg-white/5 transition-colors text-stone-500 px-2 py-1 font-bold" style={{}}>EN</button>
<button className="px-2 py-1 bg-white/10 text-white font-bold" style={{}}>RU</button>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 font-bold" href="#contact" style={{}}>
                    Связаться
                </a>
</div>
</div>
</header>
<main className="z-10 pt-24 relative">

<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-200 bg-neutral-900/60 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee9b32bb-e72d-47cb-a983-ddf26a66cef2_1600w.jpg)] max-w-7xl bg-cover border-white/10 border rounded-3xl mt-12 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur shadow-2xl" style={{minHeight: '600px', display: 'flex', alignItems: 'center'}}>

<div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">

<div className="absolute inset-0 bg-stone-950/80"></div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}></div>

<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6 animate-fadeIn animation-delay-600" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(20vw, 280px)', lineHeight: '0.8', color: 'rgba(251, 146, 60, 0.05)'}}>CSML</span>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center w-full">

<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs mb-6 animate-fadeInLeft animation-delay-300 font-bold" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Система v2.4 в норме
                    </div>
<h1 className="text-[40px] sm:text-5xl md:text-7xl leading-[1.05] font-semibold text-white tracking-tighter animate-fadeInLeft animation-delay-300" style={{}}>
                        Лаборатория <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500" style={{}}>Сложных Систем</span>
</h1>
</div>

<div className="lg:col-span-5">
<p className="sm:text-lg text-sm text-stone-300 max-w-[42ch] leading-relaxed animate-fadeInRight animation-delay-400 font-bold" style={{}}>
                        Мы превращаем логистический хаос в четкие сценарии решений. Цифровые двойники, имитационное моделирование и AI-оптимизация для ЖД и контейнерной логистики.
                    </p>
<div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-500 mt-8 items-center">

<button className="shiny-cta focus:outline-none" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<span className="font-bold" style={{}}>Запросить демо</span>
</button>

<button className="btn-dots group" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner font-bold" style={{}}>
                                Проекты
                                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg className="lucide lucide-network w-6 h-6 stroke-[1.5]" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-lg text-white mb-2 font-bold" style={{}}>Цифровые двойники</h3>
<p className="text-sm text-stone-400 leading-relaxed font-bold" style={{}}>
                        Полномасштабные виртуальные копии логистических узлов и коридоров. Симуляция ограничений пропускной способности до их возникновения.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg className="lucide lucide-workflow w-6 h-6 stroke-[1.5]" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-lg text-white mb-2 font-bold" style={{}}>Имитационное моделирование</h3>
<p className="text-sm text-stone-400 leading-relaxed font-bold" style={{}}>
                        Детальное моделирование оборота контейнеров, работы станций и таможенных процедур для оптимизации расписания и ресурсов.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl group hover:border-orange-500/30 transition-colors">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg className="lucide lucide-brain-circuit w-6 h-6 stroke-[1.5]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-lg text-white mb-2 font-bold" style={{}}>Поддержка решений (AI)</h3>
<p className="text-sm text-stone-400 leading-relaxed font-bold" style={{}}>
                        Рекомендации на базе ИИ для диспетчеров. Объяснимое прогнозирование рисков и предсказание ETA на основе потоков данных в реальном времени.
                    </p>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5">
<p className="text-xs text-stone-500 uppercase tracking-widest mb-6 font-bold" style={{}}>Разработано для</p>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-stone-300">
<span className="flex items-center gap-2 font-bold" style={{}}><svg className="lucide lucide-train-front w-4 h-4 text-slate-500" data-lucide="train-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"></path><path d="m9 15-1-1"></path><path d="m15 15 1-1"></path><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"></path><path d="m8 19-2 3"></path><path d="m16 19 2 3"></path></svg> ЖД Операторов</span>
<span className="flex items-center gap-2 font-bold" style={{}}><svg className="lucide lucide-container w-4 h-4 text-slate-500" data-lucide="container" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path d="M10 21.9V14L2.1 9.1"></path><path d="m10 14 11.9-6.9"></path><path d="M14 19.8v-8.1"></path><path d="M18 17.5V9.4"></path></svg> Терминалов</span>
<span className="flex items-center gap-2 font-bold" style={{}}><svg className="lucide lucide-ship w-4 h-4 text-slate-500" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> Портов</span>
<span className="flex items-center gap-2 font-bold" style={{}}><svg className="lucide lucide-package-search w-4 h-4 text-slate-500" data-lucide="package-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><circle cx="18.5" cy="15.5" r="2.5"></circle><path d="M20.27 17.27 22 19"></path></svg> Экспедиторов</span>
</div>
</div>
</section>

<section className="relative py-24 bg-stone-900 border-y border-white/5 overflow-hidden" id="flagship">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-stone-950 opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded text-orange-400 text-xs border border-orange-900 bg-orange-950/30 mb-6 font-bold" style={{}}>
                            ФЛАГМАНСКИЙ ПРОЕКТ
                        </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6" style={{}}>
                            Цифровой Двойник <br/>Логистического Коридора
                        </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
<svg className="lucide lucide-alert-circle w-3 h-3" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>
<div>
<h4 className="text-white mb-1 font-bold" style={{}}>Проблема</h4>
<p className="text-stone-400 text-sm font-bold" style={{}}>Узкие места инфраструктуры, непредсказуемые сроки транзита и высокие штрафы за простой вагонов.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div>
<h4 className="text-white mb-1 font-bold" style={{}}>Решение</h4>
<p className="text-stone-400 text-sm font-bold" style={{}}>Единый центр симуляции, моделирующий станции, терминалы и таможенные окна для прогноза ETA и оптимизации слотов.</p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
<div>
<div className="text-2xl font-mono text-white mb-1" style={{}}>94%</div>
<div className="text-xs text-stone-500 uppercase tracking-wide font-bold" style={{}}>Точность ETA</div>
</div>
<div>
<div className="text-2xl font-mono text-white mb-1" style={{}}>-15%</div>
<div className="text-xs text-stone-500 uppercase tracking-wide font-bold" style={{}}>Затраты на простой</div>
</div>
</div>
<div className="mt-8">
<a className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-2 font-bold" href="#demo" style={{}}>
                                Обсудить пилотный проект <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-white/10 bg-stone-950/50 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-pink-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
<div className="ml-auto text-[10px] text-stone-500 font-bold" style={{}}>CORRIDOR_SIM_V1.2</div>
</div>

<div className="p-6 h-[300px] md:h-[400px] flex flex-col relative">

<div className="absolute inset-0 p-6 flex items-center justify-center">
<div className="w-full h-full border border-dashed border-white/5 rounded relative">

<div className="absolute top-[20%] left-[10%] w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="absolute top-[50%] left-[40%] w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="absolute top-[30%] right-[20%] w-3 h-3 bg-red-500 rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="#22d3ee" stroke-opacity="0.3" strokeWidth="1" x1="10%" x2="40%" y1="20%" y2="50%"></line>
<line stroke="#3b82f6" stroke-dasharray="4 4" stroke-opacity="0.3" strokeWidth="1" x1="40%" x2="80%" y1="50%" y2="30%"></line>
</svg>

<div className="absolute top-[35%] left-[42%] glass-panel p-3 rounded border border-orange-500/20 max-w-[140px]">
<div className="text-[10px] text-stone-400 uppercase font-bold" style={{}}>Станция</div>
<div className="text-xs text-white font-bold" style={{}}>Загрузка: Высокая</div>
<div className="mt-1 h-1 w-full bg-stone-700 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-[80%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-orange-500/20 blur-2xl -z-10 rounded-full opacity-20"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight" style={{}}>Как это работает</h2>
<p className="text-stone-400 mt-2 font-bold" style={{}}>От сырых данных к экономическому эффекту</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<svg className="lucide lucide-database w-6 h-6 text-slate-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-white mb-2 font-bold" style={{}}>1. Сбор данных</h3>
<p className="text-sm text-stone-400 px-2 font-bold" style={{}}>Интеграция потоков: расписания, ГЛР, топология и исторические логи.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<svg className="lucide lucide-box w-6 h-6 text-cyan-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-white mb-2 font-bold" style={{}}>2. Модель и Симуляция</h3>
<p className="text-sm text-stone-400 px-2 font-bold" style={{}}>Построение дискретно-событийного цифрового двойника инфраструктуры.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<svg className="lucide lucide-sliders-horizontal w-6 h-6 text-slate-300" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</div>
<h3 className="text-white mb-2 font-bold" style={{}}>3. Сценарии</h3>
<p className="text-sm text-stone-400 px-2 font-bold" style={{}}>Запуск 1000+ вариаций для тестирования ограничений.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-stone-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<svg className="lucide lucide-trending-up w-6 h-6 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-white mb-2 font-bold" style={{}}>4. Результат</h3>
<p className="text-sm text-stone-400 px-2 font-bold" style={{}}>Рекомендации, выраженные в часах и деньгах.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]" id="projects">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight" style={{}}>Активные проекты</h2>
<p className="text-stone-400 mt-2 font-bold" style={{}}>Текущие внедрения и пилотные проекты.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white cursor-pointer hover:bg-white/20 font-bold" style={{}}>Все</span>
<span className="px-3 py-1 text-xs rounded-full border border-white/10 text-stone-400 cursor-pointer hover:text-white font-bold" style={{}}>ЖД</span>
<span className="px-3 py-1 text-xs rounded-full border border-white/10 text-stone-400 cursor-pointer hover:text-white font-bold" style={{}}>Море</span>
<span className="px-3 py-1 text-xs rounded-full border border-white/10 text-stone-400 cursor-pointer hover:text-white font-bold" style={{}}>Оптимизация</span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-24">

<a className="group glass-panel rounded-xl overflow-hidden hover:border-orange-500/30 transition-all" href="#">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] uppercase tracking-wide rounded font-bold" style={{}}>Пилот</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="text-xl text-white mb-2 font-bold" style={{}}>Трансграничный таможенный поток</h3>
<p className="text-sm text-stone-400 font-bold" style={{}}>Симуляция документооборота и физических досмотров на крупном ЖД переходе для сокращения очередей.</p>
</div>
</a>

<a className="group glass-panel rounded-xl overflow-hidden hover:border-orange-500/30 transition-all" href="#">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] uppercase tracking-wide rounded font-bold" style={{}}>НИОКР</span>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="text-xl text-white mb-2 font-bold" style={{}}>Репозиционирование порожних контейнеров</h3>
<p className="text-sm text-stone-400 font-bold" style={{}}>Алгоритм сетевой оптимизации для минимизации порожнего пробега регионального оператора.</p>
</div>
</a>
</div>

<div className="grid lg:grid-cols-2 gap-12" id="publications">

<div className="">
<h3 className="text-xl text-white mb-6 flex items-center gap-2 font-bold" style={{}}>
<svg className="lucide lucide-flask-conical w-5 h-5 text-cyan-400" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg> Перспективные исследования
                        </h3>
<div className="space-y-4">
<div className="p-4 border border-white/5 rounded-lg bg-white/[0.01]">
<h4 className="text-white text-sm font-bold" style={{}}>Мультиагентная модель рынка</h4>
<p className="text-xs text-stone-400 mt-1 font-bold" style={{}}>Моделирование взаимодействия между экспедиторами, операторами и терминалами.</p>
<div className="mt-2 text-[10px] text-orange-500 font-bold" style={{}}>СТАТУС: В РАБОТЕ</div>
</div>
<div className="p-4 border border-white/5 rounded-lg bg-white/[0.01]">
<h4 className="text-white text-sm font-bold" style={{}}>Генеративное сценарное планирование</h4>
<p className="text-xs text-stone-400 mt-1 font-bold" style={{}}>Использование LLM для автогенерации параметров симуляции на основе запросов.</p>
<div className="mt-2 text-[10px] text-stone-500 font-bold" style={{}}>СТАТУС: В ПЛАНАХ</div>
</div>
</div>
</div>

<div className="">
<h3 className="text-xl text-white mb-6 flex items-center gap-2 font-bold" style={{}}>
<svg className="lucide lucide-file-text w-5 h-5 text-cyan-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Избранные публикации
                        </h3>
<div className="space-y-6">
<div className="group cursor-pointer">
<h4 className="text-white text-sm group-hover:text-orange-400 transition-colors font-bold" style={{}}>Digital Twins in Rail Freight: A Comparative Study</h4>
<p className="text-xs text-stone-500 mt-1 font-bold" style={{}}>Ivanov A., Smith J. (2023) • Transportation Research Part E</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-white text-sm group-hover:text-orange-400 transition-colors font-bold" style={{}}>Стохастическая оптимизация слотов терминала</h4>
<p className="text-xs text-stone-500 mt-1 font-bold" style={{}}>Команда CSML (2023) • White Paper</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-white text-sm group-hover:text-orange-400 transition-colors font-bold" style={{}}>Предиктивное обслуживание с использованием GNN</h4>
<p className="text-xs text-stone-500 mt-1 font-bold" style={{}}>Conference on Complex Systems (2022)</p>
</div>
<a className="inline-block text-xs text-orange-500 hover:text-orange-400 mt-2 font-bold" href="#" style={{}}>Все публикации →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight" style={{}}>Команда и Авторы</h2>
<p className="text-stone-400 mt-2 font-bold" style={{}}>Мультидисциплинарная группа инженеров, дата-сайентистов и экспертов ЖД.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

<div className="group">
<div className="aspect-square rounded-lg bg-stone-800 mb-3 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all">

<div className="flex bg-center text-stone-500 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66c0b987-2a0c-4fcf-8632-81e9b0dd69fb_800w.png)] bg-contain items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66c0b987-2a0c-4fcf-8632-81e9b0dd69fb_3840w.png"/>
<svg className="lucide lucide-user w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(120, 113, 108)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<h4 className="text-white text-sm font-bold" style={{}}>Д-р А. Петров</h4>
<p className="text-xs text-stone-500 font-bold" style={{}}>Ведущий моделер</p>
</div>

<div className="group">
<div className="aspect-square rounded-lg bg-stone-800 mb-3 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<div className="flex bg-center text-stone-500 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22c34620-5aec-4b4b-9b5f-cab4c883709f_800w.png)] bg-cover items-center justify-center">
</div>
</div>
<h4 className="text-white text-sm font-bold" style={{}}>С. Миллер</h4>
<p className="text-xs text-stone-500 font-bold" style={{}}>Руководитель AI/ML</p>
</div>

<div className="group">
<div className="aspect-square rounded-lg bg-stone-800 mb-3 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<div className="flex bg-center text-stone-500 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7def6c0-ad42-441d-b547-92e48e7c724c_800w.png)] bg-cover items-center justify-center">
</div>
</div>
<h4 className="text-white text-sm font-bold" style={{}}>К. Чжан</h4>
<p className="text-xs text-stone-500 font-bold" style={{}}>Эксперт по ЖД</p>
</div>

<div className="group">
<div className="aspect-square rounded-lg bg-stone-800 mb-3 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all">
<div className="flex text-stone-500 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27ea8b46-81c0-4c92-b58a-2ccdb89ea947_1600w.png)] bg-cover items-center justify-center">
</div>
</div>
<h4 className="text-white text-sm font-bold" style={{}}>М. Волков</h4>
<p className="text-xs text-stone-500 font-bold" style={{}}>Архитектор ПО</p>
</div>

<div className="aspect-square rounded-lg border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-4 hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-sm text-white font-bold" style={{}}>Вакансии</span>
<span className="text-xs text-stone-500 mt-1 font-bold" style={{}}>Смотреть позиции</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 border-white/5 border-t pt-24 pb-24" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight" style={{}}>Начать диалог</h2>
<p className="text-stone-400 mt-2 font-bold" style={{}}>Обсудите вашу логистическую задачу или запросите научную консультацию.</p>
</div>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-stone-400 font-bold" style={{}}>Имя</label>
<input className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="Иван Иванов" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-400 font-bold" style={{}}>Компания</label>
<input className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="Logistics Corp" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-400 font-bold" style={{}}>Email</label>
<input className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="ivan@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-400 font-bold" style={{}}>Сообщение</label>
<textarea className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="Расскажите о вашей задаче..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-stone-950 py-3 rounded-lg hover:bg-stone-200 transition-colors font-bold" style={{}} type="button">
                        Отправить
                    </button>
<p className="text-center text-xs text-stone-600 mt-4 font-bold" style={{}}>Мы соблюдаем конфиденциальность. NDA подписываем по запросу.</p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-stone-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="text-white text-lg font-bold" style={{}}>CSML</span>
</a>
<p className="text-sm text-stone-500 max-w-sm font-bold" style={{}}>
                        Complex Systems Modeling Lab. Мост между теоретической наукой и индустриальной логистикой через симуляции и ИИ.
                    </p>
</div>
<div>
<h4 className="text-white mb-4 font-bold" style={{}}>Карта сайта</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Главная</a></li>
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Флагманский проект</a></li>
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Публикации</a></li>
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Контакты</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-4 font-bold" style={{}}>Правовая информация</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Политика конфиденциальности</a></li>
<li><a className="hover:text-orange-400 transition-colors font-bold" href="#" style={{}}>Условия использования</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p className="font-bold" style={{}}>© 2024 Complex Systems Modeling Lab. Все права защищены.</p>
<div className="flex gap-4">
<span className="font-bold" style={{}}>Москва</span>
<span className="font-bold" style={{}}>•</span>
<span className="font-bold" style={{}}>Глобально</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
