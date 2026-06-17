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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">

<div className="relative w-11 h-11 flex items-center justify-center bg-[#1C1917] rounded-sm shadow-xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
<svg className="w-7 h-7 relative z-10" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<path className="fill-stone-400" d="M7 8H10V18H7z"></path>
<path className="fill-stone-400" d="M14 8H17V18H14z"></path>
<path className="fill-stone-300" d="M10 4H14V18H10z"></path>

<path className="fill-[#A18058] drop-shadow-sm" d="M2 15L12 9L22 15V18H2V15Z"></path>
<path d="M5 14L12 10L19 14" fill="none" stroke="#FAFAF9" stroke-opacity="0.3" strokeWidth="0.5"></path>
</svg>
</div>
<div className="flex flex-col justify-center">
<span className="text-xl font-bold tracking-tight text-stone-900 leading-none serif">CENTRUM</span>
<div className="h-[1px] w-full bg-[#A18058]/50 my-0.5"></div>
<span className="text-[8px] uppercase tracking-[0.25em] text-[#A18058] font-bold leading-tight">Kancelaria Nieruchomości</span>
</div>
</div>

<div className="hidden md:flex items-center gap-1 bg-stone-100/50 p-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm">
<a className="px-6 py-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs font-medium text-stone-900 transition-all border border-stone-100" href="#">Sprzedaż</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Wynajem</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Działki</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Inwestycje</a>
</div>

<div className="flex items-center gap-8">
<a className="hidden md:block text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#">Zaloguj</a>
<a className="group bg-[#1C1917] hover:bg-[#292524] text-[#FAFAF9] text-xs font-medium py-3 px-6 rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-3" href="#">
<span>Zgłoś ofertę</span>
<svg className="group-hover:translate-x-1 transition-transform stroke-[1.5]" data-icon-set="lucide" data-lucide="arrow-right" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<button className="md:hidden text-stone-900">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="menu" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative pt-36 pb-32 lg:pt-52 lg:pb-40 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luksusowy dom w Górach Tatry" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31c59d2d-239e-4bca-a93e-75fc72af0b66_3840w.jpg" style={{}}/>

<div className="absolute inset-0 bg-[#3f3b35]/20 mix-blend-multiply"></div>
<div className="hero-mask absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-12 gap-y-12 items-end">

<div className="lg:w-7/12">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1C1917]/80 backdrop-blur-md border border-[#A18058]/30 text-[#FAFAF9] text-[10px] font-medium tracking-widest uppercase mb-8 shadow-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-[#A18058] animate-pulse"></span>
                        Centrum Nieruchomości
                    </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl text-stone-50 mb-8 leading-[0.95] drop-shadow-lg tracking-tight">
                        Znajdź swoją <br/><i className="font-serif italic text-[#A18058]">przestrzeń</i> w górach.
                    </h1>
<p className="text-stone-200 text-lg font-light mb-12 max-w-xl leading-relaxed opacity-90 drop-shadow-md">
                        Luksusowe apartamenty, domy z duszą i działki widokowe na Podhalu. Odkryj piękno Zakopanego z zaufanym partnerem.
                    </p>

<div className="bg-[#FAFAF9]/95 p-3 rounded-[2rem] shadow-2xl shadow-[#1C1917]/10 max-w-2xl border border-white/40 backdrop-blur-xl">
<div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-stone-200">

<div className="w-full md:w-[35%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-[9px] font-semibold text-[#A18058] uppercase tracking-widest mb-1.5">Lokalizacja</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent border-none outline-none text-stone-900 text-sm font-medium placeholder-stone-400 cursor-pointer group-hover:bg-transparent font-sans" type="text" value="Zakopane, Krupówki"/>
</div>
</div>

<div className="w-full md:w-[30%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-[9px] font-semibold text-[#A18058] uppercase tracking-widest mb-1.5">Rodzaj</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-stone-900">Domy / Wille</span>
<svg className="text-stone-400 stroke-[1.5]" data-icon-set="lucide" data-lucide="chevron-down" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>

<div className="w-full md:w-[35%] px-6 py-3 flex items-center gap-3">
<div className="flex-1 group cursor-pointer hover:bg-white rounded-2xl transition-colors -ml-4 pl-4 py-1">
<label className="block text-[9px] font-semibold text-[#A18058] uppercase tracking-widest mb-1.5">Budżet</label>
<span className="text-sm font-medium text-stone-900">2M zł - 10M zł+</span>
</div>
<button className="w-14 h-14 bg-[#1C1917] rounded-full flex items-center justify-center text-[#A18058] hover:bg-[#292524] transition-colors shadow-lg hover:scale-105 duration-300">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="search" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:w-5/12 pb-4">
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#1C1917]/40 backdrop-blur-xl border border-white/10 p-6 rounded-t-2xl rounded-bl-2xl text-white">
<div className="text-3xl font-normal serif italic mb-1">15+</div>
<div className="text-[10px] text-stone-300 font-medium uppercase tracking-wider">Lat Doświadczenia</div>
</div>
<div className="bg-[#FAFAF9]/90 backdrop-blur-xl border border-white/20 p-6 rounded-t-2xl rounded-br-2xl text-stone-900">
<div className="text-3xl font-normal serif italic mb-1">200+</div>
<div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">Ofert Premium</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200 bg-[#FAFAF9]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
<span className="text-[10px] font-semibold text-[#A18058] tracking-[0.2em] uppercase shrink-0">Obszar Działania</span>
<div className="flex items-center gap-8 md:gap-16 flex-wrap justify-center w-full opacity-60">
<span className="text-stone-900 font-serif italic text-xl">Zakopane</span>
<span className="text-stone-300">•</span>
<span className="text-stone-900 font-serif italic text-xl">Kościelisko</span>
<span className="text-stone-300">•</span>
<span className="text-stone-900 font-serif italic text-xl">Bukowina Tatrzańska</span>
<span className="text-stone-300">•</span>
<span className="text-stone-900 font-serif italic text-xl">Poronin</span>
<span className="text-stone-300">•</span>
<span className="text-stone-900 font-serif italic text-xl">Witów</span>
</div>
</div>
</section>

<section className="py-28 bg-[#F5F5F4]"> 
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex justify-between items-end border-b border-stone-200 pb-8">
<div className="max-w-xl">
<span className="text-[#A18058] font-semibold tracking-widest text-[10px] uppercase mb-3 block">Nasze Usługi</span>
<h2 className="text-4xl md:text-5xl text-stone-900 mb-4 serif leading-tight tracking-tight">Profesjonalizm w każdym detalu.</h2>
<p className="text-stone-500 text-sm leading-relaxed max-w-md">Kompleksowa obsługa rynku nieruchomości na Podhalu. Łączymy tradycję z nowoczesnym podejściem do sprzedaży.</p>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-all" href="#"><svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="arrow-up-right" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 row-span-1 bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-[#FAFAF9] border border-stone-100 flex items-center justify-center text-[#A18058] mb-6 shadow-sm">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="home" height="22" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<div className="">
<h3 className="text-2xl text-stone-900 mb-3 serif italic tracking-tight">Pośrednictwo Sprzedaży</h3>
<p className="text-stone-500 text-sm max-w-sm leading-relaxed">Skuteczna sprzedaż domów, apartamentów i pensjonatów. Przygotowujemy profesjonalne oferty z wirtualnym spacerem.</p>
</div>
</div>

<div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden mask-image-l">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
<img alt="Wnętrze chaty" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
</div>

<div className="md:col-span-1 row-span-2 bg-[#1C1917] rounded-[2rem] p-10 border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">

<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" style={{}}></div>
<div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#A18058]/10 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-800/50 border border-stone-700 flex items-center justify-center text-[#D4B996] mb-8">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="trending-up" height="22" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-2xl text-[#FAFAF9] mb-3 serif italic tracking-tight">Inwestycje</h3>
<p className="text-stone-400 text-sm leading-relaxed mb-10 font-light">
                            Analizujemy rynek Podhala pod kątem stopy zwrotu (ROI). Oferujemy grunty inwestycyjne i apartamenty pod wynajem krótkoterminowy.
                        </p>
</div>

<div className="relative h-40 w-full border-t border-stone-800 pt-6">
<div className="flex justify-between items-center mb-4">
<span className="text-[9px] uppercase text-stone-500 font-bold tracking-widest">Wzrost Wartości</span>
<span className="text-xs font-medium text-[#A18058]">+18.5% r/r</span>
</div>
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 30 20, 50 25 C 70 30, 80 5, 100 0" fill="none" stroke="#57534E" stroke-dasharray="2 2" strokeWidth="1"></path>
<path d="M0 35 C 20 32, 30 15, 50 18 C 70 21, 80 2, 100 -5" fill="none" stroke="#A18058" strokeWidth="2"></path>

<circle className="animate-ping" cx="100" cy="-5" fill="#A18058" opacity="0.5" r="3"></circle>
<circle cx="100" cy="-5" fill="#FAFAF9" r="2"></circle>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="scroll-text" height="22" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></g></svg>
</div>
<div className="">
<h3 className="text-xl text-stone-900 mb-3 serif italic tracking-tight">Obsługa Prawna</h3>
<p className="text-stone-500 text-xs leading-relaxed">Weryfikacja stanu prawnego nieruchomości, księgi wieczyste, wsparcie notarialne.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="key" height="22" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></g></svg>
</div>
<div className="">
<h3 className="text-xl text-stone-900 mb-3 serif italic tracking-tight">Zarządzanie Najmem</h3>
<p className="text-stone-500 text-xs leading-relaxed">Kompleksowa opieka nad apartamentami wakacyjnymi w Zakopanem i Kościelisku.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-[#FAFAF9] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-[#A18058] font-semibold tracking-[0.2em] text-[10px] uppercase mb-3 block">Aktualna Oferta</span>
<h2 className="text-4xl md:text-5xl text-stone-900 serif leading-tight tracking-tight">Wybrane Nieruchomości</h2>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-6 py-2 bg-[#1C1917] text-white rounded-full text-xs font-medium tracking-wide shadow-lg">Wszystkie</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Domy</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Apartamenty</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Działki</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Góralski Dom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&amp;w=2565&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#FAFAF9]/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-semibold text-stone-900 uppercase tracking-widest shadow-sm">Widok na Giewont</span>
</div>

<div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-full text-xs font-medium shadow-xl flex items-center gap-2"><svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="arrow-right" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">Rezydencja Kościelisko</h3>
<span className="text-lg font-medium text-stone-900 font-sans">4 200 000 zł</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Kościelisko, ul. Nędzy Kubińca</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="bed-double" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>5 Pokoi</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>240 m²</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="trees" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></g></svg>
<span>1200 m² działki</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Modern Apartment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#1C1917]/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-semibold text-white uppercase tracking-widest border border-white/10">Nowość</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">Apartamenty Royal</h3>
<span className="text-lg font-medium text-stone-900 font-sans">890 000 zł</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Zakopane, Centrum</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="bed-double" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>2 Pokoje</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="bath" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Sauna</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>48 m²</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Plot of land" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#A18058] backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-semibold text-white uppercase tracking-widest shadow-sm">Okazja</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">Działka Inwestycyjna</h3>
<span className="text-lg font-medium text-stone-900 font-sans">1 150 000 zł</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Witów, k. Zakopanego</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="map" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Budowlana</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="mountain" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Widokowa</span>
</div>
<div className="flex items-center gap-2">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>1800 m²</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="bg-transparent border border-stone-300 text-stone-900 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3"><svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="arrow-right" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</section>

<section className="bg-[#1C1917] py-28 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" style={{}}></div>

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#292524] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A18058]/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-24">
<div className="lg:w-5/12">
<h2 className="text-4xl md:text-5xl text-[#FAFAF9] serif italic mb-6 tracking-tight">
                        Centrum Nieruchomości w Twoim telefonie.
                    </h2>
<p className="text-stone-400 text-base mb-12 leading-relaxed font-light">
                        Przeglądaj najnowsze oferty z Zakopanego i okolic, umawiaj prezentacje i bądź na bieżąco z rynkiem.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="check" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div>
<h4 className="text-stone-200 text-sm font-medium">Powiadomienia Push</h4>
<p className="text-stone-500 text-xs mt-1">Bądź pierwszy, gdy pojawi się nowa okazja.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="check" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div>
<h4 className="text-stone-200 text-sm font-medium">Kontakt z Agentem</h4>
<p className="text-stone-500 text-xs mt-1">Bezpośredni czat z opiekunem oferty.</p>
</div>
</li>
</ul>
<div className="flex gap-4">
<button className="bg-[#FAFAF9] text-[#1C1917] px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-stone-200 transition-colors flex items-center gap-3">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="apple" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg></button>
</div>
</div>

<div className="lg:w-7/12 relative flex justify-center lg:justify-end">

<div className="relative w-[340px] h-[680px] bg-[#0c0a09] rounded-[56px] border-[8px] border-[#292524] shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-all duration-700 ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-[#FAFAF9] relative overflow-hidden flex flex-col">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>

<div className="relative z-10 p-6 pt-16 flex flex-col h-full">

<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-stone-900/5 p-4 flex items-center gap-3 mb-6 border border-stone-100">
<svg className="text-stone-400 stroke-[1.5]" data-icon-set="lucide" data-lucide="search" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<div className="flex-1 text-xs text-stone-600 font-medium">Zakopane, Małopolskie</div>
<div className="w-8 h-8 rounded-full bg-[#1C1917] flex items-center justify-center text-white">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="sliders-horizontal" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</div>

<div className="absolute top-44 left-8 bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-lg text-xs font-bold shadow-xl flex items-center gap-2 animate-bounce duration-[2000ms]"><div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
</div>
<div className="absolute top-60 right-6 bg-white text-[#1C1917] px-4 py-2 rounded-lg text-xs font-bold shadow-xl border border-stone-100">
                                    950k zł
                                </div>

<div className="mt-auto bg-white/95 backdrop-blur-xl rounded-[20px] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border border-stone-100">
<div className="flex gap-4">
<img className="w-24 h-24 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm text-stone-900 serif italic font-bold">Willa Tatra</h4>
<svg className="text-stone-300 stroke-[1.5]" data-icon-set="lucide" data-lucide="heart" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<p className="text-[10px] text-stone-500 mb-3 uppercase tracking-wider">Zakopane, Antałówka</p>
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-stone-900">3 200 000 zł</span>
<button className="w-8 h-8 rounded-full bg-[#1C1917] text-[#FAFAF9] flex items-center justify-center hover:bg-[#A18058] transition-colors">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="arrow-right" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAFAF9] pt-24 pb-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

<div className="lg:w-1/3">
<div className="flex items-center gap-3 mb-8">
<div className="relative w-10 h-10 flex items-center justify-center bg-[#1C1917] rounded-sm shadow-xl overflow-hidden">
<svg className="w-6 h-6 relative z-10" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="fill-stone-400" d="M7 8H10V18H7z"></path>
<path className="fill-stone-400" d="M14 8H17V18H14z"></path>
<path className="fill-stone-300" d="M10 4H14V18H10z"></path>
<path className="fill-[#A18058] drop-shadow-sm" d="M2 15L12 9L22 15V18H2V15Z"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-stone-900 leading-none serif">CENTRUM</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-[#A18058] font-semibold mt-0.5">Nieruchomości</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm font-light">
                        Lider rynku nieruchomości w Zakopanem i okolicach. Tworzymy nową jakość pośrednictwa w sercu polskich gór.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="facebook" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="instagram" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<svg className="stroke-[1.5]" data-icon-set="lucide" data-lucide="mail" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24 w-full lg:w-auto">
<div>
<h4 className="font-semibold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Oferta</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Domy i Wille</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Apartamenty</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Firma</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">O Nas</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Nasz Zespół</a></li>
</ul>
</div>
<div className="hidden md:block">
<h4 className="font-semibold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Informacje</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">RODO</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Polityka Prywatności</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-stone-400 text-xs font-medium">© 2024 Centrum Kancelaria Nieruchomości. Wszelkie prawa zastrzeżone.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
<span className="text-stone-500 text-xs font-medium">Zakopane, PL</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
