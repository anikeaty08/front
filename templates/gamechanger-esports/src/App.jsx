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
        
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="overflow-hidden group-hover:border-emerald-500/50 transition-colors w-10 h-10 border-white/10 border rounded-xl relative shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f1ae90f-7ee1-488b-82f1-dfebd4182cd9_3840w.jpg"/>

<img alt="Game Changer Logo" className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src="https://www.aura.build/editor/logo.png"/>
</div>
<div className="flex flex-col">
<span className="group-hover:text-emerald-400 transition-colors text-lg font-medium text-white tracking-tight leading-none">GAME CHANGER</span>
<span className="text-[11px] text-zinc-500 font-medium tracking-widest uppercase group-hover:text-zinc-400 transition-colors">Esports</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10 text-base font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#tournaments">Турниры</a>
<a className="hover:text-white transition-colors" href="#gallery">Галерея</a>
<a className="hover:text-white transition-colors" href="#teams">Команды</a>
<a className="hover:text-white transition-colors" href="#ranking">Рейтинг</a>
</div>
<div className="hidden md:flex items-center gap-5">
<a className="text-base font-normal text-zinc-400 hover:text-white transition-colors" href="#">Войти</a>
<a className="hover:bg-zinc-200 transition-all text-base font-medium text-zinc-950 bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_-10px_rgba(255,255,255,0.5)]" href="https://chat.whatsapp.com/HkhvB11CmI2G34QKunWfOT?mode=hqrt1">
                    Регистрация
                </a>
</div>

<button className="md:hidden hover:text-white text-zinc-400">
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-52 md:pb-36 overflow-hidden pt-36 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm font-normal mb-10 animate-fade-in backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Регистрация на Season 4 открыта
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 animate-fade-in delay-100">
                Играй. Побеждай.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-800">Меняй историю.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal animate-fade-in delay-200">
                Главная киберспортивная арена Северного Кавказа. Организация турниров мирового уровня по Counter-Strike прямо из сердца гор.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 animate-fade-in delay-300">
<button className="md:w-auto hover:bg-emerald-500 transition-all flex hover:translate-y-[-2px] text-lg font-medium text-white bg-emerald-600 w-full rounded-lg pt-4 pr-9 pb-4 pl-9 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] gap-x-2.5 gap-y-2.5 items-center justify-center" onclick="window.location.href='https://chat.whatsapp.com/HkhvB11CmI2G34QKunWfOT?mode=hqrt1'" role="button">
<svg className="lucide lucide-crosshair w-5 h-5" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
                    Начать карьеру
                </button>
<button className="w-full md:w-auto bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-300 px-9 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2.5">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Смотреть лайв
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none"></div>
</header>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="text-center md:text-left reveal active">
<div className="text-4xl font-medium text-white tracking-tight mb-2">₽ 150k</div>
<div className="text-base text-zinc-500">Призовой фонд</div>
</div>
<div className="text-center md:text-left reveal delay-100 active">
<div className="text-4xl font-medium text-white tracking-tight mb-2">120+</div>
<div className="text-base text-zinc-500">Активных команд</div>
</div>
<div className="text-center md:text-left reveal delay-200 active">
<div className="text-4xl font-medium text-white tracking-tight mb-2">95</div>
<div className="text-base text-zinc-500">Турниров проведено</div>
</div>
<div className="text-center md:text-left reveal delay-300 active">
<div className="text-4xl font-medium text-white tracking-tight mb-2">GROZNY</div>
<div className="text-base text-zinc-500">Штаб-квартира</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="tournaments">
<div className="flex items-end justify-between mb-16 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Актуальные турниры</h2>
<p className="text-zinc-400 text-lg">Выбери свою лигу и покажи скилл.</p>
</div>
<a className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-base font-medium transition-colors" href="#">
                Все турниры <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 gap-6">

<div className="group relative bg-zinc-900/40 border border-white/10 hover:border-emerald-500/50 rounded-xl p-8 transition-all duration-300 overflow-hidden reveal hover:bg-zinc-900/60">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-800/80 rounded-lg flex items-center justify-center text-zinc-400 border border-white/5">
<svg className="lucide lucide-trophy w-8 h-8" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Caucasus Major 2025</h3>
<div className="flex items-center gap-3 text-base text-zinc-500 mt-2">
<span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded text-sm border border-emerald-500/20">LAN Финал</span>
<span>• 5v5 CS2</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-10 md:gap-20">
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Призовые</div>
<div className="text-white font-medium text-lg">₽ 150,000</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Дата</div>
<div className="text-white font-medium text-lg">20 Дек — 21 Дек</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Слоты</div>
<div className="text-white font-medium text-lg">14 / 32</div>
</div>
</div>
<button className="bg-white text-zinc-950 px-8 py-3 rounded-lg font-medium text-base hover:bg-zinc-200 transition-colors w-full md:w-auto shadow-lg shadow-white/5">
                        Участвовать
                    </button>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/10 hover:border-emerald-500/50 rounded-xl p-8 transition-all duration-300 reveal delay-100 hover:bg-zinc-900/60">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-800/80 rounded-lg flex items-center justify-center text-zinc-400 border border-white/5">
<svg className="lucide lucide-monitor w-8 h-8" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Highland Online Cup</h3>
<div className="flex items-center gap-3 text-base text-zinc-500 mt-2">
<span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded text-sm border border-zinc-700">Online</span>
<span>• 5v5 CS2</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-10 md:gap-20">
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Призовые</div>
<div className="text-white font-medium text-lg">₽ 20,000</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Дата</div>
<div className="text-white font-medium text-lg">15 Дек — 19 Дек</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Слоты</div>
<div className="text-white font-medium text-lg">60 / 64</div>
</div>
</div>
<button className="bg-zinc-800 text-white border border-zinc-700 px-8 py-3 rounded-lg font-medium text-base hover:bg-zinc-700 transition-colors w-full md:w-auto">
                        Регистрация
                    </button>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/10 hover:border-emerald-500/50 rounded-xl p-8 transition-all duration-300 reveal delay-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-800/80 rounded-lg flex items-center justify-center text-zinc-400 border border-white/5">
<svg className="lucide lucide-swords w-8 h-8" data-lucide="swords" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" x2="19" y1="19" y2="13"></line><line x1="16" x2="20" y1="16" y2="20"></line><line x1="19" x2="21" y1="21" y2="19"></line><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline><line x1="5" x2="9" y1="14" y2="18"></line><line x1="7" x2="4" y1="17" y2="20"></line><line x1="3" x2="5" y1="19" y2="21"></line></svg>
</div>
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Academy 1v1 Battle</h3>
<div className="flex items-center gap-3 text-base text-zinc-500 mt-2">
<span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded text-sm border border-zinc-700">LAN Club</span>
<span>• Aim Map</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-10 md:gap-20">
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Призовые</div>
<div className="text-white font-medium text-lg">Девайсы</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Дата</div>
<div className="text-white font-medium text-lg">Завершен</div>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest mb-1.5 font-medium">Победитель</div>
<div className="text-emerald-400 font-medium text-lg">Alvi_95</div>
</div>
</div>
<button className="bg-zinc-900 text-zinc-500 border border-zinc-800 px-8 py-3 rounded-lg font-medium text-base w-full md:w-auto cursor-not-allowed" disabled="">
                        Завершен
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/30 transition-colors reveal">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg className="lucide lucide-server w-6 h-6" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">128 Tick Сервера</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Собственные локальные сервера в регионе с минимальным пингом. Никаких лагов, только чистый скилл.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/30 transition-colors reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Честная Игра</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Продвинутая система анти-чита и ручная модерация каждого матча судьями с опытом.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-emerald-500/30 transition-colors reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Карьерный Рост</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Лучшие игроки попадают в скаутские отчеты и получают шанс вступить в профессиональные организации.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="gallery">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Галерея событий</h2>
<p className="text-zinc-400 text-lg">Эмоции, хайлайты и атмосфера наших LAN-турниров.</p>
</div>
<div className="flex gap-3">
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-lg text-base font-medium transition-colors">Фото</button>
<button className="text-zinc-400 hover:text-white px-5 py-2.5 rounded-lg text-base font-medium transition-colors">Видео</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[600px] md:h-[600px]">

<div className="relative col-span-1 md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 reveal">
<img alt="Esports Stage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-play w-8 h-8 text-white ml-1 fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider border border-red-500/20">Live Record</span>
</div>
<h3 className="text-xl font-medium text-white">Grand Final: Team A vs Team B</h3>
<p className="text-base text-zinc-400 mt-1">Решающий клатч раунд на карте Mirage</p>
</div>
</div>

<div className="relative col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden group border border-white/10 reveal delay-100">
<img alt="Gaming Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-white text-base font-medium">Игровая зона</p>
</div>
</div>

<div className="relative col-span-1 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group border border-white/10 reveal delay-200">
<img alt="Player emotion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
</div>

<div className="relative col-span-1 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group border border-white/10 reveal delay-300">
<img alt="Trophy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-md text-xs text-white border border-white/10 font-medium">
                    Season 3
                </div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-14 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-5">Найди команду мечты</h2>
<p className="text-zinc-400 mb-10 text-lg">Используй фильтры для поиска игроков или команд подходящего уровня.</p>

<div className="space-y-8">
<div className="space-y-3">
<label className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Уровень навыков (ELO)</label>
<div className="flex items-center gap-5">
<span className="text-base text-zinc-400">Novice</span>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="75"/>
<span className="text-base text-white font-medium">Pro</span>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Роль в игре</label>
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl cursor-pointer hover:border-emerald-500/50 transition-colors group">
<div className="relative flex items-center justify-center w-5 h-5 border border-zinc-600 rounded-full group-hover:border-emerald-500 transition-colors">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
</div>
<span className="text-base text-zinc-300">Sniper (AWP)</span>
</label>
<label className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl cursor-pointer hover:border-zinc-600 transition-colors">
<div className="relative flex items-center justify-center w-5 h-5 border border-zinc-600 rounded-full"></div>
<span className="text-base text-zinc-300">Rifler</span>
</label>
</div>
</div>
<div className="flex items-center gap-4 pt-2">
<div className="relative flex items-center">
<input className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-zinc-600 bg-zinc-950 checked:bg-emerald-600 checked:border-emerald-600 transition-all" id="mic" type="checkbox"/>
<svg className="lucide lucide-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<label className="text-base text-zinc-400 cursor-pointer select-none" htmlFor="mic">Только с микрофоном</label>
</div>
</div>
</div>

<div className="relative bg-zinc-950 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between min-h-[340px]">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Live Match</span>
</div>
<span className="text-sm font-mono text-zinc-500">de_mirage</span>
</div>
<div className="flex justify-between items-center text-center">
<div>
<div className="text-3xl font-medium text-white tracking-tight">TEAM A</div>
<div className="text-sm text-zinc-500 mt-1">Grozny</div>
</div>
<div className="text-5xl font-mono font-medium text-emerald-500 mx-6">12 : 10</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">TEAM B</div>
<div className="text-sm text-zinc-500 mt-1">Argun</div>
</div>
</div>
<div className="mt-10 space-y-4">
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[60%]"></div>
</div>
<div className="flex justify-between text-sm text-zinc-500 font-medium">
<span>Win Probability</span>
<span>60%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
<div className="max-w-md">
<a className="flex items-center gap-3 mb-8" href="#">
<img alt="Logo" className="w-9 h-9 rounded-full border border-emerald-500/30 object-cover" src="./logo.png"/>
<span className="font-medium text-white tracking-tight text-xl">GAME CHANGER</span>
</a>
<p className="text-zinc-500 text-base leading-relaxed mb-8">
                        Мы строим экосистему для развития киберспорта в Чеченской Республике. Присоединяйся к нам, чтобы стать частью новой истории.
                    </p>
<div className="flex gap-5">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-6 h-6" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-base">
<div>
<h4 className="font-medium text-white mb-6">Платформа</h4>
<ul className="space-y-4 text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Турниры</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Команды</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Игроки</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Статистика</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Организация</h4>
<ul className="space-y-4 text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Контакты</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Спонсоры</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Вакансии</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Поддержка</h4>
<ul className="space-y-4 text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Правила</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Анти-чит</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
<p>© 2024 Game Changer Esports. Grozny, Chechnya. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
