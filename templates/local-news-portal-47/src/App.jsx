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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed bottom-4 right-4 z-[100] bg-slate-900 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-sm hidden md:flex">
<iconify-icon icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="flex flex-col">
<span className="font-medium">Prototyp Responsywny</span>
<span className="text-slate-400">Zmień szerokość okna (375px / 768px / 1440px), aby zobaczyć adaptację siatki.</span>
</div>
</div>

<div className="bg-red-600 text-white text-xs font-medium px-4 py-2 flex items-center justify-center gap-3 tracking-wide z-50 relative">
<span className="animate-pulse w-2 h-2 bg-white rounded-full shrink-0"></span>
<span className="truncate">PILNE: Poważny wypadek na A4 w okolicach Dębicy. Trasa w kierunku Rzeszowa zablokowana.</span>
</div>
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-4">
<button className="lg:hidden text-slate-600 hover:text-slate-900 p-1 -ml-1 flex items-center justify-center rounded-lg transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<a className="text-lg md:text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
          PULSWISŁOKI
        </a>
</div>

<div className="hidden lg:flex items-center gap-8">

<div className="relative group cursor-pointer flex items-center gap-2 text-sm text-slate-600 py-4">
<iconify-icon icon="solar:cloud-sun-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium">18°C</span>
<span className="w-2 h-2 bg-emerald-500 rounded-full" title="Jakość powietrza: Dobra"></span>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Jakość powietrza</span>
<span className="text-emerald-500 font-medium">Bardzo dobra</span>
</div>
<div className="h-px bg-slate-100 w-full"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Wiatr</span>
<span className="text-slate-900 font-medium">12 km/h</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:video-library-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></a>
</div>
</div>

<div className="flex items-center gap-3 md:gap-5">
<button className="text-slate-600 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:minimalistic-magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>

<div className="relative group">
<button className="bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="hidden sm:inline">Zgłoś Temat</span>
<span className="inline sm:hidden">Zgłoś</span>
</button>

<div className="absolute top-full right-0 w-56 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 z-50">
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-slate-700" href="#">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
              Napisz na WhatsApp
            </a>
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-slate-700" href="#">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
              Messenger Redakcji
            </a>
<div className="h-px bg-slate-100 my-1 mx-2"></div>
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-slate-700" href="#">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
              Wypełnij formularz
            </a>
</div>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-200 sticky top-[64px] md:top-[64px] z-40">
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
<div className="flex items-center gap-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-3">
<button className="snap-start shrink-0 bg-slate-900 text-white text-xs font-medium px-5 py-2 rounded-full transition-colors">Wszystkie</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Dębica</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Brzostek</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Czarna</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Jodłowa</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Pilzno</button>
<button className="snap-start shrink-0 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-medium px-5 py-2 rounded-full transition-all">Żyraków</button>
</div>
</div>
</div>
<main className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 mb-12 lg:mb-16">

<a className="group relative block rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/9] lg:col-span-8 wireframe-img bg-slate-200 shadow-sm hover:shadow-md transition-shadow" href="#">

<div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>

<div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex gap-2 z-10">
<span className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide">Dębica</span>
<span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide shadow-sm flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 15 min temu
          </span>
</div>

<div className="absolute bottom-0 left-0 p-5 lg:p-8 w-full z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] mb-3">Rewolucja w lokalnej strefie ekonomicznej. Powstanie 500 nowych miejsc pracy</h1>
<p className="text-slate-200 text-sm md:text-base hidden sm:block line-clamp-2 w-5/6 font-light">Inwestor ze Szwecji oficjalnie potwierdza budowę nowoczesnej fabryki komponentów elektronicznych. Rekrutacja rusza już w przyszłym miesiącu.</p>
</div>
</a>

<div className="flex flex-col gap-4 md:gap-6 lg:col-span-4">

<a className="group relative block rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1 wireframe-img bg-slate-200 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2 z-10">
<span className="bg-amber-400 text-slate-900 text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide">Czarna</span>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
<h2 className="text-white text-lg md:text-xl font-semibold tracking-tight leading-snug">Nowe boisko przy szkole podstawowej oddane do użytku</h2>
<div className="flex items-center gap-2 mt-2 text-slate-300 text-xs font-light">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 2 godz. temu
            </div>
</div>
</a>

<a className="group relative block rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1 wireframe-img bg-slate-200 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2 z-10">
<span className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide">Pilzno</span>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
<h2 className="text-white text-lg md:text-xl font-semibold tracking-tight leading-snug">Utrudnienia na DK73. Trwa remont kluczowego skrzyżowania</h2>
<div className="flex items-center gap-2 mt-2 text-slate-300 text-xs font-light">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 4 godz. temu
            </div>
</div>
</a>
</div>
</section>

<section className="mb-12 lg:mb-16">
<div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 lg:p-10 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<iconify-icon icon="solar:siren-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">Na Sygnale</h2>
<p className="text-slate-400 text-xs md:text-sm mt-0.5">Wypadki, interwencje policji i straży</p>
</div>
</div>
<a className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1 transition-colors" href="#">
            Zobacz wszystkie <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">

<a className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-2xl p-4 transition-all duration-300" href="#">
<div className="flex gap-4 items-start">
<div className="w-20 h-20 shrink-0 rounded-xl bg-slate-700 overflow-hidden relative">
<img alt="Wypadek" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<span className="text-red-400 text-[10px] uppercase tracking-wider font-semibold">Wypadek</span>
<h3 className="text-slate-100 text-sm font-medium leading-snug group-hover:text-white transition-colors">Kolizja trzech aut na obwodnicy Dębicy. Są ranni.</h3>
</div>
</div>
</a>

<a className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-2xl p-4 transition-all duration-300" href="#">
<div className="flex gap-4 items-start">
<div className="w-20 h-20 shrink-0 rounded-xl bg-slate-700 overflow-hidden relative">
<img alt="Straż" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-2">
<span className="text-amber-500 text-[10px] uppercase tracking-wider font-semibold">Pożar</span>
<h3 className="text-slate-100 text-sm font-medium leading-snug group-hover:text-white transition-colors">Płonie stodoła w Jodłowej. Pięć zastępów w akcji.</h3>
</div>
</div>
</a>

<a className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-2xl p-4 transition-all duration-300" href="#">
<div className="flex gap-4 items-start">
<div className="w-20 h-20 shrink-0 rounded-xl bg-slate-700 overflow-hidden relative">
<img alt="Policja" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col gap-2">
<span className="text-blue-400 text-[10px] uppercase tracking-wider font-semibold">Policja</span>
<h3 className="text-slate-100 text-sm font-medium leading-snug group-hover:text-white transition-colors">Nietrzeźwy kierowca zatrzymany w centrum Pilzna.</h3>
</div>
</div>
</a>

<a className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-2xl p-4 transition-all duration-300" href="#">
<div className="flex gap-4 items-start">
<div className="w-20 h-20 shrink-0 rounded-xl bg-slate-700 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-amber-400" icon="solar:cloud-water-linear" width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<span className="text-amber-400 text-[10px] uppercase tracking-wider font-semibold">Ostrzeżenie Meteo</span>
<h3 className="text-slate-100 text-sm font-medium leading-snug group-hover:text-white transition-colors">Nadchodzą gwałtowne burze. Alert dla całego powiatu.</h3>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="mb-12 lg:mb-16">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
<iconify-icon className="text-red-600" icon="solar:play-circle-linear" width="28"></iconify-icon>
          PulsWisloki.tv
        </h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 md:gap-6 pb-4">

<a className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] group relative block" href="#">
<div className="aspect-video rounded-3xl overflow-hidden bg-slate-200 relative mb-4">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>

<div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">04:15</div>
</div>
<h3 className="text-slate-900 font-medium leading-snug group-hover:text-blue-600 transition-colors">Relacja z Dni Dębicy 2024. Zobacz najciekawsze momenty i wywiady</h3>
</a>

<a className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] group relative block" href="#">
<div className="aspect-video rounded-3xl overflow-hidden bg-slate-200 relative mb-4">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">12:30</div>
</div>
<h3 className="text-slate-900 font-medium leading-snug group-hover:text-blue-600 transition-colors">Sesja Rady Miejskiej. Debata o nowym budżecie na inwestycje drogowe</h3>
</a>

<a className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] group relative block" href="#">
<div className="aspect-video rounded-3xl overflow-hidden bg-slate-200 relative mb-4">
<img alt="Video cover" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">02:45</div>
</div>
<h3 className="text-slate-900 font-medium leading-snug group-hover:text-blue-600 transition-colors">Skrót meczu: Igloopol Dębica vs Wisłoka Dębica. Gorące derby regionu</h3>
</a>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="flex-1 max-w-4xl">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6 lg:mb-8">Najnowsze Wiadomości</h2>
<div className="flex flex-col gap-6 lg:gap-8">

<article className="group flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
<a className="w-full sm:w-48 lg:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden relative bg-slate-200" href="#">
<img alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-amber-400 text-slate-900 text-[10px] font-medium px-2 py-1 rounded-md uppercase tracking-wide z-10">Brzostek</span>
</a>
<div className="flex flex-col flex-1 py-1">
<div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Dzisiaj, 09:45</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-slate-500 font-medium">Społeczeństwo</span>
</div>
<a href="#">
<h3 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-blue-600 leading-snug mb-2 transition-colors">Zabytkowy rynek w Brzostku przejdzie metamorfozę. Koniec z "betonozą"</h3>
<p className="text-slate-500 text-sm line-clamp-2 md:line-clamp-3 font-light">Mieszkańcy zadecydowali w konsultacjach społecznych. W miejsce rozległych płyt pojawią się nowe drzewa, krzewy oraz nowoczesna mała architektura.</p>
</a>
</div>
</article>

<article className="group flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
<a className="w-full sm:w-48 lg:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden relative bg-slate-200" href="#">
<img alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-medium px-2 py-1 rounded-md uppercase tracking-wide z-10">Dębica</span>
</a>
<div className="flex flex-col flex-1 py-1">
<div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Wczoraj, 18:20</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-slate-500 font-medium">Edukacja</span>
</div>
<a href="#">
<h3 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-blue-600 leading-snug mb-2 transition-colors">Znamy wyniki matur w powiecie. Która szkoła poradziła sobie najlepiej?</h3>
<p className="text-slate-500 text-sm line-clamp-2 md:line-clamp-3 font-light">Sprawdziliśmy statystyki z OKE. Absolwenci dębickich liceów po raz kolejny uplasowali się w czołówce województwa podkarpackiego.</p>
</a>
</div>
</article>

<article className="relative flex flex-col sm:flex-row gap-4 lg:gap-6 items-start bg-slate-50 p-4 lg:p-6 rounded-3xl border border-slate-100 hover:border-amber-200 transition-colors">
<div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-100 text-amber-700 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200 shadow-sm">
              Reklama / Sponsorowane
            </div>
<a className="w-full sm:w-48 lg:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden relative bg-slate-200" href="#">
<img alt="Ad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</a>
<div className="flex flex-col flex-1 py-1">
<a href="#">
<h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-snug mb-2">Nowe osiedle "Słoneczna Polana" w Dębicy. Ostatnie mieszkania w ofercie!</h3>
<p className="text-slate-500 text-sm line-clamp-2 font-light mb-4">Wysoki standard wykończenia, bliskość natury i centrum miasta. Sprawdź warunki promocyjnego kredytu 0% dla młodych.</p>
<span className="inline-flex items-center justify-center text-sm font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg transition-colors">
                  Dowiedz się więcej <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</article>

<article className="group flex flex-col sm:flex-row gap-4 lg:gap-6 items-start">
<a className="w-full sm:w-48 lg:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 rounded-2xl overflow-hidden relative bg-slate-200" href="#">
<img alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-medium px-2 py-1 rounded-md uppercase tracking-wide z-10">Żyraków</span>
</a>
<div className="flex flex-col flex-1 py-1">
<div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Wczoraj, 14:10</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-slate-500 font-medium">Kultura</span>
</div>
<a href="#">
<h3 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-blue-600 leading-snug mb-2 transition-colors">Festiwal Smaków Regionalnych przyciągnął tłumy gości</h3>
<p className="text-slate-500 text-sm line-clamp-2 md:line-clamp-3 font-light">Proziaki, tradycyjne wędliny i domowe wypieki królowały na stoiskach Kół Gospodyń Wiejskich z całego powiatu.</p>
</a>
</div>
</article>

<div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-start mt-6 pt-6 border-t border-slate-100 relative group cursor-wait" id="infinite-scroll-trigger">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-500 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              Punkt ładowania (Scroll Depth Trigger)
            </div>
<div className="w-full sm:w-48 lg:w-64 aspect-[16/10] sm:aspect-[4/3] shrink-0 rounded-2xl bg-slate-200 animate-pulse"></div>
<div className="flex flex-col flex-1 py-1 w-full gap-3 mt-2">
<div className="h-3 w-32 bg-slate-200 rounded-full animate-pulse"></div>
<div className="h-5 w-full bg-slate-200 rounded-md animate-pulse"></div>
<div className="h-5 w-4/5 bg-slate-200 rounded-md animate-pulse"></div>
<div className="h-3 w-full bg-slate-100 rounded-md animate-pulse mt-2"></div>
<div className="h-3 w-2/3 bg-slate-100 rounded-md animate-pulse"></div>
</div>
</div>
<div className="flex justify-center mt-2">
<div className="w-6 h-6 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
</div>
</div>
</div>

<aside className="hidden lg:flex w-80 shrink-0 flex-col gap-8">

<div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:monuments-linear" width="20"></iconify-icon>
              Nekrologi
            </h3>
<a className="text-xs text-blue-600 hover:text-blue-800 font-medium" href="#">Zobacz wszystkie</a>
</div>

<div className="flex flex-wrap gap-2 mb-4">
<button className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] px-2 py-1 rounded font-medium transition-colors">Dębica</button>
<button className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] px-2 py-1 rounded font-medium transition-colors">Pilzno</button>
<button className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] px-2 py-1 rounded font-medium transition-colors">Gmina Dębica</button>
</div>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Śp. Jan Kowalski</span>
<span className="text-xs text-slate-500 font-light">Lat 78 • Pogrzeb: 12.10, Dębica</span>
</div>
</li>
<li className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Śp. Anna Nowak</span>
<span className="text-xs text-slate-500 font-light">Lat 65 • Pogrzeb: 11.10, Pilzno</span>
</div>
</li>
</ul>
</div>

<div className="bg-blue-600 rounded-3xl p-6 shadow-sm text-white relative overflow-hidden">
<iconify-icon className="absolute -bottom-6 -right-6 text-white/10" icon="solar:calendar-date-linear" width="120"></iconify-icon>
<h3 className="text-lg font-semibold mb-5 relative z-10 flex items-center justify-between">
            Kalendarz Imprez
            <iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</h3>
<ul className="flex flex-col gap-4 relative z-10">
<li className="flex gap-4">
<div className="flex flex-col items-center bg-white/20 rounded-xl p-2 min-w-[3rem]">
<span className="text-xs font-light uppercase">Paź</span>
<span className="text-lg font-bold">14</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-sm font-medium">Koncert Muzyki Dawnej</span>
<span className="text-xs text-blue-200">DK Śnieżka, 18:00</span>
</div>
</li>
<li className="flex gap-4">
<div className="flex flex-col items-center bg-white/20 rounded-xl p-2 min-w-[3rem]">
<span className="text-xs font-light uppercase">Paź</span>
<span className="text-lg font-bold">16</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-sm font-medium">Kino Plenerowe</span>
<span className="text-xs text-blue-200">Rynek w Pilźnie, 20:00</span>
</div>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg font-semibold text-slate-900">Ogłoszenia</h3>
<a className="text-xs text-blue-600 hover:text-blue-800 font-medium" href="#">Dodaj +</a>
</div>
<ul className="flex flex-col gap-4">
<li className="group cursor-pointer">
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Praca</div>
<div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Zatrudnię kierowcę kat. C+E na trasy międzynarodowe.</div>
<div className="text-xs text-slate-500 mt-1">Dębica • 2 godz. temu</div>
</li>
<li className="group cursor-pointer">
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Nieruchomości</div>
<div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Sprzedam działkę budowlaną 15 arów z mediami.</div>
<div className="text-xs text-slate-500 mt-1">Czarna • Wczoraj</div>
</li>
<li className="group cursor-pointer">
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">Motoryzacja</div>
<div className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Opel Astra 1.6 Benzyna, 2015r, I właściciel, salon PL.</div>
<div className="text-xs text-slate-500 mt-1">Żyraków • 2 dni temu</div>
</li>
</ul>
</div>
</aside>
</div>
</main>

<footer className="bg-slate-900 text-slate-300 mt-12 lg:mt-24 py-12 lg:py-16 border-t-[6px] border-red-600">
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div className="flex flex-col gap-4 lg:col-span-1">
<a className="text-2xl font-semibold tracking-tighter text-white" href="#">PULSWISŁOKI</a>
<p className="text-sm text-slate-400 font-light leading-relaxed">
            Twój lokalny portal informacyjny dla ziemi dębickiej. Najszybsze informacje, wypadki, relacje z gmin: Dębica, Brzostek, Czarna, Jodłowa, Pilzno, Żyraków.
          </p>

<div className="flex gap-4 mt-2">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><iconify-icon icon="solar:play-stream-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" href="#"><iconify-icon icon="solar:video-library-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Na skróty</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Najnowsze</a>
<a className="text-sm hover:text-white transition-colors" href="#">Na Sygnale</a>
<a className="text-sm hover:text-white transition-colors" href="#">Nekrologi</a>
<a className="text-sm hover:text-white transition-colors" href="#">Ogłoszenia</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Portal</h4>
<a className="text-sm hover:text-white transition-colors" href="#">O Redakcji</a>
<a className="text-sm hover:text-white transition-colors" href="#">Reklama i Patronaty</a>
<a className="text-sm hover:text-white transition-colors" href="#">Regulamin</a>
<a className="text-sm hover:text-white transition-colors" href="#">Polityka Prywatności</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Kontakt</h4>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 text-slate-500 mt-0.5" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>ul. Rynek 12, <br/>39-200 Dębica</span>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="shrink-0 text-slate-500" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="hover:text-white" href="tel:+48123456789">+48 123 456 789</a>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="shrink-0 text-slate-500" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-white" href="mailto:redakcja@pulswisloki.pl">redakcja@pulswisloki.pl</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
<p>© 2024 PulsWisloki.pl. Wszelkie prawa zastrzeżone.</p>
<p>Zaprojektowano z myślą o regionie dębickim.</p>
</div>
</div>
</footer>

<section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 bg-slate-50 border-t-2 border-dashed border-slate-300">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Diagram Przepływu Użytkownika (UX Flows)</h2>
<p className="text-slate-500 text-sm">Specyfikacja kluczowych ścieżek interakcji zaprezentowana w formie flow-chart.</p>
</div>
<div className="flex flex-col gap-12">

<div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">1</span>
          Czytelnik powracający: Odkrywanie treści lokalnych
        </h3>
<div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
<div className="bg-slate-100 px-4 py-3 rounded-xl">Wejście na stronę (Homepage)</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-white border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-xl shadow-sm">Kliknięcie w filtr "Gmina Dębica"</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-slate-100 px-4 py-3 rounded-xl">Przeglądanie Feed'u z Gminy</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-slate-800 text-white px-4 py-3 rounded-xl">Czytanie artykułu</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-slate-100 px-4 py-3 rounded-xl border border-slate-200">Powrót do strony głównej (Scroll)</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-amber-100 text-amber-700 px-4 py-3 rounded-xl border border-amber-200 flex items-center gap-2">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear" width="18"></iconify-icon> Infinite Scroll aktywuje się
          </div>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">2</span>
          Zgłoszenie tematu przez interwencję
        </h3>
<div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
<div className="bg-red-600 text-white px-4 py-3 rounded-xl shadow-md">Kliknięcie "Zgłoś Temat" w Headerze</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-slate-100 px-4 py-3 rounded-xl border border-slate-200">Pojawia się dropdown z wyborem kanału</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="flex flex-col gap-2 relative border-l-2 border-slate-200 pl-4 py-2 ml-2">
<div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200 text-xs">A) Przekierowanie do WhatsApp</div>
<div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-200 text-xs">B) Otwarcie Messengera</div>
<div className="bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 text-xs">C) Otwarcie modalu "Formularz na stronie"</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="bg-slate-800 text-white px-4 py-3 rounded-xl">Potwierdzenie wysłania</div>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Specyfikacja interakcji &amp; Adnotacje</h3>
<table className="w-full text-left text-sm text-slate-600 border-collapse min-w-[600px]">
<thead>
<tr className="border-b-2 border-slate-100 text-slate-900">
<th className="py-3 font-semibold w-1/4">Element UI</th>
<th className="py-3 font-semibold w-1/4">Trigger / Zdarzenie</th>
<th className="py-3 font-semibold">Zachowanie / Animacja (Tailwind classes)</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-100">
<td className="py-4 font-medium text-slate-900">Pasek "PILNE"</td>
<td className="py-4">Scroll down &gt; 100px</td>
<td className="py-4">Slide-up/zanika podczas przewijania. Powraca po powrocie na top.</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 font-medium text-slate-900">Sticky Header</td>
<td className="py-4">Scroll down</td>
<td className="py-4">Pozostaje przypięty, stosuje się <code className="bg-slate-100 px-1 rounded text-xs">backdrop-blur-xl</code> i lekki cień. Logo i padding mogą lekko maleć (shrink).</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 font-medium text-slate-900">Karty artykułów</td>
<td className="py-4">Hover myszą (Desktop)</td>
<td className="py-4">Zdjęcie powiększa się <code className="bg-slate-100 px-1 rounded text-xs">scale-105 duration-500</code>. Tytuł zmienia kolor na primary (Niebieski/Czerwony).</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 font-medium text-slate-900">Karuzela Wideo / Gminy</td>
<td className="py-4">Touch (Swipe) na Mobile</td>
<td className="py-4">Scroll poziomy z wyrównywaniem: <code className="bg-slate-100 px-1 rounded text-xs">overflow-x-auto snap-x snap-mandatory hide-scrollbar</code>.</td>
</tr>
<tr>
<td className="py-4 font-medium text-slate-900">Infinite Scroll</td>
<td className="py-4">Scroll dociera do skeleton loadera</td>
<td className="py-4">Pokazuje animację <code className="bg-slate-100 px-1 rounded text-xs">animate-pulse</code> oraz <code className="bg-slate-100 px-1 rounded text-xs">animate-spin</code> dla ikonki, następnie ładuje kolejne węzły HTML (karty).</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

    </>
  );
}
