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



tailwind.config = {
theme: {
extend: {
colors: {
orange: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
}
},
fontSize: {
'xs': '0.8125rem',     /* 13px */
'sm': '0.9375rem',     /* 15px */
'base': '1.0625rem',   /* 17px - Body text 1 size bigger */
'lg': '1.1875rem',     /* 19px */
'xl': '1.3125rem',     /* 21px */
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
'7xl': '4.5rem',
'8xl': '6rem',
}
}
}
}



        // Initialize Lucide Icons with custom settings
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="bg-slate-950 text-white text-xs font-medium py-3 text-center px-4 tracking-wide relative z-20">
<span className="opacity-80">Gratis verzending in NL &amp; BE bij bestellingen boven €250</span>
</div>

<div className="md:p-6 bg-white pt-4 pr-4 pb-4 pl-4">
<div className="relative w-full h-[90vh] min-h-[600px] rounded-[2rem] overflow-hidden group">

<div className="absolute inset-0">
<img alt="Modern interieur met houten tafel en tuin" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7afa304-4ecd-4692-8dd2-0cdc7e54346b_3840w.webp"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-700"></div>
<div className="bg-gradient-to-b from-black/50 to-black/20 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<nav className="md:p-10 flex z-30 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0 items-start justify-between">

<a className="flex flex-col leading-none group/logo" href="#">
<span className="font-display font-bold text-2xl text-white tracking-tighter group-hover/logo:text-orange-400 transition-colors font-manrope">STALEN.</span>
<span className="font-display font-medium text-sm text-white/70 tracking-widest uppercase">Onderstel</span>
</a>

<div className="hidden xl:flex gap-4 transition-all text-base font-semibold text-white/90 items-center">
<a className="hover:text-white transition-colors hover:bg-white/10 font-bold font-inter rounded-full pt-2 pr-4 pb-2 pl-4" href="#collectie-inside">Onderstellen
  Binnen</a>
<a className="hover:text-white transition-colors hover:bg-white/10 font-bold rounded-full px-4 py-2" href="#collectie-outside">Onderstellen
                    Buiten</a>
<a className="hover:text-white transition-colors hover:bg-white/10 font-bold rounded-full px-4 py-2" href="#maatwerk">Maatwerk</a>
<div className="flex items-center gap-2">
<button aria-label="Winkelwagen" className="p-2 hover:bg-white/10 rounded-full hover:text-white transition-colors relative" type="button">
<svg className="lucide lucide-shopping-cart w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path className="" d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full border border-slate-900 shadow-sm"></span>
</button>
<button aria-label="Zoeken" className="p-2 hover:bg-white/10 hover:text-white transition-colors rounded-full" type="button">
<svg className="lucide lucide-search w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="11" cy="11" r="8"></circle><path className="" d="m21 21-4.3-4.3"></path></svg>
</button>
</div>
</div>

<button className="xl:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="flex flex-col text-start z-20 p-10 absolute bottom-0 left-0">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-bold text-white tracking-tight fade-up font-manrope drop-shadow-xl">
                Het onderstel voor <br/> uw droomtafel.</h1>
<p className="text-white text-lg leading-relaxed mt-8 fade-up delay-100 max-w-xl">Hoogwaardige stalen
                onderstellen op maat. Van robuuste
                industriële tafelpoten tot verfijnd design, voorzien van de
                sterkste poedercoating.</p>
<div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 fade-up delay-200">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-orange-50 transition-all text-sm tracking-tight shadow-xl shadow-black/10" href="#collectie">
                    Bekijk collectie
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm tracking-tight" href="#maatwerk">
                    Maatwerk aanvragen
                </a>
</div>
</div>
</div>
</div>

<section className="border-b border-slate-100 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-widest text-center mb-10">Vertrouwd door meubelmakers</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="text-lg font-bold text-slate-800 tracking-tight font-sans">WOODWORKS</div>
<div className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1 font-sans"><span className="w-4 h-4 bg-slate-800 rounded-full"></span> STUDIO</div>
<div className="text-lg font-bold text-slate-800 tracking-tight font-sans">INTERIEUR.NL</div>
<div className="text-lg font-bold text-slate-800 italic font-sans">Eikenhouthandel</div>
<div className="text-lg font-bold text-slate-800 tracking-tight font-sans">Loft Design</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 border-b border-slate-100" id="collectie-inside">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row mb-8 gap-x-y-3 gap-y-3 items-start md:items-end justify-between">
<div className="max-w-xl space-y-4">
<h2 className="md:text-6xl text-5xl font-semibold text-slate-900 leading-[2.5rem] tracking-tight"><span "="" className="text-slate-900/70 md:text-2xl text-xl">Onderstellen</span><br/>Binnen</h2>
</div>
<a className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-semibold text-slate-900" href="#">Bekijk alle binnen onderstellen<i className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2]" data-lucide="arrow-right"></i></a>
</div>
<div className="flex overflow-x-auto lg:grid grid-cols-3 md:gap-8 snap-x snap-mandatory no-scrollbar pb-8 gap-x-6 gap-y-6">

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="Matrix Tafelpoot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm text-slate-900">Bestseller</div>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">De Matrix Poot</h3>
<p className="text-sm text-slate-500 mt-1">Stabiel, centraal onderstel</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 289,-</span>
</div>
</div>
</div>

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="Industriële X-Poot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">Industriële X-Poot</h3>
<p className="text-sm text-slate-500 mt-1">Set van 2, zware koker</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 149,-</span>
</div>
</div>
</div>

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="U-Profiel Onderstel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">U-Profiel Poot</h3>
<p className="text-sm text-slate-500 mt-1">Strak, modern &amp; tijdloos</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 139,-</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white pt-24 pb-24 border-b border-slate-100" id="collectie-outside">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row mb-8 gap-x-y-3 gap-y-3 items-start md:items-end justify-between">
<div className="max-w-xl space-y-4">
<h2 className="md:text-6xl text-5xl font-semibold text-slate-900 leading-[2.5rem] tracking-tight"><span "="" className="text-slate-900/70 md:text-2xl text-xl">Onderstellen</span><br/>Buiten</h2>
</div>
<a className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-semibold text-slate-900" href="#">Bekijk alle buiten onderstellen<i className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2]" data-lucide="arrow-right"></i></a>
</div>
<div className="flex overflow-x-auto lg:grid grid-cols-3 md:gap-8 snap-x snap-mandatory no-scrollbar pb-8 gap-x-6 gap-y-6">

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="Matrix Tafelpoot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm text-slate-900">Bestseller</div>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">De Matrix Poot</h3>
<p className="text-sm text-slate-500 mt-1">Stabiel, centraal onderstel</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 289,-</span>
</div>
</div>
</div>

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="Industriële X-Poot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">Industriële X-Poot</h3>
<p className="text-sm text-slate-500 mt-1">Set van 2, zware koker</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 149,-</span>
</div>
</div>
</div>

<div className="group cursor-pointer min-w-[85%] md:min-w-[45%] lg:w-auto max-w-[80vw] md:max-w-sm shrink-0 snap-center">
<div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100">
<img alt="U-Profiel Onderstel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white text-slate-900 rounded-full p-3 shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors font-sans">U-Profiel Poot</h3>
<p className="text-sm text-slate-500 mt-1">Strak, modern &amp; tijdloos</p>
</div>
<div className="text-right">
<span className="block font-semibold text-slate-900">€ 139,-</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="maatwerk">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2">
<div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl shadow-slate-200/50">
<img alt="Lasser aan het werk" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">
<p className="text-white font-medium text-lg leading-relaxed">"Geen afmeting is te gek. Wij maken alles op de millimeter nauwkeurig."</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<span className="text-orange-500 font-bold tracking-wide uppercase text-xs mb-3 block">Maatwerk</span>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        Speciale wensen? <br/>Wij maken het.
                    </h2>
<p className="text-slate-600 text-lg mb-10 leading-relaxed">
                        Heeft u een afwijkend tafelblad, een specifieke hoogte nodig voor een bar, of een compleet eigen ontwerp in gedachten? Onze metaalbewerkers realiseren uw idee.
                    </p>
<ul className="space-y-5 mb-12">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-600 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-slate-700 text-base">Afwijkende hoogtes en breedtes</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-600 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-slate-700 text-base">Speciale RAL-kleuren (Goud, Brons, Wit)</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-orange-600 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-slate-700 text-base">Zware constructies voor natuursteen bladen</span>
</li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all text-sm font-semibold text-white tracking-tight bg-slate-900 rounded-full pt-4 pr-8 pb-4 pl-8" href="mailto:info@stalenonderstel.nl">
  Offerte aanvragen
  <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Waarom kiezen voor Stalen Onderstel?</h2>
<p className="leading-relaxed text-lg text-slate-400 mb-16">Een tafel is vaak het middelpunt van uw interieur. Het onderstel bepaalt niet alleen de stabiliteit, maar ook de uitstraling. Wij specialiseren ons in <span className="font-bold">stalen tafelpoten</span> die perfect passen in een industrieel, modern of landelijk interieur. Dankzij onze eigen productie in Nederland kunnen we snel schakelen en topkwaliteit leveren zonder tussenhandelaren.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-white/10 pt-16">
<div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight font-manrope">5+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Jaar Ervaring</div>
</div>
<div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight font-manrope">2.5k</div>
<div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Tafels Geleverd</div>
</div>
<div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight font-manrope">100%</div>
<div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Tevredenheid</div>
</div>
<div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight font-manrope">NL</div>
<div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Productie</div>
</div>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto md:p-16 bg-white pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex flex-col md:flex-row mb-8 gap-x-y-3 gap-y-3 items-start md:items-end justify-between">
<div className="max-w-xl space-y-4">
<h2 className="md:text-6xl text-3xl font-semibold text-slate-900 tracking-tight">Ervaringen</h2>
</div>
<a className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-semibold text-slate-900" href="#">Bekijk alle reviews<i className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2]" data-lucide="arrow-right"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex text-orange-500 gap-1 mb-4">
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
                        "Prachtig Matrix onderstel besteld. De afwerking is super strak en de montage was zo gepiept. Staat als
                        een huis!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border border-slate-200">
                            MK</div>
<div>
<p className="text-sm font-bold text-slate-900">Mark K.</p>
<p className="text-xs text-slate-400">Amsterdam</p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex text-orange-500 gap-1 mb-4">
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
                        "Maatwerk frame laten lassen voor onze kantoortafels. Zeer goede communicatie en precies geleverd
                        volgens tekening."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border border-slate-200">
                            DV</div>
<div>
<p className="text-sm font-bold text-slate-900">Duumaa V.</p>
<p className="text-xs text-slate-400">Utrecht</p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex text-orange-500 gap-1 mb-4">
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
<i className="size-5 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
                        "Snelle levering en goed verpakt. De poedercoating is echt van hoge kwaliteit, geen krasje te zien."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border border-slate-200">
                            SJ</div>
<div>
<p className="text-sm font-bold text-slate-900">Sophie J.</p>
<p className="text-xs text-slate-400">Rotterdam</p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-slate-50" id="proces">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-16 pb-16 pl-16">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-6">
<span className="text-orange-500 font-semibold tracking-wide uppercase text-xs mb-3 block">Werkwijze</span>
<h2 className="md:text-6xl text-4xl font-semibold text-slate-900 leading-none tracking-tight mb-8">
                        Van staalprofiel tot <br/>design onderstel.
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        In onze werkplaats in Dalfsen combineren we traditioneel vakmanschap met moderne precisie. Zo garanderen we kwaliteit in elk detail van het proces.
                    </p>
</div>

<div className="lg:col-span-6 flex flex-col gap-6">

<div className="group">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="ruler"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">1. Zagen &amp; Lassen</h3>
<p className="text-slate-600 text-base leading-relaxed">
        Hoogwaardige stalen kokers worden op maat gezaagd en met precisie TIG-gelast voor onzichtbare,
        sterke verbindingen.
      </p>
</div>
</div>
</div>

<div className="group">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="layers"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">2. Poedercoating</h3>
<p className="text-slate-600 text-base leading-relaxed">
                                    Elk onderstel krijgt een dubbellaagse poedercoating. Dit zorgt voor een slagvast oppervlak en
                                    bescherming tegen roest.
                                </p>
</div>
</div>
</div>

<div className="group">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="truck"></i>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">3. Levering &amp; Montage</h3>
<p className="text-slate-600 text-base leading-relaxed">
                                    We leveren met eigen transport of betrouwbare koeriers. Inclusief bevestigingsmateriaal en viltjes
                                    voor uw vloer.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="p-24 max-w-7xl mx-auto md:p-16 p-8 space-y-8">
<div className="flex flex-col md:flex-row mb-8 gap-x-y-3 gap-y-3 items-start md:items-end justify-between">
<div className="max-w-xl space-y-4">
<h2 className="md:text-6xl text-3xl font-semibold text-slate-900 tracking-tight">Veel gestelde vragen</h2>
</div>
<a className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-semibold text-slate-900" href="#">Neem contact op<i className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2]" data-lucide="arrow-right"></i></a>
</div>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-xl open:bg-slate-50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-lg">
                        Wat is de levertijd van een standaard onderstel?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 leading-relaxed">
                        Voor standaard modellen (X, U, Matrix) hanteren wij een levertijd van 3 tot 5 werkdagen. Maatwerk duurt gemiddeld 2 tot 3 weken.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl open:bg-slate-50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-lg">
                        Zijn de onderstellen geschikt voor buiten?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 leading-relaxed">
                        Standaard poedercoating is voor binnen. Voor buitengebruik raden wij een dubbele coating + verzinking aan. Neem hiervoor contact op.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl open:bg-slate-50 transition-colors">
<summary className="flex cursor-pointer text-lg font-semibold text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Hoeveel gewicht kan een stalen onderstel dragen?
                        <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 leading-relaxed">
                        Onze gelaste kokers zijn extreem sterk. Een standaard set kan met gemak 250kg tot 500kg dragen, geschikt voor zware eiken of betonnen bladen.
                    </div>
</details>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="flex flex-col leading-none group/logo mb-6" href="#">
<span className="font-display font-bold text-2xl text-white tracking-tighter group-hover/logo:text-orange-400 transition-colors font-manrope">STALEN.</span>
<span className="font-display font-medium text-sm text-white/70 tracking-widest uppercase">Onderstel</span>
</a>
<p className="text-sm leading-relaxed mb-8">
                    De specialist in stalen tafelpoten en frames. <br/>
                    Eerlijk, sterk en Nederlands fabricaat.
                </p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 font-sans">Shop</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Tafelpoten</a></li>
<li><a className="hover:text-white transition-colors" href="#">Matrix Onderstellen</a></li>
<li><a className="hover:text-white transition-colors" href="#">Onderstel voor Bankjes</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 font-sans">Klantenservice</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Verzending &amp; Retour</a></li>
<li><a className="hover:text-white transition-colors" href="#">Montage handleiding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Onderhoudsadvies</a></li>
</ul>
</div>

<div id="contact">
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 font-sans">Contact</h4>
<div className="space-y-4 text-sm">
<p className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="map-pin"></i>
                        Industrieweg 12, Eindhoven
                    </p>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:info@stalenonderstel.nl">
<i className="w-4 h-4 text-slate-500" data-lucide="mail"></i>
                        info@stalenonderstel.nl
                    </a>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+31401234567">
<i className="w-4 h-4 text-slate-500" data-lucide="phone"></i>
                        +31 (0)40 123 4567
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Stalen Onderstel. Alle rechten voorbehouden.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
</div>
</div>
</footer>


    </>
  );
}
