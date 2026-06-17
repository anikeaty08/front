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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
emerald: { 450: '#10b981' },
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
}
}
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-slate-950">


<div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay animate-[gentle-pan_20s_ease-in-out_infinite]">
<img alt="Green Wind Turbine" className="w-full h-full object-cover filter brightness-75 contrast-125 grayscale-[30%]" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-1 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
<div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/50"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px] animate-float-delayed"></div>
<div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-teal-900/10 rounded-full blur-[100px] animate-float"></div>
</div>

<div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
<svg className="absolute w-full h-full" height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<defs>
<lineargradient id="leafGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#064e3b', stopOpacity: '1'}}></stop> 
<stop offset="100%" style={{stopColor: '#022c22', stopOpacity: '1'}}></stop> 
</lineargradient>
<filter height="140%" id="blurFilter" width="140%" x="-20%" y="-20%">
<fegaussianblur stddeviation="1.5"></fegaussianblur>
</filter>
</defs>
</svg>

<div className="absolute -top-12 -right-12 w-64 h-64 md:w-96 md:h-96 opacity-60 filter blur-[2px] animate-[leaf-sway-1_8s_ease-in-out_infinite]">
<svg className="w-full h-full drop-shadow-2xl text-emerald-900" fill="url(#leafGradient)" viewbox="0 0 24 24">
<path d="M12 2C7 2 3 7 3 12C3 17 7 22 12 22C17 22 21 17 21 12C21 7 17 2 12 2ZM12 20C8 20 5 16 5 12C5 8 8 5 12 5C16 5 19 8 19 12C19 16 16 20 12 20Z" stroke="none"></path>

<path d="M17.5,6c-1.7,0-3.2,0.9-4.2,2.3C12.9,9,12.5,9.7,12,9.7s-0.9-0.7-1.3-1.4C9.7,6.9,8.2,6,6.5,6C3.5,6,1,8.5,1,11.5c0,3.6,3.4,7.6,9.5,10.1c0.5,0.2,1,0.3,1.5,0.3s1-0.1,1.5-0.3c6.1-2.5,9.5-6.5,9.5-10.1C23,8.5,20.5,6,17.5,6z" fill="url(#leafGradient)" transform="scale(1.2)"></path>
</svg>
</div>

<div className="absolute bottom-0 -left-10 w-48 h-48 md:w-80 md:h-80 opacity-80 animate-[leaf-sway-2_10s_ease-in-out_infinite]">
<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 100 100">
<path d="M50 100 Q 20 50 50 0 Q 80 50 50 100 Z" fill="url(#leafGradient)"></path>
<path d="M50 100 Q 50 50 50 0" fill="none" opacity="0.5" stroke="#047857" strokeWidth="0.5"></path>
</svg>
</div>

<div className="absolute -top-4 left-20 w-32 h-32 opacity-30 filter blur-[1px] animate-[sway_12s_ease-in-out_infinite]">
<svg className="w-full h-full text-emerald-800" fill="none" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24">
<path d="M2,12 Q12,2 22,12 Q12,22 2,12 Z" fill="url(#leafGradient)"></path>
</svg>
</div>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 px-6">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg w-full h-full flex items-center justify-center text-white shadow-inner border border-white/10">
<i data-lucide="leaf" height="16" strokeWidth="2" width="16"></i>
</div>
</div>
<span className="self-center text-lg font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">ALGAE</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="relative inline-flex group" href="#contact">
<div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
<button className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-200 bg-emerald-600 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-emerald-500 border border-white/10 overflow-hidden">
<span className="relative z-10">Инвестиция салу</span>
<div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-emerald-500/50"></div>
</button>
</a>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
<li><a className="block py-2 px-3 text-slate-300 hover:text-emerald-400 transition-colors text-sm" href="#problem">Мәселе</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-emerald-400 transition-colors text-sm" href="#solution">Шешім</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-emerald-400 transition-colors text-sm" href="#tech">Технология</a></li>
<li><a className="block py-2 px-3 text-slate-300 hover:text-emerald-400 transition-colors text-sm" href="#investors">Бизнес</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden perspective-1000">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
<div className="absolute left-[10%] bottom-0 w-1 h-1 bg-emerald-400 rounded-full animate-[bubble-rise_4s_infinite]"></div>
<div className="absolute left-[20%] bottom-0 w-2 h-2 bg-emerald-500/50 rounded-full animate-[bubble-rise_7s_infinite_1s]"></div>
<div className="absolute right-[15%] bottom-0 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-[bubble-rise_6s_infinite_2s]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

<div className="space-y-8 animate-[fade-in-up_1s_ease-out]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    MVP Дайын
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 text-glow">
                    Табиғи ауа <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">интеллектісі</span>
</h1>
<p className="text-lg text-slate-300 max-w-xl font-light leading-relaxed drop-shadow-md">
                    ALGAE — қалалық кеңістікке арналған балдырлар негізіндегі ақылды биоаквариум. Бұл жай ғана тазартқыш емес, бұл — интерьеріңіздегі тірі өкпе.
                </p>
<div className="flex flex-wrap gap-4">
<a className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-medium transition-transform active:scale-95 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#contact">
<span className="relative flex items-center gap-2">
                            Коммерциялық ұсыныс алу
                            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</a>
<a className="px-8 py-4 glass-panel text-white rounded-xl font-medium transition-colors hover:bg-white/10 flex items-center gap-2" href="#solution">
<i className="w-4 h-4 text-emerald-400" data-lucide="play-circle"></i>
                        Қалай жұмыс істейді?
                    </a>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end animate-float">

<div className="absolute w-[300px] h-[400px] bg-emerald-500/10 rounded-full blur-[60px] animate-pulse"></div>

<div className="relative w-[280px] h-[450px] rounded-[40px] glass-panel border border-white/20 overflow-hidden shadow-2xl preserve-3d transform transition-transform hover:scale-[1.02] duration-500">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/30 to-emerald-800/80"></div>

<div className="absolute inset-0">
<div className="absolute bottom-0 left-10 w-2 h-2 rounded-full bg-slate-400/50 animate-[bubble-rise_4s_linear_infinite]"></div> 
<div className="absolute bottom-10 left-20 w-3 h-3 rounded-full bg-emerald-400/80 animate-[bubble-rise_5s_linear_infinite] delay-75"></div> 
<div className="absolute bottom-5 right-12 w-1.5 h-1.5 rounded-full bg-emerald-300/80 animate-[bubble-rise_3s_linear_infinite] delay-150"></div>
<div className="absolute bottom-0 right-24 w-2 h-2 rounded-full bg-slate-500/50 animate-[bubble-rise_6s_linear_infinite] delay-300"></div>
</div>

<div className="absolute inset-0 flex justify-between px-8 opacity-20">
<div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>

<div className="absolute bottom-8 left-0 right-0 px-6 text-center">
<div className="inline-flex flex-col items-center bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
<span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Ауа сапасы</span>
<span className="text-2xl font-bold text-emerald-400 font-mono">98%</span>
<div className="w-full h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-emerald-500 w-[98%] animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-20 -left-10 glass-panel p-4 rounded-xl animate-float-delayed z-20 hidden md:block">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30">
<span className="text-xs font-bold">CO₂</span>
</div>
<div className="text-xs">
<div className="text-slate-400">Сіңіру</div>
<div className="text-white font-mono">-1200 ppm</div>
</div>
</div>
</div>
<div className="absolute bottom-32 -right-4 glass-panel p-4 rounded-xl animate-float z-20 hidden md:block">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
<span className="text-xs font-bold">O₂</span>
</div>
<div className="text-xs">
<div className="text-slate-400">Бөлу</div>
<div className="text-white font-mono">Max</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-slate-950/80 backdrop-blur-md border-t border-white/5 z-20" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative rounded-2xl bg-slate-950 border border-white/10 p-2 overflow-hidden aspect-[4/3]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445510861639-565a15318811?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-end justify-between border-b border-white/10 pb-4 mb-4">
<div>
<p className="text-sm text-slate-400">Қалалық орта</p>
<p className="text-xl font-semibold text-white">Ластану деңгейі</p>
</div>
<span className="text-red-400 font-mono text-2xl">AQI 156</span>
</div>
<div className="space-y-2">
<div className="flex items-center text-xs text-slate-400 gap-2">
<i className="w-4 h-4 text-yellow-500" data-lucide="alert-triangle"></i>
                                    Жоғары CO₂ концентрациясы
                                </div>
<div className="flex items-center text-xs text-slate-400 gap-2">
<i className="w-4 h-4 text-yellow-500" data-lucide="battery-warning"></i>
                                    Оттегі жетіспеушілігі
                                </div>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-emerald-400 font-medium tracking-wide text-sm uppercase mb-4">Мәселе</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">Қала ауасы біз ойлағаннан да <span className="text-red-400">қауіпті</span></h3>
<p className="text-slate-400 text-lg font-light mb-8">
                        Заманауи ғимараттардағы ауа айналымының нашарлығы және сыртқы түтін адамдардың өнімділігін 20%-ға төмендетеді. Дәстүрлі сүзгілер қымбат, ал табиғи желдету әрдайым мүмкін емес.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-3 h-3 text-red-400" data-lucide="x"></i>
</div>
<span className="text-slate-300 text-sm">Бас ауруы және шаршау (CO₂ &gt; 1000 ppm)</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-3 h-3 text-red-400" data-lucide="x"></i>
</div>
<span className="text-slate-300 text-sm">Аллергия және тыныс алу жолдарының аурулары</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-20" id="solution">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-emerald-400 font-medium tracking-wide text-sm uppercase mb-4">Біздің шешім</h2>
<h3 className="text-3xl md:text-5xl font-semibold text-white mb-6">Табиғат технологиямен біріккенде</h3>
<p className="text-slate-400">
                    ALGAE — микробалдырлардың фотосинтез күшін пайдаланып, 1 биоаквариум арқылы 20 ағаштың жұмысын атқарады.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-emerald-400 w-6 h-6" data-lucide="leaf"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Табиғи фотосинтез</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                        Химиялық сүзгілерсіз жұмыс істейді. Балдырлар CO₂-ні тұтынып, таза, ылғалдандырылған оттегі бөледі.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-emerald-400 w-6 h-6" data-lucide="cpu"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">IoT Басқару</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                        Мобильді қосымша арқылы бақылау. Автоматты жарықтандыру және қоректендіру жүйесі.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-emerald-400 w-6 h-6" data-lucide="zap"></i>
</div>
<h4 className="text-xl font-semibold text-white mb-3">Энергия тиімділігі</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                        Кәдімгі ауа тазартқыштардан 10 есе аз қуат тұтынады. Ай сайынғы шығын минималды.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/90 border-y border-white/5 z-20 relative backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">Қолдану аясы</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-white/5" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Office" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white font-medium">Кеңселер</p>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Өнімділікті арттыру</p>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-white/5" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="School" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white font-medium">Оқу орындары</p>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Зейін қоюды жақсарту</p>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-white/5" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Hotel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white font-medium">Қонақ үйлер</p>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Премиум атмосфера</p>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-white/5" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white font-medium">Тұрғын үйлер</p>
<p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Отбасы денсаулығы</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 relative z-20" id="investors">
<div className="absolute inset-0 bg-emerald-900/5 skew-y-3 transform origin-top-left pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-emerald-400 font-medium tracking-wide text-sm uppercase mb-4">Инвесторларға</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white">Қаржылық модель</h3>
</div>
<div className="flex items-center gap-2 text-emerald-400 bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-500/20 shadow-lg shadow-emerald-900/20">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="font-mono text-sm">ROI: 55%</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl border-t-4 border-t-emerald-500">
<p className="text-slate-400 text-sm mb-1">Бастапқы инвестиция</p>
<p className="text-2xl font-bold text-white tracking-tight">20-30 млн ₸</p>
<div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[30%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl border-t-4 border-t-teal-500">
<p className="text-slate-400 text-sm mb-1">Масштабтау</p>
<p className="text-2xl font-bold text-white tracking-tight">50-70 млн ₸</p>
<div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 w-[70%] shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl border-t-4 border-t-indigo-500">
<p className="text-slate-400 text-sm mb-1">1 құрылғының құны</p>
<p className="text-2xl font-bold text-white tracking-tight">120 мың ₸</p>
<p className="text-xs text-slate-500 mt-2">Маржа &gt; 50%</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-t-4 border-t-white">
<p className="text-slate-400 text-sm mb-1">Өтелу мерзімі</p>
<p className="text-2xl font-bold text-white tracking-tight">1 Жыл</p>
<p className="text-xs text-slate-500 mt-2">Жоғары сұраныс</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950/80 backdrop-blur-md border-t border-white/5 z-20 relative">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-2xl font-semibold text-white text-center mb-10">Жиі қойылатын сұрақтар</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-slate-200">Иіс шығара ма?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 text-sm">
                        Жоқ, жүйе герметикалық жабық. Сыртқа тек тазартылған оттегі шығады. Балдырлардың иісі сезілмейді.
                    </div>
</details>
<details className="group glass-panel rounded-xl open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-slate-200">Күтімі қаншалықты қиын?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 text-sm">
                        Күтімі өте жеңіл. 1-2 айда бір рет биомассаны жаңартып тұру қажет. Барлық процесс автоматтандырылған.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-20" id="contact">
<div className="absolute inset-0 bg-emerald-900/10 backdrop-blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="glass-panel-light md:bg-white/5 bg-slate-900 border-none md:border md:border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Болашаққа бізбен бірге қадам басыңыз</h2>
<p className="text-slate-400 mb-8">
                        ALGAE жобасына инвестиция салып, экологиялық таза болашақтың бір бөлігі болыңыз.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors font-medium gap-2 shadow-lg hover:shadow-green-500/20" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                            WhatsApp
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass-panel text-white hover:bg-white/10 transition-colors font-medium border border-white/20" href="tel:+77770000000">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i>
                            +7 (777) 000-00-00
                        </a>
</div>
</div>
<form className="w-full max-w-md space-y-4">
<div>
<input className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Аты-жөніңіз" type="text"/>
</div>
<div>
<input className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Телефон" type="tel"/>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-900/50 hover:shadow-emerald-900/70 hover:scale-[1.02] transition-all duration-300" type="submit">
                        Хабарласу
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 py-12 text-sm z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-500/20 rounded-md flex items-center justify-center text-emerald-500">
<i data-lucide="leaf" height="14" width="14"></i>
</div>
<span className="font-semibold text-slate-200">ALGAE</span>
</div>
<div className="text-slate-500">
                © 2023 ALGAE GreenTech. Барлық құқықтар қорғалған.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-emerald-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-emerald-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-emerald-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>


    </>
  );
}
