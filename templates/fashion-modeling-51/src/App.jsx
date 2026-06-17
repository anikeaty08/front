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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-zinc-800/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-900/30 blur-[150px]"></div>

<div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-lg font-medium tracking-[0.3em] uppercase text-white flex items-center gap-2" href="#">
                A U R A
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Modeli</a>
<a className="hover:text-white transition-colors" href="#">Agencija</a>
<a className="hover:text-white transition-colors" href="#">Kampanje</a>
<a className="hover:text-white transition-colors" href="#">Kontakt</a>
</div>

<a className="group relative px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-white overflow-hidden rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md hidden md:inline-flex items-center gap-2" href="#apply">
<span>Apliciraj</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="max-w-[100rem] mx-auto h-full relative">

<div className="absolute left-[-15%] md:left-[2%] lg:left-[8%] top-[15%] md:top-[20%] w-48 md:w-56 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 -rotate-6 opacity-30 hover:opacity-80 hover:rotate-0 hover:scale-105 hover:border-white/20 transition-all duration-700 ease-out pointer-events-auto cursor-default z-0">
<img alt="Editorial Model" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/90 transition-opacity duration-700 hover:opacity-50"></div>
</div>

<div className="absolute right-[-15%] md:right-[2%] lg:right-[8%] bottom-[15%] md:bottom-[20%] w-52 md:w-64 lg:w-[20rem] aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 rotate-6 opacity-30 hover:opacity-80 hover:rotate-0 hover:scale-105 hover:border-white/20 transition-all duration-700 ease-out pointer-events-auto cursor-default z-0">
<img alt="Fashion Model" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/60 transition-opacity duration-700 hover:opacity-50"></div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse"></span>
                Sada tražimo nova lica za 2024.
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Lica koja <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                    oblikuju sutra.
                </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Nismo samo agencija. Mi smo platforma za vizionare. Povezujemo sirovi talenat sa najvećim svetskim brendovima, redefinišući industriju visoke mode.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors rounded-full flex items-center justify-center gap-2" href="#apply">
                    Postani Model
                    <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors rounded-full backdrop-blur-md flex items-center justify-center gap-2" href="#portfolio">
                    Vidi Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10 pointer-events-auto">
<span className="text-xs font-light text-zinc-400 uppercase tracking-widest">Saznaj Više</span>
<iconify-icon className="animate-bounce" height="24" icon="solar:mouse-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</section>

<div className="w-full border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm overflow-hidden py-8">
<div className="flex gap-16 items-center whitespace-nowrap opacity-40 font-medium tracking-[0.2em] uppercase text-sm" style={{animation: 'scroll 30s linear infinite'}}>
<style>
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            </style>

<span className="mx-8">Vogue</span>
<span className="mx-8">Balenciaga</span>
<span className="mx-8">Prada</span>
<span className="mx-8">Givenchy</span>
<span className="mx-8">Saint Laurent</span>
<span className="mx-8">Celine</span>
<span className="mx-8">Vogue</span>
<span className="mx-8">Balenciaga</span>
<span className="mx-8">Prada</span>
<span className="mx-8">Givenchy</span>
<span className="mx-8">Saint Laurent</span>
<span className="mx-8">Celine</span>
</div>
</div>

<section className="py-32 px-6" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Novo Doba Talenata</h2>
<p className="text-zinc-400 font-light max-w-md text-sm md:text-base">Naši modeli predstavljaju fuziju klasične lepote i avangardnog izraza.</p>
</div>
<a className="group flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors" href="#">
<span>Pogledaj sve</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="backdrop-blur-md bg-zinc-950/40 border border-white/10 rounded-xl p-4 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Elena K.</h3>
<div className="flex justify-between items-center text-xs text-zinc-400">
<span>180cm</span>
<span>82-60-89</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer lg:translate-y-12">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="backdrop-blur-md bg-zinc-950/40 border border-white/10 rounded-xl p-4 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Marko D.</h3>
<div className="flex justify-between items-center text-xs text-zinc-400">
<span>188cm</span>
<span>98-75-92</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="backdrop-blur-md bg-zinc-950/40 border border-white/10 rounded-xl p-4 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Sofia V.</h3>
<div className="flex justify-between items-center text-xs text-zinc-400">
<span>178cm</span>
<span>80-59-88</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer lg:translate-y-12">
<img alt="Model" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="backdrop-blur-md bg-zinc-950/40 border border-white/10 rounded-xl p-4 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Luka N.</h3>
<div className="flex justify-between items-center text-xs text-zinc-400">
<span>190cm</span>
<span>100-80-95</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-y border-white/5 bg-zinc-900/20">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6 leading-tight">
                        Izgrađeni na principima<br/>
<span className="text-zinc-500">preciznosti i inovacije.</span>
</h2>
<p className="text-zinc-400 font-light mb-8 text-sm md:text-base leading-relaxed">
                        Ne pratimo trendove, mi ih postavljamo. Naš pristup menadžmentu je zasnovan na podacima, estetici i nemilosrdnoj posvećenosti uspehu naših talenata na globalnom nivou.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">Globalni Domet</h4>
<p className="text-xs text-zinc-500 font-light">Direktne konekcije sa klijentima u Parizu, Milanu, Njujorku i Londonu.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:shield-star-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1">Ekskluzivno Zastupanje</h4>
<p className="text-xs text-zinc-500 font-light">Personalizovan razvoj karijere i zaštita interesa naših modela.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full rounded-3xl border border-white/10 bg-zinc-950/50 backdrop-blur-2xl overflow-hidden flex items-center justify-center shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute w-64 h-64 bg-zinc-700/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="relative z-10 w-48 h-64 border border-white/20 rounded-t-full rounded-b-xl flex items-center justify-center backdrop-blur-sm bg-white/5">
<div className="w-32 h-48 border border-zinc-600/50 rounded-t-full rounded-b-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="apply">
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Tvoje vreme je sada.</h2>
<p className="text-zinc-400 font-light text-base mb-12">Ispuni formu ispod i dozvoli našim skautima da procene tvoj potencijal. Tražimo unikatnost, stav i autentičnost.</p>
<form className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-left shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Ime i Prezime</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="Unesite ime" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="vaš@email.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Visina (cm)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="180" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Godine</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="21" type="text"/>
</div>
<div className="space-y-2 col-span-2">
<label className="text-xs text-zinc-400 uppercase tracking-wide">Instagram</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" placeholder="@username" type="text"/>
</div>
</div>

<div className="mb-8">
<label className="text-xs text-zinc-400 uppercase tracking-wide block mb-2">Polaroidi (Max 4)</label>
<div className="w-full border border-dashed border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition-colors p-8 text-center cursor-pointer group flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:camera-add-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<p className="text-sm text-zinc-300">Kliknite ili prevucite slike ovde</p>
<p className="text-xs text-zinc-500 font-light">Portret i cela figura, bez šminke, prirodno svetlo.</p>
</div>
</div>
<button className="w-full py-4 bg-white text-zinc-950 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Pošalji Prijavu
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-lg font-medium tracking-[0.3em] uppercase text-white mb-6 block" href="#">
                    A U R A
                </a>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                    Vodeća agencija za menadžment modela koja redefiniše standarde lepote i profesionalizma u modnoj industriji.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div className="flex flex-col gap-4">
<h5 className="text-white font-medium mb-2">Agencija</h5>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">O nama</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Naš Tim</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Karijere</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-white font-medium mb-2">Divizije</h5>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Žene</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Muškarci</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Nova Lica</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<h5 className="text-white font-medium mb-2">Pratite nas</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="20" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 AURA Agency. Sva prava zadržana.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors" href="#">Privatnost</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Uslovi</a>
</div>
</div>
</footer>

    </>
  );
}
