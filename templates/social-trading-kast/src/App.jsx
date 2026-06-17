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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f2441]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
</div>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all" href="#access">
                Dostęp do systemu
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#5ab560]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex gap-2 text-xs font-medium text-[#5ab560] bg-[#5ab560]/10 border-[#5ab560]/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Automatyzacja Zysków 24/</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6">Kopiuj utomatycznie<br className=""/> <span className="bg-clip-text text-glow text-transparent bg-gradient-to-r from-[#5ab560] via-[#86efac] to-[#5ab560]">Skutecznych Traderów</span></h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">Zarabiaj na rynkach finansowych bez specjalistycznej wiedzy. Otrzymasz od nas gotową instrukcję wdrożenia oraz wsparcie.</p>

<div className="max-w-md mx-auto bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-sm shadow-2xl shadow-[#5ab560]/10" id="access">
<form className="flex flex-col sm:flex-row gap-2">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-[#0a182b]/50 text-white text-sm border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-[#5ab560]/50 focus:ring-1 focus:ring-[#5ab560]/50 placeholder-slate-500 transition-all" placeholder="Twój e-mail" required="" type="email"/>
</div>
<button className="whitespace-nowrap bg-[#5ab560] text-white hover:bg-[#4ea054] text-sm font-medium py-3 px-6 rounded-xl transition-all btn-glow flex items-center justify-center gap-2" type="submit">
                        Rozpocznij
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-slate-500 mt-2 text-center flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    Sprawdzony system. Pełne bezpieczeństwo środków.
                </p>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-8">
<p className="uppercase text-xs font-medium text-slate-500 tracking-widest text-center mb-6">Co daje nasz system</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
<div className="flex items-center gap-3 text-lg font-medium tracking-tight text-white">
<iconify-icon className="text-[#5ab560]" icon="solar:chart-2-linear" width="24"></iconify-icon>
                    Stabilny wzrost
                </div>
<div className="flex items-center gap-3 text-lg font-medium tracking-tight text-white">
<iconify-icon className="text-[#5ab560]" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
                    Wsparcie 1:1
                </div>
<div className="flex items-center gap-3 text-lg font-medium tracking-tight text-white">
<iconify-icon className="text-[#5ab560]" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
                    100% Automat
                </div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Jak to działa?</h2>
<p className="text-slate-400 max-w-xl">Prosty proces, który zamienia Twój kapitał w pracujące aktywa. My dostarczamy technologię, Ty czerpiesz zyski.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="120" icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-[#5ab560]/10 border border-[#5ab560]/20 flex items-center justify-center text-[#5ab560] mb-6">
<iconify-icon icon="solar:copy-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Kopiowanie 1:1</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Twoje konto automatycznie powiela ruchy profesjonalnych traderów z wieloletnim doświadczeniem.
                    </p>
</div>

<div className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-[#5ab560]/[0.05] overflow-hidden">
<div className="flex flex-col md:flex-row gap-8 h-full">
<div className="flex-1 z-10">
<div className="w-12 h-12 rounded-xl bg-[#5ab560]/10 border border-[#5ab560]/20 flex items-center justify-center text-[#5ab560] mb-6">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Pełne Wsparcie Eksperta</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Nie zostawiamy Cię samego. Otrzymujesz dostęp do zamkniętej grupy oraz instrukcje krok po kroku.
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5ab560]" icon="solar:check-circle-linear"></iconify-icon>
                                    Gotowa konfiguracja systemu
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5ab560]" icon="solar:check-circle-linear"></iconify-icon>
                                    Cotygodniowe analizy wyników
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5ab560]" icon="solar:check-circle-linear"></iconify-icon>
                                    Pomoc techniczna 24/7
                                </li>
</ul>
</div>

<div className="flex-1 relative min-h-[200px] md:min-h-auto rounded-xl border border-white/10 bg-[#0a182b]/60 overflow-hidden flex flex-col p-6 justify-center">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-slate-500">Zysk całkowity</p>
<p className="text-2xl font-semibold text-white">+ 2,450 PLN</p>
</div>
<div className="px-2 py-1 rounded bg-[#5ab560]/20 text-[#5ab560] text-xs font-medium">+12.4%</div>
</div>
<div className="relative h-24 w-full">

<svg className="w-full h-full stroke-[#5ab560] fill-none stroke-2 overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 20 10, 40 20 C 60 30, 60 5, 100 0" strokeLinecap="round" strokeLinejoin="round"></path>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#5ab560" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#5ab560" stop-opacity="0"></stop>
</lineargradient>
<path className="" d="M0 35 C 20 35, 20 10, 40 20 C 60 30, 60 5, 100 0 V 40 H 0 Z" fill="url(#gradient)" stroke="none"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#5ab560]/10 border border-[#5ab560]/20 flex items-center justify-center text-[#5ab560] mb-6">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Bez Wiedzy Technicznej</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Nie musisz śledzić wykresów ani czytać wiadomości ekonomicznych. System robi to za Ciebie.
                    </p>
</div>

<div className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-center">
<div className="flex items-start gap-6">
<div className="w-12 h-12 rounded-xl bg-[#5ab560]/10 border border-[#5ab560]/20 flex-shrink-0 flex items-center justify-center text-[#5ab560]">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Pasywny Przychód</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-lg">
                                 Dywersyfikacja to klucz do stabilności finansowej. Dołącz do osób, które traktują rynki finansowe jako dodatkowe źródło dochodu, nie poświęcając na to swojego prywatnego czasu.
                             </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-gradient-to-b from-[#0f2441] to-[#0a182b] border-white/5 pt-20 pb-20">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#5ab560] to-[#2d5a8e] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative w-full md:w-80 h-64 bg-[#0f2441] rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6">
<iconify-icon className="text-slate-600 mb-4" icon="solar:hand-shake-linear" width="64"></iconify-icon>
<div className="text-center">
<p className="text-white font-medium">Zespół Wsparcia</p>
<p className="text-xs text-[#5ab560] mt-1">Dostępny dla Ciebie</p>
</div>
</div>
</div>
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] font-medium mb-6 uppercase tracking-wider">
                        Twoje Bezpieczeństwo
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Wsparcie na każdym kroku</h2>
<div className="space-y-4 text-slate-400 text-sm leading-relaxed">
<p className="">
                            Rozumiemy, że świat finansów może wydawać się skomplikowany. Dlatego stworzyliśmy system, w którym technologia spotyka się z ludzkim podejściem.
                        </p>
<p className="">Pomożemy Ci skonfigurować, uruchomić system kopiowania i monitorować pierwsze zyski. Nie musisz być sam na rynku.</p>
</div>
<div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center md:items-start">
<span className="text-lg font-bold text-white">24/7</span>
<span className="text-xs text-slate-500">Monitoring systemu</span>
</div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center md:items-start">
<span className="text-lg font-bold text-white">100%</span>
<span className="text-xs text-slate-500">Transparentności</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">Zacznij zarabiać już dziś</h2>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-[#5ab560] mb-2" icon="solar:document-add-linear" width="28"></iconify-icon>
<p className="text-sm text-slate-400">Instrukcja</p>
<p className="text-white font-medium">Krok po kroku</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-[#5ab560] mb-2" icon="solar:chat-line-linear" width="28"></iconify-icon>
<p className="text-sm text-slate-400">Wsparcie</p>
<p className="text-white font-medium">Stały kontakt</p>
</div>
</div>
<div className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-2xl">
<div className="bg-[#0a182b]/80 backdrop-blur-xl rounded-2xl p-8">
<div className="mb-6">
<span className="text-sm text-slate-400">Dostęp do systemu</span>
<div className="text-3xl font-semibold text-white mt-1">Bezpłatna <span className="text-sm font-normal text-[#5ab560] ml-2">konsultacja</span></div>
</div>
<form className="space-y-4">
<input className="w-full bg-white/5 text-white text-sm border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5ab560] placeholder-slate-500" placeholder="Twoje Imię" type="text"/>
<input className="w-full bg-white/5 text-white text-sm border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5ab560] placeholder-slate-500" placeholder="Adres e-mail" type="email"/>
<button className="w-full bg-[#5ab560] text-white hover:bg-[#4ea054] text-sm font-medium py-3 rounded-xl transition-all btn-glow shadow-lg shadow-[#5ab560]/20" type="button">
                            Odbierz instrukcję
                        </button>
</form>
<p className="mt-4 text-[10px] text-slate-500">
                        Ilość miejsc pod opieką ekspertów jest ograniczona.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#0a182b]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-slate-500">
                © 2024 SystemTrader. Wszelkie prawa zastrzeżone.
            </div>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Ryzyko inwestycyjne</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Polityka Prywatności</a>
</div>
</div>
</footer>

    </>
  );
}
