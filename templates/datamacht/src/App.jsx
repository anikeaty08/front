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
      

<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 opacity-70">
<div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#007BFF]/15 blur-3xl animate-pulse"></div>
<div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#4DA3FF]/15 blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#007BFF]/10 blur-3xl animate-pulse"></div>
</div>
<div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
<div className="absolute inset-0 opacity-[0.08]">
<div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
</div>
<div className="absolute top-0 right-0 bottom-0 left-0">
<div className="absolute left-1/4 top-10 h-24 w-24 rounded-xl bg-gradient-to-br from-[#4DA3FF]/20 to-[#007BFF]/20 blur-xl animate-spin-slow"></div>
<div className="absolute right-1/5 top-28 h-16 w-16 rounded-full bg-[#007BFF]/30 blur-xl animate-ping"></div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur border-b bg-slate-900/60 border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<button className="flex items-center gap-2 group" data-nav="home" onclick="setRoute('home')">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#4DA3FF] shadow-[0_10px_30px_-10px] shadow-[#007BFF]/60 ring-1 flex items-center justify-center ring-white/20">
<span className="font-semibold tracking-tight text-lg text-white">DM</span>
</div>
<div className="flex flex-col leading-tight text-left">
<span className="font-semibold tracking-tight text-slate-100">DataMacht</span>
<span className="text-xs text-slate-400">Nederlandse technologie</span>
</div>
</button>

<nav className="hidden md:flex items-center gap-6">
<button className="transition-colors text-slate-300 hover:text-white" data-nav="home" onclick="setRoute('home')">Home</button>
<button className="transition-colors text-slate-300 hover:text-white" data-nav="features" onclick="setRoute('features')">Functies</button>
<button className="transition-colors text-slate-300 hover:text-white" data-nav="pricing" onclick="setRoute('pricing')">Prijzen</button>
<button className="transition-colors text-slate-300 hover:text-white" data-nav="about" onclick="setRoute('about')">Over ons</button>
<button className="transition-colors text-slate-300 hover:text-white" data-nav="contact" onclick="setRoute('contact')">Contact</button>
<button className="transition-colors text-slate-300 hover:text-white" data-nav="faq" onclick="setRoute('faq')">FAQ</button>
</nav>

<div className="flex items-center gap-3">

<div className="hidden sm:inline-flex items-center rounded-lg border p-1 border-slate-800 bg-slate-900/60">
<button className="px-2 py-1 text-xs font-medium rounded-md bg-[#0B3473] text-white">NL</button>
<button className="px-2 py-1 text-xs font-medium rounded-md text-slate-300 hover:bg-slate-800">EN</button>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-sm transition text-slate-200 hover:text-white border-slate-800 hover:border-slate-700 hover:bg-slate-900/60" data-nav="home" onclick="setRoute('home'); document.getElementById('heroDemo').scrollIntoView({behavior:'smooth'})">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Bekijk demo
          </button>
<a className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] shadow-[0_12px_30px_-10px] shadow-[#007BFF]/60 ring-1 hover:opacity-95 hover:ring-[#007BFF]/50 transition text-white ring-white/20" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Start gratis proef
          </a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border transition border-slate-800 hover:border-slate-700 hover:bg-slate-900" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t backdrop-blur border-slate-800 bg-slate-900/80" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="home" onclick="setRoute('home');this.closest('#mobileMenu').classList.add('hidden')">Home</button>
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="features" onclick="setRoute('features');this.closest('#mobileMenu').classList.add('hidden')">Functies</button>
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="pricing" onclick="setRoute('pricing');this.closest('#mobileMenu').classList.add('hidden')">Prijzen</button>
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="about" onclick="setRoute('about');this.closest('#mobileMenu').classList.add('hidden')">Over ons</button>
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="contact" onclick="setRoute('contact');this.closest('#mobileMenu').classList.add('hidden')">Contact</button>
<button className="text-left px-3 py-2 rounded-md hover:bg-slate-800" data-nav="faq" onclick="setRoute('faq');this.closest('#mobileMenu').classList.add('hidden')">FAQ</button>
</div>
</div>
</header>

<main className="relative">

<section className="" data-route="home">

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
<div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="relative z-10">
<div className="inline-flex gap-2 text-xs border rounded-full mb-5 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center text-slate-300 bg-slate-900/70 border-slate-800">
                
                Nederlandse technologie voor groei en automatisering
              </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Automatiseer je bedrijf. Versnel je groei.
              </h1>
<p className="mt-4 text-lg text-slate-300">
                Eén slim platform om klanten te beheren, marketing te automatiseren en resultaten te meten.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] ring-1 hover:ring-[#007BFF]/50 hover:opacity-95 transition rounded-xl px-5 py-3 shadow-[0_20px_40px_-20px] shadow-[#007BFF]/50 text-white ring-white/20" href="#">
                  
                  Start gratis proef
                </a>
<button className="inline-flex items-center justify-center gap-2 text-sm font-medium border rounded-xl px-5 py-3 hover:shadow-sm transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60" data-nav="features" id="heroDemo" onclick="setRoute('features')">
                  
                  Bekijk demo
                </button>
</div>
<div className="mt-6 flex items-center gap-5 text-sm text-slate-400">
<div className="flex gap-1.5 items-center"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-[#4DA3FF]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>14 dagen gratis</div>
<div className="hidden sm:flex gap-1.5 items-center"><svg className="lucide lucide-shield-check w-4 h-4 text-[#4DA3FF]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>Betrouwbare hosting</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-tr from-[#007BFF]/20 to-[#4DA3FF]/20 rounded-2xl blur-2xl"></div>
<div className="relative group rounded-2xl ring-1 shadow-2xl overflow-hidden hover:shadow-[#007BFF]/40 transition bg-slate-900/60 ring-slate-800">

<div className="px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-900/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-[#4DA3FF]"></span>
<span className="text-sm font-medium text-slate-200">DataMacht Dashboard</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Live</span>
<span className="h-6 w-6 rounded-md bg-gradient-to-br from-[#007BFF] to-[#4DA3FF] ring-1 flex items-center justify-center text-[10px] font-semibold ring-white/20 text-white">DM</span>
</div>
</div>
</div>

<div className="p-4 sm:p-6 grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-xl border p-4 group-hover:translate-y-[-2px] transition border-slate-800 bg-slate-950/40">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-line-chart w-4 h-4 text-[#4DA3FF]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-sm font-medium text-slate-200">Pipeline omzet</span>
</div>
<span className="text-xs text-slate-400">Laatste 30 dagen</span>
</div>
<div className="h-40 sm:h-48 relative">
<svg className="w-full h-full" viewbox="0 0 300 120">
<defs>
</defs>
<path d="M0,85 C40,70 60,55 90,65 C120,75 145,50 170,60 C195,70 220,40 260,50 L300,55 L300,120 L0,120 Z" fill="url(#g1)"></path>
<path className="transition" d="M0,85 C40,70 60,55 90,65 C120,75 145,50 170,60 C195,70 220,40 260,50 L300,55" fill="none" stroke="#4DA3FF" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border p-3 border-slate-800 bg-slate-900/40">
<div className="text-xs text-slate-400">Nieuwe leads</div>
<div className="text-lg font-semibold tracking-tight text-white">1.284</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-900/40">
<div className="text-xs text-slate-400">Geboekte gesprekken</div>
<div className="text-lg font-semibold tracking-tight text-white">342</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-900/40">
<div className="text-xs text-slate-400">Closed‑won</div>
<div className="text-lg font-semibold tracking-tight text-white">€128k</div>
</div>
</div>
</div>

<div className="rounded-xl border p-4 group-hover:translate-y-[-2px] transition border-slate-800 bg-slate-950/40">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-200">Communicatie</span>
</div>
<span className="text-xs text-slate-400">Inbox</span>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<span className="h-8 w-8 rounded-md ring-1 flex items-center justify-center text-xs font-medium bg-slate-800 ring-slate-700">AL</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-200">Alice — Lead</span>
<span className="text-xs text-slate-500">2m</span>
</div>
<p className="text-sm line-clamp-1 text-slate-400">Bedankt! Laten we iets inplannen…</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="h-8 w-8 rounded-md ring-1 flex items-center justify-center text-xs font-medium bg-slate-800 ring-slate-700">RM</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-200">Raj — Prospect</span>
<span className="text-xs text-slate-500">10m</span>
</div>
<p className="text-sm line-clamp-1 text-slate-400">Ontvangen. Donderdag past goed.</p>
</div>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-lg border transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900">
                        Open inbox
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-3 rounded-xl border p-4 border-slate-800 bg-slate-950/40">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-workflow w-4 h-4 text-[#4DA3FF]" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-sm font-medium text-slate-200">Pipeline‑fases</span>
</div>
<div className="grid sm:grid-cols-5 gap-2">
<div className="p-3 rounded-lg border border-slate-800 bg-slate-900/40">
<div className="text-xs mb-1 text-slate-400">Nieuw</div>
<div className="h-2 rounded bg-slate-800">
<div className="h-2 rounded bg-[#4DA3FF]" style={{width: '35%'}}></div>
</div>
</div>
<div className="bg-slate-900/40 border-slate-800 border rounded-lg pt-3 pr-3 pb-3 pl-3 xl:pl-1">
<div className="text-xs text-slate-400 mb-1">Gekwalificeerd</div>
<div className="bg-slate-800 h-2 rounded">
<div className="h-2 rounded bg-[#4DA3FF]" style={{width: '60%'}}></div>
</div>
</div>
<div className="p-3 rounded-lg border border-slate-800 bg-slate-900/40">
<div className="text-xs mb-1 text-slate-400">Geboekt</div>
<div className="h-2 rounded bg-slate-800">
<div className="h-2 rounded bg-[#4DA3FF]" style={{width: '45%'}}></div>
</div>
</div>
<div className="p-3 rounded-lg border border-slate-800 bg-slate-900/40">
<div className="text-xs mb-1 text-slate-400">Voorstel</div>
<div className="h-2 rounded bg-slate-800">
<div className="h-2 rounded bg-[#4DA3FF]" style={{width: '30%'}}></div>
</div>
</div>
<div className="p-3 rounded-lg border border-slate-800 bg-slate-900/40">
<div className="text-xs mb-1 text-slate-400">Gewonnen</div>
<div className="h-2 rounded bg-slate-800">
<div className="h-2 rounded bg-[#4DA3FF]" style={{width: '80%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 sm:px-6 py-3 border-t bg-slate-900/60 border-slate-800">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Data‑update elke 5 minuten</span>
<button className="inline-flex gap-1 hover:text-[#7cc4ff] transition text-[#4DA3FF] gap-x-1 gap-y-1 items-center">
                      Verversen
                      <svg className="lucide lucide-rotate-cw w-3.5 h-3.5" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-14 border-t pt-8 border-slate-800">
<p className="text-sm text-center mb-5 text-slate-400">Vertrouwd door ambitieuze teams</p>
<div className="flex flex-wrap text-slate-500 gap-x-10 gap-y-4 items-center justify-center">
<div className="text-lg font-semibold tracking-tight">NOVA</div>
<div className="text-lg font-semibold tracking-tight">ATLAS</div>
<div className="text-lg font-semibold tracking-tight">ARQ</div>
<div className="text-lg font-semibold tracking-tight">LUMA</div>
<div className="text-lg font-semibold tracking-tight">QUANTA</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
<div className="rounded-2xl border p-6 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-triangle-alert w-5 h-5 text-[#4DA3FF]" data-lucide="triangle-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<h3 className="text-xl font-semibold tracking-tight text-white">Het probleem</h3>
</div>
<ul className="space-y-3 text-slate-300">
<li className="flex gap-3 items-start"><svg className="lucide lucide-x w-4 h-4 mt-1 text-slate-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Chaotisch klantbeheer en losse tools</li>
<li className="flex gap-3 items-start"><svg className="lucide lucide-x w-4 h-4 mt-1 text-slate-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Gemiste klanten door trage opvolging</li>
<li className="flex gap-3 items-start"><svg className="lucide lucide-x w-4 h-4 mt-1 text-slate-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Geen realtime inzicht in prestaties</li>
</ul>
</div>
<div className="border rounded-2xl p-6 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#4DA3FF]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-xl font-semibold tracking-tight text-white">De oplossing</h3>
</div>
<ul className="space-y-3 text-slate-300">
<li className="flex gap-3 items-start"><svg className="lucide lucide-bolt w-4 h-4 mt-1 text-[#4DA3FF]" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>Alles in één slim platform</li>
<li className="flex gap-3 items-start"><svg className="lucide lucide-merge w-4 h-4 mt-1 text-[#4DA3FF]" data-lucide="merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 6 4-4 4 4"></path><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path><path d="m20 22-5-5"></path></svg>Automatische opvolging en workflows</li>
<li className="flex gap-3 items-start"><svg className="lucide lucide-bar-chart-3 w-4 h-4 mt-1 text-[#4DA3FF]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>Realtime analytics en volledige controle</li>
</ul>
</div>
</div>
</section>

<section className="sm:py-16 pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex mb-8 items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Modules voor groei</h2>
<p className="mt-2 text-slate-400">CRM, marketing, planning, dashboards, analytics en integraties.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#A7D0FF] transition hover:text-white" data-nav="features" onclick="setRoute('features')">
              Bekijk alle functies
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-contact w-5 h-5 text-[#A7D0FF]" data-lucide="contact" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v2"></path><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><path d="M8 2v2"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">CRM &amp; leadbeheer</h3>
<p className="mt-2 text-slate-400">Centraliseer contacten, segmenten en activiteiten in één tijdlijn.</p>
</div>
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-send w-5 h-5 text-[#A7D0FF]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Marketingautomatisering</h3>
<p className="mt-2 text-slate-400">E‑mail en SMS campagnes met triggers, timing en personalisatie.</p>
</div>
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-calendar w-5 h-5 text-[#A7D0FF]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Afsprakenplanner</h3>
<p className="mt-2 text-slate-400">Slim plannen met herinneringen, bevestigingen en no‑showlogica.</p>
</div>
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-workflow w-5 h-5 text-[#A7D0FF]" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Workflows &amp; pipelines</h3>
<p className="mt-2 text-slate-400">Visuele automatiseringen die deals vooruit helpen.</p>
</div>
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-[#A7D0FF]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Dashboards &amp; analytics</h3>
<p className="mt-2 text-slate-400">Volg prestaties, ROI en teamactiviteit realtime.</p>
</div>
<div className="rounded-2xl border p-6 hover:shadow-lg hover:shadow-[#007BFF]/10 transition group bg-slate-900/60 border-slate-800 hover:border-slate-700">
<div className="h-10 w-10 rounded-lg bg-[#0B3473]/40 ring-1 flex items-center justify-center mb-4 ring-slate-800">
<svg className="lucide lucide-plug w-5 h-5 text-[#A7D0FF]" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Integraties</h3>
<p className="mt-2 text-slate-400">Verbind je tools en laat data naadloos stromen.</p>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-4">
<div className="rounded-xl border p-5 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-clock w-5 h-5 text-[#4DA3FF]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h4 className="font-semibold tracking-tight text-white">Tijd besparen</h4>
</div>
<p className="text-sm text-slate-400">Automatiseer opvolgingen en administratieve taken.</p>
</div>
<div className="rounded-xl border p-5 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-[#4DA3FF]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h4 className="font-semibold tracking-tight text-white">Slimmer groeien</h4>
</div>
<p className="text-sm text-slate-400">Converteer meer leads met slimme funnels.</p>
</div>
<div className="rounded-xl border p-5 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-users w-5 h-5 text-[#4DA3FF]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h4 className="font-semibold tracking-tight text-white">Inzicht in elke klant</h4>
</div>
<p className="text-sm text-slate-400">Alle interacties en signalen op één plek.</p>
</div>
<div className="rounded-xl border p-5 bg-slate-900/60 border-slate-800">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#4DA3FF]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h4 className="font-semibold tracking-tight text-white">Volledige controle</h4>
</div>
<p className="text-sm text-slate-400">Stuur op resultaten met realtime dashboards.</p>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-white">Zie DataMacht in actie</h2>
<p className="mt-2 text-slate-400">Klantbeheer, analytics, pipelines en communicatie — naadloos geïntegreerd.</p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="relative rounded-2xl border p-4 hover:shadow-lg hover:shadow-[#007BFF]/20 transition bg-slate-900/60 border-slate-800">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#007BFF]/15 to-[#4DA3FF]/15 blur-xl -z-10"></div>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-users w-5 h-5 text-[#4DA3FF]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Klantbeheer dashboard</h3>
</div>
<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Actieve klanten</div>
<div className="text-xl font-semibold tracking-tight text-white">214</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Gem. responstijd</div>
<div className="text-xl font-semibold tracking-tight text-white">6m</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Health score</div>
<div className="text-xl font-semibold tracking-tight text-white">92</div>
</div>
</div>
<div className="mt-4 rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="flex items-center justify-between text-sm mb-2 text-slate-300">
<span>Top accounts</span>
<span className="text-xs text-slate-500">Deze week</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center text-[10px] font-medium bg-slate-800 ring-slate-700">AL</span>
<span className="text-sm font-medium text-slate-200">Alpine Media</span>
</div>
<span className="text-sm text-slate-300">€18.400</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center text-[10px] font-medium bg-slate-800 ring-slate-700">QS</span>
<span className="text-sm font-medium text-slate-200">QuickShift</span>
</div>
<span className="text-sm text-slate-300">€12.950</span>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border p-4 hover:shadow-lg hover:shadow-[#007BFF]/20 transition bg-slate-900/60 border-slate-800">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#007BFF]/15 to-[#4DA3FF]/15 blur-xl -z-10"></div>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-[#4DA3FF]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Analytics overzicht</h3>
</div>
<div className="h-48 rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<svg className="w-full h-full" viewbox="0 0 300 120">
<path d="M0,100 L300,100" stroke="#1F2937" strokeWidth="1"></path>
<path d="M0,80 L300,80" stroke="#1F2937" strokeWidth="1"></path>
<path d="M0,60 L300,60" stroke="#1F2937" strokeWidth="1"></path>
<path d="M0,40 L300,40" stroke="#1F2937" strokeWidth="1"></path>
<path d="M10,90 C40,70 80,85 110,70 C140,55 180,60 210,48 C240,35 270,45 290,30" fill="none" stroke="#4DA3FF" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="grid grid-cols-3 gap-3 mt-4">
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Open rate</div>
<div className="text-lg font-semibold tracking-tight text-white">48%</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Reply rate</div>
<div className="text-lg font-semibold tracking-tight text-white">19%</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs text-slate-400">Boekingen</div>
<div className="text-lg font-semibold tracking-tight text-white">126</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border p-4 hover:shadow-lg hover:shadow-[#007BFF]/20 transition bg-slate-900/60 border-slate-800">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#007BFF]/15 to-[#4DA3FF]/15 blur-xl -z-10"></div>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-git-branch w-5 h-5 text-[#4DA3FF]" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Pipeline‑automatisering</h3>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs mb-1 text-slate-400">Trigger</div>
<div className="text-sm font-medium text-slate-200">Formulier verzonden</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs mb-1 text-slate-400">Actie</div>
<div className="text-sm font-medium text-slate-200">Naar pipeline</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs mb-1 text-slate-400">Vertraging</div>
<div className="text-sm font-medium text-slate-200">1 uur</div>
</div>
<div className="rounded-lg border p-3 border-slate-800 bg-slate-950/30">
<div className="text-xs mb-1 text-slate-400">Notificatie</div>
<div className="text-sm font-medium text-slate-200">Sales</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border p-4 hover:shadow-lg hover:shadow-[#007BFF]/20 transition bg-slate-900/60 border-slate-800">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#007BFF]/15 to-[#4DA3FF]/15 blur-xl -z-10"></div>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-messages-square w-5 h-5 text-[#4DA3FF]" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Communicatiecentrum</h3>
</div>
<div className="rounded-lg border border-slate-800">
<div className="flex items-center divide-x divide-slate-800">
<button className="flex-1 py-2 text-sm font-medium text-[#A7D0FF] bg-slate-950/40">E‑mail</button>
<button className="flex-1 py-2 text-sm text-slate-400 hover:bg-slate-950/30">SMS</button>
<button className="flex-1 py-2 text-sm text-slate-400 hover:bg-slate-950/30">Calls</button>
</div>
<div className="p-3 bg-slate-950/30">
<div className="rounded-lg border p-3 text-sm border-slate-800 text-slate-200 bg-slate-900/50">
                    Onderwerp: Welkom bij DataMacht
                    <div className="mt-2 text-slate-400">Je account staat klaar. Zo start je binnen enkele minuten…</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-200">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                      Versturen
                    </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-200">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      Inplannen
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl border p-4 bg-slate-900/60 border-slate-800">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight">Klaar om te versnellen?</h3>
<p className="text-sm text-slate-400">Probeer 14 dagen gratis of plan een demo.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] shadow-[0_10px_20px_-10px] shadow-[#007BFF]/50 ring-1 hover:opacity-95 transition text-white ring-white/20" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Start nu
                </a>
<button className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900" data-nav="contact" onclick="setRoute('contact')">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Vraag demo aan
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 pt-12 pb-12 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex mb-8 items-end justify-between">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-white">Simpele, transparante prijzen</h2>
<p className="mt-2 text-slate-400">Kies het plan dat past. Upgrade op elk moment.</p>
</div>
<div className="hidden sm:inline-flex rounded-lg border p-1 border-slate-800 bg-slate-900/60">
<button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#0B3473] text-white" id="homeBillMonthly" onclick="setBilling('monthly')">Maandelijks</button>
<button className="text-sm font-medium rounded-md pt-1.5 pr-3 pb-1.5 pl-3 hover:bg-slate-800 text-slate-300" id="homeBillYearly" onclick="setBilling('yearly')">Jaarlijks <span className="ml-1 text-[#4DA3FF]">-15%</span></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-x-6 gap-y-6">

<div className="hover:-translate-y-1 transition bg-slate-900/60 border-slate-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="text-sm font-medium text-slate-300 mb-2">Basis</div>
<div className="flex items-baseline gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">
<span className="" data-price-monthly="€39" data-price-yearly="€33">€99</span>
</div>
<span className="text-slate-400">/maand</span>
</div>
<div className="text-sm mt-1 text-slate-400">Voor individuen en kleine teams.</div>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-x-2 gap-y-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1.000 contacten</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basis automatiseringen</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1 pipeline</li>
</ul>
<div className="mt-6 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] ring-1 hover:opacity-95 transition animate-pulse text-white ring-white/20" href="#">
                  Start nu
                </a>
<button className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900" data-nav="contact" onclick="setRoute('contact')">
                  Boek demo
                </button>
</div>
</div>

<div className="shadow-[#007BFF]/30 hover:-translate-y-1 transition bg-slate-900/60 border-[#4DA3FF] border-2 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_20px_40px_-20px]">
<textarea className="" style={{fontSize: '20px', fontWeight: '600', fontFamily: 'Inter', color: 'rgb(15, 23, 42)', lineHeight: '28px', textAlign: 'start', textTransform: 'none', letterSpacing: '-0.5px', position: 'absolute', left: '792px', top: '1089px', width: '115.688px', height: '28px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'none', outline: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>
<div className="hover:-translate-y-1 transition bg-slate-900/60 border-slate-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="text-sm font-medium text-slate-300 mb-2">Pro</div>
<div className="flex items-baseline gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">
<span className="" data-price-monthly="€39" data-price-yearly="€33">€39</span>
</div>
<span className="text-slate-400">/maand</span>
</div>
<div className="text-sm mt-1 text-slate-400">Voor individuen en kleine teams.</div>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-x-2 gap-y-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1.000 contacten</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basis automatiseringen</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>1 pipeline</li>
</ul>
<div className="mt-6 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] ring-1 hover:opacity-95 transition animate-pulse text-white ring-white/20" href="#">
                  Start nu
                </a>
<button className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900" data-nav="contact" onclick="setRoute('contact')">
                  Boek demo
                </button>
</div>
</div></div><div className="hover:-translate-y-1 transition bg-slate-900/60 border-slate-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="text-sm font-medium text-slate-300 mb-2">Premium AI</div>
<div className="flex gap-1 gap-x-1 gap-y-1 items-baseline">
<div className="text-3xl font-semibold tracking-tight text-white">
<span className="" data-price-monthly="€39" data-price-yearly="€33">€39</span>
</div>
<span className="text-slate-400">/maand</span>
</div>
<div className="text-sm mt-1 text-slate-400">Voor individuen en kleine teams.</div>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-x-2 gap-y-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1.000 contacten</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basis automatiseringen</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-[#4DA3FF] mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1 pipeline</li>
</ul>
<div className="mt-6 flex gap-2">
<a className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] ring-1 hover:opacity-95 transition animate-pulse text-white ring-white/20" href="#">
                  Start nu
                </a>
<button className="inline-flex flex-1 items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-900" data-nav="contact" onclick="setRoute('contact')">
                  Boek demo
                </button>
</div>
</div></div></div></section></section></main>
    </>
  );
}
