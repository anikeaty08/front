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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-6 h-6 bg-emerald-500 rounded-md transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
<span className="text-lg font-medium tracking-tight text-white">Creative Pulse</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-emerald-400 transition-colors" href="#">Услуги</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Процесс</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Кейсы</a>
<a className="hover:text-emerald-400 transition-colors" href="#">FAQ</a>
</div>
<button className="bg-white/5 hover:bg-emerald-500/10 text-white hover:text-emerald-400 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2">
                Связаться <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>
<main className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-2/3">
<div className="flex items-center gap-2 text-emerald-400 mb-6">
<span className="text-xs font-medium uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 rounded">Услуги</span>
<span className="text-xs font-medium text-zinc-500">01 Блок</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                        WEB &amp; TECH <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">SOLUTIONS</span>
</h1>
<p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
                        Мы превращаем технологии в ваше конкурентное преимущество.
                    </p>
<div className="text-lg text-zinc-500 max-w-2xl leading-relaxed space-y-4">
<p>Современный бизнес невозможен без цифровых решений, которые работают быстро, надёжно и масштабируемо.</p>
<p>Мы создаём сайты, CRM-системы, AI-интеграции, автоматизацию и цифровые продукты, которые помогают компаниям расти, оптимизировать процессы и увеличивать прибыль.</p>
</div>
</div>

<div className="lg:w-1/3 w-full relative group">
<div className="aspect-square rounded-3xl border border-white/10 bg-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 opacity-50">
<div className="w-16 h-16 border border-emerald-500/30 rounded-lg animate-pulse bg-emerald-500/5"></div>
<div className="w-16 h-16 border border-white/10 rounded-lg"></div>
<div className="w-16 h-16 border border-white/10 rounded-lg"></div>
<div className="w-16 h-16 border border-emerald-500/30 rounded-lg animate-pulse bg-emerald-500/5 delay-75"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32"></div>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div className="md:w-1/3">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Для кого эта услуга</h2>
<p className="text-lg text-zinc-400">Мы работаем с компаниями любого масштаба — от стартапов до международных брендов.</p>
</div>
<div className="md:w-2/3">
<div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">Полностью новый сайт или обновление текущего</span>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">CRM, внутренние панели, личные кабинеты</span>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">Автоматизация бизнес-процессов</span>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">Внедрение AI-инструментов</span>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">Создание лендинга под запуск продукта</span>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-zinc-300">Укрепление digital-части бренда</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex items-center gap-3 mb-12">
<svg className="lucide lucide-settings text-zinc-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h2 className="text-3xl font-semibold text-white tracking-tight">Что мы делаем</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-emerald-500/30 transition duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-500 text-black flex items-center justify-center mb-6 font-bold">1</div>
<h3 className="text-xl font-medium text-white mb-2">Web-разработка</h3>
<p className="text-zinc-500 text-sm mb-6">Полный цикл разработки под ваши цели.</p>
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div> Корпоративные сайты</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div> Лендинги</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div> E-commerce решения</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div> Сайты услуг</li>
</ul>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-emerald-500/30 transition duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center mb-6 font-bold">2</div>
<h3 className="text-xl font-medium text-white mb-2">CRM и инфраструктура</h3>
<p className="text-zinc-500 text-sm mb-6">Системы, которые экономят время.</p>
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> CRM-системы</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Личные кабинеты</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Внутренние панели</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Интеграции оплат</li>
</ul>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-emerald-500/30 transition duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center mb-6 font-bold">3</div>
<h3 className="text-xl font-medium text-white mb-2">AI-интеграции</h3>
<p className="text-zinc-500 text-sm mb-6">Решения нового поколения.</p>
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> Чат-боты на базе ИИ</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> Предиктивная аналитика</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div> API ChatGPT / Claude</li>
</ul>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-emerald-500/30 transition duration-300 relative overflow-hidden md:col-span-1 lg:col-span-2">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8">
<div className="">
<div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-6 font-bold">4</div>
<h3 className="text-xl font-medium text-white mb-2">Архитектура и интеграции</h3>
<p className="text-zinc-500 text-sm mb-4">Единая система инструментов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> CRM / ERP</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Платежные системы</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Webhook &amp; API</li>
</ul>
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> AWS</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Google Cloud</li>
</ul>
</div>
</div>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-emerald-500/30 transition duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-pink-500 text-white flex items-center justify-center mb-6 font-bold">5</div>
<h3 className="text-xl font-medium text-white mb-2">Тех. поддержка</h3>
<p className="text-zinc-500 text-sm mb-6">Мы с вами после релиза.</p>
<ul className="space-y-2 text-base text-zinc-300">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div> Аудит и обновления</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div> Развитие функционала</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6">
<div className="flex flex-col items-center mb-16">
<svg className="lucide lucide-rocket w-8 h-8 text-emerald-400 mb-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<h2 className="text-3xl font-semibold text-white tracking-tight">Как мы работаем</h2>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white">Аналитика и аудит</h3>
<p className="text-zinc-400 mt-2">Изучаем бизнес, цели и технические ограничения.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-emerald-500 text-emerald-500 flex items-center justify-center font-bold text-lg order-1 md:order-2">1</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">2</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-xl font-medium text-white">Проектирование</h3>
<p className="text-zinc-400 mt-2">Архитектура, прототипы, логика интеграций.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white">Дизайн</h3>
<p className="text-zinc-400 mt-2">Современный UI/UX для конверсии.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">3</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">4</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-xl font-medium text-white">Разработка</h3>
<p className="text-zinc-400 mt-2">Front-end + Back-end на современном стеке.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white">Интеграции</h3>
<p className="text-zinc-400 mt-2">Подключаем CRM, AI, API.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">5</div>
<div className="md:w-1/2 order-3"></div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">6</div>
<div className="md:w-1/2 order-2 md:order-3">
<h3 className="text-xl font-medium text-white">Тестирование</h3>
<p className="text-zinc-400 mt-2">Гарантия скорости и стабильности.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white">Запуск</h3>
<p className="text-zinc-400 mt-2">Сопровождение на этапах роста.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 flex items-center justify-center font-bold text-lg order-1 md:order-2">7</div>
<div className="md:w-1/2 order-3"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
<div className="absolute -top-[300px] -left-[100px] w-[800px] h-[800px] bg-emerald-50/60 rounded-full blur-[100px]"></div>

<div className="hidden lg:block absolute top-14 left-14 opacity-100">
<span className="text-zinc-300 text-lg font-medium tracking-widest block mb-4">/02</span>
<div className="relative w-72 h-48">

<div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl transform rotate-[10deg] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50"></div>
<div className="absolute top-6 left-16 w-40 h-40 bg-gradient-to-br from-emerald-50 to-emerald-100/40 rounded-3xl transform -rotate-[5deg] shadow-[0_20px_40px_rgba(16,185,129,0.1)] backdrop-blur-sm border border-white/60"></div>
<div className="absolute top-4 left-8 w-40 h-40 bg-gradient-to-br from-white to-zinc-50 rounded-3xl transform rotate-[5deg] shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-zinc-100/80 z-10">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-100/50 to-transparent rounded-3xl"></div>
</div>
</div>
</div>
</div>
<div className="relative z-10">

<div className="flex flex-col lg:flex-row lg:justify-end mb-24">
<div className="lg:w-1/2 flex flex-col items-start lg:pl-10">
<h2 className="text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight leading-[1.05] mb-4">
                                WhyCreative Pulse
                            </h2>
<p className="text-xl text-zinc-500 font-medium">We combine logic and imagination</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">

<div className="flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-100/40 flex items-center justify-center text-emerald-600 mb-6">
<svg className="lucide lucide-timer w-6 h-6 stroke-[1.5]" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 leading-tight mb-4 tracking-tight">
                                Мы думаем <span className="text-emerald-500">стратегически</span>,а действуем <span className="text-emerald-500">быстро</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                Никакой воды и долгих согласований. Мы сразу понимаем, что работает, и делаем это красиво, умно и вовремя.
                            </p>
</div>

<div className="flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-100/40 flex items-center justify-center text-emerald-600 mb-6">
<svg className="lucide lucide-wand-2 w-6 h-6 stroke-[1.5]" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 leading-tight mb-4 tracking-tight">
                                Мы не копируем.Мы <span className="text-emerald-500">создаём</span>.
                            </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                Каждый сайт, визуал или кампания — уникальны, потому что отражают вас и ваш стиль. Каждое решение — под ваш бренд.
                            </p>
</div>

<div className="flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-100/40 flex items-center justify-center text-emerald-600 mb-6">
<svg className="lucide lucide-radio w-6 h-6 stroke-[1.5]" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 leading-tight mb-4 tracking-tight">
                                Технологии и люди— <span className="text-emerald-500">на одном пульсе</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                Наша команда — это синхронно работающий организм: дизайнеры, разработчики и стратеги говорят на одном языке.
                            </p>
</div>

<div className="flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-100/40 flex items-center justify-center text-emerald-600 mb-6">
<svg className="lucide lucide-trending-up w-6 h-6 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-zinc-900 leading-tight mb-4 tracking-tight">
                                Мы не обещаем —мы <span className="text-emerald-500">показываем цифры</span>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                Вы видите, как растёт ваш проект. Мы не скрываем этапы, отчёты и результаты. Прозрачно, чётко, по делу.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Что вы получите</h2>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg text-zinc-200">Быстрый, современный, адаптивный сайт</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg text-zinc-200">Улучшение конверсии и доверия</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-lg text-zinc-200">Автоматизация рутинных процессов</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-lg text-zinc-200">Экономию времени команды</span>
</li>
</ul>
</div>
<div className="md:w-1/2">
<div className="relative bg-gradient-to-tr from-emerald-500 to-teal-500 p-[1px] rounded-3xl">
<div className="bg-[#0a0a0a] rounded-[23px] p-8 h-full relative overflow-hidden">

<div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-64 border border-dashed border-white/10 rounded-xl">
<span className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">100%</span>
<span className="text-zinc-500 mt-2">Digital Transformation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">FAQ</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl open:border-emerald-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-200 hover:text-white transition">
                        Сколько длится разработка?
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-lg">
                        От 2 до 8 недель, в зависимости от сложности задачи и объема необходимого функционала.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl open:border-emerald-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-200 hover:text-white transition">
                        Можно начать с аудита?
                         <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-lg">
                        Да, мы проводим полный технический и UX-аудит текущего решения перед началом работ.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl open:border-emerald-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-200 hover:text-white transition">
                        Можно ли работать удалённо?
                         <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-lg">
                        Да. 90% наших проектов — международные. Мы выстроили прозрачный процесс коммуникации.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-white/10 rounded-2xl open:border-emerald-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-zinc-200 hover:text-white transition">
                        Какие технологии вы используете?
                         <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-lg">
                        React, Next.js, Node.js, TypeScript, PHP, Laravel, API ChatGPT, AWS и другие современные инструменты.
                    </div>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="relative rounded-[3rem] overflow-hidden bg-emerald-900/10 border border-emerald-500/20 text-center py-20 px-6">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Готовы обсудить проект?
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Запустим ваш цифровойпродукт на новый уровень
                    </h2>
<p className="text-xl text-zinc-400 max-w-xl mx-auto mb-10">
                        Мы предложим оптимальный формат, сроки и реализацию под ваши цели.
                    </p>
<button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-medium px-8 py-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                        Start your project
                        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>
<footer className="max-w-7xl mx-auto px-6 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
<p>© 2024 Creative Pulse. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Twitter</a>
</div>
</footer>
</main>


    </>
  );
}
