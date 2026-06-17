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
      

<header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity" href="#">
                    Studio Karim
                </a>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#projets">Projets</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#temoignages">Témoignages</a>
</nav>
<div className="flex items-center">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/20" href="https://wa.me/212XXXXXXXXX?text=Bonjour,%20j'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20site%20web" rel="noopener noreferrer" target="_blank">
<svg className="h-5 w-5 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
                    Démarrer sur WhatsApp
                </a>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-[12rem] lg:text-[20rem] font-semibold text-zinc-50 select-none pointer-events-none tracking-tighter leading-none w-full text-center">
            Studio
        </div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
                Transformez votre business en une vitrine qui vend
            </h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 leading-relaxed">
                Je design et développe des sites rapides, modernes et sur-mesure — de Figma au live en 7 jours.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95" href="#projets">
                    Voir mes projets
                </a>
<a className="w-full sm:w-auto rounded-full border-2 border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50" href="https://wa.me/212XXXXXXXXX?text=Bonjour,%20j'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20site%20web" rel="noopener noreferrer" target="_blank">
                    Discuter sur WhatsApp
                </a>
</div>

<div className="mx-auto mt-20 max-w-5xl">
<div className="relative aspect-video rounded-3xl bg-zinc-100 border border-zinc-200/50 shadow-2xl shadow-zinc-200/50 overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/40 to-transparent"></div>
<span className="relative text-xl font-medium text-zinc-400 group-hover:text-zinc-500 transition-colors">Votre projet ici</span>

<div className="absolute top-6 left-6 flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
<div className="px-8 py-4 sm:py-0 text-center flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">20+</span>
<span className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-widest">Sites livrés</span>
</div>
<div className="px-8 py-4 sm:py-0 text-center flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">7 jours</span>
<span className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-widest">Délai moyen</span>
</div>
<div className="px-8 py-4 sm:py-0 text-center flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">100%</span>
<span className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-widest">Clients satisfaits</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-zinc-900 mb-16">Ce que je fais</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-3xl border border-zinc-200 bg-white p-10 transition-all hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100">
<div className="absolute top-8 right-8 text-zinc-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-900">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 transition-colors group-hover:bg-[#ccff00]">
<i className="w-5 h-5" data-lucide="layout-template"></i>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-900">Site Vitrine</h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Un site professionnel qui présente votre activité et génère des contacts.
                    </p>
</div>

<div className="group relative rounded-3xl border border-zinc-900 bg-zinc-950 p-10 transition-all hover:shadow-2xl hover:shadow-[#ccff00]/10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ccff00]">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-white transition-colors group-hover:bg-[#ccff00] group-hover:text-zinc-950">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-white">Design UI/UX</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Des maquettes Figma pixel-perfect avant de toucher au code.
                    </p>
</div>

<div className="group relative rounded-3xl border border-zinc-200 bg-white p-10 transition-all hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100">
<div className="absolute top-8 right-8 text-zinc-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-900">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
<div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 transition-colors group-hover:bg-[#ccff00]">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-900">Site E-commerce</h3>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Une boutique en ligne rapide, belle et facile à gérer.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="projets">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Projets récents</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-200 mb-6 transition-all group-hover:shadow-lg group-hover:shadow-zinc-200/50 relative">

<div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-500">
<i className="w-8 h-8 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Restaurant El Bahia</h3>
<span className="inline-flex items-center rounded-full bg-[#ccff00]/20 px-2.5 py-1 text-xs font-medium text-zinc-800">Web</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-200 mb-6 transition-all group-hover:shadow-lg group-hover:shadow-zinc-200/50 relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-500">
<i className="w-8 h-8 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Salon Nadia Beauty</h3>
<span className="inline-flex items-center rounded-full bg-[#ccff00]/20 px-2.5 py-1 text-xs font-medium text-zinc-800">Web</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-200 mb-6 transition-all group-hover:shadow-lg group-hover:shadow-zinc-200/50 relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-500">
<i className="w-8 h-8 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Coach Ahmed Fitness</h3>
<span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">UI/UX</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-200 mb-6 transition-all group-hover:shadow-lg group-hover:shadow-zinc-200/50 relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-500">
<i className="w-8 h-8 opacity-50" data-lucide="image"></i>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Agence Immo Tanger</h3>
<span className="inline-flex items-center rounded-full bg-[#ccff00]/20 px-2.5 py-1 text-xs font-medium text-zinc-800">Web</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="temoignages">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-zinc-900 mb-16">Ce que disent mes clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-zinc-400">
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 leading-relaxed mb-8">
                            "Le résultat a dépassé mes attentes. Mon site est moderne, rapide et mes clients me contactent directement via WhatsApp."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-medium">YB</div>
<div>
<div className="font-semibold text-zinc-900">Youssef B.</div>
<div className="text-sm text-zinc-500">Restaurant, Tanger</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="relative">
<div className="flex gap-1 mb-6 text-zinc-600">
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
<i className="w-5 h-5 fill-current text-[#ccff00] stroke-none" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 leading-relaxed mb-8">
                            "En moins d'une semaine j'avais un site professionnel. Le processus était simple et le design est exactement ce que je voulais."
                        </p>
</div>
<div className="relative flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-medium">SR</div>
<div>
<div className="font-semibold text-white">Salma R.</div>
<div className="text-sm text-zinc-400">Coach bien-être, Casablanca</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] py-32 px-6 lg:px-8 border-t border-zinc-900 font-sans overflow-hidden">
<div className="mx-auto max-w-7xl">

<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-24 lg:mb-32">

<div className="mt-2">
<span className="text-[#E5F333] text-sm font-semibold tracking-wide flex items-center gap-2">
<span className="text-xl leading-none mb-0.5">+</span> Services
                    </span>
</div>

<div className="max-w-3xl md:w-[70%]">
<h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.2]">
<span className="text-white">We Deliver</span>
<span className="text-[#E5F333] mx-2">—</span>
<span className="text-zinc-500">Comprehensive Solutions to help businesses Grow and thrive.</span>
</h2>
</div>
</div>

<div className="space-y-24 lg:space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-10 lg:gap-16 items-start lg:items-center group">

<div className="flex flex-col gap-6 lg:gap-8">
<div className="w-10 h-10 rounded-full bg-[#E5F333] flex items-center justify-center text-black font-semibold text-sm shrink-0">
                            01
                        </div>
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Branding</h3>
</div>

<div className="relative w-full aspect-[4/3] rounded-3xl bg-[#111] overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">

<div className="absolute bottom-0 w-full h-[30%] bg-[#1a1a1a] border-t border-white/5 transform skew-y-2 scale-110"></div>
<div className="absolute bottom-0 w-full h-[25%] bg-[#151515] transform -skew-y-2 scale-110"></div>

<div className="absolute top-[20%] flex flex-col items-center">
<div className="w-6 h-4 bg-zinc-800 rounded-t-sm"></div>
<div className="w-8 h-2 bg-zinc-900 rounded-full -mt-1 z-10"></div>
<div className="w-14 h-24 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-b-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
<div className="w-4 h-4 border border-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute z-20 w-28 h-28 rounded-full bg-[#E5F333] flex flex-col items-center justify-center text-black shadow-2xl transition-transform duration-500 group-hover:scale-105 cursor-pointer">
<i className="w-6 h-6 mb-1" data-lucide="arrow-up-right"></i>
<span className="text-xs font-semibold tracking-tight mt-0.5">View Details</span>
</div>
</div>

<div className="relative w-full">

<div className="hidden lg:block absolute right-full top-[14px] w-16 border-t border-zinc-700 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 rotate-45 bg-[#E5F333] shrink-0"></div>
<h4 className="text-white text-base font-semibold tracking-tight">Branding Services</h4>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Identity Design</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Visual Branding</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Brand Marketing</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Brand Strategy</span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-10 lg:gap-16 items-start lg:items-center group">

<div className="flex flex-col gap-6 lg:gap-8">
<div className="w-10 h-10 rounded-full border border-[#E5F333]/80 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                            02
                        </div>
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">UI/UX Design</h3>
</div>

<div className="relative w-full aspect-[4/3] rounded-3xl bg-[#0d0d0d] overflow-hidden border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">

<div className="absolute bottom-0 w-full h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjAxIiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay blur-[2px]"></div>
<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/10 to-transparent blur-xl"></div>

<div className="relative z-10 w-40 h-[18rem] rounded-[2.5rem] bg-[#050505] border-[6px] border-[#222] flex flex-col items-center pt-3 px-4 pb-8 shadow-2xl">
<div className="w-[45%] h-4 bg-black rounded-full mb-6 relative z-20 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"></div>
<div className="text-center w-full mt-2 space-y-1">
<span className="text-white text-xs font-medium tracking-wide">iPhone 15</span><br/>
<span className="text-white/60 text-xs">Mockup</span>
</div>
<div className="mt-auto flex w-full justify-center">
<span className="text-[#E5F333] text-7xl sm:text-8xl font-semibold tracking-tighter leading-none -ml-2">15</span>
</div>
</div>
</div>

<div className="relative w-full">

<div className="hidden lg:block absolute right-full top-[14px] w-16 border-t border-zinc-700 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 rotate-45 bg-zinc-400 shrink-0"></div>
<h4 className="text-white text-base font-semibold tracking-tight">UI/UX Design</h4>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">UI Design</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">UX Design</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Web &amp; App Design</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Wireframing &amp; Prototyping</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Design Systems</span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-10 lg:gap-16 items-start lg:items-center group">

<div className="flex flex-col gap-6 lg:gap-8">
<div className="w-10 h-10 rounded-full border border-[#E5F333]/80 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                            03
                        </div>
<h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">Web<br/>Development</h3>
</div>

<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#050505] flex items-center justify-center group-hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-70 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-blue-900/20 to-transparent mix-blend-color"></div>
<div className="absolute inset-0 bg-black/30"></div>

<div className="absolute left-1/4 bottom-1/4 w-1/2 h-1/2 bg-blue-500/20 blur-[50px]"></div>
<div className="absolute right-1/4 top-1/4 w-1/3 h-1/3 bg-purple-500/20 blur-[50px]"></div>
</div>

<div className="relative w-full">

<div className="hidden lg:block absolute right-full top-[14px] w-16 border-t border-zinc-700 pointer-events-none"></div>
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 rotate-45 bg-zinc-400 shrink-0"></div>
<h4 className="text-white text-base font-semibold tracking-tight">Development</h4>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Front-End Development</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Back-End Development</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">Web &amp; App Development</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">CMS Integration</span>
</li>
<li className="flex items-center gap-4 text-zinc-400">
<div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0"></div>
<span className="text-base">API Integration</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] relative overflow-hidden py-32 px-6 lg:px-8 border-t border-zinc-900">

<div className="absolute top-[30%] left-[30%] w-[50rem] h-[50rem] bg-[#E5F333]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="mx-auto max-w-[1400px] relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">

<div className="flex-1 lg:pl-12">
<h2 className="text-6xl sm:text-7xl lg:text-[6rem] font-semibold tracking-tight text-white leading-[1.1]">
                        We Build<br/>
<span className="flex items-center gap-4 md:gap-8 my-2">
<span className="w-16 md:w-24 h-1 bg-white inline-block"></span>
<span className="font-playfair italic font-medium tracking-normal">Brands</span> <span className="tracking-tight">that</span>
</span>
                        Stand Out
                    </h2>
</div>

<div className="flex-1 flex flex-col lg:items-end w-full lg:w-auto relative lg:pr-12">

<div className="relative w-36 h-36 flex items-center justify-center mb-16 lg:absolute lg:top-[-2rem] lg:right-16">

<div className="absolute inset-0 flex items-center justify-center opacity-40">
<div className="absolute w-[90%] h-[90%] border border-zinc-600 rounded-[35%]"></div>
<div className="absolute w-[90%] h-[90%] border border-zinc-600 rounded-[35%] rotate-[60deg]"></div>
<div className="absolute w-[90%] h-[90%] border border-zinc-600 rounded-[35%] rotate-[120deg]"></div>
</div>
<div className="relative text-center z-10 flex flex-col items-center justify-center">
<span className="block text-4xl font-semibold text-white tracking-tight">12+</span>
<span className="block text-xs text-zinc-400 mt-1 max-w-[80px] leading-tight">Year's Service Working</span>
</div>
</div>

<div className="max-w-md mt-auto lg:mt-40 w-full space-y-10">
<p className="text-lg text-zinc-300 leading-relaxed">
                            Easily connect your SEO-optimized content to your WordPress effortless publishing — <span className="text-[#E5F333] font-medium">Helping you stay Consistent</span>, save time, and grow faster.
                        </p>

<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-full bg-[#E5F333] px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105" href="#">
                                Let's Talk
                            </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#E5F333] p-3.5 text-black transition-transform hover:scale-105" href="#">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>

<div className="mt-40 w-full relative">
<div className="flex gap-6 items-center overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">

<div className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[4/5] rounded-3xl bg-[#E8E8E8] relative overflow-hidden flex flex-col">
<div className="p-8 flex-1">
<div className="text-sm font-semibold tracking-tight text-zinc-500">brds<span className="text-[#f97316]">+</span><br/>mckp</div>
</div>
<div className="flex-1 bg-[#D9D9D9] flex items-center justify-center border-t border-white/50 relative">
<span className="text-9xl font-semibold tracking-tighter text-black leading-none -mt-8 relative">
                                m
                                <span className="text-[#f97316] absolute top-2 right-[-24px] text-5xl">*</span>
</span>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[300px] aspect-[4/5] rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-zinc-800 to-zinc-950 translate-y-12">

<div className="w-full max-w-[150px] aspect-[9/19] bg-[#111] rounded-[2rem] border-[6px] border-[#222] relative overflow-hidden flex flex-col shadow-2xl">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#000] rounded-full"></div>
<div className="mt-14 px-4 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 mb-4 border border-zinc-700"></div>
<div className="w-2/3 h-2 bg-zinc-700 rounded mb-2"></div>
<div className="w-1/3 h-2 bg-zinc-800 rounded"></div>
<div className="mt-8 space-y-3 w-full">
<div className="w-full h-8 bg-zinc-800 border border-zinc-700/50 rounded-lg"></div>
<div className="w-full h-8 bg-zinc-800 border border-zinc-700/50 rounded-lg"></div>
<div className="w-full h-8 bg-zinc-800 border border-zinc-700/50 rounded-lg"></div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[340px] sm:w-[500px] lg:w-[650px] aspect-[4/3] sm:aspect-video rounded-3xl bg-[#3A4032] border border-white/5 relative overflow-hidden group flex items-center justify-center bg-gradient-to-br from-[#4A5342] to-[#2A2E24] cursor-pointer">

<div className="w-[80%] aspect-[4/3] bg-[#1a1a1a] rounded-xl border-[10px] border-[#2a2a2a] shadow-2xl flex items-center justify-center rotate-[-4deg] transform transition-transform group-hover:rotate-[-2deg] duration-500 relative z-10">
<span className="text-7xl sm:text-9xl font-medium text-white tracking-tighter">022</span>
</div>

<div className="absolute bottom-8 w-[75%] h-16 bg-[#222] rounded-t-xl rotate-[-4deg] translate-y-8 shadow-xl border-t border-zinc-700/30 flex items-start justify-center pt-2">
<div className="w-1/3 h-1 bg-zinc-700 rounded-full opacity-50"></div>
</div>

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
<button className="w-28 h-28 rounded-full bg-[#E5F333] flex flex-col items-center justify-center text-black transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
<i className="w-6 h-6 mb-1" data-lucide="arrow-up-right"></i>
<span className="text-xs font-semibold tracking-tight">View Details</span>
</button>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] sm:w-[300px] aspect-[4/5] rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden flex items-end justify-center p-8 bg-gradient-to-t from-zinc-800 to-zinc-950 translate-y-[-2rem]">

<div className="absolute bottom-0 left-0 right-0 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxMTEiPjwvcmVjdD48cGF0aCBkPSJNMCAwTDQgNFpNNCAwTDAgNFoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+')] opacity-50 z-0"></div>

<div className="relative w-3/4 aspect-[3/4] mb-8 z-10">

<div className="absolute inset-0 bg-zinc-700 rounded shadow-2xl translate-x-3 -translate-y-3 border border-zinc-600 flex flex-col justify-end p-4">
<span className="text-xl font-medium text-white/30 tracking-tighter rotate-[-90deg] origin-bottom-left absolute bottom-4 left-6">009</span>
</div>

<div className="absolute inset-0 bg-zinc-800 rounded shadow-xl translate-x-1.5 -translate-y-1.5 border border-zinc-700 flex flex-col justify-end p-4">
<span className="text-xl font-medium text-white/50 tracking-tighter rotate-[-90deg] origin-bottom-left absolute bottom-4 left-6">009</span>
</div>

<div className="absolute inset-0 bg-zinc-900 rounded shadow-lg flex items-end justify-end p-5 border border-zinc-800">
<span className="text-6xl font-medium text-white tracking-tighter leading-none mb-2">009</span>
<span className="text-xl font-medium text-white tracking-tighter rotate-[-90deg] origin-bottom-left absolute bottom-4 left-6">009</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-24 sm:py-32">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                Vous avez un projet en tête ?
            </h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Parlez-moi de votre projet sur WhatsApp. Je vous réponds en moins d'une heure.
            </p>
<div className="flex flex-col items-center justify-center">
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 text-lg font-medium text-white transition-all hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/20" href="https://wa.me/212XXXXXXXXX?text=Bonjour,%20j'ai%20vu%20votre%20site%20et%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20site%20web" rel="noopener noreferrer" target="_blank">
<svg className="h-6 w-6 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
                    Démarrer maintenant
                </a>
<p className="mt-6 text-sm text-zinc-500 font-medium tracking-wide">
                    Gratuit · Sans engagement · Réponse rapide
                </p>
</div>
</div>
</section>



    </>
  );
}
