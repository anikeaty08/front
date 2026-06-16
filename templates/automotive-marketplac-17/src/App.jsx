import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight text-zinc-900" href="#">garage<span className="text-emerald-600">pro</span></a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition" href="#">Annonces</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition" href="#">Pièces détachées</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition" href="#">Équipements</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition" href="#">Services</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition">
<span className="iconify" data-icon="lucide:heart" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span>Favoris</span>
</button>
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition">
<span className="iconify" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span>Messages</span>
</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5px'}}></span>
<span className="hidden sm:inline">Déposer une annonce</span>
</button>
<div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-medium cursor-pointer">
                        JP
                    </div>
</div>
</div>
</div>
</nav>

<section className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 sm:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                    La marketplace des <span className="text-emerald-400">professionnels</span> de l'automobile
                </h1>
<p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
                    Achetez et vendez des pièces, équipements et véhicules entre professionnels certifiés
                </p>
</div>

<div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto">
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5px'}}></span>
<input className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="Rechercher une pièce, un équipement..." type="text"/>
</div>
<div className="relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="lucide:map-pin" data-width="20" style={{strokeWidth: '1.5px'}}></span>
<input className="w-full sm:w-48 pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="Localisation" type="text"/>
</div>
<button className="bg-emerald-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-emerald-700 transition flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5px'}}></span>
                        Rechercher
                    </button>
</div>

<div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-100">
<span className="text-xs text-zinc-500 mr-2 self-center">Populaires:</span>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full hover:bg-zinc-200 transition">Moteurs</button>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full hover:bg-zinc-200 transition">Boîtes de vitesses</button>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full hover:bg-zinc-200 transition">Ponts élévateurs</button>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full hover:bg-zinc-200 transition">Outillage</button>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">Catégories</h2>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition flex items-center gap-1" href="#">
                    Voir tout
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5px'}}></span>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:cog" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Pièces moteur</h3>
<p className="text-xs text-zinc-500 mt-1">12,450 annonces</p>
</a>
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:disc" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Freinage</h3>
<p className="text-xs text-zinc-500 mt-1">8,230 annonces</p>
</a>
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Électrique</h3>
<p className="text-xs text-zinc-500 mt-1">5,890 annonces</p>
</a>
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:wrench" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Outillage</h3>
<p className="text-xs text-zinc-500 mt-1">3,420 annonces</p>
</a>
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:move-vertical" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Équipements</h3>
<p className="text-xs text-zinc-500 mt-1">2,150 annonces</p>
</a>
<a className="group p-6 bg-zinc-50 rounded-2xl hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all" href="#">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition shadow-sm">
<span className="iconify text-zinc-600 group-hover:text-emerald-600" data-icon="lucide:car" data-width="24" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-sm font-medium text-zinc-900">Véhicules</h3>
<p className="text-xs text-zinc-500 mt-1">1,890 annonces</p>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">Annonces récentes</h2>
<p className="text-sm text-zinc-500 mt-1">Découvrez les dernières offres professionnelles</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg">Tout</button>
<button className="px-4 py-2 bg-white text-zinc-600 text-sm font-medium rounded-lg hover:bg-zinc-100 transition">Pièces</button>
<button className="px-4 py-2 bg-white text-zinc-600 text-sm font-medium rounded-lg hover:bg-zinc-100 transition hidden sm:block">Équipements</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all group">
<div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
<img alt="Moteur BMW" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&amp;h=300&amp;fit=crop"/>
<span className="absolute top-3 left-3 px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">Pro vérifié</span>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
<span className="iconify text-zinc-600" data-icon="lucide:heart" data-width="16" style={{strokeWidth: '1.5px'}}></span>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Moteur BMW N47 2.0D 184cv - 45 000km</h3>
</div>
<p className="text-lg font-semibold text-zinc-900 mt-2">2 450 €</p>
<div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5px'}}></span>
<span>Lyon (69)</span>
<span className="mx-1">•</span>
<span>Il y a 2h</span>
</div>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-100">
<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-medium">A</div>
<span className="text-xs text-zinc-600">Auto Pièces Lyon</span>
<div className="flex items-center gap-0.5 ml-auto">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="12" style={{strokeWidth: '1.5px', fill: 'currentColor'}}></span>
<span className="text-xs text-zinc-600">4.9</span>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all group">
<div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
<img alt="Pont élévateur" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&amp;h=300&amp;fit=crop"/>
<span className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-md">Urgent</span>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
<span className="iconify text-zinc-600" data-icon="lucide:heart" data-width="16" style={{strokeWidth: '1.5px'}}></span>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Pont élévateur 2 colonnes 4T - Comme neuf</h3>
</div>
<p className="text-lg font-semibold text-zinc-900 mt-2">3 800 €</p>
<div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5px'}}></span>
<span>Paris (75)</span>
<span className="mx-1">•</span>
<span>Il y a 5h</span>
</div>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-100">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs font-medium">G</div>
<span className="text-xs text-zinc-600">Garage Martin</span>
<div className="flex items-center gap-0.5 ml-auto">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="12" style={{strokeWidth: '1.5px', fill: 'currentColor'}}></span>
<span className="text-xs text-zinc-600">4.7</span>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all group">
<div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
<img alt="Outils" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&amp;h=300&amp;fit=crop"/>
<span className="absolute top-3 left-3 px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">Pro vérifié</span>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
<span className="iconify text-zinc-600" data-icon="lucide:heart" data-width="16" style={{strokeWidth: '1.5px'}}></span>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Lot outillage professionnel Facom - 156 pièces</h3>
</div>
<p className="text-lg font-semibold text-zinc-900 mt-2">1 290 €</p>
<div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5px'}}></span>
<span>Marseille (13)</span>
<span className="mx-1">•</span>
<span>Il y a 1j</span>
</div>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-100">
<div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs font-medium">M</div>
<span className="text-xs text-zinc-600">MecaPro SARL</span>
<div className="flex items-center gap-0.5 ml-auto">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="12" style={{strokeWidth: '1.5px', fill: 'currentColor'}}></span>
<span className="text-xs text-zinc-600">5.0</span>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all group">
<div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
<img alt="Turbo" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
<span className="iconify text-rose-500" data-icon="lucide:heart" data-width="16" style={{strokeWidth: '1.5px', fill: 'currentColor'}}></span>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Turbo Garrett GTX3071R - Neuf</h3>
</div>
<p className="text-lg font-semibold text-zinc-900 mt-2">1 850 €</p>
<div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5px'}}></span>
<span>Bordeaux (33)</span>
<span className="mx-1">•</span>
<span>Il y a 2j</span>
</div>
<div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-100">
<div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs font-medium">T</div>
<span className="text-xs text-zinc-600">Turbo Expert</span>
<div className="flex items-center gap-0.5 ml-auto">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="12" style={{strokeWidth: '1.5px', fill: 'currentColor'}}></span>
<span className="text-xs text-zinc-600">4.8</span>
</div>
</div>
</div>
</article>
</div>
<div className="text-center mt-10">
<button className="px-6 py-3 bg-white border border-zinc-200 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition inline-flex items-center gap-2">
                    Voir toutes les annonces
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5px'}}></span>
</button>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">45K+</p>
<p className="text-sm text-zinc-400 mt-2">Annonces actives</p>
</div>
<div className="text-center">
<p className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">12K+</p>
<p className="text-sm text-zinc-400 mt-2">Professionnels vérifiés</p>
</div>
<div className="text-center">
<p className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">98%</p>
<p className="text-sm text-zinc-400 mt-2">Satisfaction client</p>
</div>
<div className="text-center">
<p className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">2M€</p>
<p className="text-sm text-zinc-400 mt-2">Transactions / mois</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">Pourquoi choisir GaragePro ?</h2>
<p className="text-sm text-zinc-500 mt-2">La plateforme de confiance pour les professionnels de l'automobile</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center p-6">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-emerald-600" data-icon="lucide:shield-check" data-width="28" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-base font-medium text-zinc-900">Vendeurs vérifiés</h3>
<p className="text-sm text-zinc-500 mt-2">Tous nos vendeurs sont des professionnels certifiés avec SIRET vérifié</p>
</div>
<div className="text-center p-6">
<div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-blue-600" data-icon="lucide:credit-card" data-width="28" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-base font-medium text-zinc-900">Paiement sécurisé</h3>
<p className="text-sm text-zinc-500 mt-2">Transactions protégées avec notre système de paiement intégré</p>
</div>
<div className="text-center p-6">
<div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
<span className="iconify text-purple-600" data-icon="lucide:truck" data-width="28" style={{strokeWidth: '1.5px'}}></span>
</div>
<h3 className="text-base font-medium text-zinc-900">Livraison facilitée</h3>
<p className="text-sm text-zinc-500 mt-2">Partenariats avec les meilleurs transporteurs pour vos pièces</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="relative">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">Rejoignez la communauté GaragePro</h2>
<p className="text-emerald-100 max-w-xl mx-auto mb-8">Créez votre compte professionnel gratuitement et accédez à des milliers d'annonces exclusives</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-xl hover:bg-emerald-50 transition">
                            Créer mon compte pro
                        </button>
<button className="px-8 py-3 bg-emerald-500/30 text-white font-medium rounded-xl hover:bg-emerald-500/40 transition border border-emerald-400/30">
                            En savoir plus
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tight text-white" href="#">garage<span className="text-emerald-400">pro</span></a>
<p className="text-sm text-zinc-400 mt-4 max-w-xs">La marketplace de référence pour les professionnels de l'automobile en France.</p>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5px'}}></span>
</a>
<a className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18" style={{strokeWidth: '1.5px'}}></span>
</a>
<a className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18" style={{strokeWidth: '1.5px'}}></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Catégories</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Pièces moteur</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Freinage</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Électrique</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Outillage</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Équipements</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Entreprise</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">À propos</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Carrières</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Presse</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Centre d'aide</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Sécurité</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Conditions d'utilisation</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Politique de confidentialité</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
<p className="text-sm text-zinc-500">© 2024 GaragePro. Tous droits réservés.</p>
<div className="flex items-center gap-6">
<img alt="Mastercard" className="h-6 opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"/>
<img alt="Visa" className="h-4 opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"/>
<img alt="PayPal" className="h-5 opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"/>
</div>
</div>
</div>
</footer>

    </>
  );
}
