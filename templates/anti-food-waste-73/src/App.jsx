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
      

<main className="max-w-md mx-auto min-h-screen bg-white shadow-2xl relative pb-28 border-x border-gray-100 overflow-hidden">

<header className="px-5 pt-6 pb-2 sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-50">

<div className="flex justify-between items-center mb-4">
<div className="flex flex-col cursor-pointer group">
<span className="text-xs text-gray-400 font-medium mb-0.5 group-hover:text-emerald-600 transition-colors">Espace Cuisine</span>
<div className="flex items-center gap-1">
<span className="text-base font-bold text-gray-900 tracking-tight">Maison de Jérémy</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 rounded-full hover:bg-gray-50 text-gray-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-bing-linear"></iconify-icon>
<span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-rose-500 border-2 border-white"></span>
</button>
<div className="h-9 w-9 rounded-full bg-gray-100 p-0.5 overflow-hidden border border-gray-200">
<img alt="Avatar" className="h-full w-full object-cover rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jeremy&amp;backgroundColor=e5e7eb"/>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-emerald-500 text-lg transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all shadow-sm" placeholder="Rechercher..." type="text"/>
</div>
</header>

<div className="space-y-6 pt-4">

<div className="px-5">
<div className="relative w-full bg-gray-900 rounded-3xl p-5 shadow-lg shadow-gray-200 overflow-hidden text-white flex justify-between items-center group">
<div className="relative z-10 w-2/3 pr-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-[10px] font-semibold tracking-wide uppercase mb-3 text-emerald-400">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon> Action requise
                        </div>
<h2 className="text-lg font-bold leading-tight mb-2">3 produits périmés</h2>
<p className="text-xs text-gray-400 mb-4 font-medium leading-relaxed">Faites de la place et économisez en cuisinant vos restes.</p>
<button className="bg-white text-gray-900 text-xs font-bold py-2.5 px-5 rounded-xl shadow-sm hover:bg-emerald-50 transition-colors">
                            Nettoyer maintenant
                        </button>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center opacity-80">

<div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
<span className="text-6xl relative z-10 drop-shadow-2xl">🥦</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="px-5 flex items-end justify-between">
<div>
<h3 className="text-lg font-bold text-gray-900">Mon Stock</h3>
<p className="text-xs text-gray-500 font-medium mt-0.5">Gérez vos produits par catégorie</p>
</div>
<button className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>

<div className="w-full overflow-x-auto no-scrollbar pl-5 pr-2">
<div className="flex gap-4">

<button className="flex flex-col items-center gap-2 group min-w-[64px]">
<div className="h-16 w-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center group-active:scale-95 transition-transform shadow-md shadow-gray-200">
<iconify-icon className="text-2xl" icon="solar:widget-2-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-900">Tout</span>
</button>

<button className="flex flex-col items-center gap-2 group min-w-[64px]">
<div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 group-active:scale-95 transition-transform shadow-sm hover:border-emerald-200">
<span className="text-2xl">🥬</span>
</div>
<span className="text-xs font-medium text-gray-500">Légumes</span>
</button>
<button className="flex flex-col items-center gap-2 group min-w-[64px]">
<div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 group-active:scale-95 transition-transform shadow-sm hover:border-emerald-200">
<span className="text-2xl">🍎</span>
</div>
<span className="text-xs font-medium text-gray-500">Fruits</span>
</button>
<button className="flex flex-col items-center gap-2 group min-w-[64px]">
<div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 group-active:scale-95 transition-transform shadow-sm hover:border-emerald-200">
<span className="text-2xl">🥩</span>
</div>
<span className="text-xs font-medium text-gray-500">Viandes</span>
</button>
<button className="flex flex-col items-center gap-2 group min-w-[64px]">
<div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 group-active:scale-95 transition-transform shadow-sm hover:border-emerald-200">
<span className="text-2xl">🥛</span>
</div>
<span className="text-xs font-medium text-gray-500">Laitages</span>
</button>
</div>
</div>

<div className="px-5 space-y-3">

<div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-rose-100 shadow-sm relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 rounded-l-2xl"></div>
<div className="flex items-center gap-3.5 pl-2">
<div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                                🥛
                            </div>
<div>
<h4 className="text-sm font-bold text-gray-900">Lait demi-écrémé</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> J-2
                                    </span>
<span className="text-[10px] text-gray-400 font-medium">1L • Ouvert</span>
</div>
</div>
</div>
<button className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-emerald-200 transition-colors">
<div className="flex items-center gap-3.5">
<div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                                🍗
                            </div>
<div>
<h4 className="text-sm font-bold text-gray-900">Blancs de poulet</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> 14 Fév
                                    </span>
<span className="text-[10px] text-gray-400 font-medium">x4 • Frais</span>
</div>
</div>
</div>
<button className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-emerald-200 transition-colors">
<div className="flex items-center gap-3.5">
<div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                                🥑
                            </div>
<div>
<h4 className="text-sm font-bold text-gray-900">Avocats Mûrs</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Ok
                                    </span>
<span className="text-[10px] text-gray-400 font-medium">x3 • VRAC</span>
</div>
</div>
</div>
<button className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>

<button className="w-full py-3 text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center justify-center gap-1 transition-colors">
                        Voir tout le stock <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="px-5 flex items-center justify-between">
<h3 className="text-lg font-bold text-gray-900">Quoi cuisiner ?</h3>
<a className="text-xs font-semibold text-emerald-600 hover:text-emerald-700" href="#">Voir tout</a>
</div>
<div className="flex overflow-x-auto no-scrollbar pl-5 gap-4 pb-4">

<div className="min-w-[260px] max-w-[260px] group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-sm bg-gray-100">
<img alt="Dish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
<iconify-icon className="text-gray-400 hover:text-rose-500 text-base" icon="solar:heart-linear"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-emerald-400">
                                Anti-Gaspi
                            </div>
</div>
<div className="pr-2">
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-bold text-gray-900 leading-tight">Hachis Express Italien</h4>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-orange-400 text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-bold text-gray-700">4.8</span>
</div>
</div>
<div className="flex items-center gap-3 text-gray-500 text-xs font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 20 min</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chef-hat-linear"></iconify-icon> Facile</span>
</div>
</div>
</div>

<div className="min-w-[260px] max-w-[260px] group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-sm bg-gray-100">
<img alt="Dish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
<iconify-icon className="text-gray-400 hover:text-rose-500 text-base" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<div className="pr-2">
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-bold text-gray-900 leading-tight">Wok Bœuf Asiatique</h4>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-orange-400 text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-bold text-gray-700">4.5</span>
</div>
</div>
<div className="flex items-center gap-3 text-gray-500 text-xs font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 35 min</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:fire-linear"></iconify-icon> Moyen</span>
</div>
</div>
</div>
</div>
</div>
</div>

<nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 pt-2 pb-safe z-50">
<div className="flex justify-between items-center h-16 relative">

<a className="flex flex-col items-center justify-center gap-1 w-12 text-emerald-600" href="#">
<iconify-icon className="text-2xl stroke-[2.5px]" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-bold">Home</span>
</a>

<a className="flex flex-col items-center justify-center gap-1 w-12 text-gray-400 hover:text-gray-600" href="#">
<iconify-icon className="text-2xl" icon="solar:fridge-linear"></iconify-icon>
<span className="text-[10px] font-medium">Frigo</span>
</a>

<div className="relative -top-8 group">
<button className="h-16 w-16 bg-gray-900 text-white rounded-full shadow-xl shadow-gray-900/30 flex items-center justify-center border-[6px] border-gray-50 transform group-active:scale-95 transition-all">
<iconify-icon className="text-3xl" icon="solar:scanner-linear"></iconify-icon>
</button>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Scanner</span>
</div>

<a className="flex flex-col items-center justify-center gap-1 w-12 text-gray-400 hover:text-gray-600" href="#">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-[10px] font-medium">Cuisine</span>
</a>

<a className="flex flex-col items-center justify-center gap-1 w-12 text-gray-400 hover:text-gray-600" href="#">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profil</span>
</a>
</div>
</nav>
</main>

    </>
  );
}
