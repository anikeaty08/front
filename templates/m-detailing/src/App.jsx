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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
gold: '#C5A059', // Metallic Gold from logo
dark: '#0a0a0a',
panel: '#121212',
accent: '#E30613' // Subtle red accent mentioned in prompt
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="flex items-center group" href="#">
<span className="flex items-center h-14">
<img alt="M_ DETAILING" className="w-auto h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b935dcb-c630-48d6-bccc-feb57f05c311_320w.png?w=800&amp;q=80"/>
</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal tracking-wide text-white">
<a className="hover:text-brand-gold transition-colors" href="#home">
            Domů
          </a>
<a className="hover:text-brand-gold transition-colors" href="#sluzby">
            Služby
          </a>
<a className="hover:text-brand-gold transition-colors" href="#realizace">
            Realizace
          </a>
<a className="hover:text-brand-gold transition-colors" href="#o-nas">
            O nás
          </a>
<a className="hover:text-brand-gold transition-colors" href="#cennik">
            Ceník
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-black bg-brand-gold hover:bg-white transition-colors uppercase tracking-wider" href="#kontakt">
            OBJEDNAT TERMÍN
          </a>
<button className="lg:hidden text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Sports Car Garage" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
<div className="bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-brand-gold uppercase text-xs font-medium tracking-widest">
              PRÉMIOVÝ DETAILING
            </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-semibold text-white tracking-tight font-display mb-6">
            PRÉMIOVÝ AUTODETAILING,
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
              KTERÝ VRACÍ AUTU DOKONALÝ VZHLED
            </span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed">
            Profesionální péče o lak, interiér a ochranu vozidla. Preciznost,
            kvalita a dlouhodobý výsledek.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-brand-gold hover:bg-white transition-all uppercase tracking-wide" href="#sluzby">
              Objednat termín
              <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/5 transition-all uppercase tracking-wide backdrop-blur-sm" href="#realizace">
              Zobrazit realizace
            </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-brand-dark relative" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              NAŠE SLUŽBY
            </h2>
<p className="text-neutral-400 max-w-md">
              Specializujeme se na hloubkové čištění, korekce laku a aplikaci
              ochranných povlaků.
            </p>
</div>
<div className="hidden md:block h-px bg-white/10 flex-grow ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-sparkles text-brand-gold w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Autodetailing exteriéru
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Ruční mytí, dekontaminace laku, leštění a ochrana pro maximální
              lesk a hloubku barvy.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Šetrné ruční mytí
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Chemická dekontaminace
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-scan-line text-brand-gold w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
<line x1="7" x2="17" y1="12" y2="12"></line>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Korekce a renovace laku
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Odstranění škrábanců, hologramů a oxidace. Obnovení původního
              vzhledu laku.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Vícekrokové leštění
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Měření tloušťky laku
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-shield-check text-brand-gold w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Keramická ochrana
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Dlouhodobá ochrana laku proti nečistotám, UV záření a chemii.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Certifikovaná keramika
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Tekuté stěrače
              </li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-armchair text-brand-gold w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3"></path>
<path d="M6 9v10"></path>
<path d="M18 9v10"></path>
<path d="M6 9h12a2 2 0 0 0 1.9-2.5L18 2H6L4.1 6.5A2 2 0 0 0 6 9Z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Čištění interiéru
            </h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
              Hloubkové čištění sedaček, koberců a plastů včetně dezinfekce
              ozónem.
            </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Tepování a čištění kůže
              </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                Impregnace plastů
              </li>
</ul>
</article>
</div>
</div>
</section>

<section className="border-y bg-neutral-950 border-white/5 pt-24 pb-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold/50"></div>
<img alt="Team ZapaCars working" className="z-10 transition-all duration-700 shadow-black/50 w-full object-cover bg-center relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/baa103bc-1bd1-411a-8f0c-75d6f093d0d3_1600w.jpg"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/50"></div>
</div>
<div className="">
<h4 className="text-brand-gold uppercase tracking-widest font-medium mb-2">
              O NÁS
            </h4>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
              PRECIZNÍ PRÁCE. VIDITELNÝ VÝSLEDEK.
            </h2>
<div className="space-y-6 text-neutral-400">
<p className="">
                M_DETAILING vznikl z vášně pro auta a detail. Každé vozidlo
                bereme jako individuální projekt, kde rozhodují detaily,
                zkušenosti a správné postupy. Naším cílem není rychlost, ale
                perfektní výsledek.
              </p>
<p className="">
                Používáme pouze ověřenou autokosmetiku a nejmodernější
                technologie leštění a ochrany laku. Ať už jde o rodinné auto
                nebo sběratelský kousek, přistupujeme k němu s maximální péčí.
              </p>
</div>
<div className="mt-10 flex gap-8 border-t border-white/10 pt-8">
<div className="">
<span className="block text-3xl font-semibold text-white font-display">
                  25+
                </span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">
                  Detailing projektů
                </span>
</div>
<div className="">
<span className="block text-3xl font-display text-white font-semibold">
                  5+
                </span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">
                  Let praxe
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="realizace">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
          SKUTEČNÉ VÝSLEDKY NAŠÍ PRÁCE
        </h2>
<a className="hidden md:inline-flex items-center text-brand-gold hover:text-white transition-colors mt-4 md:mt-0" href="#">
          Prohlédnout portfolio
          <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="group aspect-[4/3] overflow-hidden bg-neutral-900 relative">
<div className="flex flex-col bg-center bg-gradient-to-t from-black/80 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61cf7d03-b276-4b47-868c-4f09e6823ac3_1600w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Renovace
            </p>
<h3 className="text-2xl font-medium text-white font-display">
              Kompletní detailing
            </h3>
</div>
<img alt="Renowacja Mustang" className="transition-transform duration-700 group-hover:scale-[1.03] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61cf7d03-b276-4b47-868c-4f09e6823ac3_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<div className="flex flex-col bg-center bg-gradient-to-t from-black/80 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3af577f1-d6d1-479b-9e35-3206fdbc90f4_1600w.jpg?w=800&amp;amp;q=80)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Leštění
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Korekce laku
            </h3>
</div>
<img alt="Porsche Lakiernictwo" className="transition-transform duration-700 group-hover:scale-[1.03] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3af577f1-d6d1-479b-9e35-3206fdbc90f4_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<div className="flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Ochrana
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Keramická ochrana
            </h3>
</div>
<img alt="Tuning Chevrolet" className="transition-transform duration-700 group-hover:scale-[1.03] bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b5854a8-a94c-4a7a-86e2-c0c6fc4fa9ac_1600w.jpg"/>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Serwis BMW" className="transition-transform duration-700 group-hover:scale-[1.03] bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ad44529-9526-4fd0-aca6-336a42b38a7e_1600w.jpg?w=800&amp;q=80"/>
<div className="flex flex-col bg-center bg-gradient-to-t from-black/80 via-transparent to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Interiér
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Čištění interiéru
            </h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<div className="flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Kůže
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Impregnace a čištění
            </h3>
</div>
<img alt="Import USA" className="transition-transform duration-700 group-hover:scale-[1.03] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe65eaf6-ad2e-43ec-8ccb-a5916a5b9bc5_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<div className="flex flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">
              Detailing
            </p>
<h3 className="text-white text-2xl font-display font-medium">
              Péče o kola a pneu
            </h3>
</div>
<img alt="Detailing" className="transition-transform duration-700 group-hover:scale-[1.03] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/245e94f5-12a1-4200-a180-bd2fc9add2db_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-brand-panel" id="cennik">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-4xl font-semibold text-white tracking-tight font-display mb-8" style={{}}>
            CENÍK
          </h2>
<p className="text-neutral-400 mb-8">
            Každé vozidlo naceňujeme individuálně podle stavu laku a rozsahu
            prací. Níže jsou uvedeny startovací ceny.
          </p>
<div className="space-y-4">
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Základní detailing</span>
<span className="text-brand-gold font-medium">od 2500 Kč</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Kompletní detailing</span>
<span className="text-brand-gold font-medium">od 5000 Kč</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Korekce laku</span>
<span className="text-brand-gold font-medium">Individuální cena</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Keramická ochrana</span>
<span className="text-brand-gold font-medium">Individuální cena</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Čištění interiéru</span>
<span className="text-brand-gold font-medium">od 1500 Kč</span>
</div>
</div>
<div className="mt-8 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded">
<p className="text-sm text-brand-gold">
<svg className="lucide lucide-info inline w-4 h-4 mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
              Nejsme plátci DPH. Ceny jsou konečné.
            </p>
</div>
</div>

<div className="">
<h2 className="text-4xl font-semibold text-white tracking-tight font-display mb-8">
            NEJČASTĚJŠÍ DOTAZY
          </h2>
<div className="space-y-4">
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex list-none font-medium text-white items-center justify-between">
                Jak dlouho trvá kompletní detailing?
                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Kompletní proces obvykle trvá 1 až 3 dny v závislosti na stavu
                vozidla a zvoleném programu (korekce laku, aplikace keramiky).
              </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Jak dlouho vydrží keramická ochrana?
                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Životnost keramické ochrany se pohybuje od 1 do 5 let. Záleží na
                zvoleném produktu a následné péči o vozidlo.
              </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Je detailing vhodný i pro starší vozy?
                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Ano, renovace laku a hloubkové čištění dokáže i staršímu vozu
                vrátit vzhled blízký novému stavu a zvýšit jeho hodnotu.
              </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Je nutná rezervace předem?
                <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                Ano, pracujeme výhradně na objednávku, abychom každému vozu
                věnovali maximální péči a čas.
              </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="kontakt">
<div className="bg-gradient-to-l from-brand-gold/5 to-transparent w-1/3 h-full absolute top-0 right-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              OBJEDNAT TERMÍN
            </h2>
<p className="text-neutral-400 mb-10 text-lg">
              Chceš, aby tvé auto vypadalo jako nové? Napiš nám a domluvíme se
              na detailu.
            </p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Jméno a příjmení" type="text"/>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Telefon" type="tel"/>
</div>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="E-mail" type="email"/>
<select className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm appearance-none">
<option className="text-neutral-500" disabled="" selected="" value="">
                  O jakou službu máte zájem?
                </option>
<option value="detailing">Kompletní detailing</option>
<option value="korekce">Korekce laku</option>
<option value="keramika">Keramická ochrana</option>
<option value="interier">Čištění interiéru</option>
</select>
<textarea className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Zpráva (značka vozu, rok výroby, stav)..." rows="4"></textarea>
<button className="w-full md:w-auto px-10 py-4 bg-brand-gold hover:bg-white text-black font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2" type="submit">
                Objednat termín
                <svg className="lucide lucide-send w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
</div>
<div className="flex flex-col justify-between">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-map-pin text-brand-gold w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">Lokalita</h3>
<p className="text-neutral-400">Lanškroun, Česká republika</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-phone text-brand-gold w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Telefon</h3>
<p className="hover:text-white transition-colors cursor-pointer text-neutral-400">
                    731 783 634
                  </p>
<p className="hover:text-white transition-colors cursor-pointer text-neutral-400"></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg aria-hidden="true" className="lucide lucide-clock text-brand-gold w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">Otevírací doba</h3>
<p className="text-neutral-400">Po - Pá: 8:00 - 17:00</p>
<p className="text-neutral-400">Sob: Po umówieniu</p>
</div>
</div>
</div>

<div className="mt-8 w-full h-64 bg-neutral-900 border border-white/5 relative flex items-center justify-center group overflow-hidden">
<iframe allowfullscreen="" className="w-full h-full border-0 grayscale brightness-[0.4] contrast-[0.9]" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20548.467754892!2d16.5986!3d49.9119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711c4e2c2a7c4b7%3A0x400af0f6614f890!2sLan%C5%A1kroun%2C%20Czech%20Republic!5e0!3m2!1sen!2scz!4v1699999999999!5m2!1sen!2scz"></iframe>
<a className="hover:bg-brand-gold transition-colors text-sm font-medium text-black bg-white z-10 rounded pt-2 pr-6 pb-2 pl-6 absolute shadow-lg" href="https://www.google.com/maps/place/Lan%C5%A1kroun,+Czech+Republic" rel="noopener noreferrer" target="_blank">
                Otevřít v Google mapy
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<img alt="M_ DETAILING" className="h-14 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b935dcb-c630-48d6-bccc-feb57f05c311_320w.png?w=800&amp;q=80"/>
</div>
<p className="text-neutral-500 text-sm leading-relaxed">
              Prémiové autodetailingové studio v Lanškrouně. Profesionální péče,
              která vrací autům dokonalost.
            </p>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
              SLUŽBY
            </h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#">
                  Detailing exteriéru
                </a>
</li>
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#">
                  Renovace laku
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
              FIRMA
            </h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#o-nas">
                  O nás
                </a>
</li>
<li className="">
<a className="hover:text-brand-gold transition-colors" href="#realizace">
                  Realizace
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="uppercase text-sm font-medium text-white tracking-wider mb-4">
              Social sítě
            </h5>
<div className="flex gap-4">
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">
            © 2026 M_DETAILING. Všechna práva vyhrazena.
          </p>
<div className="text-neutral-700 text-xs flex gap-4">
<span className="">Detailing Lanškroun</span>
<span className="">•</span>
<span>Renovace laku</span>
<span>•</span>
<span>Keramika</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
