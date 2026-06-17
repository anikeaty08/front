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



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
            lucide.createIcons();
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 animate-fade-up">
<div className="max-w-[88rem] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex flex-col leading-none group cursor-pointer">
<span className="text-base font-semibold tracking-tight text-white group-hover:text-[#FF5520] transition-colors duration-300">Krona</span>
<span className="text-base font-normal tracking-tight text-zinc-400">Studio&amp;School</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Программа</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Для кого</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Как проходит обучение</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Автор марафона</a>
<a className="text-sm font-normal text-zinc-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Стоимость</a>
</div>
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors group">
<div className="relative">
<div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
                Оплатить
            </button>
</div>
</nav>

<main className="pt-32 pb-16 px-6 max-w-[88rem] mx-auto overflow-hidden relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5520] opacity-[0.03] blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="flex flex-col max-w-2xl relative z-10">
<div className="flex items-start gap-3 mb-8 animate-fade-up delay-100">
<div className="mt-1 shrink-0 text-white animate-spin-slow" style={{animation: 'spin 10s linear infinite'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-base text-zinc-400 leading-snug">Для тех, кто хочет уйти от шаблонов и делать <br className="hidden sm:block"/> креативные работы в Figma</p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-white mb-8 animate-fade-up delay-200">
                    WOW-марафон по <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">WOW-презентациям</span> <br/>
                    в Figma
                </h1>
<p className="text-xl sm:text-2xl text-zinc-400 font-normal leading-relaxed mb-10 tracking-tight animate-fade-up delay-300">
                    Создай современную и стильную презентацию 
                    <span className="text-white relative inline-block">за 5 уроков<svg className="absolute -bottom-1 left-0 w-full h-1 text-[#FF5520]" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span> — освоишь визуальные приёмы, градиенты и световые эффекты.
                </p>
<div className="animate-fade-up delay-400">
<button className="relative group w-full sm:w-auto overflow-hidden bg-[#FF5520] text-white text-lg font-medium py-5 px-8 rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center sm:justify-start gap-3 shadow-[0_0_40px_-10px_rgba(255,85,32,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,85,32,0.6)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-shimmer"></div>
<svg className="group-hover:rotate-12 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M3 7h10"></path></svg>
<span className="relative z-10">Принять участие за 1999₽</span>
</button>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-square animate-scale-in delay-500">
<div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 group animate-float">
<img alt="Figma Design Collage" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#FF5520]/20 to-black/40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-xl flex items-center justify-between opacity-0 translate-y-4 animate-fade-up delay-700">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FF5520] flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Вводный урок</div>
<div className="text-xs text-zinc-400">Доступно бесплатно</div>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</div>
<div className="absolute -inset-10 bg-gradient-to-tr from-[#FF5520]/30 to-purple-500/30 blur-[60px] -z-10 opacity-60 animate-pulse"></div>
</div>
</div>
<div className="mt-20 w-full overflow-hidden mask-linear animate-fade-up delay-700">
<div className="animate-marquee flex gap-4">
<div className="flex gap-4 shrink-0">
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Таблицы</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Плагины</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Нейросети</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Композиция</span>
</div>
</div>
<div aria-hidden="true" className="flex gap-4 shrink-0">
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Таблицы</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Плагины</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Нейросети</span>
</div>
<div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/[0.08] hover:border-[#FF5520]/50 hover:shadow-[0_0_15px_-5px_#FF5520] transition-all duration-300 cursor-default group">
<svg className="text-[#FF5520] group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Композиция</span>
</div>
</div>
</div>
</div>
<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-fade-up delay-700">
<div className="flex flex-col group hover:transform hover:translate-x-1 transition-transform duration-300">
<span className="text-zinc-500 text-sm font-normal mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-[#FF5520]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                    Даты проведения
                </span>
<span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">сразу после оплаты</span>
</div>
<div className="flex flex-col group hover:transform hover:translate-x-1 transition-transform duration-300">
<span className="text-zinc-500 text-sm font-normal mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-[#FF5520]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    Материалы
                </span>
<span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">5 эфиров — 10+ слайдов</span>
</div>
<div className="flex flex-col group hover:transform hover:translate-x-1 transition-transform duration-300">
<span className="text-zinc-500 text-sm font-normal mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-[#FF5520]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Продолжительность
                </span>
<span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">5 уроков по 2 часа</span>
</div>
<div className="flex flex-col group hover:transform hover:translate-x-1 transition-transform duration-300">
<span className="text-zinc-500 text-sm font-normal mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-[#FF5520]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Доступ
                </span>
<span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">записи уроков на 30 дней</span>
</div>
</div>
</main>

<section className="overflow-hidden flex flex-col bg-[#050505] w-full pt-12 pb-32 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-[#FF5520]/10 via-[#FF5520]/5 to-transparent blur-[100px] -z-10 pointer-events-none"></div>
<div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10 max-w-[88rem]">

<div className="reveal-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[#FF5520] text-xs font-medium mb-8 hover:bg-white/10 transition-all cursor-default">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Design Community</span>
</div>
<h2 className="reveal-element delay-100 text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl transition-all">
                Присоединяйся к 5,000+ <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200">дизайнерам и креаторам</span>
</h2>
<p className="reveal-element delay-200 text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed transition-all">
                Общайтесь с арт-директорами, фрилансерами и основателями студий. Делитесь работами, получайте фидбек и находите вдохновение.
            </p>
<button className="reveal-element delay-300 group relative px-8 py-3.5 rounded-full bg-[#FF5520] hover:bg-[#e04515] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,85,32,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,85,32,0.4)]">
<span className="relative z-10 flex items-center gap-2 text-white font-semibold text-sm">
                    Вступить в комьюнити
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>

<div className="w-full max-w-7xl mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">

<div className="reveal-element delay-[400ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3abecb91-7a25-48a9-994b-1afb799b6db7_800w.webp"/>
</div>
<div className="reveal-element delay-[450ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c13ef29b-044c-451f-bd58-309e4e18991a_800w.webp"/>
</div>
<div className="reveal-element delay-[500ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca24203-35d4-4043-a007-591a487cbc43_800w.webp"/>
</div>
<div className="reveal-element delay-[550ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08f72a02-8995-40f8-9680-f1c42c9d5aae_800w.webp"/>
</div>
<div className="reveal-element delay-[600ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3d4d588-f8cc-4129-8a9b-d0f004d15ab4_800w.webp"/>
</div>
<div className="reveal-element delay-[650ms] aspect-square rounded-2xl overflow-hidden relative group border border-white/5 bg-white/5 transition-all">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffe72e43-4af9-46c9-85c3-07c3f7705f9a_800w.webp"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] w-full pt-12 pb-24 relative">
<div className="container mx-auto px-6 relative z-10 max-w-[88rem]">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col">
<span className="reveal-element text-zinc-500 font-medium mb-4 text-sm transition-all">Образовательная Платформа</span>
<h2 className="reveal-element delay-100 text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-12 transition-all">
                        Навыки, которые меняют подход к дизайну.
                    </h2>

<div className="relative space-y-10 pl-4 mb-16">
<div className="bg-gradient-to-b from-[#FF5520]/50 via-[#FF5520]/20 to-transparent w-[1px] absolute top-2 bottom-2 left-[7px]"></div>
<div className="reveal-element delay-200 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-[#FF5520] flex items-center justify-center bg-[#050505] z-10">
<div className="w-1.5 h-1.5 bg-[#FF5520] rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-[#FF5520] transition-colors">Работа с композицией</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Правила верстки, модульные сетки и управление вниманием</p>
</div>
<div className="reveal-element delay-300 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-orange-400 flex items-center justify-center bg-[#050505] z-10">
<div className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-orange-400 transition-colors">Сложные эффекты</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Глассморфизм, неон, 3D-объекты и текстуры</p>
</div>
<div className="reveal-element delay-400 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center bg-[#050505] z-10">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-zinc-300 transition-colors">Анимация и прототипы</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Smart Animate, интерактивные компоненты и вау-переходы</p>
</div>
</div>
<div className="reveal-element delay-500 transition-all">
<button className="group flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-medium transition-all">
                            Смотреть программу
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5520] group-hover:scale-125 transition-transform"></div>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="reveal-element delay-200 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Design" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
</div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Auto Layout</h4>
</div>
</div>
<div className="reveal-element delay-300 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Color" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Typography</h4>
</div>
</div>
<div className="reveal-element delay-400 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="3D" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FF5520]/20 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">3D &amp; Depth</h4>
</div>
</div>
<div className="reveal-element delay-500 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all">
<img alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-4 left-4">
<h4 className="text-white font-medium tracking-tight">Components</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050505] pb-24 relative">
<div className="container mx-auto px-6 max-w-[88rem]">
<div className="bg-[#0A0A0B] border border-white/5 rounded-[32px] p-6 md:p-10 mb-8 relative overflow-hidden group">
<div className="flex items-center justify-between mb-10 px-2">
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Форматы обучения</h3>
<a className="group/link flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                        Смотреть все 
                        <svg className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-[#FF5520]/20 border border-[#FF5520]/30 text-[#FF5520] text-[10px] font-semibold uppercase tracking-wide">Popular</span>
<img alt="Basic" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">Базовый курс</h4>
<span className="text-white font-semibold text-sm">1999₽</span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] text-zinc-500">5 уроков • Доступ навсегда</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
                                Подробнее
                            </button>
</div>
</div>

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-[10px] font-semibold uppercase tracking-wide">Advanced</span>
<img alt="Advanced" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">PRO Наставничество</h4>
<span className="text-white font-semibold text-sm">9990₽</span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] text-zinc-500">Личный разбор • Портфолио</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
                                Подробнее
                            </button>
</div>
</div>

<div className="group/card relative bg-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#151518] to-[#0F0F11]">
<span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-white/90 border border-white/20 text-black text-[10px] font-semibold uppercase tracking-wide">Live</span>
<img alt="Workshop" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen group-hover/card:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h4 className="text-white font-medium text-lg tracking-tight">Воркшопы</h4>
<span className="text-white font-semibold text-sm">Бесплатно</span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="text-[10px] text-zinc-500">Каждую неделю • Практика</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors">
                                Записаться
                            </button>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-[#060807]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060807] to-[#FF5520]/20 pointer-events-none"></div>
<div className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF5520]/20 bg-[#FF5520]/10 text-[#FF5520] text-xs font-medium mb-8">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Готов прокачать скиллы?</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl leading-[1.1]">
                        Начни свой путь в дизайне сегодня
                    </h2>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-12 font-light">
                        Присоединяйся к тысячам студентов Krona Studio и начни создавать проекты, которыми можно гордиться.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group flex items-center gap-2 bg-[#FF5520] hover:bg-[#e04515] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(255,85,32,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,85,32,0.5)]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Начать обучение
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] w-full pt-24 pb-12 relative border-t border-white/5 text-zinc-400">
<div className="container mx-auto px-6 max-w-[88rem]">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Krona</h2>
<p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
                    Онлайн-школа дизайна. Учим создавать современные интерфейсы, презентации и графику.
                </p>
</div>
<div className="bg-[#0e0e10] border border-white/5 rounded-3xl p-6 md:p-10 lg:p-12 mb-24 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF5520]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF5520]/10 border border-[#FF5520]/20 text-[#FF5520] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5520] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5520]"></span>
</span>
                                Отвечаем быстро
                            </div>
<h3 className="text-xl font-medium text-white mb-8">Связаться с нами</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="text-[#FF5520] mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Помощь с выбором курса</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-[#FF5520] mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Техническая поддержка</span>
</li>
</ul>
</div>
<div className="mt-auto pt-8 lg:pt-0">
<a className="inline-flex items-center gap-2 text-white hover:text-[#FF5520] transition-colors text-sm font-medium" href="mailto:hello@krona.school">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                hello@krona.school
                            </a>
</div>
</div>
<div className="lg:col-span-8">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Имя</label>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF5520]/50 focus:ring-1 focus:ring-[#FF5520]/50 transition-all" placeholder="Иван Иванов" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Email</label>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF5520]/50 focus:ring-1 focus:ring-[#FF5520]/50 transition-all" placeholder="ivan@mail.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-white ml-1">Сообщение</label>
<textarea className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF5520]/50 focus:ring-1 focus:ring-[#FF5520]/50 transition-all resize-none" placeholder="Ваш вопрос..." rows="4"></textarea>
</div>
<div className="flex justify-end pt-2">
<button className="bg-[#FF5520] hover:bg-[#e04515] text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-all shadow-[0_0_20px_-5px_rgba(255,85,32,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,85,32,0.5)] flex items-center gap-2" type="button">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                                    Отправить
                                </button>
</div>
</form>
</div>
</div>
</div>
<div className="w-full h-px bg-white/5 mb-16"></div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Курсы</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Figma Base</a>
<a className="text-sm hover:text-white transition-colors" href="#">Figma Pro</a>
<a className="text-sm hover:text-white transition-colors" href="#">Презентации</a>
<a className="text-sm hover:text-white transition-colors" href="#">3D Графика</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Студентам</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Вход в кабинет</a>
<a className="text-sm hover:text-white transition-colors" href="#">База знаний</a>
<a className="text-sm hover:text-white transition-colors" href="#">Комьюнити</a>
<a className="text-sm hover:text-white transition-colors" href="#">Сертификаты</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Компания</h4>
<a className="text-sm hover:text-white transition-colors" href="#">О нас</a>
<a className="text-sm hover:text-white transition-colors" href="#">Вакансии</a>
<a className="text-sm hover:text-white transition-colors" href="#">Контакты</a>
</div>
<div className="col-span-2 md:col-span-3 lg:col-span-2">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">Подписаться</h4>
<form className="flex gap-2 mb-8">
<div className="relative flex-grow">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<input className="w-full bg-[#1c1c1f] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-all" placeholder="you@example.com" type="email"/>
</div>
<button className="bg-white hover:bg-zinc-200 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors" type="button">OK</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 Krona Studio. Все права защищены.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Политика</a>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-700"></span>
<a className="hover:text-white transition-colors" href="#">Оферта</a>
<span className="w-0.5 h-0.5 rounded-full bg-zinc-700"></span>
<button className="hover:text-white transition-colors flex items-center gap-1 group" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        Наверх
                        <svg className="transition-transform group-hover:-translate-y-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
