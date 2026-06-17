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



    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  


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
      

<nav className="sm:px-6 lg:px-12 flex sticky bg-slate-50 w-full z-50 border-slate-200 border-b pt-5 pr-4 pb-5 pl-4 top-0 backdrop-blur-sm items-center justify-between" style={{backgroundColor: 'rgba(248, 250, 252, 0.75)', WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)'}}>
<a className="flex items-center gap-2 group" href="#how">
<span className="text-lg font-semibold text-slate-900 tracking-tight">
<img alt="CLYO" className="inline-block align-middle w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cbf875e-5839-47e0-865a-c990f30f0ff5_320w.png"/>
</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="uppercase hover:text-emerald-600 transition-colors text-xs font-semibold text-slate-500 tracking-widest" href="#how">Как работает</a>
<a className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors" href="#about">Что внутри</a>
<a className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors" href="#tech">Технологии</a>
<a className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors" href="#platform">Платформа</a>
</div>
<a className="uppercase hover:bg-emerald-700 transition-colors sm:px-6 lg:px-12 -my-5 -mr-4 sm:-mr-6 lg:-mr-12 inline-flex items-center justify-center text-xs font-semibold text-white tracking-widest bg-emerald-600 rounded-none pt-0 pr-4 pb-0 pl-4" href="#book" style={{alignSelf: 'stretch'}}>
<span className="inline-flex items-center gap-2">
<span className="">Записаться</span>
<span className="inline-flex items-center justify-center">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</span>
</a>
</nav>

<header className="w-full max-w-7xl mx-auto border-x border-slate-200" id="how">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="sm:px-6 lg:px-12 sm:pt-20 lg:pt-24 sm:pb-20 lg:pb-24 flex flex-col h-full pt-16 pr-4 pb-16 pl-4 justify-between">
<div className="">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 text-slate-900">
      Полный чекап здоровья <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">за 90 минут</span>
</h1>
<div className="mt-10">
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-emerald-600 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">160+ лабораторных тестов</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-emerald-600 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">360° скрининг кожи</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-emerald-600 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">Расшифровка 20 000+ генов</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-emerald-600 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">Персональный анализ от ИИ и врачей</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-6 h-6 text-emerald-600 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight">Наглядный отчёт и понятный план действий</span>
</div>
</div>
<p className="mt-8 text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
        В одном чекапе за <span className="font-semibold text-slate-900">55 000 ₽</span>
</p>
</div>
</div>
<div className="mt-12">
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-xl hover:bg-emerald-700 transition-colors group w-full sm:w-auto justify-center sm:justify-start font-medium" href="#book">
<span className="">Записаться на чекап</span>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-800 px-6 py-4 rounded-xl hover:border-emerald-200 hover:text-emerald-700 transition-colors w-full sm:w-auto justify-center sm:justify-start font-medium" href="#about">
<span className="">Что внутри</span>
<svg className="lucide lucide-arrow-down-right w-5 h-5" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>
</div>
</div>

<div className="sm:h-96 lg:h-auto lg:border-t-0 lg:border-l overflow-hidden bg-slate-100 h-80 border-slate-200 border-t relative">
<img alt="Сканирование в капсуле" className="hover:scale-105 transition-transform duration-1000 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a8f616e-44ec-4760-8a97-e6e87e72933c_1600w.png"/>
<div className="bg-emerald-950/10 absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<video autoplay="" className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a8f616e-44ec-4760-8a97-e6e87e72933c_1600w.png" preload="auto">
<source src="https://s3.twcstorage.ru/53f5d8eb-e500a2d8-3d75-42f3-874f-3c8841c3d903/bg3.mp4" type="video/mp4"/>
</video>
</div>
<div className="absolute top-6 left-6 flex flex-col gap-2">
<span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/90 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-md">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
            90 минут
          </span>
<span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/90 rounded-full px-3 py-1.5 shadow-lg backdrop-blur-md">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Безопасно
          </span>
</div>
</div>
</div>
</header>

<section className="w-full max-w-7xl mx-auto border-x border-slate-200">
</section>

<section className="w-full max-w-7xl mx-auto border-x border-slate-200 bg-slate-50" id="about">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border-slate-200 border border-b">
<div className="sm:p-10 hover:bg-white transition-colors bg-slate-50 pt-8 pr-8 pb-8 pl-8">
<div className="mb-4 flex items-center justify-start">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-emerald-700 border border-slate-200">
<svg className="lucide lucide-stethoscope w-7 h-7" data-lucide="stethoscope" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</span>
</div>
<h3 className="sm:text-2xl text-xl font-semibold text-slate-900 tracking-tight mb-4">Полная диагностика</h3>
<p className="leading-relaxed text-base font-medium text-slate-600">От точной оценки состояния сосудов и сердца  до ИИ-сканировании кожи </p>
</div>
<div className="sm:p-10 hover:bg-white transition-colors bg-slate-50 pt-8 pr-8 pb-8 pl-8">
<div className="mb-4 flex items-center justify-start">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-emerald-700 border border-slate-200">
<svg className="lucide lucide-search-check w-7 h-7" data-lucide="search-check" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</span>
</div>
<h3 className="sm:text-2xl text-xl font-semibold text-slate-900 tracking-tight mb-4">Раннее выявление</h3>
<p className="leading-relaxed text-base font-medium text-slate-600">Выявление 1000+ заболеваний на ранней стадии. Экспертная визуальная и компьютерная диагностика внутренних органов</p>
</div>
<div className="sm:p-10 hover:bg-white transition-colors bg-slate-50 pt-8 pr-8 pb-8 pl-8">
<div className="mb-4 flex items-center justify-start">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-emerald-700 border border-slate-200">
<svg className="lucide lucide-clipboard-list w-7 h-7" data-lucide="clipboard-list" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</span>
</div>
<h3 className="sm:text-2xl text-xl font-semibold text-slate-900 tracking-tight mb-4">Индивидуальный план</h3>
<p className="leading-relaxed text-base font-medium text-slate-600">Персональные рекомендации от ИИ и врачей на основе ваших показателей и генетических рисков</p>
</div>
</div>
</section>

<section className="border-x bg-white w-full max-w-none border-slate-200 mr-auto ml-auto" id="inside" style={{backgroundColor: '#ffffff'}}>
<div className="sm:px-6 lg:px-12 sm:py-20 max-w-7xl border-slate-200 border-b mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" style={{backgroundColor: '#ffffff'}}>
<div className="flex flex-col lg:flex-row gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest bg-slate-100 text-slate-600">Что внутри</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            Анализ всех <span className="text-emerald-500">систем организма</span>
</h2>
<p className="text-lg font-medium text-slate-500 max-w-2xl">Наш чекап даёт целостную картину вашего здоровья. Система анализирует состояние основных органов и систем тела:</p>
</div>
<div className="hidden sm:flex gap-3">
<button aria-label="Назад" className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all border-slate-200 text-slate-400 hover:text-white">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Вперёд" className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all border-slate-200 text-slate-400 hover:text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="sm:px-6 lg:px-12 sm:py-14 bg-white w-full-w-none mr-auto ml-auto pt-12 pr-4 pb-12 pl-4" style={{width: '100%', maxWidth: 'none', marginLeft: 'auto', marginRight: 'auto'}}>
<div className="relative">
<div className="overflow-x-auto no-scrollbar">
<div className="flex gap-9 scroll-smooth snap-x snap-mandatory w-max gap-x-9 gap-y-9 items-stretch" style={{scrollBehavior: 'smooth'}}>

<div className="snap-start group relative w-[350px] max-w-[350px] min-w-[250px] h-[420px] sm:h-[460px] lg:h-[520px] border border-emerald-100-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<img alt="Сердечно-сосудистая система" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be0ffb5-b41c-4d86-b5f6-efffea4e5c70_800w.png"/>
<div className="bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-heart-pulse w-5 h-5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 p-6">
<h4 className="text-xl font-semibold text-white tracking-tight">Сердечно-сосудистая система</h4>
<p className="leading-relaxed text-sm font-medium text-white/80 mt-2">Оценка функции сердца, кровеносных сосудов и обменных процессов, включая уровни глюкозы и холестерина.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                Скрининг
              </div>
</div>
</div>
</div>

<div className="snap-start group min-w-[250px] sm:h-[460px] lg:h-[520px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white w-[350px] h-[420px] max-w-[350px] border-slate-200 border relative shadow-sm">
<img alt="Генетический атлас" className="w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92e71e01-5c60-4ca1-8006-1d49cda5e0be_800w.png"/>
<div className="bg-center bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-dna w-5 h-5" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
</div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0">
<h4 className="text-xl font-semibold text-white tracking-tight">Генетический атлас</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed" style={{color: '#ffffff'}}>
              Расшифровка и интерпретация данных для долгосрочных выводов.
            </p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Аналитика
              </div>
</div>
</div>
</div>

<div className="snap-start group min-w-[250px] sm:h-[460px] lg:h-[520px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white w-[350px] h-[420px] max-w-[350px] border-slate-200 border relative shadow-sm">
<img alt="Нервная и мышечная системы" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bf030d4-2a7a-4f91-b397-5167e1593272_800w.png"/>
<div className="bg-center bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-5 left-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-brain w-5 h-5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 p-6">
<h4 className="text-xl font-semibold text-white tracking-tight">Нервная и мышечная системы</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed">Анализ нервной системы и мышц, включая реакцию на стресс, физическую активность и возможные неврологические нарушения.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Риски
              </div>
</div>
</div>
</div>

<div className="snap-start group relative w-[350px] max-w-[350px] min-w-[250px] h-[420px] sm:h-[460px] lg:h-[520px] border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration- hover:-translate-y-1 overflow-hidden">
<img alt="Эндокринная система" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3edb6af-ebd9-4afc-ab80-624fa8ba97eb_800w.png"/>
<div className="bg-center bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-scan w-5 h-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0" style={{color: '#ffffff'}}>
<h4 className="text-xl font-semibold text-white tracking-tight">Эндокринная система</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed">Оценка работы щитовидной железы, надпочечников и половых гормонов, которые регулируют обмен веществ и гормональный баланс.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-camera w-4 h-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                Визуализация
              </div>
</div>
</div>
</div>

<div className="snap-start group relative w-[350px] max-w-[350px] min-w-[250px] h-[420px] sm:h-[460px] lg:h-[520px] border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<img alt="Печень и почки" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d1243f1-1d49-4a8e-8da4-bb49c0d450da_800w.png"/>
<div className="bg-center bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent border-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-bone w-5 h-5" data-lucide="bone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path></svg>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 p-6">
<h4 className="text-xl font-semibold text-white tracking-tight" style={{}}>Печень и почки</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed">Оценка состояния печени и почек, отвечающих за детоксикацию, обмен веществ и поддержание водно-электролитного баланса.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-move w-4 h-4" data-lucide="move" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>
                Подвижность
              </div>
</div>
</div>
</div>

<div className="snap-start group relative w-[350px] max-w-[350px] min-w-[250px] h-[420px] sm:h-[460px] lg:h-[520px] border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<img alt="Кожа и её состояние" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7bb3f4f-28ec-450b-8b65-d3d7a4f8eca1_800w.png"/>
<div className="bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 p-6">
<h4 className="text-xl font-semibold text-white tracking-tight">Кожа и её состояние</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed">Полное 3D-сканирование кожи для выявления родинок, новообразований и других дерматологических изменений, включая ранние признаки кожных заболеваний.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-droplet w-4 h-4" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
                Метаболизм
              </div>
</div>
</div>
</div>

<div className="snap-start group relative w-[350px] max-w-[350px] min-w-[250px] h-[420px] sm:h-[460px] lg:h-[520px] border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<img alt="Иммунная система и уровни витаминов и минералов" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ed59804-da7b-4170-b3a5-fc00b04c685c_800w.png"/>
<div className="bg-center bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-5 top-5">
<div className="inline-flex items-center justify-center h-11 w-11 bg-white/90 backdrop-blur-md border border-white/50 text-emerald-700 shadow-sm">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 p-6">
<h4 className="text-xl font-semibold text-white tracking-tight">Иммунная система и уровни витаминов и минералов</h4>
<p className="text-sm font-medium text-white/80 mt-2 leading-relaxed">Оценка иммунных показателей и уровней жизненно важных витаминов и минералов, таких как железо, кальций и витамин D, необходимых для общего здоровья.</p>
<div className="mt-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200">
<svg className="lucide lucide-sparkle w-4 h-4" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                Баланс
              </div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between gap-4">
<p className="text-xs font-medium text-slate-500">
        Листайте горизонтально, чтобы увидеть все направления.
      </p>
<div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-mouse lucide-m w-4 h-4" data-lucide="mouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
          Прокрутка
        </span>
</div>
</div>
</div>

</div>
</section>

<section className="sm:px-6 sm:py-20 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 w-full max-w-none mr-auto ml-auto pt-0 pr-0 pb-0 pl-0" id="tech">
<div className="overflow-hidden border-slate-200 border-0 relative shadow-sm">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Оборудование и технологии" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74ef17f1-7931-444d-a683-ddcf415e861a_3840w.jpg" style={{objectFit: 'contain', objectPosition: 'center', backgroundColor: '#e9efef'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/30 to-slate-900/65" style={{display: 'none'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/25 to-slate-900/55" style={{display: 'none'}}></div>
</div>

<div className="sm:px-6 lg:px-12 sm:py-16 -translate-x-1/2 w-screen pt-12 pr-4 pb-12 pl-4 relative left-1/2">
<div className="sm:mb-12 text-center mb-10">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">
          Технологии и <span className="text-emerald-600">оборудование</span>
</h2>
<p className="leading-relaxed text-lg font-medium text-slate-600 max-w-3xl mx-auto">
          Наш сервис основан на передовых медицинских технологиях, ранее недоступных в привычных клиниках. Мы используем инновационное сканирующее оборудование, сочетающее несколько методов визуализации и высокоскоростной анализ данных:
        </p>
</div>

<div className="grid grid-cols-1 gap-10 lg:gap-12 max-w-5xl mr-auto ml-auto items-start">


<div className="lg:min-h-[520px] lg:max-w-none w-full max-w-2xl mr-auto ml-auto relative">

<div className="lg:h-0 h-6"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
<div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Технологический стек</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Совмещаем несколько методов визуализации и высокоскоростной анализ для точного результата.
                  </p>
</div>
</div>
</div>
<div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-scan w-5 h-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Сканирование</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Высокая детализация данных за один сеанс — быстро и без лишней нагрузки.
                  </p>
</div>
</div>
</div>
<div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">ИИ-анализ</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Нейросеть помогает находить важные паттерны на медизображениях.
                  </p>
</div>
</div>
</div>
<div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">опасность</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Деликатный процесс без боли — комфорт на всех этапах.
                  </p>
</div>
</div>
</div>
</div>

<div className="hidden lg:block">
<div className="bg-white/95 w-[320px] border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-24 right-2 shadow-lg backdrop-blur-md" style={{transform: 'translateX(70px)'}}>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-activity lucide- w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Технологический стек</p>
<p className="text-sm font-medium text-slate-900 mt-1">
                    Совмещаем несколько методов визуализации и высокоскорной анализ для точного результата.
                  </p>
</div>
</div>
</div>
<div className="absolute left-3 top-48 w-[300px] bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-scan w-5 h-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Сканирование</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Высокая детализация за один сеанс — быстро и без лишней нагрузки.
                  </p>
</div>
</div>
</div>
<div className="bg-white/95 w-[320px] border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute top-[360px] right-10 shadow-lg backdrop-blur-md">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">ИИ-анализ</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Нейросеть на миллионах медизображений для точной диагностики.
                  </p>
</div>
</div>
</div>
<div className="absolute left-10 bottom-6 w-[340px] bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="min-w-0">
<p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Комфорт и безопасность</p>
<p className="mt-1 text-sm font-medium text-slate-900">
                    Без боли и облучения — спокойная атмосфера и деликатный процесс.
                  </p>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-slate-200 border-t" id="platform">
<div className="sm:px-6 lg:px-12 sm:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative hidden lg:block">
<div className="bg-emerald-400/20 w-2/3 h-2/3 rounded-full absolute top-0 right-0 blur-3xl" style={{zIndex: '-1'}}></div>
<img alt="Смартфон с медицинским отчётом" className="bg-white object-cover border-slate-200 border-0 rounded-3xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bab904f4-ffc5-4f03-9ca0-9bd9d66330cd_1600w.png"/>
</div>
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            Цифровой отчёт и платформа
          </h2>
<p className="font-medium mb-8 text-lg text-slate-500">
            Все результаты — в личном цифровом кабинете. Онлайн-платформа с наглядной и структурированной информацией о здоровье.
          </p>
<div className="space-y-3">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="">
<p className="font-semibold tracking-tight text-slate-900">Интерактивный отчёт</p>
<p className="text-sm font-medium text-slate-500 mt-1">3D-модель тела с отметками рисков.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="">
<p className="font-semibold tracking-tight text-slate-900">Показатели здоровья</p>
<p className="text-sm font-medium text-slate-500 mt-1">Графики и таблицы ключевых параметров.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<p className="font-semibold tracking-tight text-slate-900">Персональные рекомендации</p>
<p className="text-sm font-medium text-slate-500 mt-1">Советы ИИ и врачей, адаптированные под вас.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
<svg className="lucide lucide-messages-square w-5 h-5" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<div className="">
<p className="font-semibold tracking-tight text-slate-900">Связь с врачами</p>
<p className="text-sm font-medium text-slate-500 mt-1">Онлайн-консультации и передача данных в один клик.</p>
</div>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-emerald-600 text-white px-7 py-4 rounded-xl hover:bg-emerald-700 transition-colors font-medium" href="#book">
              Записаться на чекап
              <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 w-full border-slate-200 border-t pt-16 pb-16" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
<div className="space-y-6 lg:col-span-2">
<a className="flex items-center gap-2" href="#how">
<span className="text-lg font-semibold tracking-tight text-slate-900">CLYO</span>
</a>
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Готовы сделать шаг к здоровью?</h2>
<p className="text-slate-500 font-medium leading-relaxed mt-3 max-w-2xl">
              Не откладывайте заботу о себе. Получите ранние предупреждения и персональный план улучшения самочувствия уже сегодня.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors hover:bg-emerald-700" href="#book">
                Записаться на сканирование
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-sm font-semibold px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-200 transition-colors" href="#platform">
                Платформа
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-6 tracking-tight text-slate-900">Навигация</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#how">Как работает</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#about">Что внутри</a></li>
<li className=""><a className="hover:text-emerald-600 transition-colors" href="#tech">Технологии</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#platform">Платформа</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-6 tracking-tight text-slate-900">Контакты</h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-600 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Москва</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-emerald-600 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+7 (000) 000-00-00</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-emerald-600 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>hello@clyo.health</span>
</li>
</ul>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
<div>© 2026 CLYO. Все права защищены.</div>
<div className="flex gap-8">
<a className="hover:text-emerald-700 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Условия</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
