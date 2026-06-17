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
      
<div className="min-h-screen">

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-xl" style={{WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)'}}>
<a className="group flex items-center gap-2 text-sm text-gray-900 transition-colors" href="#top" style={{color: '#5F726F'}}>
<span className="text-2xl font-medium italic tracking-tight">
              Villa Celebration
            </span>
<span className="hidden sm:inline text-xs text-gray-400 font-medium tracking-tight" style={{color: '#808187'}}>
              ESPAÇO DE EVENTOS
            </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{color: '#808187'}}>
<a className="transition-colors hover:text-[#5F726F]" href="#top">Home</a>
<a className="transition-colors hover:text-[#5F726F]" href="#work">Eventos</a>
<a className="transition-colors hover:text-[#5F726F]" href="#services">Sobre</a>
<a className="transition-colors hover:text-[#5F726F]" href="#contact">Contato</a>
</div>
<div className="h-4 w-px bg-gray-200 hidden md:block"></div>
<a className="group text-white text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium" href="#contact" style={{background: '#5F726F'}}>
            Agende uma visita
            <svg aria-hidden="true" className="iconify w-4 h-4 transition-transform group-hover:translate-x-1 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-iconify-stroke="1.5" data-inline="false" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</nav>
</div>
<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6" id="top">

<section className="bg-white rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style="background-image:
            linear-gradient(to right, rgba(128,129,135,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,129,135,0.12) 1px, transparent 1px);
            background-size: 1.5rem 1.5rem;
            -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
            mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="w-fit inline-flex items-center gap-2.5 bg-white/85 backdrop-blur border border-gray-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 shadow-sm transition-colors" style={{color: '#808187'}}>
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full opacity-60" style={{background: '#D6E781', animation: 'ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2" style={{background: '#5F726F'}}></span>
</span>
                BEM-VINDO À VILLA CELEBRATION
              </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
                O espaço perfeito para
                <span className="italic" style={{color: '#808187'}}>celebrar</span>
<br/>
<span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, #5F726F, #808187)'}}>
                  momentos especiais
                </span>
</h1>
<p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium" style={{color: '#808187'}}>
                A <span className="font-semibold" style={{color: '#5F726F'}}>Villa Celebration</span> oferece estrutura elegante para eventos sociais.
              </p>
<div className="flex flex-wrap gap-4 items-center">
<a className="text-white pl-7 pr-6 py-4 rounded-full text-sm sm:text-base hover:shadow-lg transition-all duration-300 flex items-center gap-3 font-medium group" href="#contact" style={{background: '#5F726F'}}>
                  Agende uma visita
                  <span className="rounded-full p-1 transition-colors" style={{background: 'rgba(227,244,136,0.25)'}}>
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-iconify-stroke="1.5" data-inline="false" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</a>
<a className="px-6 py-4 rounded-full text-sm sm:text-base transition-all duration-300 font-medium flex items-center gap-2 group" href="#work" style={{color: '#808187'}}>
                  Conheça os Eventos
                  <svg aria-hidden="true" className="iconify w-4 h-4 transition-colors iconify--lucide" data-height="16" data-icon="lucide:chevron-down" data-iconify-stroke="1.5" data-inline="false" data-width="16" height="16" role="img" style={{color: '#808187'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-white hover:shadow-sm transition-all">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:map-pin" data-iconify-stroke="1.5" data-width="16" height="16" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Casamentos
                  </div>
<div className="mt-3 text-sm font-medium" style={{color: '#5F726F'}}>
                    Estrutura completa para o seu grande dia.
                  </div>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-white hover:shadow-sm transition-all">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:mouse-pointer-click" data-iconify-stroke="1.5" data-width="16" height="16" role="img" style={{color: '#808187'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Aniversários
                  </div>
<div className="mt-3 text-sm font-medium" style={{color: '#5F726F'}}>
                    Celebre a vida com elegância e conforto.
                  </div>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-white hover:shadow-sm transition-all">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:clock" data-iconify-stroke="1.5" data-width="16" height="16" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
                    Formaturas
                  </div>
<div className="mt-3 text-sm font-medium" style={{color: '#5F726F'}}>
                    O espaço perfeito para comemorar sua conquista.
                  </div>
</div>
</div>
</div>
<div className="lg:col-span-5 relative h-[32rem] sm:h-[36rem] lg:h-[40rem] w-full">
<div className="absolute top-10 right-10 w-full h-full rounded-[2rem] -rotate-3 z-0" style={{background: 'rgba(227,244,136,0.25)'}}></div>
<div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 z-10">
<img alt="Property development marketing" className="hover:grayscale-0 transition-all duration-700 hover:scale-105 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1617357283170-d924176b7f92?w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-gray-100/60">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold tracking-wide uppercase" style={{color: '#808187'}}>Sobre a Villa Celebration</span>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:trending-up" data-iconify-stroke="1.5" data-width="16" height="16" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-height="20" data-icon="lucide:building-2" data-iconify-stroke="1.5" data-width="20" height="20" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</g>
</svg>
</div>
<div className="">
<p className="text-sm font-semibold" style={{color: '#5F726F'}}>Eventos inesquecíveis</p>
<p className="text-xs font-medium" style={{color: '#808187'}}>Conforto e elegância em cada detalhe</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
<div className="text-xs font-medium" style={{color: '#808187'}}>Eventos</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Casamentos</div>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
<div className="text-xs font-medium" style={{color: '#808187'}}>Momentos</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Únicos</div>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
<div className="text-xs font-medium" style={{color: '#808187'}}>Estrutura</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Completa</div>
</div>
</div>
</div>
</div>
<div className="absolute -top-3 left-6 sm:left-10 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-iconify-stroke="1.5" data-width="16" height="16" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
<span className="text-xs font-semibold" style={{color: '#808187'}}>📍 Brasília – DF</span>
</div>
</div>
</div>
</section>

<section className="w-full py-12 mt-8 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F9F9F9] to-transparent pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F9F9F9] to-transparent pointer-events-none"></div>
<div className="flex w-[200%] select-none" style={{animation: 'marquee 38s linear infinite'}}>
<div className="flex items-center justify-around w-1/2 gap-12 px-8">
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:landmark" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-lg font-semibold">Casamentos</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:home" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</g>
</svg>
<span className="text-lg font-semibold">Aniversários</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:building" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Formaturas</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:gallery-horizontal-end" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M2 7v10M6 5v14"></path>
<rect height="18" rx="2" width="12" x="10" y="3"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Eventos empresariais</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:layout-template" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Celebrações</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:megaphone" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
<path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
</g>
</svg>
<span className="text-lg font-semibold">Momentos Especiais</span>
</div>
</div>
<div className="flex items-center justify-around w-1/2 gap-12 px-8">
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:landmark" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-lg font-semibold">Casamentos</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:home" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</g>
</svg>
<span className="text-lg font-semibold">Aniversários</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:building" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Formaturas</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:gallery-horizontal-end" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M2 7v10M6 5v14"></path>
<rect height="18" rx="2" width="12" x="10" y="3"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Eventos empresariais</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:layout-template" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</g>
</svg>
<span className="text-lg font-semibold">Celebrações</span>
</div>
<div className="flex items-center gap-3 transition-colors" style={{color: '#808187'}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-height="28" data-icon="lucide:megaphone" data-iconify-stroke="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
<path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
</g>
</svg>
<span className="text-lg font-semibold">Momentos Especiais</span>
</div>
</div>
</div>
</section>

<section className="py-20" id="work">
<div className="text-center mb-14">
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-semibold" style={{color: '#5F726F'}}>
              Eventos
            </h2>
<p className="mt-4 text-sm sm:text-base font-medium max-w-2xl mx-auto" style={{color: '#808187'}}>
              Casamentos, Aniversários, Formaturas e Eventos empresariais na Villa Celebration.
            </p>
</div>

<div className="flex flex-col gap-6 max-w-5xl mx-auto relative">

<article className="group sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
<div className="p-8 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-sm" style={{color: '#808187'}}>
<span className="font-medium px-3 py-1 rounded-full transition-colors w-fit" style={{background: 'rgba(227,244,136,0.35)', color: '#5F726F'}}>
                    Casamentos
                  </span>
<span className="font-medium flex items-center gap-2 transition-colors" style={{color: '#5F726F'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:clipboard-check" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14l2 2l4-4"></path>
</g>
</svg>
                    Cerimônia e Recepção
                  </span>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

<div className="lg:col-span-4">

<div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Espaço</div>
<div className="mt-4">
<div className="text-4xl tracking-tight font-semibold leading-none" style={{color: '#5F726F'}}>
                          VC
                        </div>
<div className="mt-2 text-sm font-semibold tracking-tight" style={{color: '#5F726F'}}>Villa Celebration</div>
<div className="mt-1 text-xs font-medium" style={{color: '#808187'}}>Brasília, DF</div>
</div>
</div>
<div className="mt-5">
<h3 className="text-2xl sm:text-3xl tracking-tight leading-tight font-semibold" style={{color: '#5F726F'}}>
                        O cenário ideal para o seu 'Sim'
                      </h3>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>
                          Estrutura completa
                        </span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(128,129,135,0.10)', color: '#5F726F'}}>
                          Elegância
                        </span>
</div>
<p className="mt-5 text-sm sm:text-base font-medium leading-relaxed" style={{color: '#808187'}}>
                        Nosso espaço foi projetado para oferecer conforto e experiências inesquecíveis para o seu casamento.
                      </p>
</div>
</div>

<div className="lg:col-span-8">
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 sm:col-span-8 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Casamentos hero visual" className="w-full h-64 sm:h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&amp;q=80"/>
</div>
<div className="col-span-12 sm:col-span-4 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Casamentos detail visual" className="w-full h-64 sm:h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&amp;q=80"/>
</div>
<div className="col-span-12 sm:col-span-5 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Casamentos interior visual" className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=900&amp;q=80"/>
</div>
<div className="col-span-12 sm:col-span-7 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 relative">
<img alt="Casamentos lifestyle visual" className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1100&amp;q=80"/>
<div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl border border-gray-100/70 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Destaques</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Recepção • Cerimônia • Festa</div>
</div>
<div className="shrink-0 rounded-full p-2" style={{background: 'rgba(227,244,136,0.35)', color: '#5F726F'}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-height="20" data-icon="lucide:arrow-up-right" data-iconify-stroke="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold" style={{color: '#808187'}}>
<span className="inline-block w-2 h-2 rounded-full" style={{background: '#5F726F'}}></span>
                        Amplo espaço
                      </span>
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold" style={{color: '#808187'}}>
<span className="inline-block w-2 h-2 rounded-full" style={{background: '#D6E781'}}></span>
                        Elegância
                      </span>
<span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold" style={{color: '#808187'}}>
<span className="inline-block w-2 h-2 rounded-full" style={{background: '#808187'}}></span>
                        Sofisticação
                      </span>
</div>
</div>
</div>
</div>
</article>

<article className="group sticky top-28 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
<div className="p-8 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-sm" style={{color: '#808187'}}>
<span className="font-medium px-3 py-1 rounded-full transition-colors w-fit" style={{background: 'rgba(214,231,129,0.35)', color: '#5F726F'}}>
                    Aniversários
                  </span>
<span className="font-medium flex items-center gap-2 transition-colors" style={{color: '#5F726F'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:layout-panel-top" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
</g>
</svg>
                    Festas e Celebrações
                  </span>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-4">
<div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Espaço</div>
<div className="mt-4">
<div className="text-4xl tracking-tight font-semibold leading-none" style={{color: '#5F726F'}}>
                          VC
                        </div>
<div className="mt-2 text-sm font-semibold tracking-tight" style={{color: '#5F726F'}}>Villa Celebration</div>
<div className="mt-1 text-xs font-medium" style={{color: '#808187'}}>Brasília, DF</div>
</div>
</div>
<div className="mt-5">
<h3 className="text-2xl sm:text-3xl tracking-tight leading-tight font-semibold" style={{color: '#5F726F'}}>
                        Momentos que marcam a vida
                      </h3>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(214,231,129,0.25)', color: '#5F726F'}}>
                          Amplo espaço
                        </span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(128,129,135,0.10)', color: '#5F726F'}}>
                          Conforto
                        </span>
</div>
<p className="mt-5 text-sm sm:text-base font-medium leading-relaxed" style={{color: '#808187'}}>
                        Perfeito para reunir amigos e familiares, com versatilidade para todos os tipos de festas.
                      </p>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Aniversários hero visual" className="w-full h-64 sm:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&amp;q=80"/>
</div>
<div className="col-span-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Aniversários detail visual" className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&amp;q=80"/>
</div>
<div className="col-span-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Aniversários lifestyle visual" className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&amp;q=80"/>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Festa</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>15 Anos</div>
</div>
<div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Festa</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Comemorações</div>
</div>
<div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Festa</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Formaturas</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group sticky top-32 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
<div className="p-8 md:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-sm" style={{color: '#808187'}}>
<span className="font-medium px-3 py-1 rounded-full transition-colors w-fit" style={{background: 'rgba(227,244,136,0.35)', color: '#5F726F'}}>
                    Empresarial
                  </span>
<span className="font-medium flex items-center gap-2 transition-colors" style={{color: '#5F726F'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:palette" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
                    Eventos Corporativos
                  </span>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-4">
<div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Espaço</div>
<div className="mt-4">
<div className="text-4xl tracking-tight font-semibold leading-none" style={{color: '#5F726F'}}>
                          VC
                        </div>
<div className="mt-2 text-sm font-semibold tracking-tight" style={{color: '#5F726F'}}>Villa Celebration</div>
<div className="mt-1 text-xs font-medium" style={{color: '#808187'}}>Brasília, DF</div>
</div>
</div>
<div className="mt-5">
<h3 className="text-2xl sm:text-3xl tracking-tight leading-tight font-semibold" style={{color: '#5F726F'}}>
                        Estrutura para seus negócios
                      </h3>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>
                          Confraternizações
                        </span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(128,129,135,0.10)', color: '#5F726F'}}>
                          Workshops
                        </span>
</div>
<p className="mt-5 text-sm sm:text-base font-medium leading-relaxed" style={{color: '#808187'}}>
                        Um ambiente sofisticado e preparado para receber os eventos da sua empresa com excelência.
                      </p>
</div>
</div>
<div className="lg:col-span-8">
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 sm:col-span-7 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Eventos empresariais hero visual" className="w-full h-64 sm:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1617357283170-d924176b7f92?w=1200&amp;q=80"/>
</div>
<div className="col-span-12 sm:col-span-5 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Eventos empresariais detail visual" className="w-full h-64 sm:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1000&amp;q=80"/>
</div>
<div className="col-span-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Eventos empresariais interior visual" className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=900&amp;q=80"/>
</div>
<div className="col-span-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
<img alt="Eventos empresariais lifestyle visual" className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&amp;q=80"/>
</div>
</div>
<div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
<div>
<div className="text-xs font-semibold uppercase tracking-wide" style={{color: '#808187'}}>Possibilidades</div>
<div className="mt-1 text-sm font-semibold" style={{color: '#5F726F'}}>Palestras • Lançamentos • Jantares</div>
</div>
<div className="shrink-0 rounded-full p-2" style={{background: 'rgba(128,129,135,0.10)', color: '#5F726F'}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-height="20" data-icon="lucide:badge-check" data-iconify-stroke="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="py-20 border-t border-gray-200" id="services">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-semibold" style={{color: '#5F726F'}}>
              Sobre
            </h2>
<p className="mt-4 text-sm sm:text-base font-medium max-w-2xl mx-auto" style={{color: '#808187'}}>
              Nosso espaço foi projetado para oferecer conforto, elegância e experiências inesquecíveis para cada celebração.
            </p>
</div>
<div className="flex justify-center gap-3 mb-12 flex-wrap">
<button className="filter-btn text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2 font-medium shadow-md transition-all duration-300 transform hover:-translate-y-0.5" data-filter="all" style={{background: 'rgb(95, 114, 111)', color: 'rgb(255, 255, 255)'}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
              Todos
            </button>
<button className="filter-btn group bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm transition-all font-medium" data-filter="branding" style={{color: '#808187'}}>Casamentos</button>
<button className="filter-btn group bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm transition-all font-medium" data-filter="web" style={{color: '#808187'}}>Sociais</button>
<button className="filter-btn group bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm transition-all font-medium" data-filter="campaigns" style={{color: '#808187'}}>Empresariais</button>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="service-card group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1" data-category="branding">
<div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl transition-colors duration-500" style={{background: 'rgba(227,244,136,0.35)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 transition-colors duration-500 iconify--lucide" data-height="32" data-icon="lucide:palette" data-iconify-stroke="1.5" data-width="32" height="32" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl tracking-tight mb-4 font-semibold transition-colors" style={{color: '#5F726F'}}>
                Nosso <span style={{color: '#808187'}}>Espaço</span>
</h3>
<p className="text-sm sm:text-base leading-relaxed mb-8 font-medium min-h-20" style={{color: '#808187'}}>
                A Villa Celebration oferece estrutura elegante para eventos sociais, garantindo que cada momento seja inesquecível.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>Conforto</span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>Elegância</span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>Exclusividade</span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>Bem-estar</span>
</div>
<a className="w-full flex justify-between items-center py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 group/link" href="#work" style={{background: 'rgba(227,244,136,0.25)', color: '#5F726F'}}>
                Ver mais fotos
                <svg aria-hidden="true" className="iconify w-4 h-4 group-hover/link:rotate-45 transition-transform iconify--lucide" data-height="16" data-icon="lucide:arrow-up-right" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="service-card group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1" data-category="web" id="contact">
<div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl transition-colors duration-500" style={{background: 'rgba(214,231,129,0.35)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 transition-colors duration-500 iconify--lucide" data-height="32" data-icon="lucide:layout-template" data-iconify-stroke="1.5" data-width="32" height="32" role="img" style={{color: '#5F726F'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</g>
</svg>
</div>
<h3 className="text-2xl tracking-tight mb-4 font-semibold transition-colors" style={{color: '#5F726F'}}>
                Fale <span style={{color: '#808187'}}>Conosco</span>
</h3>
<p className="text-sm sm:text-base leading-relaxed mb-8 font-medium min-h-20" style={{color: '#808187'}}>
                Agende uma visita e venha conhecer de perto o espaço perfeito para celebrar seus momentos especiais.
              </p>
<div className="flex flex-col gap-2 mb-8">
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100 w-fit" style={{background: 'rgba(214,231,129,0.25)', color: '#5F726F'}}>📍 Brasília – DF</span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100 w-fit" style={{background: 'rgba(214,231,129,0.25)', color: '#5F726F'}}>📲 WhatsApp</span>
<span className="text-xs font-semibold rounded-full px-3 py-1 border border-gray-100 w-fit" style={{background: 'rgba(214,231,129,0.25)', color: '#5F726F'}}>📞 Telefone: (61) 99999-9999</span>
</div>
<a className="w-full flex justify-between items-center py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 group/link" href="#contact" style={{background: 'rgba(214,231,129,0.25)', color: '#5F726F'}}>
                Agende uma visita
                <svg aria-hidden="true" className="iconify w-4 h-4 group-hover/link:rotate-45 transition-transform iconify--lucide" data-height="16" data-icon="lucide:arrow-up-right" data-iconify-stroke="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg></a></div></div></section></main></div>
    </>
  );
}
