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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-gray-200 bg-white/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm bg-orange-600 text-white">
<span className="tracking-tighter font-semibold text-sm">EH</span>
</div>
<span className="font-medium tracking-tight group-hover:text-orange-600 transition-colors duration-300 text-gray-900">EuroHoops</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-600">
<a className="transition-colors text-gray-900 hover:text-black" href="#">Matchs</a>
<a className="transition-colors hover:text-black" href="#">Équipes</a>
<a className="transition-colors hover:text-black" href="#">Final Four</a>
<a className="transition-colors hover:text-black" href="#">Expériences VIP</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-gray-500 transition-colors hover:text-black">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hidden sm:flex items-center gap-2 border px-4 py-2 rounded-full transition-all text-xs font-medium bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-900">
<span>Connexion</span>
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[120px] rounded-full opacity-60 pointer-events-none bg-orange-100"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 border-orange-200 bg-orange-50 text-orange-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Saison Régulière 24/25
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-gray-900">
                    L'Europe du basket<br/>à portée de main.
                </h1>
<p className="max-w-xl text-lg text-gray-500 font-light mb-10 leading-relaxed">
                    Réservez vos places pour les plus grandes affiches de l'Euroleague. Sièges officiels, vue 3D et billetterie instantanée.
                </p>

<div className="w-full max-w-4xl p-1 rounded-3xl bg-gradient-to-b to-transparent from-gray-100">
<div className="rounded-[22px] overflow-hidden border shadow-xl relative bg-white border-gray-200 shadow-gray-200/50">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&amp;w=2090&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-[0.03]"></div>
<div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="flex flex-col items-center md:items-start gap-2">
<div className="text-xs font-medium tracking-widest uppercase text-gray-400">Domicile</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Real Madrid</h3>
<div className="text-sm text-gray-500">WiZink Center</div>
</div>

<div className="flex flex-col items-center justify-center shrink-0">
<div className="text-2xl font-light italic font-serif text-orange-600">vs</div>
<div className="mt-2 flex items-center gap-2 text-xs font-medium border px-3 py-1 rounded-full bg-gray-50 border-gray-200 text-gray-900">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                                    24 Oct • 20:45
                                </div>
</div>

<div className="flex flex-col items-center md:items-end gap-2 text-right">
<div className="text-xs font-medium tracking-widest uppercase text-gray-400">Extérieur</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Panathinaikos</h3>
<div className="text-sm text-gray-500">Athens</div>
</div>

<div className="md:ml-6 w-full md:w-auto">
<button className="w-full whitespace-nowrap px-6 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 group shadow-lg bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10">
                                    Acheter
                                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="sticky top-16 z-40 backdrop-blur-xl border-y bg-white/90 border-gray-200">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">

<button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition bg-gray-100 text-gray-900 border-gray-200 hover:bg-gray-200">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                        Toutes les équipes
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent text-gray-500 text-sm font-medium border transition border-gray-200 hover:border-gray-300 hover:text-gray-900">
<iconify-icon icon="solar:calendar-date-linear" width="16"></iconify-icon>
                        Ce mois
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent text-gray-500 text-sm font-medium border transition border-gray-200 hover:border-gray-300 hover:text-gray-900">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                        Lieu
                    </button>
</div>
<div className="flex items-center gap-3 text-sm text-gray-400">
<span>Afficher:</span>
<button className="font-medium text-gray-900">Liste</button>
<button className="transition hover:text-gray-900">Calendrier</button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 py-12">
<h2 className="text-xl font-medium mb-8 tracking-tight flex items-center gap-2 text-gray-900">
<iconify-icon className="text-orange-600" icon="solar:fire-linear"></iconify-icon>
            Prochains Matchs
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 5</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">Olympiacos</span>
<span className="text-sm text-gray-500 mt-1">vs Barcelona</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        26 Oct • 20:00
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        Peace and Friendship Stadium
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">45€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="absolute top-4 right-4 border text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide bg-red-50 text-red-600 border-red-100">
                    Dernières places
                </div>
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 5</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">Fenerbahçe</span>
<span className="text-sm text-gray-500 mt-1">vs Monaco</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        27 Oct • 19:45
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        Ülker Sports Arena
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">32€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 5</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">Virtus Bologna</span>
<span className="text-sm text-gray-500 mt-1">vs Anadolu Efes</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        27 Oct • 20:30
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        Virtus Segafredo Arena
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">28€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 6</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">Partizan</span>
<span className="text-sm text-gray-500 mt-1">vs Baskonia</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        02 Nov • 20:30
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        Štark Arena
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">25€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 6</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">Maccabi T.A.</span>
<span className="text-sm text-gray-500 mt-1">vs Bayern Munich</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        02 Nov • 21:05
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        Menora Mivtachim Arena
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">40€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>

<div className="group relative border rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl bg-white border-gray-200 hover:shadow-gray-200/50">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium mb-1 text-orange-600">Round 6</span>
<span className="text-2xl font-medium tracking-tight transition-colors text-gray-900">ASVEL</span>
<span className="text-sm text-gray-500 mt-1">vs Zalgiris</span>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-gray-50 text-gray-400 border-gray-100">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                        03 Nov • 20:00
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                        LDLC Arena
                    </div>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100">
<div>
<span className="block text-xs text-gray-400">À partir de</span>
<span className="text-lg font-medium text-gray-900">22€</span>
</div>
<button className="border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200 hover:border-gray-900">
                        Réserver
                    </button>
</div>
</div>
</div>

<div className="flex justify-center mt-12">
<button className="text-sm font-medium text-gray-500 transition-colors flex items-center gap-2 pb-1 border-b border-transparent hover:text-gray-900 hover:border-gray-300">
                Afficher plus de matchs
                <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</main>

<section className="border-y py-20 relative overflow-hidden border-gray-200 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-gray-900">Vue immersive 360°</h2>
<p className="text-gray-500 font-light mb-8 max-w-md">Ne devinez pas votre vue. Visualisez exactement ce que vous verrez depuis votre siège avant de l'acheter avec notre technologie de mapping d'arène.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        Aperçu réel du terrain
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        Indicateurs d'affluence en direct
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        Comparaison de prix instantanée
                    </li>
</ul>
<button className="px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-lg bg-gray-900 text-white hover:bg-black shadow-gray-900/10">
                    Découvrir la technologie
                </button>
</div>
<div className="relative">

<div className="aspect-video rounded-xl border overflow-hidden relative shadow-2xl bg-white border-gray-200 shadow-gray-200/50">

<div className="absolute inset-x-12 inset-y-8 border border-orange-500/30 rounded-sm bg-orange-50/30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-orange-500/30"></div>

<div className="absolute top-1/3 left-1/4 backdrop-blur border p-3 rounded-lg shadow-xl animate-bounce bg-white/90 border-gray-200" style={{animationDuration: '3s'}}>
<div className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">Section 102</div>
<div className="font-medium text-sm text-gray-900">Vue Courtside</div>
<div className="text-xs mt-1 text-orange-600">120€</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-white border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="font-medium mb-4 text-gray-900">Plateforme</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition hover:text-black" href="#">Comment ça marche</a></li>
<li><a className="transition hover:text-black" href="#">Tarifs</a></li>
<li><a className="transition hover:text-black" href="#">Application Mobile</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-900">Support</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition hover:text-black" href="#">Centre d'aide</a></li>
<li><a className="transition hover:text-black" href="#">Remboursements</a></li>
<li><a className="transition hover:text-black" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-900">Légal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition hover:text-black" href="#">Confidentialité</a></li>
<li><a className="transition hover:text-black" href="#">CGV</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-900">Newsletter</h4>
<p className="text-xs text-gray-500 mb-4">Recevez les alertes de mise en vente.</p>
<div className="flex gap-2">
<input className="border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-gray-400 focus:bg-white transition-colors bg-gray-50 border-gray-200 text-gray-900" placeholder="Email" type="email"/>
<button className="rounded-lg px-3 py-2 transition border bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100">
<div className="flex items-center gap-2 mb-4 md:mb-0 opacity-70">
<div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold bg-orange-600 text-white">EH</div>
<span className="text-xs text-gray-500">© 2024 EuroHoops Access.</span>
</div>
<div className="flex gap-4 text-gray-400">
<a className="transition hover:text-black" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="transition hover:text-black" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
