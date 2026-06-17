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
      

<nav className="fixed w-full z-50 top-0 border-b border-stone-200/80 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-stone-900 text-stone-50 flex items-center justify-center rounded-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900 uppercase group-hover:opacity-80 transition-opacity">Fical &amp; Šuhájek</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-stone-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-stone-900 transition-colors" href="#realizace">Realizace</a>
<a className="hover:text-stone-900 transition-colors" href="#reference">Reference</a>
</div>
<div className="hidden md:flex">
<a className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-md hover:bg-stone-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#kontakt">
<span className="">Nezávazná poptávka</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<button className="md:hidden p-2 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
</span>
                    Rodinné truhlářství s tradicí
                </div>
<h1 className="md:text-6xl lg:text-7xl text-balance text-5xl font-semibold text-stone-900 tracking-tighter mb-6">Nábytek na míru, <br className=""/> <span className="text-stone-500">který vydrží generace</span></h1>
<p className="leading-relaxed text-balance text-lg text-stone-600 max-w-lg mb-8">Jsme rodinná dílna, kde se zákazník stává součástí celého procesu. Nasloucháme vašim představám, poradíme a vytvoříme nábytek, který dokonale zapadne do vašeho domova. Vše vzniká s pečlivostí, kterou dělá jen rodinné řemeslo.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-all flex justify-center items-center gap-2 shadow-lg shadow-stone-900/10" href="#kontakt">
                        Chci projekt na míru
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="px-6 py-3 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-all flex justify-center items-center gap-2" href="#realizace">
                        Prohlédnout realizace
                    </a>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 bg-stone-200 relative group">
<img alt="Práce se dřevem" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1728722740555-9c523d21bccd?w=1600&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-stone-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-white absolute bottom-16 left-6">
</div>
</div>

<div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-stone-100 hidden md:block">
<div className="flex items-center gap-3">
<div className="p-2 bg-amber-50 rounded-lg text-amber-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div className="">
<p className="text-xs font-medium text-stone-500">Preciznost</p>
<p className="text-sm font-semibold text-stone-900">Ruční zpracování masivu</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="o-nas">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-last lg:order-first">
<div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 bg-stone-200">
<img alt="Detailní práce se dřevem" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1676250747209-eee2d728da64?w=1600&amp;q=80" style={{}}/>
</div>
</div>
<div className="max-w-xl">
<h2 className="text-sm font-medium text-amber-700 uppercase tracking-widest mb-3">O firmě</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                        Když se řemeslo dědí z otce na syna. Jsme Fical &amp; Šuhájek.
                    </h3>
<div className="space-y-6 text-stone-600 leading-relaxed text-lg">
<p className="">
                            Naše truhlářství není jen továrna na nábytek. Je to místo, kde má každý kus dřeva svůj příběh. Jsme rodinná firma, která staví na poctivosti, osobním přístupu a detailu. Nejsme anonymní velkovýroba – za každou zakázkou vidíme konkrétního člověka a jeho domov.
                        </p>
<p className="">
                            Věříme, že kvalitní nábytek nevzniká spěchem, ale pečlivou přípravou, výběrem toho nejlepšího materiálu a precizním zpracováním. Ať už jde o rustikální stůl z masivu nebo moderní bezúchytkovou kuchyni, dáváme do toho vše.
                        </p>
</div>
<div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-stone-100">
<div className="">
<p className="text-3xl font-semibold text-stone-900 tracking-tight">100%</p>
<p className="text-sm text-stone-500 mt-1">Česká výroba</p>
</div>
<div className="">
<p className="text-3xl font-semibold text-stone-900 tracking-tight">25+</p>
<p className="text-sm text-stone-500 mt-1">Let praxe</p>
</div>
<div className="">
<p className="text-3xl font-semibold text-stone-900 tracking-tight">400+</p>
<p className="text-sm text-stone-500 mt-1">Realizací</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-sm font-medium text-amber-700 uppercase tracking-widest mb-3">Co děláme</h2>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900">Služby na míru vašim potřebám</h3>
</div>
<a className="text-sm font-medium text-stone-900 flex items-center gap-1 hover:gap-2 transition-all" href="#kontakt">
                    Zobrazit kompletní nabídku <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:armchair" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h4 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Nábytek na míru</h4>
<p className="text-stone-500 text-sm leading-relaxed">
                        Od vestavěných skříní, přes komody až po unikátní solitéry. Využijeme každý centimetr vašeho prostoru efektivně a esteticky.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-200 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chef-hat" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Kuchyňské linky</h4>
<p className="text-stone-500 text-sm leading-relaxed">
                        Srdce domova si zaslouží péči. Navrhujeme a vyrábíme kuchyně, které jsou nejen krásné, ale především funkční a odolné.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:door-open" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Dveře a schodiště</h4>
<p className="text-stone-500 text-sm leading-relaxed">
                        Dominanty interiéru z masivního dřeva. Samonosná schodiště, obklady betonových schodů a interiérové dveře na zakázku.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-200 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<h4 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Kancelářské interiéry</h4>
<p className="text-stone-500 text-sm leading-relaxed">
                        Vybavení pro firmy, recepce, jednací stoly a pracovní místa, která reprezentují vaši značku a zpříjemňují práci.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h4 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Renovace a opravy</h4>
<p className="text-stone-500 text-sm leading-relaxed">
                        Vracíme starému nábytku jeho zašlou slávu. Citlivé opravy historických kusů i modernizace stávajícího vybavení.
                    </p>
</div>

<div className="group bg-stone-900 p-8 rounded-2xl border border-stone-800 shadow-sm flex flex-col justify-center items-start text-white">
<h4 className="text-xl font-semibold mb-3 tracking-tight">Máte jiný nápad?</h4>
<p className="text-stone-400 text-sm leading-relaxed mb-6">
                        Rádi přijímáme výzvy. Pokud máte specifický požadavek, ozvěte se nám.
                    </p>
<a className="px-4 py-2 bg-white text-stone-900 rounded-md text-sm font-medium hover:bg-stone-200 transition-colors" href="#kontakt">
                        Kontaktujte nás
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="realizace">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-medium text-amber-700 uppercase tracking-widest mb-3">Galerie</h2>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900">Ukázky naší práce</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
<div className="lg:col-span-2 row-span-1 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Kuchyně" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1590474504715-91ae491e4938?w=2560&amp;q=80" style={{}}/>
<div className="group-hover:bg-black/10 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-lg font-semibold">Moderní kuchyně</p>
</div>
</div>
<div className="rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Skříň" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1722859183750-fdf609e56b99?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-6 left-6 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md">
<p className="text-lg font-semibold">Vestavěná šatna</p>
</div>
</div>
<div className="rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Detail dřeva" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1564627179890-190a153bc935?w=800&amp;q=80" style={{}}/>
<div className="absolute bottom-6 left-6 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md">
<p className="text-lg font-semibold">Detail masivu</p>
</div>
</div>
<div className="lg:col-span-2 row-span-1 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Obývací pokoj" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1648775933902-f633de370964?w=1600&amp;q=80"/>
<div className="absolute bottom-6 left-6 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md">
<p className="text-lg font-semibold">Kompletní interiér</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-t pt-24 pb-24" id="reference">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-12 text-center">Co o nás říkají zákazníci</h3>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border-stone-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-sm text-stone-600 mb-6">"Pan Fical mi vyrobil špaletová okna. Odvedl perfektní práci, za dobrou cenu :)"</p>
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold text-stone-500 bg-stone-200 w-10 h-10 rounded-full items-center justify-center">VS</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">Vojtěch Snížek</p>
<p className="text-xs text-stone-400">Špaletová okna</p>
</div>
</div>
</div>

<div className="bg-white border-stone-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-sm text-stone-600 mb-6">"Můžu se vždy spolehnout. Skvělý přístup, perfektní práce.</p>
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold text-stone-500 bg-stone-200 w-10 h-10 rounded-full items-center justify-center">KK</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">Kaja Kriz</p>
<p className="text-xs text-stone-400">Vestavěné skříně</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-amber-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-sm text-stone-600 mb-6">"Nejlepší truhlář široko daleko. Ochota, vstřícnost, kvalita.
"</p>
<div className="flex items-center gap-3">
<div className="flex text-xs font-bold text-stone-500 bg-stone-200 w-10 h-10 rounded-full items-center justify-center">FK</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">Filip Klíma</p>
<p className="text-xs text-stone-400">Schodiště a dveře</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-sm font-medium text-amber-700 uppercase tracking-widest mb-3">Kontakt</h2>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Zastavte se za námi <br/>nebo napište.</h3>
<p className="text-stone-600 mb-8 max-w-md">
                        Rádi s vámi probereme vaše představy. Zavolejte nám, pošlete e-mail, nebo nás navštivte přímo v dílně.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">Adresa dílny</p>
<p className="text-stone-600">Truhlářství Fical, Šuhájek Otín 95, 377 01 Jindřichův Hradec 1</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">Telefon</p>
<a className="hover:text-amber-700 transition-colors text-stone-600" href="tel:+420123456789">+420 723 701 053</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center text-stone-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-stone-900">E-mail</p>
<a className="hover:text-amber-700 transition-colors text-stone-600" href="mailto:info@truhlarstvi-fical.cz">truhlarstvi.fical@seznam.cz</a>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" htmlFor="name">Jméno</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" id="name" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" htmlFor="phone">Telefon</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" id="phone" placeholder="+420 777 ..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" htmlFor="email">E-mail</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" htmlFor="type">O co máte zájem?</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all text-stone-700" id="type">
<option>Kuchyňská linka</option>
<option>Vestavěná skříň</option>
<option>Masivní nábytek</option>
<option>Schodiště / Dveře</option>
<option>Jiné</option>
</select>
<span className="absolute right-3 top-2.5 text-stone-400 pointer-events-none">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700" htmlFor="message">Zpráva</label>
<textarea className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" id="message" placeholder="Popište nám vaše přání..." rows="4"></textarea>
</div>
<button className="w-full bg-stone-900 text-white font-medium text-sm py-2.5 rounded-lg hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex justify-center items-center gap-2" type="button">
                            Odeslat poptávku
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="text-stone-400 bg-stone-900 border-stone-800 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
<span className="text-sm font-semibold tracking-tight uppercase">Fical &amp; Šuhájek</span>
</div>
<p className="text-sm max-w-sm leading-relaxed">
                    Rodinné truhlářství s důrazem na kvalitu, tradici a spokojenost zákazníka. Vytváříme domovy, ve kterých se dobře žije.
                </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-4">Služby</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Kuchyně na míru</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Vestavěné skříně</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Masivní nábytek</a></li>
<li><a className="hover:text-white transition-colors" href="#">Interiéry</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm">
<li className="">+420 723 701 053</li>
<li className="">truhlarstvi.fical@seznam.cz</li>
<li className="">Po-Pá: 8:00 - 17:00</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs flex justify-between items-center">
<p>© 2024 Truhlářství Fical &amp; Šuhájek. Všechna práva vyhrazena.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
