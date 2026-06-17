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
      
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full object-cover" src="https://plus.unsplash.com/premium_photo-1754176867335-397a8e22c343?q=80&amp;w=1200&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div className="absolute inset-0 left-0 h-[120vh] -z-96" style={{backdropFilter: 'blur(20px)', mask: 'radial-gradient(ellipse at bottom left, black 32%, transparent 100% )'}}>
</div>
<div className="absolute inset-0 left-0 h-[120vh] -z-96" style={{backdropFilter: 'blur(20px)', mask: 'linear-gradient(transparent, black 77%)'}}></div>

<header className="relative">
<div className="mx-auto pt-6 px-12">
<div className="w-full flex items-center justify-between">

<div className="flex-1">
<span className="text-3xl font-light tracking-tight font-display">αndesα</span>
</div>

<div className="flex-1 flex justify-end">

<nav className="hidden md:flex items-center justify-end">
<div className="flex gap-2 bg-white/15 rounded-full p-1 backdrop-blur-md items-center">
<div className="flex gap-2 bg-white/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center">
<span className="relative flex w-1.5 h-1.5">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex bg-emerald-400 w-1.5 h-1.5 rounded-full"></span>
</span>
<span className="text-md font-medium text-white/95 tracking-tight py-1">Inicio</span>
</div>
<div className="flex gap-2 text-gray-200/70 items-center rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hover:text-white transition-colors cursor-pointer whitespace-nowrap overflow-hidden">
<span className="text-md py-1 truncate">Quienes somos</span>
</div>
<div className="flex gap-2 text-gray-200/70 items-center rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hover:text-white transition-colors cursor-pointer whitespace-nowrap overflow-hidden">
<span className="text-md py-1 truncate">Asóciate</span>
</div>
<div className="flex gap-2 text-gray-200/70 items-center rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hover:text-white transition-colors cursor-pointer whitespace-nowrap overflow-hidden">
<span className="text-md py-1 truncate">Artículos</span>
</div>
<div className="flex gap-2 text-gray-200/70 items-center rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hover:text-white transition-colors cursor-pointer whitespace-nowrap overflow-hidden">
<span className="text-md py-1 truncate">Actualidad</span>
</div>
<div className="flex gap-2 text-gray-200/70 items-center rounded-full pt-1.5 pr-3 pb-1.5 pl-3 hover:text-white transition-colors cursor-pointer whitespace-nowrap overflow-hidden">
<span className="text-md py-1 truncate">Sedes</span>
</div>
</div>
</nav>

<div className="flex gap-3 items-center">
<button className="flex h-full ml-3 text-gray-900 bg-white ring-black/10 rounded-full items-center justify-center px-7">
<svg className="icon icon-tabler icons-tabler-outline icon-tabler-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
</button>
</div>
</div>
</div>
</div></header>

<main className="relative">
<div className="mx-auto pt-6 md:pt-24 px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 justify-end items-end">

<div className="lg:col-span-7">
<h1 className="text-[44px] leading-[1.02] sm:text-[60px] md:text-[72px] lg:text-[92px] xl:text-7xl font-normal text-white tracking-tight">
            Por una <br/>sanidad pública
          </h1>
<p className="md:text-lg leading-relaxed text-base text-white/80 mt-6">
            Trabajamos para que todos los habitantes tengan acceso a servicios de salud de calidad y que puedan
            disfrutar de una vida saludable y plena.
          </p>

</div>

<div className="lg:col-span-5 h-full flex flex-col items-end gap-6">
<div className="sticky top-6 flex flex-col items-end gap-6">

<div className="w-full max-w-[280px] h-80"></div>

<div className="flex items-center gap-4 w-full max-w-[320px]">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-gray-900 text-sm md:text-base font-medium hover:bg-white/90 transition whitespace-nowrap" href="#">
                Asóciate
                <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base font-medium transition whitespace-nowrap" href="#">
                Leer artículos
                <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto px-12 mt-12">
<div className="h-px w-full bg-white/15"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-amber-300/20 text-amber-300 ring-1 ring-amber-300/30">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-sm text-white/85">La voz de la sociedad en pro de una sanidad de calidad</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-sky-300/20 text-sky-300 ring-1 ring-sky-300/30">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<p className="text-sm text-white/85">Tecnología y experiencia para brindarte la mejor atención</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-pink-300/20 text-pink-300 ring-1 ring-pink-300/30">
<svg className="lucide lucide-calendar-check-2 h-4 w-4" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
<path d="M3 10h18"></path>
<path d="m16 20 2 2 4-4"></path>
</svg>
</div>
<p className="text-sm text-white/85">Personalización de los servicios para brindarte la mejor atención</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-lime-300/20 text-lime-300 ring-1 ring-lime-300/30">
<svg className="lucide lucide-trophy h-4 w-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
<path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
<path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
</svg>
</div>
<p className="text-sm text-white/85">Experiencia en el sector sanitario</p>
</div>
<div className="flex gap-3 items-start">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-fuchsia-300/20 text-fuchsia-300 ring-1 ring-fuchsia-300/30">
<svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
<path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<p className="text-sm text-white/85">Red de profesionales certificados</p>
</div>
</div>
</div>
</main>


    </>
  );
}
