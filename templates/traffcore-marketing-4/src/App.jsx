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



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 border-2 border-blue-500 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
                    TRAFFCORE
                </a>
<div className="hidden md:flex gap-6 text-sm text-neutral-400 font-medium">
<span className="text-white cursor-pointer transition-colors hover:text-blue-400">RU</span>
<span className="cursor-pointer hover:text-white transition-colors">EN</span>
</div>
</div>
<a className="group hidden md:flex items-center gap-2 text-sm font-semibold transition-colors text-blue-500 hover:text-blue-400" href="#join">
                ХОЧУ В КОМАНДУ
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center bg-[#030303]">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

<div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-20 animate-spin-slow">
<svg className="w-full h-full stroke-white/20 fill-none" strokeWidth="0.2" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="49" stroke-dasharray="4 4"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="20" stroke-dasharray="2 4"></circle>
<path d="M50 0 L50 100 M0 50 L100 50" stroke-opacity="0.5"></path>
<path d="M15 15 L85 85 M85 15 L15 85" stroke-opacity="0.3"></path>
</svg>
</div>

<div className="absolute left-[10%] top-[25%] w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10 animate-float z-0 rotate-12">
<div className="absolute inset-0 bg-blue-500/10 rounded-2xl"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 rounded-lg"></div>
</div>

<div className="absolute right-[10%] bottom-[30%] w-32 h-32 md:w-40 md:h-40 animate-float-delayed z-0">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" viewbox="0 0 100 100">
<path d="M50 10 L90 80 L10 80 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M50 25 L80 75 L20 75 Z" fill="url(#grad1)" stroke="rgba(59,130,246,0.5)" strokeWidth="0.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(59,130,246,0.2)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(0,0,0,0)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transform perspective(500px) rotateX(60deg) origin-top"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300 tracking-wider">SYSTEM ONLINE v2.4</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[0.9] tracking-tight">
                    РЕАЛИЗАЦИЯ<br/>
                    ТВОЕГО ПОТЕНЦИАЛА<br/>
<span className="text-blue-500 relative inline-block">
                        НА 110%
                        
<svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
</div>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 reveal active" style={{}}>
<button className="group relative px-8 py-4 text-white font-semibold text-lg rounded-sm transition-all duration-300 bg-blue-600 hover:bg-blue-500 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        ХОЧУ В КОМАНДУ 
                        <svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</button>
<div className="flex items-center gap-3 text-neutral-400 text-sm md:text-base border-l border-white/10 pl-6">
<div className="flex flex-col items-start">
<span className="text-white font-bold">ROI 150%+</span>
<span className="text-xs">Средний показатель</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-6 right-6 flex justify-between items-end text-xs text-neutral-500 uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                Лидер рынка Gambling
            </div>
<div className="flex items-center gap-2 animate-bounce">
<svg className="lucide lucide-mouse w-4 h-4" data-lucide="mouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
                Скролл
            </div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-sm font-medium tracking-widest uppercase mb-4 text-blue-500 flex items-center gap-2">
<span className="w-8 h-px bg-blue-500"></span> О нас
                </h2>
<p className="text-3xl md:text-4xl font-semibold max-w-2xl text-white">
                    Мы строим экосистему для арбитража нового поколения. Цифры говорят громче слов.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden reveal" style={{}}>
<div className="bg-black p-10 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-users text-blue-500/20 w-12 h-12" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="text-5xl md:text-6xl font-semibold text-white mb-2 transition-colors group-hover:text-blue-500">240+</div>
<p className="text-neutral-400 text-lg">Человек в команде</p>
</div>
<div className="bg-black p-10 group hover:bg-neutral-900 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-bar-chart-2 text-blue-500/20 w-12 h-12" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</div>
<div className="text-5xl md:text-6xl font-semibold text-white mb-2 transition-colors group-hover:text-blue-500">$85M</div>
<p className="text-neutral-400 text-lg">Годовой оборот</p>
</div>
<div className="group hover:bg-neutral-900 transition-colors bg-black pt-10 pr-10 pb-10 pl-10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-globe text-blue-500/20 w-12 h-12" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<div className="text-5xl md:text-6xl font-semibold text-white mb-2 transition-colors group-hover:text-blue-500">7</div>
<p className="text-neutral-400 text-lg">Офисов по миру</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute top-0 right-0 w-1/2 h-1/2 blur-[100px] pointer-events-none bg-blue-900/10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
<div>
<h2 className="text-4xl md:text-5xl font-semibold mb-4">Инфраструктура успеха</h2>
<p className="text-neutral-400 text-lg max-w-xl">
                        Мы предоставляем условия, в которых ты не просто льешь трафик, а масштабируешь свой профит x10.
                    </p>
</div>
<button className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Узнать детали <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-white/10 transition-colors duration-500 reveal hover:border-blue-500/50 hover:bg-neutral-900">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-8 group-hover:text-black transition-all group-hover:bg-blue-500 text-blue-500">
<svg className="lucide lucide-wallet w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3">Нелимитированный бюджет</h3>
<p className="text-neutral-400 leading-relaxed">
                        Никаких стопов. Если связка плюсует — мы заливаем в нее столько, сколько она может сожрать. Твой профит ничем не ограничен.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-white/10 transition-colors duration-500 reveal hover:border-blue-500/50 hover:bg-neutral-900" style={{}}>
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-8 group-hover:text-black transition-all group-hover:bg-blue-500 text-blue-500">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3">In-house приложения</h3>
<p className="text-neutral-400 leading-relaxed">
                        Собственный отдел разработки. Прилы живут долго, конвертят бешено. Ты не тратишь время на поиск расходников.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-white/10 transition-colors duration-500 reveal hover:border-blue-500/50 hover:bg-neutral-900" style={{}}>
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-8 group-hover:text-black transition-all group-hover:bg-blue-500 text-blue-500">
<svg className="lucide lucide-lock w-6 h-6" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3">Приватные офферы</h3>
<p className="text-neutral-400 leading-relaxed">
                        Эксклюзивные условия от рекламодателей, доступные только для TRAFFCORE. Бампы ставок со старта.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-y border-white/5" id="join">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-center mb-20 reveal">Основатели</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group reveal">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 bg-neutral-900 border border-white/10 group-hover:border-blue-500/30 transition-colors">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-neutral-900 to-neutral-800">
<svg className="lucide lucide-user w-32 h-32 text-white/5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-semibold text-white">Алексей Волков</h3>
<p className="font-medium text-blue-500">CEO &amp; Founder</p>
</div>
</div>
</div>

<div className="group reveal" style={{}}>
<div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 bg-neutral-900 border border-white/10 group-hover:border-blue-500/30 transition-colors">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tl from-neutral-900 to-neutral-800">
<svg className="lucide lucide-user w-32 h-32 text-white/5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-semibold text-white">Дмитрий Соколов</h3>
<p className="font-medium text-blue-500">Co-Founder &amp; Head of Buying</p>
</div>
</div>
</div>
</div>
<div className="mt-20 flex justify-center reveal">
<div className="text-center w-full max-w-2xl">
<p className="text-neutral-400 mb-8 mx-auto">
                        Мы ищем амбициозных людей, готовых работать на результат. Если ты уверен в своих силах — добро пожаловать в семью.
                    </p>
<a className="group inline-flex items-center justify-center px-10 py-5 text-white text-lg font-semibold rounded-sm w-full md:w-auto transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] bg-blue-600 hover:bg-blue-500" href="#">
<span className="mr-2">ЗАПОЛНИТЬ АНКЕТУ</span>
<svg className="lucide lucide-send w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-black border-t border-white/5">
<div className="text-center mb-12 reveal">
<p className="text-xs text-neutral-500 tracking-[0.2em] uppercase">Нам доверяют лучшие</p>
</div>
<div className="marquee-container w-full relative">
<div className="flex whitespace-nowrap marquee-content gap-20 items-center">


<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-hexagon text-neutral-700" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> PIN-UP</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-triangle text-neutral-700" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> 1WIN</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-circle text-neutral-700" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> VAVADA</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-square text-neutral-700" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> MOSTBET</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-aperture text-neutral-700" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg> GLORY</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-codesandbox text-neutral-700" data-lucide="codesandbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg> BETBOOM</div>

<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-hexagon text-neutral-700" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> PIN-UP</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-triangle text-neutral-700" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> 1WIN</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-circle text-neutral-700" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> VAVADA</div>
<div className="text-2xl font-bold text-neutral-600 flex items-center gap-3 transition-colors hover:text-white cursor-default"><svg className="lucide lucide-square text-neutral-700" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> MOSTBET</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950 text-sm text-neutral-500">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm flex items-center justify-center bg-blue-900/50 border border-blue-500/30">
<div className="w-2 h-2 rounded-sm bg-blue-500"></div>
</div>
<span>TRAFFCORE © 2024</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Telegram</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
