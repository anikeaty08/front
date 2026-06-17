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



// Simple Spotlight Script
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.spotlight-card');
cards.forEach(card => {
card.onmousemove = e => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty('--mouse-x', `${x}px`);
card.style.setProperty('--mouse-y', `${y}px`);
}
});
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/arabesque.png\')', mixBlendMode: 'multiply'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full max-w-7xl mx-auto px-6">
<div className="w-full h-full border-x border-dashed border-stone-200 flex justify-center relative">
<div className="h-full w-px bg-dashed bg-stone-200 absolute left-1/4"></div>
<div className="h-full w-px bg-stone-200"></div>
<div className="h-full w-px bg-dashed bg-stone-200 absolute right-1/4"></div>
</div>
</div>

<div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
<nav className="glass-nav flex w-full max-w-5xl pointer-events-auto rounded-full pt-3 pr-3 pb-3 pl-6 shadow-xl shadow-stone-200/50 items-center justify-between">

<div className="flex items-center gap-2">
<svg className="text-amber-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10c0-2 1-3 3-3h12c1 0 2 1 2 2"></path><path d="M5 14a3 3 0 0 0 2 2h10a3 3 0 0 0 3-3"></path><path d="M12 3v18"></path></svg>
<span className="text-lg font-bold tracking-tight text-stone-800 font-serif uppercase">ANGKOR</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm text-stone-500 font-medium">
<a className="hover:text-amber-700 transition-colors" href="#menu">La Carte</a>
<a className="hover:text-amber-700 transition-colors" href="#tradition">Tradition</a>
<a className="hover:text-amber-700 transition-colors" href="#lieu">Le Lieu</a>
<a className="hover:text-amber-700 transition-colors" href="#contact">Infos</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-medium hover:bg-stone-50 transition-colors text-stone-600" href="#contact">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
</span>
                Ouvert ce soir
            </a>
<button className="px-5 py-2 rounded-full border border-amber-600/20 bg-amber-700 text-white text-sm font-semibold hover:bg-amber-800 transition-all shadow-lg shadow-amber-700/20">
                Réserver
            </button>
</div>
</nav>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 lg:mt-32 xl:ml-auto xl:mr-auto max-w-7xl z-10 rounded-[40px] mt-32 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '972.5999908447266px', '--mouse-y': '137px'}}>
<div className="spotlight-inner overflow-hidden flex flex-col min-h-[850px] z-10 rounded-[40px] justify-center bg-white">

<div className="absolute top-8 right-8 z-20 pointer-events-none">
<span className="font-mono text-xs font-bold text-stone-300 tracking-widest">EST. 2012</span>
</div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{backgroundImage: 'linear-gradient(rgba(28, 25, 23, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 25, 23, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<main className="z-10 container lg:px-12 grid lg:grid-cols-2 gap-16 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative items-center">

<div className="max-w-2xl relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/80 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                    Saveurs de Phnom Penh
                </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl mb-8 tracking-tighter text-stone-900 font-serif">
                    L'âme du <span className="italic text-amber-700">Cambodge</span>  au cœur de Caen.
                </h1>
<p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-lg font-light">
                    Une cuisine ancestrale, parfumée à la citronnelle et au poivre de Kampot. Découvrez l'authenticité de l'Amok et du Lok Lak, préparés avec passion.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-xl focus:outline-none text-sm font-bold text-white tracking-widest rounded-full py-4 px-10 relative items-center justify-center bg-stone-900">
<span className="z-10 group-hover:text-amber-100 transition-colors relative">Réserver une Table</span>
</button>
<button className="hover:bg-stone-50 transition-all flex text-base font-medium text-stone-600 bg-white border border-stone-200 rounded-full py-4 px-8 items-center justify-center shadow-sm">
<span>Voir le Menu</span>
</button>
</div>
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Plat" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<img alt="Plat" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<img alt="Plat" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" src="https://images.unsplash.com/photo-1607301405390-d831c242f59b?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-sm text-stone-500">
<p className="text-stone-800 font-semibold">Recommandé par les Caennais</p>
<div className="flex items-center gap-1 text-amber-500 text-xs">
                            ★★★★★
                        </div>
</div>
</div>
</div>

<div className="relative w-full flex items-center justify-center lg:justify-end">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[520px]">

<div className="sm:row-span-2 flex flex-col overflow-hidden group hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-500 bg-white rounded-[32px] p-2 pb-6 relative shadow-lg border border-stone-100">
<div className="h-64 sm:h-full w-full rounded-[24px] overflow-hidden relative">
<img alt="Amok" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="font-serif text-2xl italic">L'Amok</div>
<div className="text-xs uppercase tracking-widest opacity-80">Plat Signature</div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-[32px] p-6 flex flex-col justify-center items-center text-center border border-stone-100 shadow-md group hover:bg-white transition-colors">
<div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="font-serif text-lg text-stone-800">Fait Maison</h3>
<p className="text-xs text-stone-500 mt-2">Pâtes de curry Kroeung pilées chaque matin.</p>
</div>
<div className="bg-stone-900 rounded-[32px] p-6 flex flex-col justify-center items-center text-center shadow-md relative overflow-hidden group">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
<h3 className="text-white font-serif text-xl relative z-10 mb-2">Caen</h3>
<p className="text-stone-400 text-xs relative z-10">Centre Ville</p>
<div className="mt-4 px-4 py-1 rounded-full border border-stone-700 text-stone-300 text-[10px] uppercase tracking-wider relative z-10">
                            12:00 - 22:30
                        </div>
</div>
</div>
</div>
</main>

<div className="border-t border-stone-100 bg-stone-50">
<div className="overflow-hidden relative w-full py-6">
<div className="ticker-track flex gap-12 items-center">
<div className="flex gap-12 shrink-0 items-center text-stone-400 font-serif italic text-xl">
<span>Citronnelle</span> • <span>Galanga</span> • <span className="">Feuilles de Kaffir</span> • <span>Poivre de Kampot</span> • <span>Lait de Coco</span> • <span>Curcuma</span> • <span>Basilic Thaï</span> • <span>Ail Frit</span>
</div>
<div className="flex gap-12 shrink-0 items-center text-stone-400 font-serif italic text-xl">
<span>Citronnelle</span> • <span>Galanga</span> • <span>Feuilles de Kaffir</span> • <span>Poivre de Kampot</span> • <span>Lait de Coco</span> • <span>Curcuma</span> • <span>Basilic Thaï</span> • <span>Ail Frit</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 max-w-7xl xl:ml-auto xl:mr-auto rounded-[40px] mt-4 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="tradition" style={{'--mouse-x': '1246.5999908447266px', '--mouse-y': '129px'}}>
<div className="spotlight-inner sm:p-12 flex flex-col lg:flex-row lg:items-center gap-12 bg-white rounded-[40px] pt-8 pr-8 pb-8 pl-8 gap-x-12 gap-y-12 justify-between">
<div className="max-w-lg">
<span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-2 block">Notre Secret</span>
<h2 className="text-4xl text-stone-900 mb-6 font-serif">Le Kroeung</h2>
<p className="leading-relaxed text-stone-500">
                Le cœur de la cuisine cambodgienne réside dans le <span className="text-stone-800 font-medium italic">Kroeung</span>, une pâte d'épices et d'herbes fraîches (citronnelle, galanga, curcuma, zeste de combava) pilée patiemment au mortier. C'est cette base aromatique qui donne à nos plats leur saveur unique et complexe.
            </p>
</div>
<div className="grid grid-cols-2 gap-4 flex-1 max-w-xl">
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-center hover:bg-amber-50/50 transition-colors cursor-default">
<div className="text-3xl mb-2">🌿</div>
<div className="font-serif text-stone-800">Herbes Fraîches</div>
</div>
<div className="hover:bg-amber-50/50 transition-colors cursor-default text-center bg-stone-50 border-stone-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="text-3xl mb-2">z</div>
<div className="font-serif text-stone-800">Wok Minute</div>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-center hover:bg-amber-50/50 transition-colors cursor-default">
<div className="text-3xl mb-2">🥥</div>
<div className="font-serif text-stone-800">Lait de Coco</div>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-center hover:bg-amber-50/50 transition-colors cursor-default">
<div className="text-3xl mb-2">🥘</div>
<div className="font-serif text-stone-800">Tradition</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 mt-4 xl:ml-auto xl:mr-auto max-w-7xl z-10 rounded-[40px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="menu">
<div className="spotlight-inner rounded-[40px] relative overflow-hidden bg-white flex flex-col">

<div className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 border-b border-stone-100 py-4 px-6 sm:px-12">
<div className="flex items-center gap-3 overflow-x-auto hide-scrollbar snap-x">
<a className="snap-start shrink-0 px-4 py-2 rounded-full bg-stone-900 text-white text-sm font-medium shadow-lg shadow-stone-900/10" href="#cat-sign">Signatures</a>
<a className="snap-start shrink-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-all" href="#cat-wok">Wok &amp; Sauté</a>
<a className="snap-start shrink-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-all" href="#cat-soup">Soupes &amp; Nouilles</a>
<a className="snap-start shrink-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-all" href="#cat-start">Entrées</a>
</div>
</div>
<div className="p-6 sm:p-12 space-y-20">

<div className="scroll-mt-32" id="cat-sign">
<div className="flex items-end justify-between mb-8 pb-4 border-b border-stone-100">
<div>
<h3 className="text-3xl text-stone-900 font-serif italic mb-1">Les Signatures</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">L'excellence Khmère</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group p-6 rounded-2xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-serif text-stone-900">Fish Amok Traditionnel</h4>
<span className="text-amber-700 font-bold">18.50€</span>
</div>
<p className="text-stone-500 text-sm mb-4">Filet de poisson cuit à la vapeur dans une feuille de bananier, mousse de coco, kroeung jaune et feuilles de noni.</p>
<span className="text-[10px] uppercase font-bold text-white bg-amber-600 px-2 py-1 rounded-full">Incontournable</span>
</div>

<div className="group p-6 rounded-2xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-serif text-stone-900">Bœuf Lok Lak</h4>
<span className="text-amber-700 font-bold">19.90€</span>
</div>
<p className="text-stone-500 text-sm mb-4">Bœuf mariné sauté au wok, servi avec riz tomate et sauce citron-poivre de Kampot.</p>
<span className="text-[10px] uppercase font-bold text-stone-600 bg-stone-200 px-2 py-1 rounded-full">Favori</span>
</div>
</div>
</div>

<div className="scroll-mt-32" id="cat-wok">
<div className="flex items-end justify-between mb-8 pb-4 border-b border-stone-100">
<div>
<h3 className="text-3xl text-stone-900 font-serif italic mb-1">Wok &amp; Sauté</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Feu &amp; Saveurs</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-5 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors">
<h4 className="font-serif text-lg text-stone-800 mb-1">Cha Kdam (Crabe)</h4>
<p className="text-xs text-stone-500 mb-3">Crabe sauté au poivre vert de Kampot.</p>
<div className="text-right text-stone-900 font-medium">22.00€</div>
</div>
<div className="p-5 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors">
<h4 className="font-serif text-lg text-stone-800 mb-1">Cha Kroeung</h4>
<p className="text-xs text-stone-500 mb-3">Poulet sauté à la pâte de curry citronnelle.</p>
<div className="text-right text-stone-900 font-medium">16.50€</div>
</div>
<div className="p-5 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors">
<h4 className="font-serif text-lg text-stone-800 mb-1">Gingembre Sauté</h4>
<p className="text-xs text-stone-500 mb-3">Porc ou poulet, julienne de gingembre.</p>
<div className="text-right text-stone-900 font-medium">15.90€</div>
</div>
</div>
</div>

<div className="scroll-mt-32" id="cat-soup">
<div className="flex items-end justify-between mb-8 pb-4 border-b border-stone-100">
<div>
<h3 className="text-3xl text-stone-900 font-serif italic mb-1">Soupes &amp; Kuy Teav</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Réconfort</p>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl bg-stone-900 p-8 text-center text-white">
<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="relative z-10">
<h4 className="text-3xl font-serif mb-2">Kuy Teav Phnom Penh</h4>
<p className="text-stone-300 mb-6 max-w-md mx-auto">Le bouillon de porc clair mijoté 12h, nouilles de riz, crevettes, viande hachée et herbes.</p>
<span className="text-2xl font-bold text-amber-400">14.50€</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative">
<div className="spotlight-inner sm:p-12 overflow-hidden bg-white rounded-[40px] p-8 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative h-[300px] w-full border border-stone-200 rounded-3xl bg-stone-50 p-6 flex flex-col justify-between">
<div className="flex justify-between">
<div className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 text-center w-24">
<span className="block text-2xl">🍋</span>
<span className="text-[10px] uppercase font-bold text-stone-400">Citronnelle</span>
</div>
<div className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 text-center w-24">
<span className="block text-2xl">🧂</span>
<span className="text-[10px] uppercase font-bold text-stone-400">Poivre</span>
</div>
</div>
<div className="self-center bg-stone-800 text-white rounded-full p-4 z-10 shadow-lg shadow-stone-800/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 11-8-8-8 8"></path><path d="m19 19-8-8-8 8"></path></svg>
</div>
<div className="bg-amber-100 border border-amber-200 p-4 rounded-xl text-center">
<span className="text-amber-800 font-serif font-bold text-lg">L'Authenticité</span>
<div className="text-[10px] text-amber-700 uppercase tracking-wider">Respect des produits</div>
</div>

<div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
<div className="w-px h-full bg-stone-200"></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Du Marché à l'Assiette</h2>
<p className="text-stone-500 text-lg font-light mb-8">
                     Nous sélectionnons nos épices directement auprès de producteurs de Kampot. Nos légumes sont frais, locaux quand c'est possible, et préparés avec le respect des traditions culinaires khmères.
                 </p>
<ul className="space-y-3 text-stone-600">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                         Poivre de Kampot IGP
                     </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                         Riz au Jasmin du Cambodge
                     </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                         Viandes Françaises
                     </li>
</ul>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative">
<div className="spotlight-inner sm:p-16 flex flex-col bg-white rounded-[40px] p-8 relative items-center">
<div className="text-center max-w-3xl mb-12">
<span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4 block">Avis Clients</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900">Ils ont voyagé avec nous</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 w-full">
<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
<div className="text-amber-500 mb-4">★★★★★</div>
<p className="text-stone-600 italic font-serif mb-6">"Le meilleur restaurant asiatique de Caen. Le Lok Lak est d'une tendreté incroyable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600">M</div>
<div className="text-xs text-stone-500">Marie L. • Local Guide</div>
</div>
</div>
<div className="bg-stone-900 p-8 rounded-3xl text-white relative overflow-hidden group">
<div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="font-serif text-2xl">Ambiance Zen</div>
<p className="text-stone-400 text-sm">Décoration bois &amp; pierre</p>
</div>
</div>
<div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
<div className="text-amber-500 mb-4">★★★★★</div>
<p className="text-stone-600 italic font-serif mb-6">"Une découverte magnifique. Les saveurs sont subtiles, pas trop épicées, juste parfaites."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600">T</div>
<div className="text-xs text-stone-500">Thomas B. • Visiteur</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mb-8 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" id="contact">
<div className="spotlight-inner overflow-hidden flex flex-col bg-[#1c1917] rounded-[40px] relative text-stone-200">
<div className="grid lg:grid-cols-2">

<div className="p-8 sm:p-16 flex flex-col justify-between h-full">
<div>
<h2 className="text-4xl font-serif text-white mb-6">Nous trouver</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-amber-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="text-white font-medium">Caen Centre</h4>
<p className="text-stone-400 text-sm mt-1">12 Rue de Geôle14000 Caen, France</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-amber-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0.7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<h4 className="text-white font-medium">Réservation</h4>
<p className="text-stone-400 text-sm mt-1">02 31 XX XX XX</p>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-stone-500">
<p>© 2024 ANGKOR Caen.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>

<div className="bg-stone-800 relative h-64 lg:h-auto min-h-[300px]">
<img alt="Caen" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2">
                        Voir sur la carte
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
