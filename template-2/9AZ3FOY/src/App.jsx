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
      

<header className="sticky top-0 z-50 w-full bg-neutral-950/95 backdrop-blur border-b border-neutral-800 shadow-sm">
<div className="max-w-7xl mx-auto px-5 flex h-20 items-center justify-between">
<a className="flex items-center group" href="/">
<img alt="Logo" className="h-9 w-auto select-none" draggable="false" src="https://i.imgur.com/bFzFbLL.png" style={{minWidth: `2.25rem`}} />
</a>
<nav className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/">Início</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/tours">Tours</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/vinicolas-e-vinhos-chilenos">Vinhos de Chile</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/ranking-dos-melhores-restaurantes-de-Santiago-do-chile">Restaurantes</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/centros-de-esqui-chile">Centros de Esqui</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/clima-no-santiago-do-chile">Clima</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/pesquisar-por-numero-de-voo">Estado de voos</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-pink-600" href="/app/blog">Blog</a>
</nav>
<button className="lg:hidden text-white hover:bg-white/10 p-2 rounded transition">
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<nav aria-label="Acessos rápidos" className="w-full bg-[#1238f5] px-0 py-2">
<div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center items-center w-full">
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/app/clima-no-santiago-do-chile">
<svg className="w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M5 5l1.5 1.5"></path><path d="M17.5 17.5L19 19"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M5 19l1.5-1.5"></path><path d="M17.5 6.5L19 5"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Clima</span>
</a>
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/app/converter-reais-em-pesos-chilenos">
<svg className="w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-7.36L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 7.36L3 16"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Conversor de Moeda</span>
</a>
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/ranking-dos-melhores-restaurantes-de-Santiago-do-chile.html">
<svg className="lucide lucide-utensils-icon lucide-utensils w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Guia gastronômico</span>
</a>
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/app/centros-de-esqui-chile">
<svg className="lucide lucide-mountain-snow-icon lucide-mountain-snow w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Centros de esqui</span>
</a>
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/app/pesquisar-por-numero-de-voo">
<svg className="lucide lucide-plane-icon lucide-plane w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Estado de voos</span>
</a>
<a className="flex flex-col items-center group focus:outline-none w-full py-2 sm:w-auto sm:min-w-[80px]" href="/emergencias">
<svg className="lucide lucide-triangle-alert-icon lucide-triangle-alert w-10 h-10 sm:w-7 sm:h-7 text-white mb-1 group-hover:text-yellow-300 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="text-base sm:text-xs md:text-sm font-semibold text-white group-hover:text-yellow-300 text-center leading-tight">Emergências</span>
</a>
</div>
</nav>
<main className="max-w-7xl mx-auto px-2 md:px-8 py-12">
<section className="flex flex-col items-center mb-12">
<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-pink-600 mb-3 animate-stagger visible">Ranking dos Melhores Restaurantes de Santiago do Chile</h1>
<p className="text-center text-neutral-300 mb-8 max-w-2xl mx-auto text-lg animate-stagger visible" style={{fontWeight: `500`}}>
        Descubra os restaurantes mais bem avaliados de Santiago segundo milhares de viajantes e locais.<br className="hidden sm:inline" />
        Veja fotos, avaliações e informações práticas para escolher sua próxima experiência gastronômica!
      </p>
</section>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10" id="restaurants-list">

<div className="group relative bg-neutral-900/95 rounded-2xl shadow-xl border border-neutral-800 overflow-hidden animate-stagger hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full visible">
<div className="relative flex">
<img alt="Hard Rock Cafe" className="w-full h-48 object-cover transition scale-100 group-hover:scale-105 duration-300" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=ATKogpc3F-9EIJZpb4aXdVTIljeNRlyrAHo9fZFH22wLcC9rTEvbyoeLQVb9wuxAPb2wpafEKrJbiu_WhXHvww80vsyZPagAMiSVziOAITzwMsCzfNnTubK4haNE5B47xjdzW5-xYR3_vTSLkH8FUVCsNCA8nRZcOHPbqctdjy9MRoESui-okLFN3hvXHGkEZyuwY0snQYse7XcvttRTs8yO658lUkX7I5jGS9vV_TS5cC4WOxLynr1nAg_cK6nZqMg5YDCwMq79x_5pmdjrWwQHnBm3x0XVA5NG-Jq3F5ObnLk6nQ&key=AIzaSyA1DYkRL-J05Mq9XDaCcWQ6ucG-umeDrJA" />
<div className="absolute top-2 left-2 flex items-center gap-1 z-10 bg-white/90 rounded px-2 py-0.5 shadow-sm border border-yellow-200">
<span className="inline-block align-middle" style={{width: `22px`, height: `22px`, minWidth: `22px`, minHeight: `22px`}}>
<svg fill="#F59E42" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.39 7.19H22l-6.19 4.5L17.61 22 12 16.9 6.39 22l1.8-8.31L2 9.19h7.61z"></path></svg>
</span>
<span className="text-xs font-semibold text-yellow-700 whitespace-nowrap">top X do Ranking</span>
</div>

<div className="absolute top-2 right-2 flex items-center gap-1 z-10 bg-black/70 rounded px-2 py-0.5 shadow-sm border border-neutral-400">
<svg className="lucide lucide-utensils w-5 h-5 text-neutral-200" data-lucide="utensils" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span className="text-xs font-semibold text-neutral-200 whitespace-nowrap">Internacional</span>
</div>
</div>
<div className="flex-1 flex flex-col p-5">
<h2 className="text-lg font-semibold text-pink-600 tracking-tight mb-1">Hard Rock Cafe</h2>
<div className="flex items-center gap-2 mb-2">
<span className="flex items-center text-yellow-400 font-semibold text-base">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.5
            </span>
<span className="text-xs text-neutral-500">(10258 avaliações)</span>
</div>
<div className="text-sm text-neutral-400 mb-2 flex items-center gap-1">
<span className="font-semibold text-neutral-300">Culinária</span>
<span>Internacional</span>
<span className="text-neutral-500">· $$$</span>
</div>
<div className="text-xs text-neutral-500 mb-2">
            Hard Rock Cafe, Cenco Costanera - Nueva Tobalaba 0412, Local 1226, Nivel 1, 7500000 Santiago, Providencia, Región Metropolitana, Chile
          </div>
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-2 flex-wrap">
<a className="text-pink-400 underline hover:text-pink-300" href="https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x9662cf5e72210015:0xeba2ccab1ea9445b" target="_blank">Ver no Google Maps</a>
<a className="ml-1 px-2 py-0.5 rounded bg-pink-50/10 text-pink-300 border border-pink-400/30 text-xs font-semibold hover:bg-pink-400/10 transition" href="https://cafe.hardrock.com/santiago/#utm_source=Google&utm_medium=Yext&utm_campaign=Listings" target="_blank">Site oficial</a>
</div>
<p className="text-neutral-300 text-sm mt-auto">
            A famosa rede internacional com sua proposta clássica de hambúrgueres, costelas BBQ e comida americana, rodeada por memorabilia do rock. Ambiente familiar e turístico.
          </p>
</div>
</div>

<div className="group relative bg-neutral-900/95 rounded-2xl shadow-xl border border-neutral-800 overflow-hidden animate-stagger hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full visible">
<div className="relative flex">
<img alt="Restaurante Exemplo 2" className="w-full h-48 object-cover transition scale-100 group-hover:scale-105 duration-300" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" />

<div className="absolute top-2 right-2 flex items-center gap-1 z-10 bg-black/70 rounded px-2 py-0.5 shadow-sm border border-cyan-400">
<svg className="lucide lucide-fish w-5 h-5 text-cyan-400" data-lucide="fish" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></svg>
<span className="text-xs font-semibold text-cyan-400 whitespace-nowrap">Japonesa</span>
</div>
</div>
<div className="flex-1 flex flex-col p-5">
<h2 className="text-lg font-semibold text-pink-600 tracking-tight mb-1">Restaurante Exemplo 2</h2>
<div className="flex items-center gap-2 mb-2">
<span className="flex items-center text-yellow-400 font-semibold text-base">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.7
            </span>
<span className="text-xs text-neutral-500">(1200 avaliações)</span>
</div>
<div className="text-sm text-neutral-400 mb-2 flex items-center gap-1">
<span className="font-semibold text-neutral-300">Culinária</span>
<span>Japonesa</span>
<span className="text-neutral-500">· $$$</span>
</div>
<div className="text-xs text-neutral-500 mb-2">
            Exemplo Endereço 2, Santiago, Chile
          </div>
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-2 flex-wrap">
<a className="text-pink-400 underline hover:text-pink-300" href="#" target="_blank">Ver no Google Maps</a>
<a className="ml-1 px-2 py-0.5 rounded bg-pink-50/10 text-pink-300 border border-pink-400/30 text-xs font-semibold hover:bg-pink-400/10 transition" href="#" target="_blank">Site oficial</a>
</div>
<p className="text-neutral-300 text-sm mt-auto">
            Sushi fresco e pratos quentes japoneses preparados por chefs renomados.
          </p>
</div>
</div>

<div className="group relative bg-neutral-900/95 rounded-2xl shadow-xl border border-neutral-800 overflow-hidden animate-stagger hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full visible">
<div className="relative flex">
<img alt="Restaurante Exemplo 3" className="w-full h-48 object-cover transition scale-100 group-hover:scale-105 duration-300" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=600&q=80" />

<div className="absolute top-2 right-2 flex items-center gap-1 z-10 bg-black/70 rounded px-2 py-0.5 shadow-sm border border-purple-400">
<svg className="lucide lucide-wine w-5 h-5 text-purple-400" data-lucide="wine" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
<span className="text-xs font-semibold text-purple-400 whitespace-nowrap">Francesa</span>
</div>
</div>
<div className="flex-1 flex flex-col p-5">
<h2 className="text-lg font-semibold text-pink-600 tracking-tight mb-1">Restaurante Exemplo 3</h2>
<div className="flex items-center gap-2 mb-2">
<span className="flex items-center text-yellow-400 font-semibold text-base">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
            </span>
<span className="text-xs text-neutral-500">(950 avaliações)</span>
</div>
<div className="text-sm text-neutral-400 mb-2 flex items-center gap-1">
<span className="font-semibold text-neutral-300">Culinária</span>
<span>Francesa</span>
<span className="text-neutral-500">· $$$$</span>
</div>
<div className="text-xs text-neutral-500 mb-2">
            Exemplo Endereço 3, Santiago, Chile
          </div>
<div className="text-xs text-neutral-500 mb-2 flex items-center gap-2 flex-wrap">
<a className="text-pink-400 underline hover:text-pink-300" href="#" target="_blank">Ver no Google Maps</a>
<a className="ml-1 px-2 py-0.5 rounded bg-pink-50/10 text-pink-300 border border-pink-400/30 text-xs font-semibold hover:bg-pink-400/10 transition" href="#" target="_blank">Site oficial</a>
</div>
<p className="text-neutral-300 text-sm mt-auto">
            Culinária francesa clássica em um ambiente elegante e sofisticado.
          </p>
</div>
</div>

</div>
</main>

    </>
  );
}
