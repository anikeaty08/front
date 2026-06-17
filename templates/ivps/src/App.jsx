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
      

<nav className="fixed w-full z-50 border-b top-0 backdrop-blur-md bg-white/90 border-slate-200">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-12">

<a className="flex flex-col group gap-0.5 select-none cursor-pointer" href="index.html" title="Zpět na úvodní stranu">
<div className="flex items-end leading-none gap-0.5">
<span className="text-4xl tracking-tighter text-slate-700 font-montserrat font-medium">I</span>
<div className="relative w-8 h-8 mx-px -mb-1">
<svg className="w-full h-full fill-current text-red-600" viewbox="0 0 100 100">
<circle cx="50" cy="22" r="14"></circle>
<path d="M 18 38 L 50 95 L 82 38 L 66 38 L 50 68 L 34 38 Z"></path>
</svg>
</div>
<span className="text-4xl tracking-tighter text-slate-700 font-montserrat font-medium">PS</span>
</div>
<div className="flex items-center gap-1 text-[11px] leading-none whitespace-nowrap pl-0.5">
<span className="font-light text-slate-500 font-manrope">Stavíme na</span>
<span className="font-bold text-red-600 font-manrope">spokojenosti</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-600">
<a className="transition-colors hover:text-red-600 font-manrope" href="index.html">Domů</a>
<a className="transition-colors hover:text-red-600 font-manrope" href="index.html#sluzby">Služby</a>
<a className="transition-colors hover:text-red-600 font-manrope" href="index.html#o-nas">O nás</a>
<a className="transition-colors text-red-600 font-medium font-manrope" href="#">Kariéra</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 hover:text-slate-900 text-base font-normal text-slate-600 font-manrope" href="tel:+420774078089">+420 774 078 089</a>
<a className="transition-all hover:bg-red-700 shadow-red-600/20 text-base font-medium text-white bg-red-600 rounded pt-3 pr-6 pb-3 pl-6 shadow-lg font-manrope" href="#kontakt">
                    Poptat stavbu
                </a>
</div>
</div>
</nav>

<header className="pt-48 pb-24 relative overflow-hidden bg-slate-50 border-b border-slate-200">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.5]"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 z-[0] bg-red-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl">

<nav aria-label="Breadcrumb" className="flex mb-8">
<ol className="inline-flex items-center space-x-1 md:space-x-3">
<li className="inline-flex items-center">
<a className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-red-600 font-manrope" href="index.html">
<svg className="w-4 h-4 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Domů
                            </a>
</li>
<li>
<div className="flex items-center">
<svg className="w-6 h-6 text-slate-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
<span className="ml-1 text-sm font-medium text-slate-900 md:ml-2 font-manrope">Kariéra</span>
</div>
</li>
</ol>
</nav>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-8 font-manrope">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Nábor otevřen
                </div>
<h1 className="text-5xl md:text-7xl text-slate-900 tracking-tight mb-8 font-montserrat font-medium leading-[1.1]">
                    Budujte s námi <br/>
<span className="text-red-600">budoucnost</span>
</h1>
<p className="text-xl md:text-2xl font-light text-slate-500 max-w-2xl font-manrope leading-relaxed">
                    Hledáme talentované kolegy, kteří chtějí být součástí stabilní stavební společnosti a pracovat na projektech, které mají smysl.
                </p>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-slate-900 font-montserrat font-medium">Proč pracovat v IVPS?</h2>
<p className="text-slate-500 text-lg font-light font-manrope">Vytváříme prostředí, kde se dobře pracuje a roste.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="col-span-1 md:col-span-2 row-span-2 group relative rounded-3xl p-8 bg-slate-50 border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100/40 to-transparent rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between" style={{minHeight: '280px'}}>
<div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-red-600 mb-6">
<svg className="iconify" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"></path></svg>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 font-montserrat">Stabilní zázemí</h3>
<p className="text-slate-500 font-manrope leading-relaxed">Jsme silná česká společnost s dlouholetou tradicí. Nabízíme jistotu práce, férové jednání a pravidelný výplatní termín.</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 group relative rounded-3xl p-8 bg-white border border-slate-200 hover:border-red-200 transition-colors duration-300">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-montserrat">Skvělé ohodnocení</h3>
<p className="text-sm text-slate-500 font-manrope">Motivační platové podmínky a roční prémie.</p>
</div>

<div className="col-span-1 md:col-span-1 group relative rounded-3xl p-8 bg-white border border-slate-200 hover:border-red-200 transition-colors duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 transition-transform">
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-montserrat">Benefity</h3>
<p className="text-sm text-slate-500 font-manrope">Multisport, stravenky, 5 týdnů dovolené.</p>
</div>

<div className="col-span-1 md:col-span-2 group relative rounded-3xl p-8 bg-slate-900 text-white overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
<div className="w-16 h-16 shrink-0 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-red-400 border border-white/10">
<svg className="iconify" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 font-montserrat">Moderní vybavení</h3>
<p className="text-slate-400 font-manrope text-sm leading-relaxed max-w-md">Pracujeme s nejnovějšími technologiemi a kvalitním nářadím. Pravidelně obměňujeme vozový park a investujeme do technického zázemí.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pozice">
<div className="max-w-5xl mx-auto px-6">
<h3 className="text-2xl font-semibold mb-10 text-slate-900 font-montserrat">Aktuálně otevřené pozice</h3>
<div className="flex flex-col gap-4">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-3">
<h4 className="text-xl font-bold text-slate-900 font-manrope group-hover:text-red-600 transition-colors">Hlavní stavbyvedoucí</h4>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">Full-time</span>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">Praha / Střední Čechy</span>
</div>
<p className="text-slate-500 font-manrope mb-6">Zodpovědnost za vedení stavebních zakázek, koordinace poddodavatelů a kontrola kvality. Hledáme zkušeného lídra s autorizací.</p>

<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded font-manrope border border-slate-100">
<svg className="iconify mr-1.5 w-4 h-4" data-icon="lucide:briefcase" data-inline="false"></svg> Praxe min. 5 let
                                </span>
<span className="inline-flex items-center text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded font-manrope border border-slate-100">
<svg className="iconify mr-1.5 w-4 h-4" data-icon="lucide:graduation-cap" data-inline="false"></svg> ČKAIT
                                </span>
</div>
</div>
<div className="shrink-0 pt-1">
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-manrope w-full md:w-auto shadow-sm">
                                Detail pozice
                                <svg className="iconify ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-3">
<h4 className="text-xl font-bold text-slate-900 font-manrope group-hover:text-red-600 transition-colors">Přípravář / Rozpočtář staveb</h4>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">Full-time</span>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">Kancelář Praha</span>
</div>
<p className="text-slate-500 font-manrope mb-6">Tvorba cenových nabídek, komunikace s investory a výběr subdodavatelů. Vhodné i pro absolventy VŠ stavebního směru.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded font-manrope border border-slate-100">
<svg className="iconify mr-1.5 w-4 h-4" data-icon="lucide:monitor" data-inline="false"></svg> MS Office, KROS
                                </span>
</div>
</div>
<div className="shrink-0 pt-1">
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-manrope w-full md:w-auto shadow-sm">
                                Detail pozice
                                <svg className="iconify ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex-1">
<div className="flex flex-wrap items-center gap-3 mb-3">
<h4 className="text-xl font-bold text-slate-900 font-manrope group-hover:text-red-600 transition-colors">Zedník / Stavební dělník</h4>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">HPP / ŽL</span>
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide font-manrope">Stavby ČR</span>
</div>
<p className="text-slate-500 font-manrope mb-6">Provádění zednických prací, montáže sádrokartonů, zateplovací systémy. Nabízíme ubytování a dopravu na stavbu.</p>
</div>
<div className="shrink-0 pt-1">
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-manrope w-full md:w-auto shadow-sm">
                                Detail pozice
                                <svg className="iconify ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<svg className="iconify" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
</div>
<h3 className="text-3xl font-semibold mb-4 text-slate-900 font-montserrat">Nenašli jste vhodnou pozici?</h3>
<p className="text-slate-500 text-lg mb-8 font-manrope">
                Stále hledáme šikovné lidi. Pošlete nám svůj životopis a my se vám ozveme, jakmile se objeví příležitost šitá na míru právě vám.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium font-manrope shadow-lg shadow-slate-900/10" href="mailto:kariera@ivps.cz">
                    Poslat životopis
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium font-manrope" href="tel:+420774078089">
                    Zavolat nám
                </a>
</div>
</div>
</section>

<footer className="bg-stone-950 border-slate-200 border-t pt-20 pr-6 pb-10 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

<div className="">

<a className="flex flex-col group gap-0.5 select-none mb-8 w-fit" href="index.html">
<div className="flex items-end leading-none gap-0.5">
<span className="text-4xl text-slate-50 tracking-tighter font-montserrat font-medium">I</span>
<div className="relative w-8 h-8 mx-px -mb-1">
<svg className="fill-current w-[32px] h-[32px]" strokeWidth="2" style={{color: 'rgb(220, 38, 38)'}} viewbox="0 0 100 100">
<circle cx="50" cy="22" r="14"></circle>
<path d="M 18 38 L 50 95 L 82 38 L 66 38 L 50 68 L 34 38 Z"></path>
</svg>
</div>
<span className="text-4xl text-slate-50 tracking-tighter font-montserrat font-medium">PS</span>
</div>
<div className="flex items-center gap-1 text-[11px] leading-none whitespace-nowrap pl-0.5">
<span className="font-light text-slate-50 font-manrope">Stavíme na</span>
<span className="font-bold text-red-600 font-manrope">spokojenosti</span>
</div>
</a>
<p className="leading-relaxed text-base text-slate-50 mb-8 font-manrope">
                        Profesionální stavební společnost se zaměřením na kvalitu a inovace. Váš partner pro stavby budoucnosti.
                    </p>
</div>

<div className="">
<h4 className="text-lg font-medium text-red-600 mb-6 font-manrope">Rychlé odkazy</h4>
<ul className="space-y-4 text-base text-slate-500">
<li className=""><a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="index.html#o-nas">O společnosti</a></li>
<li className=""><a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="index.html#sluzby">Služby</a></li>
<li className=""><a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="#">Kariéra</a></li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-medium text-red-600 mb-6 font-manrope">Služby</h4>
<ul className="space-y-4 text-base text-slate-500">
<li className=""><a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="#">Pozemní stavby</a></li>
<li className=""><a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="#">Průmyslové haly</a></li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-medium text-red-600 mb-6 font-manrope">Kontakt</h4>
<ul className="space-y-4 text-base text-slate-500">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 text-red-600" data-icon="lucide:map-pin" data-width="20" focusable="false" height="20" preserveaspectratio="xMidYMid meet" style={{verticalAlign: '-0.125em', transform: 'rotate(360deg)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-slate-50 font-manrope">Ulice Příkladová 123<br/>100 00 Praha</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-red-600" data-icon="lucide:phone" data-width="20" focusable="false" height="20" preserveaspectratio="xMidYMid meet" style={{verticalAlign: '-0.125em', transform: 'rotate(360deg)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="transition-colors hover:text-red-600 text-slate-50 font-manrope" href="tel:+420123456789">+420 123 456 789</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-slate-200">
<div className="text-sm text-slate-50 font-manrope">© 2025 IVPS. Všechna práva vyhrazena.</div>
<div className="flex gap-6">
<a className="transition-colors text-slate-400 hover:text-red-600" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:facebook" data-width="22" focusable="false" height="22" preserveaspectratio="xMidYMid meet" style={{verticalAlign: '-0.125em', transform: 'rotate(360deg)'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-slate-400 hover:text-red-600" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:linkedin" data-width="22" focusable="false" height="22" preserveaspectratio="xMidYMid meet" style={{verticalAlign: '-0.125em', transform: 'rotate(360deg)'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
