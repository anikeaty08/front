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
      

<div className="noise-bg"></div>

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-emerald-50/40">

<div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-[120px] blob-anim"></div>

<div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[120px] blob-anim" style={{animationDelay: '-5s'}}></div>

<div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-[90px] blob-anim" style={{animationDelay: '-10s'}}></div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="relative backdrop-blur-xl bg-white/80 border border-white/60 rounded-full px-2 py-2 pl-6 flex items-center justify-between w-full max-w-6xl shadow-xl shadow-slate-200/40">

<a className="flex flex-col leading-none group" href="#">
<span className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">Milan Levíček</span>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Finanční poradenství</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-slate-100/50 rounded-full p-1 border border-white/50">
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm transition-all" href="#">Domů</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all" href="#sluzby">Služby</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all" href="#omne">O mně</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all" href="#kontakt">Kontakt</a>
</div>

<a className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 group" href="#rezervace">
<span className="text-xs font-bold tracking-wide uppercase">Nezávazná konzultace</span>
<div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</nav>
</header>

<section className="relative z-10 pt-44 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-[90vh] flex items-center">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col items-start gap-8">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-xs font-bold tracking-wider uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Přijímám nové klienty
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    Finance pod kontrolou. <br/>
<span className="relative inline-block">
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Budoucnost v klidu.</span>
<svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                    Pomáhám klientům chránit majetek, růst a dělat finanční rozhodnutí s jistotou už více než 12 let.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[20px] bg-slate-900 text-white text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 group" href="#rezervace">
                        Domluvit schůzku
                        <iconify-icon className="text-lg text-emerald-400 group-hover:text-white transition-colors" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-white text-slate-700 border-2 border-slate-100 text-sm font-bold tracking-wide transition-all duration-300 hover:border-slate-300 hover:bg-slate-50" href="#proces">
<iconify-icon className="text-xl text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
                        Jak spolupráce probíhá
                    </a>
</div>
</div>

<div className="relative flex items-center justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-emerald-100/50 rounded-full blur-3xl -z-10"></div>

<div className="relative w-full max-w-md aspect-[4/5] bg-slate-100 rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 z-0"></div>

<div className="absolute inset-0 flex items-end justify-center overflow-hidden">
<img alt="Milan Levíček" className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md pl-2 pr-5 py-2 rounded-full shadow-lg border border-white flex items-center gap-3 float-card">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shadow-inner">
<iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-bold text-slate-900">120+</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Klientů</span>
</div>
</div>

<div className="absolute bottom-8 right-6 z-10 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl shadow-slate-900/20 flex items-center gap-3 border border-slate-700 float-card" style={{animationDelay: '-2s'}}>
<div className="flex flex-col leading-tight text-right">
<span className="text-sm font-bold text-white">12 let</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Zkušeností</span>
</div>
<iconify-icon className="text-2xl text-emerald-400" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-10 -left-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">Možná řešíte právě toto…</h2>
<p className="text-slate-500 text-lg font-medium">Finanční starosti, které vám brání ve skutečném rozletu. Odstraňme je společně.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-4xl text-slate-300" icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rotate-1 hover:rotate-0">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-orange-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-closed-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Netransparentnost financí</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Nevíte přesně, kam vaše peníze mizí a zda vaše současné produkty skutečně vydělávají.</p>
</div>

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:-rotate-1 hover:rotate-0 z-10">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-red-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Finanční zranitelnost</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Výpadek příjmů by ohrozil váš životní standard. Chybí vám správně nastavená rezerva.</p>
</div>

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rotate-1 hover:rotate-0">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-indigo-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hourglass-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Důchodová nejistota</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Stát se nepostará. Tušíte to, ale zatím nemáte konkrétní plán, jak si zajistit důstojnou rentu.</p>
</div>

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:-rotate-1 hover:rotate-0">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-blue-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-recieved-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Úvěrové riziko</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Obava z vysokých úroků hypoték a půjček. Možná přeplácíte bankám více, než je nutné.</p>
</div>

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rotate-1 hover:rotate-0 z-10">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-purple-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Skryté poplatky</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Bankovní a investiční produkty často ukrajují zisky skrze poplatky, o kterých ani nevíte.</p>
</div>

<div className="group relative bg-white p-8 rounded-[28px] shadow-lg shadow-slate-200/50 border border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:-rotate-1 hover:rotate-0">
<div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-rose-100 transition-colors pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Eroze úspor</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Inflace znehodnocuje peníze na běžném účtu. Každý rok si za své úspory koupíte méně.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-12 bg-white/40 rounded-[48px] mx-2 md:mx-6 border border-white shadow-sm" id="sluzby">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 tracking-tight text-center">S čím vám pomohu</h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group relative bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/40 hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-100">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Investice a spoření</h3>
<p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">Dlouhodobé zhodnocení a ochrana kapitálu. Využíváme globální trhy, ETF a prověřené nástroje pro růst vašeho majetku.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-900 text-sm font-bold hover:bg-emerald-50 hover:text-emerald-700 transition-colors w-max" href="#rezervace">
                            Zjistit více <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/40 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-100">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-blue-600/30">
<iconify-icon icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Hypotéky a financování</h3>
<p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">Férové podmínky bez zbytečných přeplatků. Najdu pro vás nejlepší financování bydlení na trhu a provedu vás procesem.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-900 text-sm font-bold hover:bg-blue-50 hover:text-blue-700 transition-colors w-max" href="#rezervace">
                            Zjistit více <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/40 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-100">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-purple-600/30">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Pojištění a ochrana</h3>
<p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">Finanční stabilita pro vás i rodinu. Nastavíme záchrannou síť tak, aby vás podržela v kritických momentech, aniž byste platili zbytečnosti.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 text-slate-900 text-sm font-bold hover:bg-purple-50 hover:text-purple-700 transition-colors w-max" href="#rezervace">
                            Zjistit více <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-12 overflow-hidden" id="proces">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-bold text-slate-900 mb-20 text-center tracking-tight">Jak spolupracujeme</h2>
<div className="relative grid md:grid-cols-3 gap-12">

<svg className="absolute top-12 left-0 w-full h-24 hidden md:block text-slate-200 -z-10" preserveaspectratio="none">
<path d="M 150 20 Q 500 100 950 20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="3"></path>
</svg>

<div className="flex flex-col items-center text-center group">
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold text-slate-900">01</span>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg rotate-12">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Analýza situace</h3>
<p className="text-sm text-slate-500 font-medium max-w-[240px]">Pochopím vaše cíle, příjmy a výdaje. Žádné šablony, jen reálná data.</p>
</div>

<div className="flex flex-col items-center text-center group mt-8 md:mt-0">
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold text-slate-900">02</span>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg -rotate-12">
<iconify-icon icon="solar:object-scan-linear"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Strategie na míru</h3>
<p className="text-sm text-slate-500 font-medium max-w-[240px]">Vytvořím plán, který propojuje investice a ochranu do funkčního celku.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="relative">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold text-slate-900">03</span>
</div>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg rotate-6">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Dlouhodobá péče</h3>
<p className="text-sm text-slate-500 font-medium max-w-[240px]">Pravidelný servis a úpravy portfolia podle vývoje vašeho života.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-6 lg:px-12" id="omne">
<div className="max-w-7xl mx-auto">
<div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600 to-transparent opacity-20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-emerald-600 to-transparent opacity-20 blur-[100px] rounded-full"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Expertíza, které můžete věřit.</h2>
<p className="text-slate-400 text-lg leading-relaxed font-medium mb-8 max-w-lg">
                            V financích nejde o náhodu, ale o disciplínu a znalosti. Zakládám si na absolutní transparentnosti a vzdělávání klientů.
                        </p>

<div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
<iconify-icon className="text-4xl text-emerald-400" icon="solar:diploma-verified-bold"></iconify-icon>
<div>
<div className="font-bold text-white">Certifikace PFP</div>
<div className="text-xs text-slate-400 font-semibold uppercase">Poradce finančního plánování</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 md:gap-8">
<div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[28px] text-center hover:bg-white/10 transition-colors">
<div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">120+</div>
<div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Klientů</div>
</div>
<div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[28px] text-center hover:bg-white/10 transition-colors">
<div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">12</div>
<div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Let zkušeností</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Zkušenosti klientů</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-1 text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-slate-200" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-slate-600 font-medium italic mb-8 leading-relaxed">„Konečně mám jasný finanční plán a klid. Investice mi dávají smysl a vím, že jsem zajištěn proti výpadku příjmu.“</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 font-bold flex items-center justify-center text-sm">PN</div>
<div>
<div className="text-sm font-bold text-slate-900">Petr Novák</div>
<div className="text-xs font-semibold text-slate-400">IT Specialista</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 md:-mt-8 mb-8 md:mb-0 relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-1 text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-slate-200" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-slate-600 font-medium italic mb-8 leading-relaxed">„Řešili jsme hypotéku v komplikované situaci. Milan našel řešení, které nám v bance nenabídli. Profesionální přístup.“</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 font-bold flex items-center justify-center text-sm">JD</div>
<div>
<div className="text-sm font-bold text-slate-900">Jana Dvořáková</div>
<div className="text-xs font-semibold text-slate-400">Podnikatelka</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[28px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-1 text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-slate-200" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-slate-600 font-medium italic mb-8 leading-relaxed">„Líbí se mi lidský přístup. Žádné tlačení do produktů, ale skutečná snaha pomoci rodinnému rozpočtu dlouhodobě.“</p>
<div className="flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 font-bold flex items-center justify-center text-sm">MS</div>
<div>
<div className="text-sm font-bold text-slate-900">Martin Svoboda</div>
<div className="text-xs font-semibold text-slate-400">Architekt</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-12 px-6 lg:px-12">
<div className="max-w-4xl mx-auto rounded-[36px] bg-gradient-to-r from-emerald-500 to-cyan-500 p-1 shadow-2xl shadow-emerald-500/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-white/10 backdrop-blur-md rounded-[34px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
<div className="text-white text-center md:text-left">
<div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">E-book Zdarma</div>
<h2 className="text-3xl font-bold mb-3">Příručka: Jak mít finance pod kontrolou</h2>
<p className="text-emerald-50 text-sm font-medium opacity-90">Stáhněte si 7 kroků k finanční jistotě ještě dnes.</p>
</div>
<div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
<input className="px-6 py-4 rounded-[20px] text-sm font-medium min-w-[260px] bg-white/95 border-none shadow-xl shadow-black/5 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-slate-800" placeholder="Váš email" type="email"/>
<button className="bg-slate-900 text-white font-bold text-sm px-8 py-4 rounded-[20px] shadow-xl hover:bg-slate-800 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                        Stáhnout zdarma
                        <iconify-icon className="text-lg" icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 lg:px-12" id="rezervace">
<div className="max-w-3xl mx-auto text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px] rounded-full -z-10"></div>
<h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Rezervujte si online konzultaci</h2>
<p className="text-slate-500 font-medium mb-12">Vyberte si termín, který vám vyhovuje. Potkáme se online, z pohodlí domova.</p>

<div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/60 p-6 md:p-10 border border-slate-100 max-w-xl mx-auto text-left relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
<div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
<span className="font-bold text-lg text-slate-900">Květen 2024</span>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-100 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-slate-100 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-7 gap-2 md:gap-4 text-sm font-medium mb-6">
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">Po</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">Út</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">St</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">Čt</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">Pá</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">So</div>
<div className="text-slate-300 text-center text-xs uppercase tracking-wide py-2">Ne</div>

<div className="aspect-square flex items-center justify-center text-slate-300 rounded-xl">29</div>
<div className="aspect-square flex items-center justify-center text-slate-300 rounded-xl">30</div>
<div className="aspect-square flex items-center justify-center text-slate-600 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors">1</div>
<div className="aspect-square flex items-center justify-center bg-slate-900 text-white shadow-lg shadow-slate-900/30 font-bold rounded-xl relative overflow-hidden">
                        2
                        <div className="absolute bottom-1 w-1 h-1 bg-emerald-400 rounded-full"></div>
</div>
<div className="aspect-square flex items-center justify-center text-slate-600 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-100">3</div>
<div className="aspect-square flex items-center justify-center text-slate-600 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-100">4</div>
<div className="aspect-square flex items-center justify-center text-slate-300 rounded-xl">5</div>
</div>

<div className="space-y-3">
<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dostupné časy</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">09:00</button>
<button className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform">14:30</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 rounded-t-[48px] pt-24 pb-12 px-6 lg:px-12 text-slate-400 relative overflow-hidden mt-12 z-20" id="kontakt">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-900/40 opacity-40 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2 pr-8">
<a className="text-2xl font-bold tracking-tight text-white mb-6 block" href="#">Milan Levíček</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium mb-8">
                        Váš partner pro bezpečný růst majetku. Spojuji moderní technologie s osobním přístupem pro vaši finanční nezávislost.
                    </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all text-xl group" href="#">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all text-xl group" href="#">
<iconify-icon className="group-hover:-rotate-12 transition-transform" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6 tracking-wide">Kontakt</h4>
<ul className="space-y-4 text-sm font-medium">
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
<iconify-icon className="text-emerald-400 text-lg group-hover:scale-110 transition-transform" icon="solar:smartphone-linear"></iconify-icon>
                            +420 777 123 456
                        </li>
<li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
<iconify-icon className="text-blue-400 text-lg group-hover:scale-110 transition-transform" icon="solar:mention-circle-linear"></iconify-icon>
                            kontakt@milanlevicek.cz
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
                            Praha, Česká republika
                        </li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 tracking-wide">Právní informace</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#">Ochrana údajů</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Obchodní podmínky</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-600 uppercase tracking-wider">
<p>© 2024 Milan Levíček. Všechna práva vyhrazena.</p>
<p className="mt-4 md:mt-0 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Modern Financial Advisory
                </p>
</div>
</div>
</footer>

    </>
  );
}
