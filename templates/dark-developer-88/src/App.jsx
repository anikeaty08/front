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



      // Initialize Icons
      lucide.createIcons();

      // Simple smooth scroll override for anchor links to handle spacing
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
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
      


<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 px-4 py-4 md:py-6">
<div className="max-w-screen-xl mx-auto">
<div className="glass rounded-full px-6 py-3 flex items-center justify-between mx-auto max-w-2xl shadow-lg shadow-black/20">
<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors"></div>
            PORTFOLIO
          </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-stone-400 hover:text-white transition-colors" href="#about">
              Обо мне
            </a>
<a className="text-xs font-medium text-stone-400 hover:text-white transition-colors" href="#projects">
              Проекты
            </a>
<a className="text-xs font-medium text-stone-400 hover:text-white transition-colors" href="#stack">
              Стек
            </a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-stone-200 transition-colors" href="#contact">
            Связаться
          </a>
</div>
</div>
</nav>

<main className="z-10 md:pt-48 md:pb-32 md:px-6 pt-48 pr-4 pb-32 pl-4 relative"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>
<div className="flex flex-col text-center max-w-5xl mr-auto ml-auto items-center">
<div className="inline-flex reveal-text [--fx-filter:blur(9px)_liquid-glass(1,10)_saturate(1.25)_noise(0.5,1,0)] bg-slate-50/10 border-lime-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 items-center">
<span className="flex w-2 h-2 relative">
<span className="animate-ping inline-flex bg-slate-50 opacity-75 w-full h-full rounded-full absolute"></span>
<span className="inline-flex text-slate-50 bg-slate-50 w-2 h-2 rounded-full relative"></span>
</span>
<span className="uppercase text-xs font-medium text-slate-50 tracking-wide font-mono">
            Open to work
          </span>
</div>
<h1 className="leading-[0.95] reveal-text delay-100 md:text-7xl lg:text-8xl lg:bg-clip-text lg:text-transparent text-5xl font-medium tracking-tighter bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/100 to-white/50 mb-8">Создаю цифровой <br/> <span className="xl:bg-clip-text xl:text-transparent bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0">опыт будущего.</span></h1>
<p className="md:text-lg leading-relaxed reveal-text delay-200 text-base font-light text-stone-400 max-w-xl mb-10">
          Я объединяю дизайн и технологии для создания эстетичных и
          функциональных веб-интерфейсов. Специализируюсь на Webflow и Frontend
          разработке.
        </p>
<div className="flex flex-col md:flex-row items-center gap-4 reveal-text delay-300">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold tracking-tight hover:bg-stone-200 transition-all flex items-center gap-2 group">
            Смотреть проекты
            <svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
            Копировать Email
          </button>
</div>
</div>
</main>

<div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden py-6 relative z-10" id="stack">
<div className="marquee-container relative max-w-7xl mx-auto w-full">
<div className="marquee-content flex gap-12 w-max items-center">

<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm font-medium tracking-tight font-mono">
              Webflow
            </span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-sm font-medium tracking-tight">React</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-wind w-5 h-5" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-sm font-medium tracking-tight">Tailwind CSS</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm font-medium tracking-tight">Figma</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium tracking-tight">
              GSAP Animation
            </span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-medium tracking-tight">Three.js</span>
</div>

<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm font-medium tracking-tight">Webflow</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-sm font-medium tracking-tight">React</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-wind w-5 h-5" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-sm font-medium tracking-tight">Tailwind CSS</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm font-medium tracking-tight">Figma</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium tracking-tight">
              GSAP Animation
            </span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-medium tracking-tight">Three.js</span>
</div>

<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm font-medium tracking-tight">Webflow</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-sm font-medium tracking-tight">React</span>
</div>
<div className="flex items-center gap-2 text-stone-400 select-none">
<svg className="lucide lucide-wind w-5 h-5" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-sm font-medium tracking-tight">Tailwind CSS</span>
</div>
</div>
</div>
</div>

<section className="z-10 md:px-6 max-w-6xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative" id="about">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
          Чем я занимаюсь
        </h2>
<div className="h-0.5 w-12 bg-red-500 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">

<div className="glass glass-hover rounded-3xl p-8 md:col-span-2 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-400">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<svg className="lucide lucide-arrow-up-right text-stone-500 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
            Разработка под ключ
          </h3>
<p className="text-sm text-stone-400 leading-relaxed max-w-md font-light">
            Полный цикл создания веб-сайта: от прототипирования в Figma до
            верстки и интеграции CMS. Адаптивность, SEO-оптимизация и высокая
            производительность.
          </p>
</div>

<div className="glass glass-hover rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-all duration-300">
<span className="text-5xl font-semibold tracking-tighter text-white mb-2">
            6+
          </span>
<span className="text-sm text-stone-400 font-medium">Лет опыта</span>
<div className="mt-6 flex -space-x-3">

<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-500"></div>
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-stone-800 flex items-center justify-center text-[10px] text-white font-medium">
              +40
            </div>
</div>
<span className="text-xs text-stone-500 mt-2">Довольных клиентов</span>
</div>

<div className="glass glass-hover rounded-3xl p-8 md:col-span-1 transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 [--fx-filter:blur(10px)_liquid-glass(1.4,10)_saturate(1.25)_noise(0.5,1,0)]">
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
              Внимание к деталям
            </h3>
<p className="text-sm text-stone-400 font-light">
              Каждый пиксель имеет значение. Я создаю системы, которые
              масштабируются и живут долго.
            </p>
</div>
<div className="mt-8 flex gap-2">
<div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-3/4"></div>
</div>
</div>
</div>

<div className="glass glass-hover rounded-3xl p-0 md:col-span-2 overflow-hidden flex flex-col transition-all duration-300 relative">
<div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
<span className="text-xs font-mono text-stone-500">
              custom_interaction.js
            </span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-pink-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-orange-500/50"></div>
</div>
</div>
<div className="p-6 font-mono text-xs text-stone-400 bg-black/40 h-full">
<p className="">
<span className="text-purple-400">export</span>
<span className="text-blue-400">const</span>
<span className="text-pink-200">Animation</span>
              = ({
              <span className="text-orange-300">target</span>
              }) =&gt; {
            </p>
<p className="pl-4 py-1">
              gsap.
              <span className="text-blue-300">to</span>
              (target, {
            </p>
<p className="pl-8">
              duration:
              <span className="text-orange-300">1.5</span>
              ,
            </p>
<p className="pl-8">
              ease:
              <span className="text-orange-300">"power4.out"</span>
              ,
            </p>
<p className="pl-8">
              y:
              <span className="text-orange-300">0</span>
              ,
            </p>
<p className="pl-8">
              opacity:
              <span className="text-orange-300">1</span>
</p>
<p className="pl-4">});</p>
<p className="">};</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-4 md:px-6" id="projects">
<div className="max-w-6xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">
              Избранные проекты
            </h2>
<p className="text-stone-400 font-light">
              Решения, которые приносят результат
            </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-stone-300 transition-colors" href="#">
            Все проекты
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="space-y-8">

<div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-colors duration-500">
<div className="grid md:grid-cols-2 gap-8">
<div className="h-64 md:h-[400px] bg-stone-900 relative overflow-hidden">

<div className="flex group-hover:scale-105 transition-transform duration-700 ease-out bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22d11bd1-ac0a-4a43-9cea-2222ec59f1cc_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-4xl font-bold text-white/10 tracking-tighter uppercase">
                    Fintech App
                  </span>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-white/10 text-white bg-white/5 font-mono">
                    Fintech
                  </span>
<span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-white/10 text-stone-400">
                    2023
                  </span>
</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                  Nova Banking
                </h3>
<p className="text-stone-400 leading-relaxed font-light mb-8 max-w-md">
                  Редизайн мобильного банка с упором на доступность и скорость.
                  Разработка дизайн-системы и фронтенд части личного кабинета.
                </p>
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500 mb-8 font-mono">
<li>React</li>
<li>TypeScript</li>
<li>Tailwind</li>
</ul>
<a className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all" href="#">
                  Посмотреть кейс
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-colors duration-500">
<div className="grid md:grid-cols-2 gap-8">
<div className="order-1 md:order-2 h-64 md:h-[400px] bg-stone-900 relative overflow-hidden">

<div className="flex group-hover:scale-105 transition-transform duration-700 ease-out bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8650cc8-0d55-402d-bfc1-75f3055e3d4e_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-4xl font-bold text-white/10 tracking-tighter uppercase">
                    E-Commerce
                  </span>
</div>
</div>
<div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-white/10 text-white bg-white/5">
                    Retail
                  </span>
<span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-white/10 text-stone-400">
                    2024
                  </span>
</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">
                  Lumina Fashion
                </h3>
<p className="text-stone-400 leading-relaxed font-light mb-8 max-w-md">
                  Интернет-магазин премиум класса с сложными 3D анимациями
                  товаров и бесшовными переходами между страницами.
                </p>
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500 mb-8 font-mono">
<li>Webflow</li>
<li>Three.js</li>
<li>GSAP</li>
</ul>
<a className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all" href="#">
                  Посмотреть кейс
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-24 pb-12 px-4 md:px-6 border-t border-white/5 bg-black/40 backdrop-blur-xl" id="contact">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              Есть идея?
              <br/>
<span className="text-stone-500">Давайте обсудим.</span>
</h2>
<p className="text-stone-400 font-light text-lg">
              Открыт для фриланса и долгосрочного сотрудничества.
            </p>
</div>
<div>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-base font-semibold rounded-full overflow-hidden transition-all hover:scale-105" href="mailto:hello@portfolio.com">
<span className="relative z-10 flex items-center gap-2">
                Написать мне
                <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-12 pb-12">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Навигация
            </span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              Главная
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#about">
              Обо мне
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#projects">
              Проекты
            </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Социальные сети
            </span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              LinkedIn
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              Twitter (X)
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              Instagram
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              Telegram
            </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Ресурсы
            </span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              Figma Community
            </a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">
              GitHub
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-xs text-stone-600">
            © 2024 Portfolio. All rights reserved.
          </span>
<div className="flex items-center gap-2 text-xs text-stone-600">
<span className="w-2 h-2 rounded-full bg-orange-500/50"></span>
            Systems Operational
          </div>
</div>
</div>
</footer>


    </>
  );
}
