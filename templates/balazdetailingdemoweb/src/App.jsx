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
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
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
      

<nav className="fixed z-50 glass-nav transition-all duration-300 w-full top-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex group-hover:bg-neutral-800 transition-colors overflow-hidden bg-black w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71c6d649-d3d6-4280-923d-d8596465e448_320w.png?w=800&amp;q=80)] bg-cover bg-center border-white/20 border rounded-[4px] items-center justify-center">

</div>
<div className="flex flex-col justify-center">
<span className="font-medium text-white tracking-tight text-lg leading-none">
              BALÁŽ
            </span>
<span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 leading-none mt-1">
              Detailing
            </span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#sluzby">
            Služby
          </a>
<a className="hover:text-white transition-colors" href="#realizace">
            Realizace
          </a>
<a className="hover:text-white transition-colors" href="#cennik">Ceník</a>
<a className="hover:text-white transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-all rounded-[4px]" href="#kontakt">
            Objednat termín
          </a>

<button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Ferrari v Detailing Studiu" className="opacity-60 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92fc4f00-ba4b-4209-8835-fbfc16a30b22_3840w.webp?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

<div className="bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92fc4f00-ba4b-4209-8835-fbfc16a30b22_3840w.webp?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 md:mt-0 w-full max-w-7xl mt-12 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-4xl fade-in-up">
<div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 border border-white/10 rounded-full bg-black/30 backdrop-blur-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="inline-flex bg-neutral-50 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-xs font-medium text-white/90 tracking-wide">
              Přijímáme nové klienty na rok 2026
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 leading-[0.95]">
            Dokonalost v
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              každém detailu.
            </span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl leading-relaxed font-light">
            Specializované studio pro renovaci laku, keramickou ochranu a
            detailing vozů. Vracíme autům nejen lesk, ale i jejich hodnotu.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-white hover:bg-neutral-200 transition-all rounded-[4px] group min-w-[160px]" href="#kontakt">
              Objednat termín
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-all rounded-[4px] backdrop-blur-sm min-w-[160px]" href="#realizace">
              Naše práce
            </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-black border-white/5 border-b pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-20">
<div className="lg:w-1/3">
<h4 className="text-white/60 uppercase tracking-widest text-xs font-medium mb-6 flex items-center gap-3">
<span className="w-6 h-[1px] bg-white/40"></span>
              Filozofie
            </h4>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Detail není jen slovo.
              <span className="text-neutral-500">Je to závazek.</span>
</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
              Věříme, že péče o auto by neměla být povrchní. Ke každému vozu
              přistupujeme, jako by byl náš vlastní – s maximální precizností a
              trpělivostí.
            </p>
<a className="text-white hover:text-neutral-300 transition-colors text-sm font-medium border-b border-white/20 pb-1 inline-flex items-center gap-2 group" href="#sluzby">
              Prozkoumat služby
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group">
<div className="w-12 h-12 bg-neutral-900 border border-white/10 flex items-center justify-center rounded-[4px] mb-6 text-white group-hover:border-white/30 transition-all">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="M12 18v-6"></path>
<path d="M8 15h8"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Certifikované postupy
              </h3>
<p className="text-neutral-500 text-base leading-relaxed">
                Využíváme pouze ověřené metody a technologické postupy, které
                zaručují bezpečnost a dlouhodobý efekt pro váš lak.
              </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-neutral-900 border border-white/10 flex items-center justify-center rounded-[4px] mb-6 text-white group-hover:border-white/30 transition-all">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0.906a2 2 0 0 0 1.18 1.825l.89.267a2 2 0 0 1 1.258 1.259l.267.889a2 2 0 0 0 1.824 1.18H18a3 3 0 0 1 3 3v0"></path>
<path d="m3.34 7 1.66 1.66"></path>
<path d="m7.514 16.485 1.657 1.657"></path>
<path d="m16.485 7.514 1.657 1.657"></path>
<path d="m20.66 3.34-1.66 1.66"></path>
<path d="m3.34 20.66 1.66-1.66"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Individuální přístup
              </h3>
<p className="text-neutral-500 text-base leading-relaxed">
                Neexistuje univerzální řešení. Každý lak, každé znečištění a
                každý materiál interiéru vyžaduje specifickou péči.
              </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-neutral-900 border border-white/10 flex items-center justify-center rounded-[4px] mb-6 text-white group-hover:border-white/30 transition-all">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Prémiová kosmetika
              </h3>
<p className="text-neutral-500 text-base leading-relaxed">
                Pracujeme výhradně se špičkovými produkty značek jako Gyeon,
                CarPro a Koch Chemie pro bezkonkurenční výsledky.
              </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-neutral-900 border border-white/10 flex items-center justify-center rounded-[4px] mb-6 text-white group-hover:border-white/30 transition-all">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Záruka kvality
              </h3>
<p className="text-neutral-500 text-base leading-relaxed">
                Vůz nepředáme, dokud nejsme s výsledkem 100% spokojeni. Vaše
                spokojenost a doporučení jsou naší vizitkou.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 relative" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h4 className="text-white/60 uppercase tracking-widest text-xs font-medium mb-4">
            Služby
          </h4>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Kompletní péče
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative bg-black/50 border border-white/10 p-8 hover:bg-neutral-900/50 transition-all duration-300 rounded-[4px] hover:border-white/20">
<div className="h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-[4px] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
<circle cx="6.5" cy="16.5" r="2.5"></circle>
<circle cx="16.5" cy="16.5" r="2.5"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Detailing exteriéru
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                Důkladné ruční mytí, chemická i mechanická dekontaminace a
                příprava laku na další procesy.
              </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  PH neutrální mytí
                </li>
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Čištění kol a podběhů
                </li>
</ul>
</div>
</article>

<article className="group relative bg-black/50 border border-white/10 p-8 hover:bg-neutral-900/50 transition-all duration-300 rounded-[4px] hover:border-white/20">
<div className="h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-[4px] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Renovace laku</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                Vícekrokové strojní leštění pro odstranění škrábanců, hologramů
                a oxidace.
              </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Korekce defektů
                </li>
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Maximální lesk
                </li>
</ul>
</div>
</article>

<article className="group relative bg-black/50 border border-white/10 p-8 hover:bg-neutral-900/50 transition-all duration-300 rounded-[4px] hover:border-white/20">
<div className="h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-[4px] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Keramická ochrana
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                Aplikace certifikovaných keramických povlaků s životností až 5
                let.
              </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Tvrdost 9H
                </li>
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Extrémní hydrofobita
                </li>
</ul>
</div>
</article>

<article className="group relative bg-black/50 border border-white/10 p-8 hover:bg-neutral-900/50 transition-all duration-300 rounded-[4px] hover:border-white/20">
<div className="h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-[4px] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3"></path>
<path d="M6 9v10"></path>
<path d="M18 9v10"></path>
<path d="M6 9h12a2 2 0 0 0 1.9-2.5L18 2H6L4.1 6.5A2 2 0 0 0 6 9Z"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Interiér</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                Hloubkové čištění a impregnace všech povrchů. Kůže, plasty,
                textil.
              </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Tepování
                </li>
<li className="text-neutral-400 text-xs font-medium flex items-center gap-2">
<span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  Impregnace kůže
                </li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="bg-black py-32 border-t border-white/5" id="realizace">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="">
<h4 className="uppercase text-xs font-medium text-white/60 tracking-widest mb-4">
            Naše práce
          </h4>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Vybrané realizace
          </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-white hover:text-neutral-300 transition-colors text-sm font-medium" href="#kontakt">
          Sledovat na Instagramu
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</a>
</div>

<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[700px] px-4">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[4px] bg-neutral-900">
<img alt="Detailing Realizace" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8362cb2-20cc-47dd-8e1c-e32fedee8f3a_3840w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
<p className="text-[10px] uppercase font-bold text-white/80 tracking-widest mb-2">
              Wrap vozidla
            </p>
<h3 className="text-2xl font-medium text-white">
              Mercedes-Benz GLE 53 AMG
            </h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-[4px] bg-neutral-900 min-h-[300px] md:min-h-0">
<img alt="Interiér" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/832788d9-1c34-441c-be0f-9ef5cd36d53f_1600w.webp?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<p className="text-[10px] uppercase font-bold text-white/80 tracking-widest mb-2">
              Interiér a exteriér
            </p>
<h3 className="text-xl font-medium text-white">Škoda Octavia RS</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-[4px] bg-neutral-900 min-h-[300px] md:min-h-0">
<img alt="Keramika" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecf9592b-9b1a-45c2-9dbd-5bdcbc36bd36_1600w.webp?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<p className="text-[10px] uppercase font-bold text-white/80 tracking-widest mb-2">
              Interiér
            </p>
<h3 className="text-xl font-medium text-white">Porsche Carrera S</h3>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-[4px] bg-neutral-900 min-h-[300px] md:min-h-0">
<img alt="Finální výsledek" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/607013c5-c03e-4145-a46a-8b637293cbbe_1600w.png"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
<p className="text-[10px] uppercase font-bold text-white/80 tracking-widest mb-2">
              ochranná fólie
            </p>
<h3 className="text-xl font-medium text-white">BMW M2</h3>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5" id="cennik">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">
            Orientační ceník
          </h2>
<p className="text-neutral-400 mb-12 text-lg">
            Ceny se odvíjí od velikosti vozu a stavu laku. Přesnou kalkulaci vám
            rádi připravíme při osobní prohlídce.
          </p>
<div className="space-y-2">
<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:border-white/30 transition-colors">
<span className="text-white font-medium text-lg">
                Základní detailing
              </span>
<span className="text-white font-medium">od 2 500 Kč</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:border-white/30 transition-colors">
<span className="text-white font-medium text-lg">
                Jednokrokové leštění
              </span>
<span className="text-white font-medium">od 6 000 Kč</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:border-white/30 transition-colors">
<span className="text-white font-medium text-lg">
                Vícekroková renovace
              </span>
<span className="text-white font-medium">od 12 000 Kč</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:border-white/30 transition-colors">
<span className="text-white font-medium text-lg">
                Keramická ochrana (3 roky)
              </span>
<span className="text-white font-medium">od 8 000 Kč</span>
</div>
<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:border-white/30 transition-colors">
<span className="text-white font-medium text-lg">
                Čištění interiéru
              </span>
<span className="text-white font-medium">od 2 500 Kč</span>
</div>
</div>
</div>

<div className="" id="faq">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">
            Časté dotazy
          </h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 p-6 rounded-[4px] open:bg-neutral-900/60 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none text-white font-medium pr-4 select-none">
                Jak dlouho trvá kompletní proces?
                <span className="transition-transform group-open:rotate-180 text-neutral-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 leading-relaxed text-base">
                Základní péče trvá obvykle 1 den. Renovace laku s aplikací
                keramiky je časově náročnější a vyžaduje 2-4 dny pro dokonalé
                vytvrdnutí.
              </p>
</details>
<details className="group bg-neutral-900/30 border border-white/5 p-6 rounded-[4px] open:bg-neutral-900/60 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none text-white font-medium pr-4 select-none">
                Jakou záruku poskytujete na keramiku?
                <span className="transition-transform group-open:rotate-180 text-neutral-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 leading-relaxed text-base">
                Záruka se odvíjí od zvoleného programu a pohybuje se od 1 do 5
                let. Podmínkou je dodržování správných postupů mytí.
              </p>
</details>
<details className="group bg-neutral-900/30 border border-white/5 p-6 rounded-[4px] open:bg-neutral-900/60 transition-all duration-300 cursor-pointer">
<summary className="flex justify-between items-center list-none text-white font-medium pr-4 select-none">
                Je nutná rezervace předem?
                <span className="transition-transform group-open:rotate-180 text-neutral-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<p className="text-neutral-400 mt-4 leading-relaxed text-base">
                Ano, pracujeme pouze na objednávku. Termíny se plní obvykle 2-3
                týdny dopředu.
              </p>
</details>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 py-32 relative overflow-hidden border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Rezervujte si termín
            </h2>
<p className="text-neutral-400 text-lg mb-10 max-w-md">
              Máte zájem o naše služby? Vyplňte formulář a my se vám ozveme s
              návrhem nejbližšího možného termínu.
            </p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">
                    Jméno
                  </label>
<input className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none focus:ring-0 transition-all rounded-[4px]" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">
                    Telefon
                  </label>
<input className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none focus:ring-0 transition-all rounded-[4px]" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">
                  Email
                </label>
<input className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none focus:ring-0 transition-all rounded-[4px]" type="email"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">
                  Preferovaná služba
                </label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 p-4 text-white appearance-none focus:border-white/40 focus:outline-none focus:ring-0 transition-all rounded-[4px] cursor-pointer">
<option className="bg-neutral-900" value="">
                      Vyberte službu
                    </option>
<option className="bg-neutral-900" value="complete">
                      Kompletní detailing
                    </option>
<option className="bg-neutral-900" value="correction">
                      Renovace laku
                    </option>
<option className="bg-neutral-900" value="ceramic">
                      Keramická ochrana
                    </option>
<option className="bg-neutral-900" value="interior">
                      Interiér
                    </option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider ml-1">
                  Poznámka
                </label>
<textarea className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none focus:ring-0 transition-all rounded-[4px]" placeholder="Typ vozu, specifické požadavky..." rows="4"></textarea>
</div>
<button className="w-full px-8 py-4 bg-white text-black hover:bg-neutral-200 font-medium transition-all rounded-[4px] mt-4 flex items-center justify-center gap-2" type="submit">
                Odeslat nezávaznou poptávku
                <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
</div>

<div className="flex flex-col h-full gap-8">
<div className="bg-white/5 border border-white/10 p-8 rounded-[4px]">
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="p-3 bg-neutral-900 rounded-full border border-white/10 text-white">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm uppercase tracking-wide mb-2">
                      Adresa studia
                    </h4>
<p className="text-neutral-400 leading-relaxed text-lg">
                      Brod nad Dyjí 259
                      <br/>
                      691 81 Brod nad Dyjí
                    </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-neutral-900 rounded-full border border-white/10 text-white">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="">
<h4 className="font-medium text-white text-sm uppercase tracking-wide mb-2">
                      Telefon
                    </h4>
<a className="hover:text-white transition-colors block text-lg text-neutral-400" href="/tel:+420 608 465 464">
                      +420 608 465 464
                    </a>
</div>
</div>
</div>
</div>

<div className="flex-grow w-full min-h-[300px] bg-neutral-900 relative group border border-white/10 rounded-[4px] overflow-hidden">
<iframe allowfullscreen="" className="w-full h-full border-0 map-filter opacity-70 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.87654321!2d16.536!3d48.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzQ4LjAiTiAxNsKwMzInMDkuNiJF!5e0!3m2!1sen!2scz!4v1600000000000!5m2!1sen!2scz"></iframe>
<a className="absolute bottom-4 left-4 bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-neutral-200 transition-colors rounded-[4px] z-20 shadow-xl" href="https://maps.google.com" target="_blank">
                Otevřít mapu
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<div className="flex bg-black w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71c6d649-d3d6-4280-923d-d8596465e448_320w.png?w=800&amp;q=80)] bg-cover bg-center border-white/20 border rounded-[4px] items-center justify-center">

</div>
<span className="font-semibold text-white tracking-wide text-lg">
                BALÁŽ DETAILING
              </span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed">
              Jsme specialisté na péči o vozy. Spojujeme vášeň pro automobily s
              precizním řemeslem. Vaše auto si zaslouží tu nejlepší péči.
            </p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all rounded-[4px]" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all rounded-[4px]" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-neutral-600">
            © 2026 Baláž Detailing. All rights reserved.
          </p>
<div className="flex gap-8 text-xs font-medium text-neutral-600 uppercase tracking-widest">
<a className="hover:text-neutral-400 transition-colors" href="#">
              Privacy
            </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
              Terms
            </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
              Sitemap
            </a>
</div>
</div>
</div>
</footer>
<a className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center group" href="tel:+420608465464">
<span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
<span className="relative inline-flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</span>
</a>


    </>
  );
}
