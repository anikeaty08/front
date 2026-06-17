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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<iconify-icon className="text-rose-400 group-hover:scale-110 transition-transform duration-500" icon="solar:hearts-linear" strokeWidth="1.5" width="24"></iconify-icon>
                NUMERO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#concept">Concept</a>
<a className="hover:text-white transition-colors" href="#agenda">Agendă</a>
<a className="hover:text-white transition-colors" href="#tickets">Bilete</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-neutral-200 focus:outline-none" href="#tickets">
                Rezervă Locul
            </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-rose-300 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                Eveniment Fizic • 21 februarie • Brașov
            </div>
<h1 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6">
                Relații care <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-white to-rose-300">durează</span>
</h1>
<p className="mx-auto max-w-xl text-lg text-neutral-400 font-light mb-10 leading-relaxed">
                Descoperă compatibilitatea energetică și arhitectura invizibilă a conexiunilor umane. O conferință despre iubire, cifre și armonie.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-neutral-200" href="#tickets">
                    Vezi Biletele
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative" id="concept">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
<span className="text-rose-400">Omul singur</span><br/> este rupt de lume.
                    </h2>
<div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-transparent rounded-full mb-8"></div>
</div>
<div className="space-y-6 text-lg font-light text-neutral-400 leading-relaxed">
<p>
                        Trăim într-o vreme a confuziei, în care căutăm fericirea, dar ignorăm mecanismele de bază care o produc. <strong className="text-white font-medium">Realitatea este simplă, dar dură:</strong> singurătatea aduce frustrare, agresivitate și, în cele din urmă, boală.
                    </p>
<p>
                        Secretul longevității și al sănătății nu se află în exterior, ci în calitatea legăturilor pe care le construim. Relațiile îți deschid lumea.
                    </p>
<p className="p-6 glass-panel rounded-2xl text-neutral-300 italic border-l-2 border-l-rose-500">
                        "Această conferință este o analiză clară a familiei ca nucleu al stabilității, guvernat de legi precise, roluri distincte și o ordine care, odată respectată, aduce liniște și prosperitate."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="agenda">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-rose-500/10 text-rose-400 mb-4 border border-rose-500/20">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Agenda Evenimentului</h2>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-8 md:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-rose-500 bg-neutral-950 ring-4 ring-neutral-950 group-hover:bg-rose-500 transition-colors"></div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<span className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-2 block">Sesiunea 1</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-2">Cum fac să am relații bune?</h3>
<p className="text-neutral-500 font-light text-sm">Analiza interacțiunilor și a compatibilității.</p>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-rose-500 bg-neutral-950 ring-4 ring-neutral-950 group-hover:bg-rose-500 transition-colors"></div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<span className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-2 block">Sesiunea 2</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-2">Familia, nucleul stabilității</h3>
<p className="text-neutral-500 font-light text-sm">Roluri, ordine și legile nescrise ale căminului.</p>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border border-white/20 bg-neutral-800 ring-4 ring-neutral-950"></div>
<div className="flex items-center gap-4 py-4 opacity-60">
<div className="h-px bg-white/20 w-12"></div>
<span className="text-sm font-medium text-white uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:cup-linear" width="16"></iconify-icon> Pauză de confort
                        </span>
<div className="h-px bg-white/20 w-12"></div>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-rose-500 bg-neutral-950 ring-4 ring-neutral-950 group-hover:bg-rose-500 transition-colors"></div>
<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<span className="text-xs font-medium text-rose-400 uppercase tracking-wider mb-2 block">Sesiunea 3</span>
<h3 className="text-xl md:text-2xl font-medium text-white mb-2">Putere. Progres. Bunăstare.</h3>
<p className="text-neutral-500 font-light text-sm">Rezultatul alinierii relaționale în plan material și spiritual.</p>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">
<div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-white/50 bg-white ring-4 ring-neutral-950 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
<div className="glass-panel-light p-6 rounded-2xl border-l-4 border-l-white">
<h3 className="text-xl font-medium text-white mb-1 flex items-center gap-2">
                            Sesiune Întrebări și Răspunsuri
                            <iconify-icon className="text-rose-400" icon="solar:microphone-3-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 text-sm">Dialog deschis cu participanții.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-950" id="tickets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Investește în Relația Ta</h2>
<p className="text-neutral-400">Alege pachetul care rezonează cu intențiile tale.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">

<div className="glass-panel p-6 rounded-3xl relative flex flex-col h-full hover:border-white/20 transition-colors">
<div className="mb-6 pb-6 border-b border-white/5">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:ticket-linear"></iconify-icon>
                            Acces Standard
                        </h3>
</div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
<div className="flex flex-col">
<span className="text-xs text-rose-300 font-medium uppercase tracking-wider">Early Bird</span>
<span className="text-[10px] text-neutral-500">Primele 50 locuri</span>
</div>
<span className="text-xl font-medium text-white">93 lei</span>
</div>
<div className="flex justify-between items-center px-3 opacity-60">
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium uppercase tracking-wider">Middle Bird</span>
</div>
<span className="text-lg text-neutral-300">147 lei</span>
</div>
<div className="flex justify-between items-center px-3 opacity-40">
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium uppercase tracking-wider">Late Price</span>
</div>
<span className="text-lg text-neutral-300">192 lei</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Acces la conferință</span>
</li>
</ul>
<a className="w-full py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all text-center" href="#">
                        Rezervă bilet Standard
                    </a>
</div>

<div className="glass-panel p-6 rounded-3xl relative flex flex-col h-full border-rose-500/30 bg-rose-900/5 hover:border-rose-500/50 transition-colors">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.4)]">Best Value</div>
<div className="mb-6 pb-6 border-b border-white/5">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:star-linear"></iconify-icon>
                            Acces PREMIUM
                        </h3>
</div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-center bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
<div className="flex flex-col">
<span className="text-xs text-rose-300 font-medium uppercase tracking-wider">Early Bird</span>
</div>
<span className="text-xl font-medium text-white">240 lei</span>
</div>
<div className="flex justify-between items-center px-3 opacity-60">
<span className="text-xs text-neutral-300 font-medium uppercase tracking-wider">Middle Bird</span>
<span className="text-lg text-neutral-300">294 lei</span>
</div>
<div className="flex justify-between items-center px-3 opacity-40">
<span className="text-xs text-neutral-300 font-medium uppercase tracking-wider">Late Bird</span>
<span className="text-lg text-neutral-300">363 lei</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Acces la conferință</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-white">Curs Compatibilitate (4 elemente)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-white">Curs Vibrația Interioară</span>
</li>
</ul>
<a className="w-full py-3 rounded-full bg-rose-600 text-white text-sm font-medium hover:bg-rose-500 transition-all text-center shadow-[0_0_30px_-10px_rgba(225,29,72,0.4)]" href="#">
                        Rezervă loc PREMIUM
                    </a>
</div>

<div className="bg-white p-6 rounded-3xl relative flex flex-col h-full shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] transform lg:-translate-y-4">
<div className="mb-6 pb-6 border-b border-neutral-100">
<h3 className="text-lg font-medium text-black flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="solar:crown-linear"></iconify-icon>
                            Acces VIP
                        </h3>
</div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-center bg-neutral-100 p-3 rounded-lg border border-neutral-200">
<div className="flex flex-col">
<span className="text-xs text-rose-600 font-bold uppercase tracking-wider">Early Bird</span>
</div>
<span className="text-xl font-semibold text-black">996 lei</span>
</div>
<div className="flex justify-between items-center px-3">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Middle Bird</span>
<span className="text-lg text-neutral-600">1110 lei</span>
</div>
<div className="flex justify-between items-center px-3 opacity-60">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Late Bird</span>
<span className="text-lg text-neutral-600">1230 lei</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Acces la conferință</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Cursuri Compatibilitate &amp; Vibrație</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Acces Previziuni 2026</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Voucher 300 lei</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:book-linear"></iconify-icon>
<span>Carte "Capitolul79" cu autograf</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-800 font-semibold">
<iconify-icon className="text-rose-600 mt-0.5 shrink-0" icon="solar:wine-glass-linear"></iconify-icon>
<span>Cină cu ROMEO</span>
</li>
</ul>
<a className="w-full py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all text-center shadow-lg" href="#">
                        Rezervă loc VIP
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Întrebări Frecvente</h2>
<div className="grid gap-6">

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2 flex items-center justify-between">
                        Am nevoie de cunoștințe de numerologie?
                        <iconify-icon className="text-neutral-500" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Nu. Conferința este structurată pentru a fi accesibilă oricui dorește să înțeleagă dinamica relațională, indiferent de nivelul de pregătire anterioară. Conceptele vor fi explicate clar și aplicat.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2 flex items-center justify-between">
                        Pot veni singur/ă la eveniment?
                        <iconify-icon className="text-neutral-500" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Absolut. Este o oportunitate excelentă nu doar pentru a învăța, ci și pentru a cunoaște oameni cu interese similare. Mulți participanți vin individual pentru propria dezvoltare.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-lg font-medium text-white mb-2 flex items-center justify-between">
                        Ce include biletul VIP?
                        <iconify-icon className="text-neutral-500" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                        Pe lângă locurile preferențiale și toate materialele cursului, biletul VIP include o cină exclusivă cu Romeo, cartea cu autograf și acces la previziunile detaliate pentru anul viitor.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:hearts-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-500 tracking-tight">ROMEO NUMEROLOGIE © 2023</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
