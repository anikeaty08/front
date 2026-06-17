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



        // Simple router logic
        function showShop() {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('shop-view').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        function showHome() {
            document.getElementById('shop-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        // Cart Drawer logic
        function toggleCart() {
            const drawer = document.getElementById('checkout-drawer');
            const panel = document.getElementById('checkout-panel');
            
            if (drawer.classList.contains('hidden')) {
                drawer.classList.remove('hidden');
                // Small delay to allow display:block to apply before transition
                setTimeout(() => {
                    panel.classList.remove('translate-x-full');
                }, 10);
            } else {
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    drawer.classList.add('hidden');
                }, 300);
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 uppercase" href="#" onclick="showHome()">
                MARKET <span className="text-neutral-400">CONNECT</span>
</a>
<div className="hidden md:flex items-center flex-1 max-w-md mx-8 group">
<div className="relative w-full">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</span>
<input className="w-full bg-neutral-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-neutral-300 placeholder-neutral-400 transition-all outline-none" placeholder="Rechercher..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="relative cursor-pointer group" onclick="toggleCart()">
<span className="iconify text-neutral-600 group-hover:text-neutral-900 transition-colors" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 px-6 max-w-7xl mx-auto transition-opacity duration-300" id="home-view">

<header className="mb-16 md:mb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-7 space-y-6">
<div className="flex items-center gap-2 text-orange-600 text-xs font-medium uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-orange-600"></span>
                        En vedette cette semaine
                    </div>
<h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.1]">
                        La fraîcheur du <br/>
<span className="italic text-neutral-500">terroir béninois.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-lg font-light leading-relaxed">
                        Redécouvrez le goût authentique de nos marchés. Des produits cultivés localement, livrés directement à votre porte.
                    </p>
<div className="pt-4 flex items-center gap-4">
<button className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2" onclick="showShop()">
                            Commencer mes courses
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
<div className="lg:col-span-5 relative group cursor-pointer" onclick="showShop()">
<div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-neutral-200 relative">
<img alt="Légumes frais" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>
</main>

<main className="hidden pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen" id="shop-view">
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="font-medium text-neutral-900 mb-4 text-sm uppercase tracking-wider">Catégories</h3>
<ul className="space-y-2">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500 rounded-sm" type="checkbox"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Tout voir</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500 rounded-sm" type="checkbox"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Tubercules &amp; Racines</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500 rounded-sm" type="checkbox"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Fruits &amp; Légumes</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500 rounded-sm" type="checkbox"/>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Épices Locales</span>
</label>
</li>
</ul>
</div>
<div>
<h3 className="font-medium text-neutral-900 mb-4 text-sm uppercase tracking-wider">Prix (FCFA)</h3>
<div className="flex items-center gap-2 mb-4">
<input className="w-full bg-white border border-neutral-200 rounded px-2 py-1.5 text-xs" placeholder="Min" type="number"/>
<span className="text-neutral-400">-</span>
<input className="w-full bg-white border border-neutral-200 rounded px-2 py-1.5 text-xs" placeholder="Max" type="number"/>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-serif text-neutral-900">Tous les produits</h2>
<select className="bg-transparent border-none text-sm text-neutral-500 focus:ring-0 cursor-pointer">
<option>Trier par: Pertinence</option>
<option>Prix: Croissant</option>
<option>Prix: Décroissant</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group cursor-pointer" onclick="toggleCart()">
<div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-neutral-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Igname Laboko</h3>
<p className="text-xs text-neutral-500 mt-0.5">Savalou • Le tas</p>
</div>
<span className="text-sm font-medium text-neutral-900">3.500F</span>
</div>
</div>

<div className="group cursor-pointer" onclick="toggleCart()">
<div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-neutral-100">
<span className="absolute top-3 left-3 bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider z-10">Promo</span>
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Piment Rouge</h3>
<p className="text-xs text-neutral-500 mt-0.5">Frais • Le kg</p>
</div>
<span className="text-sm font-medium text-neutral-900">1.200F</span>
</div>
</div>

<div className="group cursor-pointer" onclick="toggleCart()">
<div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-neutral-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Gari Sohoui</h3>
<p className="text-xs text-neutral-500 mt-0.5">Sac de 5kg</p>
</div>
<span className="text-sm font-medium text-neutral-900">2.800F</span>
</div>
</div>

<div className="group cursor-pointer" onclick="toggleCart()">
<div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-neutral-100">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623912629864-44b49704040e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-900">Huile de Palme</h3>
<p className="text-xs text-neutral-500 mt-0.5">Rouge • 1 Litre</p>
</div>
<span className="text-sm font-medium text-neutral-900">1.500F</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="checkout-drawer">

<div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm transition-opacity" onclick="toggleCart()"></div>

<div className="absolute right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-full" id="checkout-panel">

<div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-10 sticky top-0">
<h2 className="text-lg font-serif font-medium">Mon Panier (3)</h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-2" onclick="toggleCart()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<section className="space-y-4">
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-neutral-900">Igname Laboko</h4>
<p className="text-xs text-neutral-500">Le tas</p>
</div>
<div className="text-right">
<span className="text-sm font-medium">3.500F</span>
<div className="flex items-center justify-end gap-2 mt-1">
<button className="text-neutral-400 hover:text-neutral-900"><span className="iconify" data-icon="lucide:minus" data-width="12"></span></button>
<span className="text-xs font-medium">1</span>
<button className="text-neutral-400 hover:text-neutral-900"><span className="iconify" data-icon="lucide:plus" data-width="12"></span></button>
</div>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd3?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-neutral-900">Piment Rouge</h4>
<p className="text-xs text-neutral-500">2 kg</p>
</div>
<div className="text-right">
<span className="text-sm font-medium">2.400F</span>
<div className="flex items-center justify-end gap-2 mt-1">
<button className="text-neutral-400 hover:text-neutral-900"><span className="iconify" data-icon="lucide:minus" data-width="12"></span></button>
<span className="text-xs font-medium">2</span>
<button className="text-neutral-400 hover:text-neutral-900"><span className="iconify" data-icon="lucide:plus" data-width="12"></span></button>
</div>
</div>
</div>
</section>
<hr className="border-neutral-100"/>

<section>
<h3 className="text-sm font-medium text-neutral-900 mb-4 flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:map-pin" data-width="16"></span>
                        Informations de Livraison
                    </h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Nom complet</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none transition-all" type="text" value="Jean Dupont"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Téléphone (WhatsApp)</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none transition-all" placeholder="+229 01 00 00 00" type="tel"/>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Ville</label>
<select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none transition-all">
<option>Cotonou</option>
<option>Calavi</option>
<option>Porto-Novo</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Quartier</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none transition-all" placeholder="Ex: Haie Vive" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] uppercase font-bold text-neutral-500 mb-1">Point de repère</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-neutral-900 outline-none transition-all" placeholder="Ex: Derrière la pharmacie..." type="text"/>
</div>
</div>
</div>
</section>
<hr className="border-neutral-100"/>

<section>
<h3 className="text-sm font-medium text-neutral-900 mb-4 flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:credit-card" data-width="16"></span>
                        Mode de paiement
                    </h3>
<div className="grid grid-cols-1 gap-3">
<label className="relative cursor-pointer group">
<input checked="" className="peer custom-radio sr-only" name="payment" type="radio"/>
<div className="p-3 border border-neutral-200 rounded-lg flex items-center justify-between transition-all group-hover:border-neutral-300">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Mobile Money</span>
<span className="text-[10px] text-neutral-500">MTN MoMo / Moov Money</span>
</div>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:smartphone" data-width="20"></span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer custom-radio sr-only" name="payment" type="radio"/>
<div className="p-3 border border-neutral-200 rounded-lg flex items-center justify-between transition-all group-hover:border-neutral-300">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-neutral-300 radio-circle flex items-center justify-center"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Paiement à la livraison</span>
<span className="text-[10px] text-neutral-500">Espèces uniquement</span>
</div>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:banknote" data-width="20"></span>
</div>
</label>
</div>
</section>
</div>

<div className="border-t border-neutral-100 p-6 bg-neutral-50 sticky bottom-0">
<div className="space-y-2 mb-4">
<div className="flex justify-between text-xs text-neutral-500">
<span>Sous-total</span>
<span>5.900F</span>
</div>
<div className="flex justify-between text-xs text-neutral-500">
<span>Livraison (Cotonou)</span>
<span>1.000F</span>
</div>
<div className="flex justify-between text-base font-medium text-neutral-900 pt-2 border-t border-neutral-200">
<span>Total à payer</span>
<span>6.900 FCFA</span>
</div>
</div>
<button className="w-full bg-neutral-900 text-white py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all flex justify-center items-center gap-2 active:scale-[0.98]">
                    Confirmer la commande
                    <span className="iconify" data-icon="lucide:check" data-width="16"></span>
</button>
<p className="text-[10px] text-neutral-400 text-center mt-3">
                    En confirmant, vous acceptez nos conditions de vente.
                </p>
</div>
</div>
</div>


    </>
  );
}
