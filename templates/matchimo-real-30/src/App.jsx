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



      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons({
            attrs: {
              "stroke-width": 1.5
            }
          });
        }
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
      
<div className="w-full max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">

<header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div className="flex items-center gap-4">

<div className="relative inline-flex items-center justify-center rounded-2xl border border-sky-500/40 bg-white/5 shadow-[0_0_40px_rgba(56,189,248,0.35)]" style={{backdropFilter: 'blur(18px)', padding: '0.55rem 0.9rem'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/40 via-sky-400/10 to-transparent opacity-70"></div>
<span className="relative text-lg tracking-tight font-semibold text-white" style={{letterSpacing: '0.06em'}}>
              MATCHIMO
            </span>
</div>
<div className="flex flex-col">
<p className="text-base text-slate-300" style={{letterSpacing: '0.03em'}}>
              Matching immobilier intelligent en temps réel.
            </p>
<p className="text-sm text-slate-500" style={{letterSpacing: '0.05em'}}>
              Liquid Glass · Expérience premium fluide et lumineuse.
            </p>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-white/5 text-sm font-medium text-slate-100 px-4 py-1.5 sm:px-5 sm:py-2 transition-all duration-300" style={{backdropFilter: 'blur(16px)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/30 via-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-4 w-4 text-sky-300" data-lucide="sparkles"></i>
</span>
<span className="relative">Mode investisseur</span>
</button>
<button className="group relative inline-flex items-center gap-2 rounded-full border border-transparent bg-white text-sm font-semibold text-slate-900 px-4 py-1.5 sm:px-5 sm:py-2 shadow-[0_18px_45px_rgba(15,23,42,0.55)] transition-all duration-300 active:scale-[0.97]">
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/10 via-sky-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-4 w-4 text-sky-600" data-lucide="flashlight"></i>
</span>
<span className="relative">Lancer un match</span>
</button>
</div>
</header>

<section className="rounded-3xl border border-sky-500/30 bg-white/5 shadow-[0_0_60px_rgba(15,23,42,0.9)] p-2 sm:p-3" style={{backdropFilter: 'blur(20px)'}}>
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex flex-wrap gap-2 sm:gap-3">

<button className="group relative inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/20 text-xs sm:text-sm font-semibold text-sky-100 px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300" style={{backdropFilter: 'blur(18px)'}}>
<span className="absolute inset-0 rounded-full bg-sky-400/30 shadow-[0_0_35px_rgba(96,165,250,0.7)]"></span>
<span className="relative inline-flex">
<i className="h-4 w-4" data-lucide="radar"></i>
</span>
<span className="relative">Vue globale</span>
</button>
<button className="group relative inline-flex items-center gap-2 rounded-full border border-slate-500/50 bg-white/10 text-xs sm:text-sm font-medium text-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 hover:border-sky-500/60 hover:text-sky-100" style={{backdropFilter: 'blur(12px)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-4 w-4" data-lucide="building-2"></i>
</span>
<span className="relative">Biens</span>
</button>
<button className="group relative inline-flex items-center gap-2 rounded-full border border-slate-500/50 bg-white/10 text-xs sm:text-sm font-medium text-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 hover:border-sky-500/60 hover:text-sky-100" style={{backdropFilter: 'blur(12px)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-4 w-4" data-lucide="user-round"></i>
</span>
<span className="relative">Acquéreurs</span>
</button>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Flux live
            </span>
<span className="hidden sm:inline text-slate-500">·</span>
<span className="hidden sm:inline text-slate-400">Paris &amp; proche couronne</span>
</div>
</div>
</section>

<main className="grid gap-4 lg:gap-6 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">

<section className="space-y-4 lg:space-y-5">

<div className="relative rounded-3xl border border-sky-500/30 bg-white/10 p-4 sm:p-5 shadow-[0_18px_55px_rgba(15,23,42,0.9)]" style={{backdropFilter: 'blur(22px)'}}>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-50/5 to-transparent pointer-events-none"></div>
<div className="relative flex items-center justify-between gap-3 mb-4 sm:mb-5">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-slate-50" style={{letterSpacing: '0.03em'}}>
                  Biens en matching
                </h2>
<p className="text-base text-slate-300 mt-1">
                  Sélection dynamique des biens premium vs. profils acheteurs.
                </p>
</div>
<div className="flex flex-col items-end gap-1 text-xs text-slate-400">
<span>6 biens · <span className="text-sky-300">18 acquéreurs</span></span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="activity"></i>
                  Matching en temps réel
                </span>
</div>
</div>

<div className="relative grid gap-3">


<article className="group relative rounded-2xl border border-sky-500/50 bg-white shadow-[0_18px_40px_rgba(56,189,248,0.55)] p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-300 hover:-translate-y-[0.1rem]" style={{backdropFilter: 'blur(20px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-transparent opacity-80"></div>
<div className="relative flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/80 border border-sky-500/40" style={{backdropFilter: 'blur(12px)'}}>
<span className="text-base">🏙️</span>
</div>
<div>
<div className="flex items-center gap-2 flex-wrap">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900" style={{letterSpacing: '0.02em'}}>
                        Penthouse Neuilly
                      </h3>
<span className="inline-flex items-center rounded-full bg-emerald-400/10 text-emerald-500 text-xs font-semibold px-2 py-0.5 border border-emerald-400/60">
                        PERFECT MATCH
                      </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                      1,2M€ · 150m² · Vue Seine · Niveau penthouse avec terrasse.
                    </p>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 text-slate-700 px-2 py-0.5 border border-slate-200/70">
<i className="h-3.5 w-3.5 text-sky-500" data-lucide="sparkles"></i>
                        Premium
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 text-slate-700 px-2 py-0.5 border border-slate-200/70">
<i className="h-3.5 w-3.5 text-sky-400" data-lucide="ship-wheel"></i>
                        Vue Seine
                      </span>
</div>
</div>
</div>

<div className="relative flex items-center gap-4 sm:gap-5">

<div className="relative h-16 w-16">
<div className="absolute inset-0 rounded-full bg-slate-100" style={{boxShadow: '0 0 40px rgba(16,185,129,0.45)'}}></div>
<svg className="relative h-16 w-16 rotate-[-90deg]" viewbox="0 0 36 36">
<defs>
<lineargradient id="ring-perfect" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#22c55e"></stop>
</lineargradient>
</defs>
<circle className="opacity-60" cx="18" cy="18" fill="transparent" r="14" stroke="#e2e8f0" strokeLinecap="round" strokeWidth="3"></circle>
<circle className="transition-all duration-700" cx="18" cy="18" fill="transparent" r="14" stroke="url(#ring-perfect)" stroke-dasharray="88" stroke-dashoffset="4" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-[0.55rem] rounded-full bg-white flex flex-col items-center justify-center">
<span className="text-xs font-semibold text-emerald-500">98%</span>
<span className="text-[0.55rem] text-slate-500">match</span>
</div>
</div>
<button className="group relative inline-flex items-center justify-center rounded-full border border-slate-900/80 bg-slate-900 text-xs sm:text-sm font-semibold text-slate-50 px-3.5 py-1.5 sm:px-4 sm:py-2 transition-all duration-300" style={{boxShadow: '0 16px 40px rgba(15,23,42,0.75)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/30 via-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-3.5 w-3.5 mr-1.5" data-lucide="link-2"></i>
                      Voir les acquéreurs
                    </span>
</button>
</div>
</article>

<article className="group relative rounded-2xl border border-sky-500/40 bg-white/80 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-300 hover:-translate-y-[0.1rem]" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/12 to-transparent"></div>
<div className="relative flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 border border-sky-500/40" style={{backdropFilter: 'blur(12px)'}}>
<span className="text-base">✨</span>
</div>

                  &lt;&gt;
                    <div className="flex items-center gap-2 flex-wrap">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900" style={{letterSpacing: '0.02em'}}>
                        Loft Marais
                      </h3>
<span className="inline-flex items-center rounded-full bg-sky-500/8 text-sky-700 text-xs font-semibold px-2 py-0.5 border border-sky-400/70">
                        EXCELLENT
                      </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                      850k€ · 95m² · Caractère authentique · Plein cœur du Marais.
                    </p>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-700">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2 py-0.5 border border-slate-300/80">
<i className="h-3.5 w-3.5 text-sky-500" data-lucide="sparkles"></i>
                        Loft
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2 py-0.5 border border-slate-300/80">
<i className="h-3.5 w-3.5 text-sky-400" data-lucide="wand-2"></i>
                        Charme
                      </span>
</div>
</div>
</article></div>
<div className="relative flex items-center gap-4 sm:gap-5">

<div className="relative h-14 w-14">
<div className="absolute inset-0 rounded-full bg-slate-100"></div>
<svg className="relative h-14 w-14 rotate-[-90deg]" viewbox="0 0 36 36">
<defs>
<lineargradient id="ring-excellent" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="50%" stop-color="#1e40af"></stop>
<stop offset="100%" stop-color="#93c5fd"></stop>
</lineargradient>
</defs>
<circle className="opacity-70" cx="18" cy="18" fill="transparent" r="14" stroke="#e2e8f0" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="transparent" r="14" stroke="url(#ring-excellent)" stroke-dasharray="82" stroke-dashoffset="8" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-[0.55rem] rounded-full bg-white flex flex-col items-center justify-center">
<span className="text-xs font-semibold text-sky-600">91%</span>
<span className="text-[0.55rem] text-slate-500">match</span>
</div>
</div>
<button className="group relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-xs sm:text-sm font-semibold text-slate-50 px-3.5 py-1.5 sm:px-4 sm:py-2 transition-all duration-300" style={{boxShadow: '0 14px 32px rgba(15,23,42,0.75)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/25 via-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-3.5 w-3.5 mr-1.5" data-lucide="link-2"></i>
                      Associer acquéreur
                    </span>
</button>
</div>


<article className="group relative rounded-2xl border border-amber-400/50 bg-white/80 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-300 hover:-translate-y-[0.1rem]" style={{backdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/12 to-transparent"></div>
<div className="relative flex items-start gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/90 border border-amber-400/60" style={{backdropFilter: 'blur(12px)'}}>
<span className="text-base">🌳</span>
</div>
<div>
<div className="flex items-center gap-2 flex-wrap">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900" style={{letterSpacing: '0.02em'}}>
                        Villa Vincennes
                      </h3>
<span className="inline-flex items-center rounded-full bg-amber-400/10 text-amber-600 text-xs font-semibold px-2 py-0.5 border border-amber-400/70">
                        GOOD MATCH
                      </span>
</div>
<p className="mt-1 text-sm text-slate-600">
                      950k€ · 130m² · Jardin privé · Calme, à deux pas du bois.
                    </p>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-700">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2 py-0.5 border border-slate-300/80">
<i className="h-3.5 w-3.5 text-emerald-500" data-lucide="trees"></i>
                        Jardin
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2 py-0.5 border border-slate-300/80">
<i className="h-3.5 w-3.5 text-sky-500" data-lucide="map-pin"></i>
                        Vincennes
                      </span>
</div>
</div>
</div>
<div className="relative flex items-center gap-4 sm:gap-5">

<div className="relative h-14 w-14">
<div className="absolute inset-0 rounded-full bg-slate-100"></div>
<svg className="relative h-14 w-14 rotate-[-90deg]" viewbox="0 0 36 36">
<defs>
<lineargradient id="ring-good" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#fb923c"></stop>
<stop offset="50%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#fed7aa"></stop>
</lineargradient>
</defs>
<circle className="opacity-70" cx="18" cy="18" fill="transparent" r="14" stroke="#e2e8f0" strokeLinecap="round" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="transparent" r="14" stroke="url(#ring-good)" stroke-dasharray="76" stroke-dashoffset="14" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-[0.55rem] rounded-full bg-white flex flex-col items-center justify-center">
<span className="text-xs font-semibold text-amber-600">79%</span>
<span className="text-[0.55rem] text-slate-500">match</span>
</div>
</div>
<button className="group relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-xs sm:text-sm font-semibold text-slate-50 px-3.5 py-1.5 sm:px-4 sm:py-2 transition-all duration-300" style={{boxShadow: '0 14px 32px rgba(15,23,42,0.75)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/30 via-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-3.5 w-3.5 mr-1.5" data-lucide="sparkles"></i>
                      Optimiser le match
                    </span>
</button>
</div>
</article>

<div className="relative mt-1 grid gap-2 sm:grid-cols-3 text-xs text-slate-200">
<div className="rounded-2xl border border-slate-700/60 bg-white/5 p-2.5 flex items-center justify-between gap-2" style={{backdropFilter: 'blur(12px)'}}>
<div className="flex items-center gap-2">
<span className="text-base">🚇</span>
<div>
<p className="font-medium text-slate-50">Studio Châtelet</p>
<p className="text-[0.7rem] text-slate-400">380k€ · 35m² · Métro direct</p>
</div>
</div>
<span className="text-[0.7rem] text-sky-300 font-semibold">82%</span>
</div>
<div className="rounded-2xl border border-slate-700/60 bg-white/5 p-2.5 flex items-center justify-between gap-2" style={{backdropFilter: 'blur(12px)'}}>
<div className="flex items-center gap-2">
<span className="text-base">🏛️</span>
<div>
<p className="font-medium text-slate-50">Haussmannien 8ème</p>
<p className="text-[0.7rem] text-slate-400">1,5M€ · 180m² · Standing</p>
</div>
</div>
<span className="text-[0.7rem] text-emerald-300 font-semibold">95%</span>
</div>
<div className="rounded-2xl border border-slate-700/60 bg-white/5 p-2.5 flex items-center justify-between gap-2" style={{backdropFilter: 'blur(12px)'}}>
<div className="flex items-center gap-2">
<span className="text-base">🌅</span>
<div>
<p className="font-medium text-slate-50">Terrasse Montmartre</p>
<p className="text-[0.7rem] text-slate-400">720k€ · 85m² · Vue panoramique</p>
</div>
</div>
<span className="text-[0.7rem] text-sky-300 font-semibold">88%</span>
</div>
</div>
</div>
</section></main></div>


<aside className="space-y-4 lg:space-y-5">

<div className="relative rounded-3xl border border-sky-500/30 bg-white/10 p-4 sm:p-5 shadow-[0_18px_55px_rgba(15,23,42,0.9)]" style={{backdropFilter: 'blur(24px)'}}>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-50/5 to-transparent"></div>
<div className="relative flex items-center justify-between gap-2 mb-4">
<div>
<h2 className="text-lg sm:text-xl tracking-tight font-semibold text-slate-50" style={{letterSpacing: '0.03em'}}>
                  Visualisation du match
                </h2>
<p className="text-sm text-slate-300 mt-1">
                  Connexion fluide entre bien et acquéreur idéal.
                </p>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 text-[0.7rem] font-medium text-slate-200 px-2.5 py-1" style={{backdropFilter: 'blur(10px)'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live
              </button>
</div>

<div className="relative mt-2 flex flex-col gap-4">

<div className="relative flex items-center justify-between gap-3">

<div className="relative flex-1 rounded-2xl border border-slate-200/70 bg-white text-slate-900 p-3" style={{boxShadow: '0 16px 40px rgba(15,23,42,0.6)'}}>
<p className="text-xs font-medium text-slate-500 mb-1">Bien</p>
<p className="text-sm font-semibold tracking-tight">
                    Penthouse Neuilly · 150m²
                  </p>
<p className="text-xs text-slate-500 mt-1">
                    1,2M€ · Vue Seine · Terrasse plein ciel
                  </p>
</div>

<div className="relative flex flex-col items-center justify-center mx-1">
<div className="relative h-12 w-12">
<div className="absolute inset-0 rounded-full bg-sky-500/20 border border-sky-400/60" style={{backdropFilter: 'blur(10px)', boxShadow: '0 0 35px rgba(59,130,246,0.6)'}}></div>
<div className="absolute inset-2 rounded-full border border-sky-300/60 border-dashed"></div>
<div className="relative h-full w-full flex items-center justify-center">
<i className="h-5 w-5 text-sky-100" data-lucide="chevrons-right"></i>
</div>
</div>
<span className="mt-1 text-[0.65rem] text-slate-300">Flux de critères</span>
</div>

<div className="relative flex-1 rounded-2xl border border-slate-200/70 bg-white text-slate-900 p-3" style={{boxShadow: '0 16px 40px rgba(15,23,42,0.6)'}}>
<p className="text-xs font-medium text-slate-500 mb-1">Acquéreur</p>
<p className="text-sm font-semibold tracking-tight">
                    Couple cadre sup · 38 &amp; 41 ans
                  </p>
<p className="text-xs text-slate-500 mt-1">
                    Budget 1,3M€ · Quartiers Ouest · Vue / extérieur
                  </p>
</div>
</div>

<div className="relative grid grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] gap-3 items-center">

<div className="relative rounded-2xl border border-slate-600/60 bg-slate-900/70 p-3 overflow-hidden" style={{backdropFilter: 'blur(16px)'}}>
<p className="text-xs text-slate-300 mb-2">Radar de compatibilité</p>
<div className="relative h-28 flex items-center justify-center">

<div className="absolute h-20 w-20 rounded-full border border-slate-700/80"></div>
<div className="absolute h-16 w-16 rounded-full border border-slate-700/70"></div>
<div className="absolute h-12 w-12 rounded-full border border-slate-700/60"></div>

<div className="absolute h-16 w-16 rounded-[45%] bg-gradient-to-br from-sky-400/35 via-emerald-400/25 to-sky-500/30" style={{transform: 'rotate(12deg)', boxShadow: '0 0 35px rgba(59,130,246,0.45)'}}></div>

<div className="absolute -top-1">
<span className="text-[0.6rem] text-slate-300">Localisation</span>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
<span className="text-[0.6rem] text-slate-300">Budget</span>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
<span className="text-[0.6rem] text-slate-300">Surface</span>
</div>
<div className="absolute bottom-1 left-[12%]">
<span className="text-[0.6rem] text-slate-300">Standing</span>
</div>
<div className="absolute bottom-1 right-[12%]">
<span className="text-[0.6rem] text-slate-300">Extérieur</span>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-600/60 bg-slate-900/70 p-3 flex flex-col gap-2" style={{backdropFilter: 'blur(16px)'}}>
<p className="text-xs text-slate-300">Score global</p>
<div className="relative flex items-center gap-2">
<div className="relative h-20 w-20">
<svg className="h-20 w-20" viewbox="0 0 36 20">
<defs>
<lineargradient id="arc-gradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#f97316"></stop>
<stop offset="40%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="#22c55e"></stop>
</lineargradient>
</defs>

<path d="M2 18 A16 16 0 0 1 34 18" fill="none" stroke="#1f2933" strokeLinecap="round" strokeWidth="3.5"></path>

<path d="M2 18 A16 16 0 0 1 34 18" fill="none" stroke="url(#arc-gradient)" stroke-dasharray="32" stroke-dashoffset="3" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center translate-y-2">
<span className="text-base font-semibold text-emerald-400">
                          96%
                        </span>
</div>
</div>
<div className="flex flex-col gap-1 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between gap-2">
<span>Signal marché</span>
<span className="text-sky-300 font-semibold">Fort</span>
</div>
<div className="flex items-center justify-between gap-2">
<span>Urgence</span>
<span className="text-amber-300 font-semibold">Élevée</span>
</div>
<div className="flex items-center justify-between gap-2">
<span>Alignement critères</span>
<span className="text-emerald-300 font-semibold">Très haut</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-wrap items-center justify-between gap-2 mt-1">
<div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 border border-slate-600/80 px-2.5 py-1">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="alert-triangle"></i>
                    Risque de sur-offre
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 border border-slate-600/80 px-2.5 py-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shield-check"></i>
                    Dossier solide
                  </span>
</div>
<button className="group relative inline-flex items-center gap-1.5 rounded-full border border-slate-500/70 bg-slate-50/5 text-[0.75rem] font-medium text-slate-50 px-3 py-1.5 transition-all duration-300" style={{backdropFilter: 'blur(16px)'}}>
<span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/25 via-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative inline-flex">
<i className="h-3.5 w-3.5" data-lucide="mouse-pointer-2"></i>
</span>
<span className="relative">Simuler le scénario</span>
</button>
</div>
</div>
</div>

<div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/70 p-3.5 sm:p-4 flex items-center justify-between gap-3" style={{backdropFilter: 'blur(18px)'}}>
<div>
<p className="text-sm text-slate-200">
                Chargement intelligent
              </p>
<p className="text-xs text-slate-400 mt-1">
                Effet shimmer verre pendant les recalculs de matching.
              </p>
</div>
<div className="relative h-8 w-32 overflow-hidden rounded-full bg-slate-800/80 border border-slate-700/80">
<div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-600/50 to-slate-800" style="
                  animation: shimmer 2.2s infinite;
                  background-size: 50% 100%;
                "></div>
</div>
</div>
</aside>


<style>
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    </style>


    </>
  );
}
