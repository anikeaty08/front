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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-semibold group-hover:scale-95 transition-transform duration-300 shadow-sm shadow-blue-200">
                    r.
                </div>
<span className="font-medium tracking-tight text-lg text-zinc-900">reseau.site</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-blue-700 transition-colors" href="#explore">Explorer</a>
<a className="hover:text-blue-700 transition-colors" href="#marketplace">Marketplace</a>
<a className="hover:text-blue-700 transition-colors" href="#pro">Réseau Pro</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900" href="#">Connexion</a>
<a className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-full transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center gap-2 group" href="#pro">
<span>Espace Pro</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-medium mb-8 animate-fade-in shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    La référence du commerce local en France
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Redécouvrez le <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-red-500">commerce de proximité.</span>
</h1>
<p className="text-lg text-zinc-500 mb-12 max-w-xl leading-relaxed font-normal">
                    L'annuaire nouvelle génération pour rechercher, réserver et soutenir les entreprises locales, partout en France.
                </p>

<div className="w-full max-w-3xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200/80 flex flex-col focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus-within:border-zinc-300 transition-all duration-500 overflow-hidden text-left">

<div className="flex items-start px-6 pt-6 pb-4">
<input className="w-full bg-transparent border-none outline-none text-lg md:text-xl text-zinc-900 placeholder-zinc-400 font-medium" placeholder="Que cherchez-vous ? (ex: Boulangerie, un artisan plombier...)" type="text"/>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 pb-4">

<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 w-full sm:w-auto">

<div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100/80 hover:bg-zinc-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 border border-transparent transition-all shrink-0 group cursor-text">
<iconify-icon className="text-zinc-500 group-focus-within:text-blue-600 text-lg transition-colors" icon="solar:map-point-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-zinc-800 placeholder-zinc-500 w-28 sm:w-32 font-medium" placeholder="Où ? (Ville, CP)" type="text"/>
</div>
<div className="w-px h-5 bg-zinc-200 mx-1 shrink-0 hidden sm:block"></div>

<div className="flex items-center gap-1 shrink-0 bg-zinc-50/80 p-1 rounded-xl border border-zinc-100/80">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="search_category" type="radio"/>
<div className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-500 peer-checked:bg-white peer-checked:text-zinc-900 peer-checked:shadow-[0_1px_3px_rgba(0,0,0,0.05)] peer-checked:ring-1 peer-checked:ring-zinc-200 hover:text-zinc-900 transition-all flex items-center gap-1.5">
<span>Tout</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="search_category" type="radio"/>
<div className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-500 peer-checked:bg-white peer-checked:text-zinc-900 peer-checked:shadow-[0_1px_3px_rgba(0,0,0,0.05)] peer-checked:ring-1 peer-checked:ring-zinc-200 hover:text-zinc-900 transition-all flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:cup-hot-linear"></iconify-icon>
<span>Restos</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="search_category" type="radio"/>
<div className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-500 peer-checked:bg-white peer-checked:text-zinc-900 peer-checked:shadow-[0_1px_3px_rgba(0,0,0,0.05)] peer-checked:ring-1 peer-checked:ring-zinc-200 hover:text-zinc-900 transition-all flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:pallete-2-linear"></iconify-icon>
<span>Artisans</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="search_category" type="radio"/>
<div className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-500 peer-checked:bg-white peer-checked:text-red-600 peer-checked:shadow-[0_1px_3px_rgba(0,0,0,0.05)] peer-checked:ring-1 peer-checked:ring-red-100 hover:text-zinc-900 transition-all flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:tag-linear"></iconify-icon>
<span>Offres</span>
</div>
</label>
</div>
</div>

<button className="w-full sm:w-12 h-12 shrink-0 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all shadow-sm group">
<span className="sm:hidden text-sm font-medium mr-2">Rechercher</span>
<iconify-icon className="text-xl rotate-45 sm:rotate-0 sm:group-hover:-rotate-45 transition-transform" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100" id="explore">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">Une plateforme, trois dimensions.</h2>
<p className="text-zinc-500 font-normal">Tout ce dont vous avez besoin pour vivre localement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:border-blue-200">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 border border-blue-100">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Annuaire Local Intelligent</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Trouvez rapidement les commerces et services autour de vous grâce à une recherche géolocalisée précise.</p>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-50 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-700 hidden md:block">
<div className="w-64 h-48 bg-zinc-50 border border-zinc-200 rounded-lg shadow-sm p-4 rotate-3 group-hover:rotate-6 transition-transform">
<div className="flex gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div className="space-y-1">
<div className="w-24 h-2 bg-zinc-200 rounded"></div>
<div className="w-16 h-2 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="w-full h-20 bg-blue-50/50 rounded-md border border-blue-100/50 mb-2"></div>
<div className="flex justify-between items-center mt-4">
<div className="w-16 h-2 bg-zinc-100 rounded"></div>
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 hover:border-red-200">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-500 border border-red-100">
<iconify-icon icon="solar:bag-heart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Marketplace &amp; Offres</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Profitez de réductions exclusives, réservez des services ou commandez en ligne.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:border-blue-200">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900 border border-zinc-200">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Communauté</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Un réseau social dédié aux professionnels pour échanger et collaborer.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-zinc-900 rounded-2xl border border-zinc-800 p-8 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between">
<div className="relative z-10 max-w-sm">
<h3 className="text-xl font-medium tracking-tight mb-2 flex items-center gap-2">
                            Partout en France
                            <span className="flex h-2 w-2 relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">De Paris à Marseille, en passant par les villages de nos régions. Rejoignez le mouvement.</p>
<div className="flex gap-4">
<div>
<div className="text-2xl font-medium tracking-tight text-white">15k+</div>
<div className="text-xs text-zinc-500">Commerçants</div>
</div>
<div className="w-px h-10 bg-zinc-800"></div>
<div>
<div className="text-2xl font-medium tracking-tight text-white">85k+</div>
<div className="text-xs text-zinc-500">Utilisateurs</div>
</div>
</div>
</div>
<div className="relative mt-8 md:mt-0 opacity-10 md:opacity-20 text-blue-500">
<iconify-icon icon="solar:map-linear" strokeWidth="0.5" width="160"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="marketplace">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">À la une sur la Marketplace</h2>
<p className="text-zinc-500 font-normal">Découvrez les pépites de vos commerçants locaux.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    Voir tout
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-xl mb-4 overflow-hidden relative border border-zinc-100">
<div className="absolute inset-0 bg-zinc-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-3 left-3 bg-red-50 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide text-red-600 shadow-sm border border-red-100">
                            Offre
                        </div>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-blue-700 transition-colors">Menu Dégustation Truffe</h4>
<p className="text-xs text-zinc-500 mb-2">Chez Gusto Italiano • Lyon</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">45.00€</span>
<button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-xl mb-4 overflow-hidden relative border border-zinc-100">
<div className="absolute inset-0 bg-zinc-200/50 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-blue-700 transition-colors">Bouquet Fleurs de Saison</h4>
<p className="text-xs text-zinc-500 mb-2">L'Atelier Floral • Bordeaux</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">28.00€</span>
<button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-xl mb-4 overflow-hidden relative border border-zinc-100">
<div className="absolute inset-0 bg-zinc-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide shadow-sm">
                            -20%
                        </div>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-blue-700 transition-colors">Séance Spa &amp; Massage</h4>
<p className="text-xs text-zinc-500 mb-2">Zen Moment • Paris 11</p>
<div className="flex items-center justify-between">
<div className="flex gap-2 items-baseline">
<span className="text-sm font-medium text-zinc-900">64€</span>
<span className="text-xs text-zinc-400 line-through">80€</span>
</div>
<button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-xl mb-4 overflow-hidden relative border border-zinc-100">
<div className="absolute inset-0 bg-zinc-200/50 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<h4 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-blue-700 transition-colors">Céramique Artisanale</h4>
<p className="text-xs text-zinc-500 mb-2">Potter Studio • Lille</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">35.00€</span>
<button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-8 md:hidden text-center">
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
                    Voir toute la marketplace
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100" id="pro">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 border border-blue-100">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Vous êtes commerçant ?</h3>
<p className="text-zinc-500 mb-8 font-normal leading-relaxed">
                        Rejoignez le réseau professionnel. Augmentez votre visibilité, vendez vos produits en ligne et accédez à des outils de gestion simplifiés.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-zinc-600">
<iconify-icon className="text-blue-600 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                            Fiche vitrine optimisée SEO
                        </li>
<li className="flex items-center text-sm text-zinc-600">
<iconify-icon className="text-blue-600 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                            Module de Click &amp; Collect
                        </li>
<li className="flex items-center text-sm text-zinc-600">
<iconify-icon className="text-blue-600 mr-2" icon="solar:check-circle-linear"></iconify-icon>
                            Tableau de bord statistiques
                        </li>
</ul>
<a className="inline-flex w-full justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm shadow-blue-200" href="#">
                        Créer mon compte Pro
                    </a>
</div>

<div className="relative pl-0 md:pl-10">
<div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-red-400 to-transparent rounded-full hidden md:block"></div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Devenez Ambassadeur</h3>
<p className="text-zinc-500 mb-8 font-normal leading-relaxed">
                        Passionné par votre région ? Aidez-nous à référencer les pépites locales et gagnez des récompenses exclusives.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center text-zinc-500 shadow-sm group-hover:border-red-200 group-hover:text-red-500 transition-colors">
<span className="text-xs font-semibold">1</span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-red-600 transition-colors">Décelez</h4>
<p className="text-xs text-zinc-500 mt-1">Repérez les nouveaux commerces prometteurs.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center text-zinc-500 shadow-sm group-hover:border-red-200 group-hover:text-red-500 transition-colors">
<span className="text-xs font-semibold">2</span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-red-600 transition-colors">Partagez</h4>
<p className="text-xs text-zinc-500 mt-1">Ajoutez-les à l'annuaire et validez les informations.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center text-zinc-500 shadow-sm group-hover:border-red-200 group-hover:text-red-500 transition-colors">
<span className="text-xs font-semibold">3</span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-red-600 transition-colors">Gagnez</h4>
<p className="text-xs text-zinc-500 mt-1">Cumulez des points et débloquez des bons d'achat.</p>
</div>
</div>
</div>
<a className="inline-flex items-center mt-8 text-sm font-medium text-zinc-900 hover:text-red-600 border-b border-zinc-900 hover:border-red-600 pb-0.5 transition-all" href="#">
                        En savoir plus sur le programme
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-blue-700 text-white flex items-center justify-center text-xs font-medium">r.</div>
<span className="font-medium tracking-tight text-zinc-900">reseau.site</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Plateforme française dédiée à la valorisation du commerce de proximité et à la connexion locale.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">Plateforme</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Annuaire</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Marketplace</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Carte interactive</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">Professionnels</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Espace Commerçant</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Tarifs</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Programme Ambassadeur</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">Support</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Centre d'aide</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-blue-600 transition-colors" href="#">Légal</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 reseau.site. Tous droits réservés.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
