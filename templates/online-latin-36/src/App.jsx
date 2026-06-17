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



    // Set current year in footer
    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
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
      

<div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-emerald-50/40 to-white">

<div className="h-1 w-full bg-gradient-to-r from-[#2ECC71] via-[#F1C40F] to-[#E67E22]"></div>

<header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-3">

<div className="h-12 w-12 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-emerald-500/40">
<span className="text-xs font-semibold tracking-tight text-white uppercase">MVL</span>
</div>
<div className="flex flex-col">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Mi Voz Latina</span>
<span className="text-xs sm:text-sm font-medium text-emerald-600">Radio online · Ritmo latino en vivo</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-slate-700 hover:text-emerald-600 transition-colors" href="#inicio">Inicio</a>
<a className="text-slate-700 hover:text-emerald-600 transition-colors" href="#programacion">Programación</a>
<a className="text-slate-700 hover:text-emerald-600 transition-colors" href="#locutores">Locutores</a>
<a className="text-slate-700 hover:text-emerald-600 transition-colors" href="#noticias">Noticias</a>
<a className="text-slate-700 hover:text-emerald-600 transition-colors" href="#contacto">Contacto</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#E67E22] px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-md shadow-orange-500/40 hover:bg-[#F1C40F] hover:text-slate-900 transition-colors">
<span>Escuchar en vivo</span>

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 7 16-4"></path>
<path d="M12 20h4"></path>
<path d="M15 14h.01"></path>
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
</svg>
</button>

<button className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:text-emerald-600 hover:border-emerald-300 transition-colors">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>

<main className="flex-1" id="inicio">

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[#F1C40F]/40 blur-3xl"></div>
<div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[#2ECC71]/30 blur-3xl"></div>
<div className="absolute inset-x-0 top-24 h-32 bg-gradient-to-r from-[#2ECC71]/10 via-[#F1C40F]/20 to-[#E67E22]/10 blur-md"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">

<div className="space-y-6 sm:space-y-8">

<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">

<svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h.01"></path>
<path d="M7 20v-4"></path>
<path d="M12 20v-8"></path>
<path d="M17 20V8"></path>
<path d="M22 4v16"></path>
</svg>
<span>En vivo ahora · Ritmo latino sin pausas</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                La voz que une a la
                <span className="bg-gradient-to-r from-[#2ECC71] via-[#F1C40F] to-[#E67E22] bg-clip-text text-transparent">
                  comunidad latina
                </span>
</h1>
<p className="text-base sm:text-lg font-normal leading-relaxed text-slate-700 max-w-xl">
                Salsa, reggaetón, bachata, merengue y más. Acompañamos tu día con música tropical, programas en vivo y la mejor energía latina, estés donde estés.
              </p>
</div>

<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-[#E67E22] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/40 hover:bg-[#F1C40F] hover:text-slate-900 transition-all">

<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</span>
<span>Escuchar en vivo</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-300 hover:text-emerald-700 transition-colors">

<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
<path d="M8 14h.01"></path>
<path d="M12 14h4"></path>
<path d="M8 18h4"></path>
<path d="M16 18h.01"></path>
</svg>
<span>Ver programación</span>
</button>
</div>

<div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#2ECC71] via-[#F1C40F] to-[#E67E22] shadow-md">
<span className="absolute -inset-1 rounded-full bg-[#E67E22]/20 blur-sm"></span>

<svg className="relative h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
</div>
<div className="space-y-0.5">
<p className="text-xs font-medium uppercase tracking-tight text-emerald-600">En vivo ahora</p>
<p className="text-sm font-medium text-slate-900">Mañanas Tropicales con Ana &amp; Diego</p>
<p className="text-xs font-normal text-slate-500">Salsa · Bachata · Noticias de la comunidad</p>
</div>
</div>

<div className="flex-1 sm:max-w-xs">
<div className="flex items-end gap-0.5 h-10">
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{height: '70%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.4s_ease-in-out_infinite]" style={{height: '45%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.1s_ease-in-out_infinite]" style={{height: '85%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.6s_ease-in-out_infinite]" style={{height: '35%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.3s_ease-in-out_infinite]" style={{height: '65%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.7s_ease-in-out_infinite]" style={{height: '90%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.25s_ease-in-out_infinite]" style={{height: '55%'}}></span>
<span className="w-0.5 bg-gradient-to-t from-emerald-500 to-[#F1C40F] rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" style={{height: '75%'}}></span>
</div>
<p className="mt-1 text-[0.7rem] font-medium text-slate-500">Transmitiendo desde Ciudad de México para el mundo.</p>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 sm:p-5 shadow-2xl shadow-emerald-600/30">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">

<div className="h-16 sm:h-20 w-28 sm:w-32 rounded-2xl bg-gradient-to-br from-[#2ECC71] via-[#F1C40F] to-[#E67E22] shadow-inner flex items-center justify-center">
<span className="text-xs sm:text-sm font-semibold tracking-tight text-black">
                      Mi Voz<br/>Latina<br/><span className="font-normal text-slate-900/80" style={{fontFamily: '\'Pacifico\', cursive'}}>Radio</span>
</span>
</div>
<div className="space-y-1">
<p className="text-sm font-medium tracking-tight text-white">Mi Voz Latina Radio</p>
<p className="text-xs font-normal text-slate-300">Energía tropical, beats urbanos y la vibra de nuestra gente 24/7.</p>
</div>
</div>

<div className="rounded-2xl bg-slate-950/70 border border-emerald-400/40 p-3 sm:p-4">
<div className="flex items-center gap-3">

<button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#E67E22] via-[#F1C40F] to-[#2ECC71] shadow-md shadow-orange-500/50 text-slate-900">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<p className="text-xs sm:text-sm font-medium text-white">Playlist: Noche Urbana</p>
<span className="text-[0.7rem] font-medium text-emerald-300">00:32 · En vivo</span>
</div>

<div className="relative mt-1 h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-[#2ECC71] via-[#F1C40F] to-[#E67E22]"></div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-300">
<div className="flex items-center gap-3">

<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="19 20 9 12 19 4 19 20"></polygon>
<line x1="5" x2="5" y1="19" y2="5"></line>
</svg>
</button>

<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 4 15 12 5 20 5 4"></polygon>
<line x1="19" x2="19" y1="5" y2="19"></line>
</svg>
</button>
<span className="hidden sm:inline text-[0.7rem] font-medium text-slate-300">Cali, Barranquilla, Santo Domingo y más.</span>
</div>

<div className="flex items-center gap-1.5">

<svg className="h-3.5 w-3.5 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
</svg>
<div className="w-20 h-1 rounded-full bg-slate-700 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-[#2ECC71] to-[#F1C40F]"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-700 border border-emerald-100">Salsa</span>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-[0.7rem] font-medium text-amber-700 border border-amber-100">Reggaetón</span>
<span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-[0.7rem] font-medium text-orange-700 border border-orange-100">Bachata</span>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-700 border border-emerald-100">Merengue</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 lg:py-16" id="programacion">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-[#F1C40F] px-3 py-1 text-xs font-medium tracking-tight text-slate-900 shadow-sm">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span>Programación diaria</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Tu sonido latino, todo el día</h2>
<p className="mt-2 text-base font-normal text-slate-600 max-w-xl">
                Descubre nuestros shows en vivo, especiales de fin de semana y espacios dedicados a la comunidad latina alrededor del mundo.
              </p>
</div>

<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1.5 text-xs font-medium shadow-sm">
                Hoy
              </button>
<button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                Mañana
              </button>
<button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                Fin de semana
              </button>
</div>
</div>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:-translate-y-0.5 hover:border-[#2ECC71]/60 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">06:00–09:00</span>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-tight">De lunes a viernes</span>
</div>
<h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-slate-900">Mañanas Tropicales</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                Despierta con salsa clásica, bachata romántica y noticias de la comunidad.
              </p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span>Con Ana &amp; Diego</span>
<span className="inline-flex items-center gap-1 text-emerald-600">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"></path>
<path d="M19 10a7 7 0 0 1-14 0"></path>
<line x1="12" x2="12" y1="19" y2="23"></line>
<line x1="8" x2="16" y1="23" y2="23"></line>
</svg>
<span>En vivo</span>
</span>
</div>
</article>
<article className="group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:-translate-y-0.5 hover:border-[#E67E22]/70 hover:shadow-md hover:shadow-orange-500/20 transition-all">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-full px-2.5 py-1">12:00–15:00</span>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-tight">Lunes a sábado</span>
</div>
<h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-slate-900">Flow Urbano</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                Reggaetón, trap latino y los hits urbanos que marcan tendencia.
              </p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span>Con DJ K-Latino</span>
<span className="inline-flex items-center gap-1 text-orange-600">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5a3.5 3.5 0 1 0 7 0c0-2.5-2-3.5-2-6.5 0-1.5-.5-2.5-1.5-3.5-.5 2-2 3.5-3 4.5s-1 2-1 2.5z"></path>
<path d="M12 22a7 7 0 0 1-7-7c0-2.8 1.5-5 3.5-6.5"></path>
<path d="M16.5 8.5C18.5 10 20 12.2 20 15a7 7 0 0 1-7 7"></path>
</svg>
<span>Estrenos</span>
</span>
</div>
</article>
<article className="group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:-translate-y-0.5 hover:border-[#2ECC71]/70 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">18:00–21:00</span>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-tight">Noches</span>
</div>
<h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-slate-900">Noche de Bachata</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                Baladas, bachata y mensajes al aire para dedicar y enamorarse.
              </p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span>Con Laura Martínez</span>
<span className="inline-flex items-center gap-1 text-emerald-600">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 2-3 2-4.5A4.5 4.5 0 0 0 16.5 5c-1.54 0-3 .99-3.5 2.5C12.5 5.99 11.04 5 9.5 5A4.5 4.5 0 0 0 5 9.5c0 1.5.5 3.04 2 4.5l5 5Z"></path>
</svg>
<span>Dedicatorias</span>
</span>
</div>
</article>
<article className="group rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:-translate-y-0.5 hover:border-[#F1C40F]/80 hover:shadow-md hover:shadow-amber-400/20 transition-all">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1">21:00–00:00</span>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-tight">Viernes &amp; sábado</span>
</div>
<h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-slate-900">Club Mi Voz</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                Mezclas en vivo con los DJs residentes, directo a tu fiesta.
              </p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span>DJs residentes</span>
<span className="inline-flex items-center gap-1 text-amber-700">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2a7 7 0 0 0 7 7"></path>
<path d="M12 22a7 7 0 0 1-7-7"></path>
</svg>
<span>Mix en vivospan&gt;
                </span>
</span></div>
</article>
<article className="group rounded-2xl border borderlate-200 bg-white/90 p-4 shadow-sm hover:-translate-y-0.5 hover:border-[#2ECC71]/60 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">Domingo 10:00–13:00</span>
<span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-tight">Especial</span>
</div>
<h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-slate-900">Domingo en Familia</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                Tropical, boleros y mensajes al aire para compartir en casa.
              </p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span>Con Carlos &amp; invitados</span>
<span className="inline-flex items-center gap-1 text-emerald-600">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>Familia</span>
</span>
</div>
</article>
<article className="group rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-4 hover:border-[#E67E22]/70 hover:bg-white transition-all flex flex-col justify-between">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Próximos especiales</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                  Conciertos exclusivos, sesiones acústicas y entrevistas a tus artistas latinos favoritos.
                </p>
</div>
<button className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#E67E22] hover:text-[#F1C40F]">
<span>Ver calendario completo</span>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
</article>
</div>
</div>
</section>

<section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-emerald-50/60 via-white to-amber-50/60" id="locutores">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-[#2ECC71] px-3 py-1 text-xs font-medium tracking-tight text-white shadow-sm">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"></path>
<path d="M18 8a3 3 0 1 1-3 3"></path>
<path d="M7 21v-2a4 4 0 0 1 4-4h1"></path>
<path d="M14 21v-2a4 4 0 0 1 3-3.87"></path>
</svg>
<span>Locutores &amp; DJs</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Las voces detrás del micrófono</h2>
<p className="mt-2 text-base font-normal text-slate-600 max-w-xl">
                Un equipo de locutores, DJs y creadores que viven la música latina y la comparten contigo todos los días.
              </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 hover:border-[#2ECC71] hover:text-emerald-700 transition-colors">

<svg className="h-4 w-4 text-rose-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
<span>Síguenos en redes</span>
</button>
</div>

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

<article className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 overflow-hidden shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="relative h-40 bg-gradient-to-tr from-[#2ECC71] via-[#F1C40F] to-[#E67E22]">
<div className="absolute inset-3 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to top, rgba(15,23,42,0.5), rgba(15,23,42,0)), url(\'https: //images.pexels.com/photos/1181565/pexels-photo-1181565.jpeg?auto=compress&amp'}}></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[0.7rem] font-medium text-white">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"></path>
<path d="M19 10a7 7 0 0 1-14 0"></path>
<line x1="12" x2="12" y1="19" y2="23"></line>
<line x1="8" x2="16" y1="23" y2="23"></line>
</svg>
<span>Mañanas Tropicales</span>
</div>
</div>
<div className="p-3.5 space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Ana Rodríguez</h3>
<p className="text-xs font-normal text-slate-600">Locutora · Noticias &amp; comunidad</p>
<div className="flex items-center gap-2 pt-1">

<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#2ECC71]/10 hover:text-emerald-700 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#2ECC71]/10 hover:text-emerald-700 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.5 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</button>
</div>
</div>
</article>
<article className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 overflow-hidden shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-500/20 transition-all">
<div className="relative h-40 bg-gradient-to-br from-[#E67E22] via-[#F1C40F] to-[#2ECC71]">
<div className="absolute inset-3 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to top, rgba(15,23,42,0.55), rgba(15,23,42,0)), url(\'https: //images.pexels.com/photos/3699635/pexels-photo-3699635.jpeg?auto=compress&amp'}}></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[0.7rem] font-medium text-white">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2a7 7 0 0 1 7 7"></path>
<path d="M12 22a7 7 0 0 0-7-7"></path>
</svg>
<span>Flow Urbano</span>
</div>
</div>
<div className="p-3.5 space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">DJ K-Latino</h3>
<p className="text-xs font-normal text-slate-600">DJ residente · Reggaetón &amp; urbano</p>
<div className="flex items-center gap-2 pt-1">
<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#E67E22]/10 hover:text-[#E67E22] transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#E67E22]/10 hover:text-[#E67E22] transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8s0-2 2-2l16-.1s2-.1 2 2.1v8s0 2-2 2H4s-2 0-2-2z"></path>
<polygon points="10 9 15 12 10 15 10 9"></polygon>
</svg>
</button>
</div>
</div>
</article>
<article className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 overflow-hidden shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="relative h-40 bg-gradient-to-tr from-[#2ECC71] via-slate-900 to-[#F1C40F]">
<div className="absolute inset-3 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to top, rgba(15,23,42,0.6), rgba(15,23,42,0)), url(\'https: //images.pexels.com/photos/8101524/pexels-photo-8101524.jpeg?auto=compress&amp'}}></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[0.7rem] font-medium text-white">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="2"></circle>
<circle cx="18" cy="16" r="2"></circle>
</svg>
<span>Noche de Bachata</span>
</div>
</div>
<div className="p-3.5 space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Laura Martínez</h3>
<p className="text-xs font-normal text-slate-600">Locutora · Romántico &amp; baladas</p>
<div className="flex items-center gap-2 pt-1">
<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#2ECC71]/10 hover:text-emerald-700 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-[#2ECC71]/10 hover:text-emerald-700 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
</button>
</div>
</div>
</article>
<article className="flex flex-col rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4 justify-between hover:border-[#F1C40F]/80 hover:bg-amber-50/40 transition-all">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">¿Quieres ser parte de Mi Voz Latina?</h3>
<p className="mt-1 text-xs sm:text-sm font-normal text-slate-600">
                  Si tienes un proyecto, podcast o programa para la comunidad latina, cuéntanos tu idea y construyamos algo juntos.
                </p>
</div>
<button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#F1C40F] px-3 py-1.5 text-[0.7rem] font-medium text-slate-900 shadow-sm hover:bg-[#E67E22] hover:text-white transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"></path>
<path d="m22 5-10 7L2 5"></path>
<path d="M19 2v6"></path>
<path d="M16 5h6"></path>
</svg>
<span>Proponer un programa</span>
</button>
</article>
</div>
</div>
</section>

<section className="py-10 sm:py-14 lg:py-16" id="noticias">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-[#E67E22] px-3 py-1 text-xs font-medium tracking-tight text-white shadow-sm">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 20H5a2 2 0 0 1-2-2V5"></path>
<path d="M7 9h8"></path>
<path d="M7 13h6"></path>
<path d="M15 5h-4a2 2 0 0 0-2 2v11"></path>
<path d="M19 5v14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
</svg>
<span>Noticias &amp; eventos</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Lo último en Mi Voz Latina</h2>
<p className="mt-2 text-base font-normal text-slate-600 max-w-xl">
                Eventos en tu ciudad, lanzamientos exclusivos y especiales temáticos para que no te pierdas nada.
              </p>
</div>
<button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#E67E22] hover:text-[#F1C40F]">
<span>Ver todas las noticias</span>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
</div>
<div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">

<article className="group rounded-3xl overflow-hidden border border-slate-200 bg-white/90 shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
<div className="relative h-52 sm:h-64 bg-gradient-to-r from-[#2ECC71] via-[#F1C40F] to-[#E67E22]">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to top, rgba(15,23,42,0.6), rgba(15,23,42,0.1)), url(\'https: //images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&amp'}}></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[0.7rem] font-medium text-white">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
<path d="m12 13 1.2 2.4 2.6.4-1.9 1.8.4 2.6L12 19l-2.3 1.2.4-2.6-1.9-1.8 2.6-.4z"></path>
</svg>
<span>Evento especial</span>
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
<span>15 · Agosto · 21:00</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-3">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 group-hover:text-[#E67E22] transition-colors">
                  Noche Latina en Vivo: transmisión especial desde Miami
                </h3>
<p className="text-xs sm:text-sm font-normal text-slate-600">
                  Concierto en vivo, entrevistas con artistas invitados y la mejor mezcla de sonidos caribeños, urbanos y tropicales. Súmate a la fiesta desde cualquier lugar.
                </p>
<div className="flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-slate-500">
<span>Transmitido también por YouTube y redes sociales.</span>
<button className="inline-flex items-center gap-1 rounded-full bg-[#E67E22] px-3 py-1.5 text-[0.7rem] font-medium text-white hover:bg-[#F1C40F] hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
<span>Revivir especial</span>
</button>
</div>
</div>
</article>

<div className="space-y-4">

<article className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm hover:border-[#2ECC71]/70 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="h-16 w-20 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(\'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&amp'}}></div>
<div className="flex-1 space-y-1">
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-700">
                    Comunidad
                  </div>
<h4 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-900">
                    Campaña solidaria: “Mi Voz Latina con tu barrio”
                  </h4>
<p className="text-[0.7rem] font-normal text-slate-600 line-clamp-2">
                    Recaudamos fondos y alimentos para organizaciones locales en toda Latinoamérica.
                  </p>
</div>
</article>
<article className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm hover:border-[#F1C40F]/80 hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-400/20 transition-all">
<div className="h-16 w-20 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(\'https://images.pexels.com/photos/1484598/pexels-photo-1484598.jpeg?auto=compress&amp'}}></div>
<div className="flex-1 space-y-1">
<div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[0.65rem] font-medium text-amber-800">
                    Lanzamiento
                  </div>
<h4 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-900">
                    Nuevo podcast: “Historias de Nuestra Gente”
                  </h4>
<p className="text-[0.7rem] font-normal text-slate-600 line-clamp-2">
                    Voces latinas compartiendo historias de migración, cultura y resistencia.
                  </p>
</div>
</article>
<article className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm hover:border-[#2ECC71]/70 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20 transition-all">
<div className="h-16 w-20 rounded-xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(\'https://images.pexels.com/photos/2727451/pexels-photo-2727451.jpeg?auto=compress&amp'}}></div>
<div className="flex-1 space-y-1">
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-700">
                    Especial
                  </div>
<h4 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-900">
                    Mes de la Salsa: homenaje a los clásicos del Caribe
                  </h4>
<p className="text-[0.7rem] font-normal text-slate-600 line-clamp-2">
                    Programación dedicada a los íconos que hicieron grande la salsa en el mundo.
                  </p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 lg:py-16 bg-slate-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium tracking-tight text-white">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h1"></path>
<path d="M6 12h2"></path>
<path d="M10 12h2"></path>
<path d="M14 12h2"></path>
<path d="M18 12h3"></path>
<path d="M8 9v6"></path>
<path d="M12 6v12"></path>
<path d="M16 9v6"></path>
</svg>
<span>Reproductor de episodios</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">Vuelve a escuchar lo mejor de la semana</h2>
<p className="mt-2 text-base font-normal text-slate-300 max-w-xl">
                Revisa las últimas entrevistas, sesiones en vivo y programas destacados. Dale play cuando quieras.
              </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition-colors">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="11" r="4"></circle>
<path d="M8 21a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4"></path>
<path d="M16 21a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4"></path>
<path d="M12 19v2"></path>
</svg>
<span>Ver archivo completo</span>
</button>
</div>
<div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">

<div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-4 sm:p-5 shadow-xl shadow-emerald-500/20">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center">

<div className="relative h-28 w-full sm:h-32 sm:w-32 rounded-2xl bg-gradient-to-tr from-[#2ECC71] via-[#F1C40F] to-[#E67E22] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_45%)]"></div>
<div className="relative flex flex-col items-center">
<span className="text-xs font-medium uppercase tracking-tight text-slate-900/90 bg-white/80 rounded-full px-2 py-1">Podcast</span>
<span className="mt-2 text-sm font-semibold tracking-tight text-white">Historias</span>
<span className="text-xs font-normal text-white/90">de Nuestra Gente</span>
</div>
</div>

<div className="flex-1 space-y-2">
<p className="text-xs font-medium uppercase tracking-tight text-emerald-300">Episodio destacado</p>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                    Episodio 07 · De Caracas a Chicago: una vida entre dos mundos
                  </h3>
<p className="text-xs sm:text-sm font-normal text-slate-300">
                    Conversamos con Valeria sobre migración, familia y las canciones que marcaron su viaje.
                  </p>
</div>
</div>

<div className="mt-4 space-y-3">
<div className="flex items-center gap-3">
<button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md shadow-emerald-500/30">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>00:42</span>
<span>45:10</span>
</div>
<div className="relative h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#2ECC71] via-[#F1C40F] to-[#E67E22] rounded-full"></div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 text-[0.7rem] text-slate-300">
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-300 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
<span>Descargar</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2 py-1 hover:border-emerald-400 hover:text-emerald-300 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.6" x2="15.4" y1="13.5" y2="17.5"></line>
<line x1="15.4" x2="8.6" y1="6.5" y2="10.5"></line>
</svg>
<span>Compartir</span>
</button>
</div>
<span>Actualizado cada martes · Disponible en todas las plataformas.</span>
</div>
</div>
</div>

<div className="space-y-2">

<article className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 hover:border-emerald-400/80 hover:bg-slate-800/80 transition-all">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-emerald-300 hover:bg-emerald-500 hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-100 truncate">Sets en Vivo desde Bogotá · DJ K-Latino</p>
<p className="text-[0.65rem] font-normal text-slate-400">Club Mi Voz · 1h 20m</p>
</div>
<span className="text-[0.65rem] font-medium text-emerald-300">Nuevo</span>
</article>
<article className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 hover:border-emerald-400/60 hover:bg-slate-800/80 transition-all">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-100 truncate">Top 20 Reggaetón · Julio</p>
<p className="text-[0.65rem] font-normal text-slate-400">Flow Urbano · 55m</p>
</div>
<span className="text-[0.65rem] font-medium text-slate-400">Ayer</span>
</article>
<article className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 hover:border-emerald-400/60 hover:bg-slate-800/80 transition-all">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-100 truncate">Especial Mes de la Salsa · Vol. 1</p>
<p className="text-[0.65rem] font-normal text-slate-400">Clásicos del Caribe · 1h 05m</p>
</div>
<span className="text-[0.65rem] font-medium text-slate-400">3 días</span>
</article>
<article className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 hover:border-emerald-400/60 hover:bg-slate-800/80 transition-all">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="6 4 20 12 6 20 6 4"></polygon>
</svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-100 truncate">Entrevista: Sonido local en Nueva York</p>
<p className="text-[0.65rem] font-normal text-slate-400">Mañanas Tropicales · 42m</p>
</div>
<span className="text-[0.65rem] font-medium text-slate-400">1 semana</span>
</article>
<button className="mt-2 w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-[0.7rem] font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300 hover:bg-slate-800 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
<path d="M3 6h4"></path>
<path d="M3 10h4"></path>
</svg>
<span>Ver más episodios</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-amber-50 via-white to-emerald-50" id="contacto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full bg-[#2ECC71] px-3 py-1 text-xs font-medium tracking-tight text-white shadow-sm">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
<span>Contacto &amp; mensajes al aire</span>
</div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Escríbenos, tu voz también es parte de esta radio
            </h2>
<p className="mt-2 text-sm sm:text-base font-normal text-slate-600">
              Envía saludos, dedicatorias, propuestas de programa o información de eventos para tu comunidad.
            </p>
</div>
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">

<form className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-4 sm:p-6 shadow-sm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700" htmlFor="nombre">Nombre completo</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-colors" id="nombre" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700" htmlFor="email">Correo electrónico</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-colors" id="email" placeholder="tucorreo@ejemplo.com" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700" htmlFor="ciudad">Ciudad / País</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-colors" id="ciudad" placeholder="CDMX, Buenos Aires, Miami..." type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700" htmlFor="tipo">Motivo del mensaje</label>
<select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-colors" id="tipo">
<option>Saludo / Dedicatoria</option>
<option>Propuesta de programa</option>
<option>Publicidad / Patrocinios</option>
<option>Prensa / Medios</option>
<option>Otro</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700" htmlFor="mensaje">Mensaje</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-colors" id="mensaje" placeholder="Cuéntanos qué quieres compartir con Mi Voz Latina..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
<div className="flex items-center gap-2">
<input className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400" id="boletin" type="checkbox"/>
<label className="text-[0.7rem] sm:text-xs text-slate-600" htmlFor="boletin">
                    Quiero recibir noticias, promociones y programación especial por correo.
                  </label>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E67E22] px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-md shadow-orange-500/40 hover:bg-[#F1C40F] hover:text-slate-900 transition-colors" type="submit">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
<span>Enviar mensaje</span>
</button>
</div>
</form>

<div className="space-y-4">
<div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">Datos de la emisora</h3>
<dl className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
<div className="flex gap-2">
<dt className="min-w-[70px] font-medium">Email:</dt>
<dd>contacto@mivozlatinaradio.com</dd>
</div>
<div className="flex gap-2">
<dt className="min-w-[70px] font-medium">WhatsApp:</dt>
<dd>+52 55 0000 0000</dd>
</div>
<div className="flex gap-2">
<dt className="min-w-[70px] font-medium">Ubicación:</dt>
<dd>Estudios en Ciudad de México · Transmisión global</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-5 space-y-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">Síguenos y escucha en otras plataformas</h3>
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full bg-black text-white px-3 py-1.5 text-[0.7rem] sm:text-xs font-medium hover:bg-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="10" x="7" y="2"></rect>
<path d="M11 18h2"></path>
</svg>
<span>App móvil (próximamente)</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-[#E67E22] text-white px-3 py-1.5 text-[0.7rem] sm:text-xs font-medium hover:bg-[#F1C40F] hover:text-slate-900 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8s0-2 2-2l16-.1s2-.1 2 2.1v8s0 2-2 2H4s-2 0-2-2z"></path>
<polygon points="10 9 15 12 10 15 10 9"></polygon>
</svg>
<span>YouTube Live</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-3 py-1.5 text-[0.7rem] sm:text-xs font-medium hover:bg-emerald-700 transition-colors">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 7 16-4"></path>
<path d="M12 20h4"></path>
<path d="M15 14h.01"></path>
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span>TuneIn / Online Radio</span>
</button>
</div>
<div className="pt-2 border-t border-dashed border-slate-200 mt-2">
<p className="text-[0.7rem] sm:text-xs text-slate-500">
                    ¿Eres marca o productor? Escríbenos para conocer nuestras opciones de
                    patrocinios, menciones al aire y paquetes especiales para eventos.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-black flex items-center justify-center shadow-md shadow-emerald-500/40">
<span className="text-[0.65rem] font-semibold tracking-tight text-white uppercase">MVL</span>
</div>
<div className="flex flex-col">
<p className="text-sm font-semibold text-slate-900">Mi Voz Latina Radio</p>
<p className="text-[0.7rem] text-slate-500">La voz que une a la comunidad latina · 24/7</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 text-[0.7rem] sm:text-xs text-slate-500">
<span>© <span id="year-span"></span> Mi Voz Latina Radio. Todos los derechos reservados.</span>
<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-300"></span>
<a className="hover:text-emerald-600 transition-colors" href="#">Política de privacidad</a>
<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-300"></span>
<a className="hover:text-emerald-600 transition-colors" href="#">Términos de uso</a>
</div>
<div className="flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-[#2ECC71] transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="3.5"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
</a>
<a aria-label="Twitter" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-[#1DA1F2] transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.5 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="YouTube" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-red-600 transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8s0-2 2-2l16-.1s2-.1 2 2.1v8s0 2-2 2H4s-2 0-2-2z"></path>
<polygon points="10 9 15 12 10 15 10 9"></polygon>
</svg>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
