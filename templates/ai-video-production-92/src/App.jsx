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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



      document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) lucide.createIcons();
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
      

<section className="relative isolate min-h-screen overflow-hidden bg-black">

<img alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 opacity-50 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg"/>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-red-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
<header className="z-10 xl:top-4 relative">
<div className="mr-6 ml-6">
<div className="flex items-center justify-between">

<a className="inline-flex items-center justify-center text-xl font-bold tracking-tighter text-white font-sans" href="#">
              044.studio
            </a>
<nav className="hidden md:flex items-center gap-2">
<div className="flex items-center gap-1 rounded-full bg-neutral-900/50 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
<a className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors" href="#">
                  Главная
                </a>
<a className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white font-sans transition-colors" href="#">
                  Проекты
                </a>
<a className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white font-sans transition-colors" href="#">
                  Услуги
                </a>
<a className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white font-sans transition-colors" href="#">
                  Процесс
                </a>
<a className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors font-sans" href="#">
                  Связаться с нами
                  <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur" id="mobile-menu-button">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<div className="relative z-10 flex flex-col justify-center min-h-[85vh]">
<div className="max-w-7xl mr-auto ml-auto px-6 w-full">
<div className="mx-auto max-w-4xl text-center">
<div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center text-[10px] uppercase tracking-wider font-bold text-white bg-red-600 rounded-full px-2 py-0.5 font-sans">
                Studio
              </span>
<span className="text-sm font-medium text-white/80 font-sans">
                AI Video Production &amp; Creative Direction
              </span>
</div>
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-white tracking-tight font-instrument-serif font-normal animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
              Создаем креативный <br className="hidden sm:block"/>
<span className="text-red-500/90 italic px-2">AI-контент</span> для брендов
            </h1>
<p className="sm:text-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-lg text-white/60 max-w-2xl mt-8 mr-auto ml-auto leading-relaxed font-sans font-light">
              Мы — ИИ видеопродакшн полного цикла. От разработки креативной концепции до генерации и финального рендера. Создаем визуальный язык будущего.
            </p>
<div className="flex flex-col sm:flex-row sm:gap-4 mt-12 gap-x-3 gap-y-3 items-center justify-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<a className="inline-flex items-center gap-2 hover:bg-neutral-200 text-sm font-medium text-neutral-900 bg-white transition-all ring-1 ring-white rounded-full py-3 px-8 font-sans" href="#">
                Смотреть портфолио
              </a>
<a className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/20 px-8 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition-all font-sans" href="#">
                Обсудить проект
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="mx-auto mt-24 max-w-5xl border-t border-white/5 pt-10">
<p className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-xs uppercase tracking-widest text-white/30 text-center font-sans mb-8">
              Технологический стек и партнеры
            </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white/60 font-medium font-sans hover:text-white transition-colors"><svg className="lucide lucide-cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg> Midjourney</div>
<div className="flex items-center gap-2 text-white/60 font-medium font-sans hover:text-white transition-colors"><svg className="lucide lucide-video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg> Runway Gen-3</div>
<div className="flex items-center gap-2 text-white/60 font-medium font-sans hover:text-white transition-colors"><svg className="lucide lucide-layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg> Stable Diffusion</div>
<div className="flex items-center gap-2 text-white/60 font-medium font-sans hover:text-white transition-colors"><svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 5H5"></path></svg> Sora</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div>
<h2 className="text-3xl sm:text-4xl text-white font-instrument-serif tracking-tight">Визуальные исследования</h2>
<p className="text-white/50 mt-2 font-sans max-w-md">Эксперименты с формой, светом и текстурой. Мы постоянно расширяем границы генеративной графики.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition font-sans border-b border-transparent hover:border-white pb-0.5" href="#">
                    Весь архив <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<img alt="Abstract AI Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe95e4c-28ec-49db-8042-019cfb592697_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium text-sm">Neon Future Concept</p>
</div>
</div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<img alt="Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bc26e9b-7376-4922-a38a-7bbfaf1f840f_800w.jpg"/>
</div>

<div className="col-span-1 row-span-2 relative group overflow-hidden rounded-lg animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<img alt="Pattern" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ed33c8b-b8b2-4176-967f-3d785fed07d8_1600w.png"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-white text-xs">Fabric Sim</p>
</div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<img alt="Character" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b0b95a0-23cb-443b-971e-21d725f5286b_800w.jpg"/>
</div>

<div className="col-span-2 row-span-1 relative group overflow-hidden rounded-lg animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<img alt="Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9a71ec-268b-4689-a510-56f57e9d4f13_1600w.png"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-white text-xs">Environment Gen</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-black">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mx-auto max-w-3xl text-center mb-12">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] font-instrument-serif font-normal">
            Наши кейсы
          </h2>
<p className="mt-4 text-white/60 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] font-sans">
            Реальные проекты, созданные с помощью нейросетей для коммерческих клиентов.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Automotive AI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fe95e4c-28ec-49db-8042-019cfb592697_800w.webp"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white text-black rounded-sm font-sans">Commercial</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white font-sans group-hover:text-white/90 transition-colors">Automotive Future</h3>
<p className="text-sm text-white/50 mt-2 line-clamp-2 font-sans">Рекламный ролик для концепт-кара. Сгенерированные локации и динамический монтаж.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-white/40 font-mono">Runway + AE</span>
<svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>

<article className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Fashion Campaign" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bc26e9b-7376-4922-a38a-7bbfaf1f840f_800w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white text-black rounded-sm font-sans">Fashion</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white font-sans group-hover:text-white/90 transition-colors">Digital Couture</h3>
<p className="text-sm text-white/50 mt-2 line-clamp-2 font-sans">Виртуальный показ мод. Создание несуществующих тканей и моделей.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-white/40 font-mono">Midjourney + SD</span>
<svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>

<article className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Music Video" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b0b95a0-23cb-443b-971e-21d725f5286b_800w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white text-black rounded-sm font-sans">Music Video</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white font-sans group-hover:text-white/90 transition-colors">Echoes of AI</h3>
<p className="text-sm text-white/50 mt-2 line-clamp-2 font-sans">Музыкальный клип с использованием morphing-эффектов и сюрреалистичных образов.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-white/40 font-mono">Deforum + Topaz</span>
<svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 relative bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] font-instrument-serif font-normal">
            Преимущества AI Продакшна
          </h2>
<p className="mt-4 text-white/60 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] font-sans">
            Почему бренды выбирают генеративный контент для своих кампаний
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-8 hover:border-white/10 transition-colors animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 text-white">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-sans tracking-tight">
              Скорость производства
            </h3>
<p className="text-sm text-white/50 leading-relaxed font-sans">
              То, что раньше занимало недели съемок и CGI, мы делаем за дни. Быстрая итерация идей и вариантов.
            </p>
</div>
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-8 hover:border-white/10 transition-colors animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 text-white">
<svg className="lucide lucide-infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-sans tracking-tight">
              Безграничный креатив
            </h3>
<p className="text-sm text-white/50 leading-relaxed font-sans">
              Создаем визуальные образы, которые невозможно или слишком дорого снять в реальности. Любые локации, любые миры.
            </p>
</div>
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-8 hover:border-white/10 transition-colors animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 text-white">
<svg className="lucide lucide-coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-sans tracking-tight">
              Оптимизация бюджета
            </h3>
<p className="text-sm text-white/50 leading-relaxed font-sans">
              Снижаем косты на логистику, актеров и декорации, перераспределяя бюджет в качество пост-продакшна и идеи.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-black border-t border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center mb-12">
<span className="text-sm font-medium text-white/50 font-sans animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
            Форматы сотрудничества
          </span>
<h2 className="text-3xl sm:text-4xl tracking-tight text-white mt-2 font-instrument-serif font-normal animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
            Направления работы
          </h2>
<p className="mt-4 text-white/60 font-sans animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
            Мы гибко подходим к задачам: от точечных креативов до масштабных кампаний
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="mb-6">
<h3 className="text-xl font-medium text-white tracking-tight font-sans">
                Social Media
              </h3>
<p className="text-sm text-white/50 mt-2 font-sans">
                Вирусный контент для Reels, TikTok, Shorts
              </p>
</div>
<ul className="space-y-3 mb-8 pt-6 border-t border-white/5">
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Пакет из 5-10 видео</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Адаптация под тренды</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Быстрый продакшн (3-5 дней)</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Включает саунд-дизайн</span>
</li>
</ul>
<button className="w-full rounded-full bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition border border-white/10 font-sans">
              Оставить заявку
            </button>
</div>

<div className="relative overflow-hidden rounded-3xl bg-white text-black p-8 shadow-2xl transform md:scale-105 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="absolute top-6 right-6">
<span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black border border-black/10 font-sans">
                Популярное
              </span>
</div>
<div className="mb-6">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight font-sans">
                Commercial
              </h3>
<p className="text-sm text-neutral-600 mt-2 font-sans">
                Рекламные ролики для TV и Digital
              </p>
</div>
<ul className="space-y-3 mb-8 pt-6 border-t border-black/10">
<li className="flex items-start gap-3 text-sm text-neutral-800 font-sans">
<svg className="w-4 h-4 text-black mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Разработка креативной концепции</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-sans">
<svg className="w-4 h-4 text-black mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Full CG / AI Video Generation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-sans">
<svg className="w-4 h-4 text-black mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Профессиональная озвучка</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-sans">
<svg className="w-4 h-4 text-black mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Права на коммерческое использование</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-sans">
<svg className="w-4 h-4 text-black mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Срок: 2-3 недели</span>
</li>
</ul>
<button className="w-full rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition font-sans">
              Обсудить задачу
            </button>
</div>

<div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="mb-6">
<h3 className="text-xl font-medium text-white tracking-tight font-sans">
                Special Project
              </h3>
<p className="text-sm text-white/50 mt-2 font-sans">
                Музыкальные клипы, инсталляции, Fashion
              </p>
</div>
<ul className="space-y-3 mb-8 pt-6 border-t border-white/5">
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Уникальный арт-дирекшн</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Сложный монтаж и VFX</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Кастомные нейросети (LoRA training)</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70 font-sans">
<svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Полное сопровождение</span>
</li>
</ul>
<button className="w-full rounded-full bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition border border-white/10 font-sans">
              Связаться
            </button>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-neutral-950">
<div className="mx-auto max-w-4xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white font-instrument-serif font-normal animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
            Вопросы и ответы
          </h2>
<p className="mt-4 text-white/60 font-sans animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
            Как устроен процесс создания AI видео
          </p>
</div>
<div className="space-y-4">
<div className="overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<button className="w-full px-6 py-5 text-left flex items-center justify-between" onclick="this.parentElement.classList.toggle('active'); this.nextElementSibling.classList.toggle('hidden')">
<span className="text-base font-medium text-white font-sans">
                Как происходит передача авторских прав?
              </span>
<svg className="w-5 h-5 text-white/60 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-5">
<p className="text-sm text-white/50 font-sans">
                Мы передаем полные права на использование финального видеоматериала клиенту. Однако стоит учитывать, что законодательство в области ИИ развивается, и "сырые" генерации могут иметь специфику регулирования. Мы консультируем по этим вопросам.
              </p>
</div>
</div>
<div className="overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<button className="w-full px-6 py-5 text-left flex items-center justify-between" onclick="this.parentElement.classList.toggle('active'); this.nextElementSibling.classList.toggle('hidden')">
<span className="text-base font-medium text-white font-sans">
                Можно ли использовать реальных людей в видео?
              </span>
<svg className="w-5 h-5 text-white/60 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-5">
<p className="text-sm text-white/50 font-sans">
                Да, мы работаем в технике AI Rotoscoping и Face Swap. Мы можем отснять вашего актера/спикера и стилизовать его с помощью нейросетей, или интегрировать цифрового аватара в реальную съемку.
              </p>
</div>
</div>
<div className="overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<button className="w-full px-6 py-5 text-left flex items-center justify-between" onclick="this.parentElement.classList.toggle('active'); this.nextElementSibling.classList.toggle('hidden')">
<span className="text-base font-medium text-white font-sans">
                Какие сроки производства ролика?
              </span>
<svg className="w-5 h-5 text-white/60 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-6 pb-5">
<p className="text-sm text-white/50 font-sans">
                В среднем производство занимает от 5 до 14 дней в зависимости от сложности. Простые креативы для соцсетей мы можем отдавать за 48-72 часа.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-black">
<div className="mx-auto max-w-4xl px-6">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 p-12 text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl tracking-tight text-white font-instrument-serif font-normal">
              Готовы трансформировать ваш бренд?
            </h2>
<p className="mt-4 text-lg text-white/60 font-sans max-w-2xl mx-auto">
              Давайте обсудим вашу идею и найдем лучшее визуальное решение. Заполните бриф, и мы свяжемся с вами.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition font-sans" href="#">
                Заполнить бриф
                <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/20 px-8 py-3 text-sm font-medium text-white hover:bg-white/5 transition font-sans" href="#">
                Написать в Telegram
              </a>
</div>
</div>
</div>
</div>
</section>


<footer className="relative bg-black border-t border-white/10 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="block text-xl font-bold tracking-tighter text-white font-sans mb-4" href="#">
              044.studio
            </a>
<p className="text-sm text-white/50 font-sans">
              Студия AI видеопродакшна полного цикла. Создаем будущее визуального контента уже сегодня.
            </p>
<div className="flex gap-3 mt-6">

<a className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="lucide lucide-send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-4 font-sans">
              Студия
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  О нас
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Портфолио
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Вакансии
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-4 font-sans">
              Услуги
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Коммерческая реклама
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Музыкальные клипы
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Контент для соцсетей
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-4 font-sans">
              Контакты
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  hello@044.studio
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">
                  Telegram Bot
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-white/40 font-sans">
            © 2024 044.studio. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-sm text-white/40 hover:text-white transition font-sans" href="#">
              Privacy Policy
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
