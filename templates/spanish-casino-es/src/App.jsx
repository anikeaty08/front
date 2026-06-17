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
      

<header className="border-b bg-[#17152e]/80 backdrop-blur-xl sticky top-0 z-50 border-white/5">
<div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-gem w-4 h-4 text-white" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">TopBonus <span className="text-cyan-400">España</span></span>
</div>

<nav className="hidden lg:flex items-center gap-6 text-sm font-normal text-blue-400">
<a className="font-medium flex items-center gap-1 text-white" href="#">Casinos Online</a>
<a className="transition-colors hover:text-white" href="#">Bonos de Bienvenida</a>
<a className="transition-colors hover:text-white" href="#">Sin Depósito</a>
<a className="transition-colors hover:text-white" href="#">Tiradas Gratis</a>
</nav>

<div className="flex items-center gap-3">
<span className="hidden md:inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border text-blue-400 bg-white/5 border-white/5">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Actualizado: Hoy
                </span>
<button className="p-2 rounded-lg transition-colors text-white hover:bg-white/10">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="container md:px-6 flex-grow mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                Nuestras mejores ofertas de casino en <span className="text-glow text-cyan-400">España</span>
</h1>
<p className="text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto text-blue-400">
                ¿Buscas los mejores y más confiables casinos en España? No busques más, hemos creado una lista actualizada con todos los mejores bonos disponibles en España en este momento.
            </p>

<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-cyan-200">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-900/30">
<svg className="lucide lucide-shield-check w-4 h-4 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Seguro y confiable
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-900/30">
<svg className="lucide lucide-file-check w-4 h-4 text-indigo-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg> Licenciado en España
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-900/30">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Retiros rápidos
                </div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="relative group">

<div className="absolute -top-3 left-0 z-10">
<span className="bg-yellow-500 text-[10px] font-bold px-3 py-1 rounded-r shadow-lg uppercase tracking-wider text-white">Elección Principal</span>
</div>
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">

<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">01</span>
<div className="flex flex-col">
<div className="text-2xl font-bold italic tracking-tighter text-white">Golden<span className="text-yellow-500">Park</span></div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">GoldenPark</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://app.afiliago.com/go/19967/gk1pGsWh5T" rel="nofollow" target="_blank">goldenpark.es</a>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">4820 Votos</span>
</div>

<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Bono de Bienvenida</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
                                ¡Consigue hasta <span className="font-semibold text-yellow-400">500€</span> en bonos con tus primeros depósitos!
                            </h3>
</div>

<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://app.afiliago.com/go/19967/gk1pGsWh5T" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 10€</span>
</div>
</div>

<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Las ofertas de bienvenida solo se aplican a jugadores nuevos que realicen un depósito. +18. Juega de manera responsable. Se aplican términos y condiciones completos.
                        </p>
</div>
</article>
</div>

<div className="relative group">
<div className="absolute -top-3 left-0 z-10">
<span className="text-[10px] font-bold px-3 py-1 rounded-r shadow-lg uppercase tracking-wider bg-green-600 text-white">Top Ventas</span>
</div>
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">02</span>
<div className="flex flex-col">
<div className="text-3xl font-black text-green-500 italic lowercase tracking-tight">codere</div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">Codere</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://track.afiliapub.com/click?o=24&amp;a=1108091&amp;link_id=137&amp;creative_id=153" rel="nofollow" target="_blank">codere.es</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">9973 Votos</span>
</div>
<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Promoción Exclusiva</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
                                Disfruta de <span className="font-semibold text-green-400">20 Golden Chips</span> + Bono de <span className="font-semibold text-green-400">200€</span>
</h3>
</div>
<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://track.afiliapub.com/click?o=24&amp;a=1108091&amp;link_id=137&amp;creative_id=153" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 20€</span>
</div>
</div>
<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Solo para nuevos usuarios. Requisito de apuesta x35. +18. Juega con responsabilidad. T&amp;C aplican.
                        </p>
</div>
</article>
</div>

<div className="relative group">
<div className="absolute -top-3 left-0 z-10">
<span className="bg-cyan-500 text-[10px] font-bold px-3 py-1 rounded-r shadow-lg uppercase tracking-wider text-white">Sin Wagering</span>
</div>
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">03</span>
<div className="flex flex-col">
<div className="text-3xl font-bold leading-none text-white">Play<span className="text-green-400">UZU</span></div>
<div className="text-[10px] uppercase tracking-widest mt-0.5 text-blue-400">El casino transparente</div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">PlayUZU</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://site.playuzu.es/index.php?aname=casinoyslots1" rel="nofollow" target="_blank">playuzu.es</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">3098 Votos</span>
</div>
<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Oferta Especial</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
<span className="font-semibold text-green-400">50 Tiradas Gratis</span> con tu primer depósito de dinero real
                            </h3>
</div>
<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://site.playuzu.es/index.php?aname=casinoyslots1" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 10€</span>
</div>
</div>
<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Todo lo que ganas es tuyo. Sin condiciones de apuesta. +18. Juega de manera responsable.
                        </p>
</div>
</article>
</div>

<div className="relative group">
<div className="absolute -top-3 left-0 z-10">
<span className="bg-yellow-500 text-[10px] font-bold px-3 py-1 rounded-r shadow-lg uppercase tracking-wider text-white">Gran Variedad</span>
</div>
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">04</span>
<div className="flex flex-col">
<div className="text-3xl font-black text-cyan-500 italic uppercase">betsson</div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">Betsson</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://track.afiliapub.com/click?o=17&amp;a=1108091&amp;creative_id=225" rel="nofollow" target="_blank">betsson.es</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">15742 Votos</span>
</div>
<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Triple Bono</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
                                ¡Hasta <span className="font-semibold text-cyan-400">1000€</span> de bono de bienvenida + <span className="font-semibold text-cyan-400">10€</span> por verificar!
                            </h3>
</div>
<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://track.afiliapub.com/click?o=17&amp;a=1108091&amp;creative_id=225" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 10€</span>
</div>
</div>
<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Las ofertas de bienvenida solo se aplican a jugadores nuevos. +18. Juega de manera responsable.
                        </p>
</div>
</article>
</div>

<div className="relative group">
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">05</span>
<div className="flex flex-col">
<div className="text-xl font-black italic uppercase tracking-tighter text-white">MARATHON<span className="text-green-500">BET</span></div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">Mbet</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://www.gambling-affiliation.com/cpc/v=gGaKqnA5.85GRKtNFKmGZd.dXxWD-Z6ow8VzU1SQpxc_GA73155V1" rel="nofollow" target="_blank">marathonbet.es</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">5420 Votos</span>
</div>
<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Bono Casino</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
                                Consigue el <span className="font-semibold text-green-400">100%</span> hasta <span className="font-semibold text-green-400">200€</span> en Casino Live
                            </h3>
</div>
<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://www.gambling-affiliation.com/cpc/v=gGaKqnA5.85GRKtNFKmGZd.dXxWD-Z6ow8VzU1SQpxc_GA73155V1" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 10€</span>
</div>
</div>
<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Publicidad | 18+ | Juega responsablemente | Condiciones en la web del operador.
                        </p>
</div>
</article>
</div>

<div className="relative group">
<article className="card-bg rounded-xl p-4 md:p-6 border relative overflow-hidden transition-all duration-300 card-hover border-white/5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="flex items-center gap-6 w-full lg:w-auto min-w-[200px]">
<span className="text-3xl font-medium text-blue-500/50">06</span>
<div className="flex flex-col">
<div className="text-2xl font-bold tracking-tight text-white">Gran <span className="text-green-500">Madrid</span></div>
<div className="text-[10px] uppercase tracking-widest text-blue-400">Casino Online</div>
<div className="flex flex-col mt-1">
<span className="text-sm font-medium text-white">Gran Madrid</span>
<a className="text-xs text-cyan-400 hover:text-cyan-300" href="https://www.gambling-affiliation.com/cpc/v=2QK476SCcOOzZOB6Wb1ZEeqCvJa3L6dtL7kbYMVqx0U_GA73155V1" rel="nofollow" target="_blank">casinogranmadrid.es</a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center min-w-[120px] hidden md:flex">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-slate-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs mt-1 text-blue-400">8100 Votos</span>
</div>
<div className="flex-grow text-center py-4 lg:py-0 border-t lg:border-t-0 lg:border-l lg:border-r lg:px-6 border-white/5">
<span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-yellow-400">Pack Bienvenida</span>
<h3 className="text-lg md:text-xl font-medium leading-tight text-white">
                                Hasta <span className="font-semibold text-green-400">200€ Extra</span> + <span className="font-semibold text-green-400">50 Tiradas Gratis</span>
</h3>
</div>
<div className="flex flex-col items-center gap-2 min-w-[180px] w-full lg:w-auto">
<a className="w-full bg-green-500 font-bold py-3 px-6 rounded shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 uppercase text-sm tracking-wide text-center hover:bg-green-400 text-blue-900" href="https://www.gambling-affiliation.com/cpc/v=2QK476SCcOOzZOB6Wb1ZEeqCvJa3L6dtL7kbYMVqx0U_GA73155V1" rel="nofollow" target="_blank">
                                Jugar Ahora
                            </a>
<span className="text-[10px] text-blue-500">Depósito mínimo: 10€</span>
</div>
</div>
<div className="mt-4 pt-4 border-t text-center border-white/5">
<p className="text-[10px] text-blue-500 leading-tight">
                            Publicidad | 18+ | Juega responsablemente | Condiciones en la web del operador.
                        </p>
</div>
</article>
</div>
</div>
</main>

<footer className="border-t bg-[#131128] pt-16 pb-8 border-white/5">
<div className="container mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-sm">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-gradient-to-tr from-cyan-500 to-green-500 rounded flex items-center justify-center">
<svg className="lucide lucide-gem w-3 h-3 text-white" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="text-base font-medium text-white">TopBonus <span className="text-cyan-400">España</span></span>
</div>
<p className="leading-relaxed mb-6 max-w-sm text-blue-400">
                        Somos el comparador independiente líder en España. Analizamos todos los casinos con licencia de la DGOJ para ofrecerte información veraz sobre bonos de bienvenida, promociones sin depósito y seguridad.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-blue-400 hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-blue-400 hover:text-white" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="transition-colors text-blue-400 hover:text-white" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div>
<h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-white">Top Categorías</h4>
<ul className="space-y-3 text-blue-400">
<li><a className="transition-colors flex items-center gap-2 hover:text-cyan-400" href="#"><svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Bonos de Bienvenida</a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-cyan-400" href="#"><svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Bonos Sin Depósito</a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-cyan-400" href="#"><svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Tiradas Gratis</a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-cyan-400" href="#"><svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> Nuevos Casinos</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 uppercase tracking-wider text-xs text-white">Normativa &amp; Ayuda</h4>
<ul className="space-y-3 text-blue-400">
<li><a className="transition-colors hover:text-cyan-400" href="#">Juego Responsable</a></li>
<li><a className="transition-colors hover:text-cyan-400" href="#">Términos y Condiciones</a></li>
<li><a className="transition-colors hover:text-cyan-400" href="#">Política de Privacidad</a></li>
<li><a className="transition-colors hover:text-cyan-400" href="#">Contacto</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-blue-500">© 2024 TopBonus España. Todos los derechos reservados.</p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded border text-blue-400 bg-white/5 border-white/5">
<svg className="lucide lucide-alert-circle w-4 h-4 text-red-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span>Juega con responsabilidad</span>
</div>
<div className="flex items-center gap-2 text-xs text-blue-400">
<span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] border bg-blue-800 border-blue-700 text-white">18+</span>
</div>
<div className="flex items-center gap-1 text-xs text-blue-400">
<span>🇪🇸</span> Licencia DGOJ
                        </div>
</div>
</div>
<div className="mt-8 p-4 rounded-lg border bg-white/5 border-white/5">
<p className="text-[10px] text-blue-500 text-justify leading-relaxed">
                         De acuerdo con el Real Decreto 958/2020, de 3 de noviembre, de comunicaciones comerciales de las actividades de juego, la publicidad de bonos de bienvenida y otras promociones de captación de nuevos usuarios está prohibida en España. Las ofertas mostradas en este sitio web pueden estar sujetas a condiciones específicas, como tener la cuenta verificada y una antigüedad mínima de 30 días. Por favor, consulta siempre los términos y condiciones completos en la web del operador antes de depositar. El juego puede ser adictivo, por favor juega responsablemente.
                    </p>
</div>
</div>
</div>
</footer>


    </>
  );
}
