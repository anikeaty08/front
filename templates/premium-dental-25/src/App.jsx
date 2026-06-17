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
      

<main className="relative h-screen w-full flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Harmony Clinic Interior" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop" style={{filter: 'brightness(0.8) contrast(1.1)'}}/>

<div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
</div>

<header className="absolute top-0 left-0 right-0 z-50 w-full border-b border-white/5 backdrop-blur-[2px]">
<div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center">

<a className="group flex items-center gap-2 z-50" href="#">
<span className="font-serif-display text-2xl md:text-3xl tracking-[0.2em] uppercase text-white font-light group-hover:text-[#C49A6C] transition-colors duration-500">
                        Harmony
                    </span>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-light tracking-wide text-zinc-300 hover:text-white transition-colors duration-300" href="#">Услуги</a>
<a className="text-sm font-light tracking-wide text-zinc-300 hover:text-white transition-colors duration-300" href="#">Врачи</a>
<a className="text-sm font-light tracking-wide text-zinc-300 hover:text-white transition-colors duration-300" href="#">Технологии</a>
<a className="text-sm font-light tracking-wide text-zinc-300 hover:text-white transition-colors duration-300" href="#">Контакты</a>
</nav>

<button className="md:hidden text-white opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>

<div className="hidden md:block">
<a className="text-xs font-light tracking-widest uppercase border-b border-white/30 pb-1 hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-300" href="#">
                        +7 (495) 000-00-00
                    </a>
</div>
</div>
</header>

<div className="relative z-40 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-4xl">

<div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up">
<span className="w-12 h-[1px] bg-[#C49A6C]"></span>
<span className="text-[#C49A6C] uppercase tracking-[0.2em] text-xs font-medium">Premium Dental Care</span>
</div>

<h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-white tracking-tight mb-8 opacity-0 animate-fade-up delay-100 drop-shadow-lg">
<span className="block">Вернем вкус к жизни</span>
<span className="block italic text-zinc-200">и уверенность в улыбке.</span>
</h1>

<p className="font-light text-zinc-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-12 opacity-0 animate-fade-up delay-200 border-l border-white/10 pl-6">
                    Стоматология бизнес-класса. Спасаем безнадежные зубы и создаем эстетику, которую не отличить от природной.
                </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-fade-up delay-300">
<a className="gold-btn group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-white font-medium tracking-wide overflow-hidden text-sm md:text-base" href="#">
<span>Получить стратегию лечения</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="group inline-flex items-center gap-3 text-white px-6 py-4 rounded-full hover:bg-white/5 transition-all duration-300 text-sm md:text-base font-light" href="#">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="tracking-wide">Тур по клинике</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 z-40 w-full border-t border-white/5 bg-gradient-to-t from-black/90 to-transparent">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">

<div className="flex items-center gap-4 text-zinc-400">
<div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-zinc-500 to-transparent"></div>
<span className="text-xs uppercase tracking-widest font-light writing-mode-vertical">Scroll</span>
</div>

<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#C49A6C]" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-zinc-400 font-light">Гарантия качества</span>
<span className="text-sm text-zinc-200">Международные стандарты</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<iconify-icon className="text-[#C49A6C]" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-zinc-400 font-light">Прием без ожидания</span>
<span className="text-sm text-zinc-200">Персональный сервис</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
