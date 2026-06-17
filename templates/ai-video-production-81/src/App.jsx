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



    (function () {
      const section = document.querySelector('.quoteRevealSection');
      const target = section ? section.querySelector('.quoteReveal') : null;
      const words = section ? section.querySelectorAll('.quote-word') : [];
      if (!section || !target || words.length === 0) return;
      words.forEach(word => { word.style.color = 'rgb(115 115 115)'; }); // Init Gray
      function updateWordReveal() {
        const rect = target.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const centerRatio = Math.max(0, Math.min(1, 1 - (Math.abs((rect.top + rect.height / 2) - (vh / 2)) / (vh / 2))));
        const wordsToReveal = Math.floor(centerRatio * words.length);
        words.forEach((word, index) => {
          word.style.color = index < wordsToReveal ? 'rgb(255 255 255)' : 'rgb(115 115 115)';
        });
      }
      window.addEventListener('scroll', updateWordReveal, { passive: true });
      window.addEventListener('resize', updateWordReveal);
      updateWordReveal();
    })();
  


    // Year
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

    // Mobile menu
    const openBtn = document.querySelector('button[aria-label="Open menu"]');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('mobileMenu');
    
    function toggleMenu(show){ 
      if(!menu) return; 
      menu.classList.toggle('hidden', !show); 
      document.body.style.overflow = show ? 'hidden' : ''; 
    }
    
    if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (menu) menu.addEventListener('click', (e) => { if (e.target === menu) toggleMenu(false); });

    // Icons
    if (window.lucide) {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    }
  
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
      <div className="aura-background-component top-0 w-full -z-10 h-[1100px] absolute"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="2IcJ39Gx68KiPG1qlgj8"></div>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto px-4">

<header className="w-full">
<div className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">

<span className="text-xl font-bold text-white tracking-tight">044.studio</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-neutral-300 items-center">
<a className="hover:text-white transition-colors font-medium" href="#services">Услуги</a>
<a className="hover:text-white transition-colors font-medium" href="#process">Процесс</a>
<a className="hover:text-white transition-colors font-medium" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors font-medium" href="#pricing">Форматы</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-menu w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="group relative inline-flex transition duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 items-center justify-center hover:bg-white/15 text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 hidden md:flex" href="#contact">
<span className="text-sm font-medium">Связаться с нами</span>
<svg className="lucide lucide-arrow-right ml-2 w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<h1 className="max-w-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl text-white tracking-tighter text-center mt-24 lg:mt-32 mr-auto ml-auto">
      Создаем креативный <br className="hidden sm:block"/> AI-контент для
      <img alt="Fashion AI" className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.4),_0_6.7px_5.3px_rgba(0,0,0,0.5),_0_12.5px_10px_rgba(0,0,0,0.6),_0_22.3px_17.9px_rgba(0,0,0,0.7),_0_41.8px_33.4px_rgba(0,0,0,0.8),_0_100px_80px_rgba(0,0,0,0.9)] object-cover rounded-xl mr-2 ml-2 grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e74f3efa-795f-48c3-af9a-123c4b7dd690_320w.jpg"/>
      брендов.
    </h1>

<p className="sm:text-xl max-w-2xl text-base text-neutral-300 text-center mt-6 mx-auto leading-relaxed">
      044.studio — это ИИ видеопродакшн полного цикла. Мы объединяем технологии генеративного искусства и кинематографический сторителлинг для создания рекламы нового поколения.
    </p>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 justify-center">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-200 tracking-tight bg-white/10 border-white/10 border rounded-full pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-center justify-center" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">

<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Обсудить проект</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium rounded-full blur-md">Обсудить проект</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center justify-center hover:bg-white/10 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] text-base font-medium text-neutral-400 hover:text-white transition-colors bg-transparent px-6 h-12" href="#cases">
        Наши кейсы
      </a>
</div>
</section>

<section className="sm:p-8 max-w-7xl relative bg-neutral-900/60 border-white/10 border rounded-3xl mt-24 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur" id="process">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-medium uppercase tracking-wider text-neutral-500">Пайплайн</span>
<h2 className="text-[44px] sm:text-5xl lg:text-6xl leading-[1] text-white tracking-tighter mt-4">
            От брифа до <br/>финального рендера.
          </h2>

<div className="mt-10 relative">
<div className="hidden sm:flex flex-col gap-6 relative text-neutral-300 bg-transparent pr-4 pl-4">

<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent"></div>

<div className="relative">
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-900 border-white/40 border-2 rounded-full mt-1"></div>
<div className="flex-1 pb-4">
<span className="text-base font-semibold text-white">Креатив и Стратегия</span>
<p className="text-sm text-neutral-400 mt-1">Разработка концепции, арт-дирекшн, создание мудбордов и сценариев.</p>
</div>
</div>
</div>

<div className="relative">
<div className="flex gap-5 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-white/40 bg-neutral-900 z-10 relative mt-1"></div>
<div className="flex-1 pb-4">
<span className="text-base font-semibold text-white">AI Генерация</span>
<p className="text-sm text-neutral-400 mt-1">Создание видео, изображений и звука с использованием нейросетей (Midjourney, Runway, Luma).</p>
</div>
</div>
</div>

<div className="relative">
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-white/40 bg-neutral-900 z-10 relative mt-1"></div>
<div className="flex-1">
<span className="text-base font-semibold text-white">Пост-продакшн и VFX</span>
<p className="text-sm text-neutral-400 mt-1">Монтаж, цветокоррекция, апскейл до 4K и интеграция классической графики.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-12">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Почему выбирают 044?</p>
<p className="text-sm text-neutral-300 mt-1 max-w-sm">
              Мы не просто "генерируем". Мы управляем хаосом нейросетей, создавая консистентный продукт для бизнеса.
            </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative" id="cases">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01296f44-0b19-41ad-b7cb-1d401455f1af_800w.jpg)] group">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">
              Fashion
            </span>
</div>
<div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Digital Collection</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d8ff092-132d-4cec-88a1-ac20bce98b33_800w.jpg)] bg-cover border-white/10 rounded-2xl group">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">
              Tech
            </span>
</div>
<div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Product Launch</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf8a505e-077b-4767-a4a6-5f049de93919_800w.jpg)] group">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">
              Music Video
            </span>
</div>
<div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Visualizers</p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7d84a3f-8703-4f20-b660-fd8965a83b5c_800w.jpg)] group">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wide uppercase text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">
              Socials
            </span>
</div>
<div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Viral Content</p>
</div>
</article>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 quoteRevealSection mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" style={{'--reveal': '100%'}}>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-neutral-900 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200 tracking-wider font-semibold uppercase">
        Отзывы клиентов
      </span>
</div>

<div className="relative mt-8 sm:mt-12 quoteReveal">
<p className="mx-auto max-w-5xl text-center sm:text-4xl md:text-5xl lg:text-5xl leading-[1.2] tracking-tight">
<span className="quote-word transition-colors duration-300">"044.studio</span>
<span className="quote-word transition-colors duration-300">показали,</span>
<span className="quote-word transition-colors duration-300">что</span>
<span className="quote-word transition-colors duration-300">AI</span>
<span className="quote-word transition-colors duration-300">может</span>
<span className="quote-word transition-colors duration-300">быть</span>
<span className="quote-word transition-colors duration-300">стильным.</span>
<span className="quote-word transition-colors duration-300">Они</span>
<span className="quote-word transition-colors duration-300">сократили</span>
<span className="quote-word transition-colors duration-300">время</span>
<span className="quote-word transition-colors duration-300">продакшна</span>
<span className="quote-word transition-colors duration-300">с</span>
<span className="quote-word transition-colors duration-300">месяца</span>
<span className="quote-word transition-colors duration-300">до</span>
<span className="quote-word transition-colors duration-300 font-serif italic text-white">одной</span>
<span className="quote-word transition-colors duration-300 font-serif italic text-white">недели,</span>
<span className="quote-word transition-colors duration-300">сохранив</span>
<span className="quote-word transition-colors duration-300">наше</span>
<span className="quote-word transition-colors duration-300">видение</span>
<span className="quote-word transition-colors duration-300">бренда."</span>
</p>
</div>

<div className="sm:mt-12 flex gap-3 mt-8 items-center justify-center">
<img alt="Author avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col text-left">
<span className="text-sm text-white font-medium">Анна В.</span>
<span className="text-xs text-neutral-400">Marketing Director, Fashion Brand</span>
</div>
</div>
</div>

</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" id="services">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/70 tracking-wider uppercase">Возможности</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter mt-2">
          Полный цикл AI продакшна
        </h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-300 mt-4">
          Мы используем нейросети не как игрушку, а как профессиональный инструмент для решения бизнес-задач.
        </p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative lg:col-span-2 ring-1 ring-white/10 md:p-10 overflow-hidden bg-zinc-950 border-zinc-900 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-layers h-5 w-5 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">Workflow 360°</h3>
</div>
<p className="text-zinc-300 max-w-2xl">
            Мы берем на себя все этапы производства. Вам не нужно искать отдельных специалистов по промптингу, монтажу или звуку. Мы сдаем готовый продукт "под ключ".
          </p>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-lightbulb h-5 w-5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Идея</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-wand-2 h-5 w-5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Генерация</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-scissors h-5 w-5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Монтаж</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-rocket h-5 w-5 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-9.56 1.55 1.55 0 0 1 2.25 2.25A22 22 0 0 1 15 12z"></path><path d="M9 22h6"></path><path d="M15 9h6"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Запуск</span>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-slate-900 border-white/10 border rounded-3xl shadow-lg backdrop-blur h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="relative h-56 sm:h-64 ring-1 ring-inset ring-white/10 overflow-hidden bg-neutral-950 rounded-2xl">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 space-y-3">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
<span>Traditional</span>
<span>AI Pipeline</span>
</div>

<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 w-[80%]"></div>
</div>

<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[20%] animate-[width_2s_ease-in-out_infinite_alternate]" style={{width: '20%'}}></div>
</div>
<div className="pt-4 flex justify-between items-end">
<div>
<div className="text-3xl text-white font-bold tracking-tighter">3 Дня</div>
<div className="text-xs text-neutral-400">Вместо 3 недель</div>
</div>
<div className="text-right">
<div className="text-emerald-400 text-xs font-mono bg-emerald-950/50 border border-emerald-500/20 px-2 py-1 rounded">
                      +400% ROI
                    </div>
</div>
</div>
</div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<h3 className="sm:text-xl text-lg font-semibold tracking-tight">Скорость</h3>
</div>
<p className="text-sm text-neutral-400 mt-3">Быстрая проверка гипотез. Мы создаем десятки вариаций контента за время, которое обычно уходит на один съемочный день.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1">
<article className="relative bg-neutral-900 border-white/10 border rounded-2xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-medium">Стиль и Бренд</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Обучаем модели на ваших бренд-буках для 100% попадания в айдентику.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5">
<div className="h-8 w-8 rounded bg-gradient-to-br from-orange-400 to-pink-500"></div>
<span className="text-sm text-white">LoRA Training</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5">
<div className="h-8 w-8 rounded bg-gradient-to-br from-blue-400 to-cyan-500"></div>
<span className="text-sm text-white">ControlNet</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5">
<div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 to-teal-500"></div>
<span className="text-sm text-white">Face Swap</span>
</div>
</div>
</article>
</div>

<div className="lg:col-span-2">
<aside className="relative overflow-hidden sm:rounded-3xl flex flex-col bg-zinc-950 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 h-full">
<div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400">
<span className="uppercase tracking-wider">Sound Design</span>
</div>
<h4 className="sm:mt-4 sm:text-3xl md:text-4xl text-2xl font-semibold text-zinc-100 tracking-tight mt-3">
          Генеративный саунд-дизайн и озвучка
        </h4>
<p className="md:text-base text-sm text-zinc-300 mt-3 max-w-lg">
          Больше не нужно покупать стоковую музыку. Мы генерируем уникальные треки под динамику вашего видео и клонируем голоса для озвучки на любом языке.
        </p>

<div className="mt-8 flex items-end gap-1 h-24 w-full opacity-80">

<div className="w-1/12 bg-indigo-500/20 h-[40%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500/40 h-[70%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[50%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[80%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[60%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[90%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[40%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[75%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500 h-[55%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500/40 h-[30%] rounded-t"></div>
<div className="w-1/12 bg-indigo-500/20 h-[20%] rounded-t"></div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" id="pricing">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 p-6 sm:p-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400">Сотрудничество</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white mt-2 tracking-tighter">Форматы работы</h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-[42ch]">
          Мы гибки в подходах. Выберите формат, который подходит вашему бизнесу.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 flex flex-col">
<h3 className="text-xl text-white tracking-tight font-bold">Pilot</h3>
<p className="text-sm text-neutral-400 mt-1">Тестовый проект</p>
<div className="mt-6"></div>
<p className="text-neutral-300 text-sm min-h-[40px]">Идеально для проверки гипотезы или создания одного креатива.</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300 mb-6 flex-1">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Видеоролик (до 30 сек)
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3 варианта генерации
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Базовый саунд-дизайн
            </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm font-medium transition-colors" href="#contact">Заказать тест</a>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 ring-1 ring-indigo-400/20 flex flex-col relative">
<div className="absolute top-0 right-0 p-3">
<span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 bg-indigo-500/20 border border-indigo-500/30 rounded px-2 py-1">Popular</span>
</div>
<h3 className="text-xl text-white tracking-tight font-bold">Campaign</h3>
<p className="text-sm text-neutral-400 mt-1">Рекламная кампания</p>
<div className="mt-6"></div>
<p className="text-neutral-300 text-sm min-h-[40px]">Серия роликов для запуска продукта или сезонной акции.</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300 mb-6 flex-1">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3-5 Видеороликов
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Адаптация под форматы (16:9, 9:16)
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Лицензирование AI моделей
            </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500 text-white h-11 ring-1 ring-indigo-400/30 text-sm font-medium transition-colors" href="#contact">Обсудить задачу</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 flex flex-col">
<h3 className="text-xl text-white tracking-tight font-bold">Retainer</h3>
<p className="text-sm text-neutral-400 mt-1">Долгосрочное партнерство</p>
<div className="mt-6"></div>
<p className="text-neutral-300 text-sm min-h-[40px]">Постоянное производство контента для соцсетей бренда.</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300 mb-6 flex-1">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Ежемесячный пакет (10+ видео)
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Выделенная команда
            </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Приоритетная поддержка
            </li>
</ul>
<a className="inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm font-medium transition-colors" href="#contact">Связаться с отделом</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mx-auto pt-8 px-4 pb-24" id="contact">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,.08),transparent_45%)]"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Контакты</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter">Начнем проект?</h2>
<p className="mt-3 text-sm text-neutral-300">Оставьте заявку, и мы подготовим для вас персональное предложение и мудборд в течение 24 часов.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-4">
<div className="bg-white/5 p-2 rounded-lg ring-1 ring-white/10">
<svg className="lucide lucide-mail w-5 h-5 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Email</p>
<p className="text-sm text-neutral-400">hello@044.studio</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white/5 p-2 rounded-lg ring-1 ring-white/10">
<svg className="lucide lucide-send w-5 h-5 text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Telegram</p>
<p className="text-sm text-neutral-400">@044manager</p>
</div>
</div>
</div>
</div>
<form action="#" className="p-6 sm:p-10 space-y-4" method="post" onsubmit="event.preventDefault(); alert('Спасибо! Мы свяжемся с вами.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300">Имя</span>
<input className="mt-1 w-full rounded-lg bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Иван" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300">Компания</span>
<input className="mt-1 w-full rounded-lg bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Brand Name" type="text"/>
</label>
</div>
<label className="block">
<span className="text-sm text-neutral-300">Email / Telegram</span>
<input className="mt-1 w-full rounded-lg bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="contact@company.com" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300">О проекте</span>
<textarea className="mt-1 w-full rounded-lg bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Расскажите кратко о задаче..." rows="4"></textarea>
</label>
<div className="pt-2">
<button className="inline-flex items-center justify-center text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-full h-12 px-8 w-full sm:w-auto transition-all" type="submit">
              Отправить бриф
            </button>
</div>
</form>
</div>
</div>
</section>

<footer className="sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl mt-10 mx-4 mb-10 p-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h3 className="text-2xl text-zinc-100 font-bold tracking-tight">044.studio</h3>
<p className="text-sm text-zinc-500 mt-2 max-w-xs">AI видеопродакшн полного цикла. <br/>Будущее рекламы уже здесь.</p>
</div>
<div className="flex gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Портфолио</a>
<a className="hover:text-white transition-colors" href="mailto:hello@044.studio">Email</a>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© <span id="year">2025</span> 044.studio. All rights reserved.</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-bold text-xl">044.studio</span>
<button aria-label="Close menu" className="text-white p-2" id="closeMenu">
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="mt-8 flex flex-col gap-4 text-lg font-medium">
<a className="text-white/80 hover:text-white" href="#services">Услуги</a>
<a className="text-white/80 hover:text-white" href="#process">Процесс</a>
<a className="text-white/80 hover:text-white" href="#cases">Кейсы</a>
<a className="text-white/80 hover:text-white" href="#pricing">Цены</a>
</nav>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center rounded-full bg-white text-black h-12 font-semibold" href="#contact">Написать нам</a>
</div>
</div>
</div>



    </>
  );
}
