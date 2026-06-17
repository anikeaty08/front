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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center text-xs font-medium tracking-tighter">PH</div>
<span className="uppercase group-hover:opacity-70 transition-opacity text-sm font-light text-white tracking-widest">Design</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors" href="#about">Štúdio</a>
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors" href="#work">Portfólio</a>
<a className="text-xs uppercase tracking-widest hover:text-white transition-colors" href="#concepts">Show Cars</a>
</div>
<button className="text-white hover:text-gray-300 transition-colors md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-48 pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-20">
<div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
<div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
<div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
<div className="absolute top-0 right-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-light tracking-wide text-white">Technická Dokonalosť</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight text-white leading-[1.1] font-medium" style={{}}>
                        Forma nasleduje <br/> <span className="text-slate-500 font-medium" style={{}}>rýchlosť.</span>
</h1>
<p className="text-lg font-light text-slate-400 max-w-md leading-relaxed">
                        PH Design creative services. Špecializujeme sa na pokročilý automobilový dizajn, vývoj konceptov a tvorbu show cars, ktoré definujú budúcnosť mobility.
                    </p>
<div className="flex flex-wrap gap-6 pt-4">
<a className="tech-btn group inline-flex items-center justify-center px-8 py-3 rounded text-sm font-normal text-white tracking-wide transition-transform active:scale-95" href="#work">
<span className="relative z-10 flex items-center gap-2">
                                Prezrieť Projekty
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 rounded text-sm font-normal text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-all" href="#contact">
                            Kontaktovať nás
                        </a>
</div>
</div>

<div className="relative h-[400px] w-full rounded-xl overflow-hidden glass-panel flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent opacity-60"></div>
<img alt="Futuristic hypercar concept" className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-50 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1621996659490-6213b5e44286?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<iconify-icon className="text-white/80 mb-4" icon="solar:wheel-angle-linear" width="64"></iconify-icon>
<p className="text-xs uppercase tracking-[0.3em] text-white/60">Automotive Vision</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-lg">

<div className="bg-[#050505] p-10 group hover:bg-[#0a0a0a] transition-colors">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-light mb-3">Skicovanie &amp; Návrh</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Prvotná vizualizácia myšlienok. Od hrubých náčrtov až po detailné digitálne rendery, ktoré zachytávajú podstatu charakteru vozidla.
                    </p>
</div>

<div className="bg-[#050505] p-10 group hover:bg-[#0a0a0a] transition-colors">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-light mb-3">3D Modelovanie</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Prevod 2D konceptov do precíznych 3D plôch triedy A. Technická realizovateľnosť spojená s estetickou čistotou.
                    </p>
</div>

<div className="bg-[#050505] p-10 group hover:bg-[#0a0a0a] transition-colors">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-light mb-3">Prototyping &amp; Show Cars</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Fyzická realizácia. Výroba funkčných prototypov a výstavných modelov (show cars) s dôrazom na materiály a finálnu úpravu.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl text-white tracking-tight mb-2 font-medium" style={{}}>Vybrané Projekty</h2>
<p className="text-sm text-slate-500">Kombinácia techniky, umenia a aerodynamiky.</p>
</div>
<a className="text-sm text-white hover:text-slate-300 flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-0.5" href="#">
                    Celé portfólio <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<article className="group relative block">
<div className="relative h-[300px] md:h-[400px] overflow-hidden rounded border border-white/10 bg-[#080808]">
<img alt="Concept Car Blue" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-xs font-mono text-emerald-400 mb-2">KONCEPT 01</p>
<h3 className="text-2xl text-white tracking-tight font-medium" style={{}}>Project Aero GT</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="group relative block md:translate-y-12">
<div className="relative h-[300px] md:h-[400px] overflow-hidden rounded border border-white/10 bg-[#080808]">
<img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&amp;w=2062&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-xs font-mono text-blue-400 mb-2">INTERIÉR</p>
<h3 className="text-2xl text-white tracking-tight font-medium" style={{}}>Luxe Lounge V2</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="group relative block">
<div className="relative h-[300px] md:h-[400px] overflow-hidden rounded border border-white/10 bg-[#080808]">
<img alt="Show Car" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2898&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-xs font-mono text-purple-400 mb-2">SHOW CAR</p>
<h3 className="text-2xl text-white tracking-tight font-medium" style={{}}>Vision E-Type</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</article>

<article className="group relative block md:translate-y-12">
<div className="relative h-[300px] md:h-[400px] overflow-hidden rounded border border-white/10 bg-[#080808]">
<img alt="Technical Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-xs font-mono text-slate-400 mb-2">VÝVOJ</p>
<h3 className="text-2xl text-white tracking-tight font-medium" style={{}}>Modular Platform</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 backdrop-blur group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<h4 className="text-4xl text-white tracking-tight mb-2 font-medium" style={{}}>12+</h4>
<p className="text-xs uppercase tracking-widest text-slate-500">Rokov Skúseností</p>
</div>
<div>
<h4 className="text-4xl text-white tracking-tight mb-2 font-medium" style={{}}>45</h4>
<p className="text-xs uppercase tracking-widest text-slate-500">Ukončených Konceptov</p>
</div>
<div>
<h4 className="text-4xl text-white tracking-tight mb-2 font-medium" style={{}}>8</h4>
<p className="text-xs uppercase tracking-widest text-slate-500">Ocenení Dizajnu</p>
</div>
<div>
<h4 className="text-4xl text-white tracking-tight mb-2 font-medium" style={{}}>100%</h4>
<p className="text-xs uppercase tracking-widest text-slate-500">Interný Vývoj</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center" id="contact">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-medium" style={{}}>Máte víziu?</h2>
<p className="text-slate-400 font-light text-lg">
                Premeňme vaše nápady na hmatateľnú realitu. Špecializujeme sa na zákazkové riešenia pre automobilový priemysel.
            </p>
<div className="pt-4">
<button className="tech-btn group inline-flex items-center justify-center px-10 py-4 rounded text-base font-normal text-white tracking-wide transition-transform active:scale-95">
<span className="relative z-10 flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                        Napíšte nám
                    </span>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030304] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="w-10 h-10 bg-white text-black flex items-center justify-center text-sm font-medium tracking-tighter mb-4">PH</div>
<p className="text-sm text-slate-500 max-w-xs">
                        PH Design creative services.<br/>
                        Inovácie v automobilovom dizajne.
                    </p>
</div>
<div className="grid grid-cols-2 gap-16">
<div>
<h5 className="text-white text-xs font-medium uppercase tracking-widest mb-4">Služby</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Exteriérový Dizajn</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Interiérový Dizajn</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">3D Vizualizácie</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Prototypovanie</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-medium uppercase tracking-widest mb-4">Spoločnosť</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">O nás</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Kariéra</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-slate-600">© 2023 PH Design Creative Services. Všetky práva vyhradené.</p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
