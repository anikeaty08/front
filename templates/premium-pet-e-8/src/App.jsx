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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 uppercase" href="#">
                Le Cocon d'Or
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#categories">Univers</a>
<a className="hover:text-zinc-900 transition-colors" href="#products">Boutique</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">L'Entreprise</a>
<a className="hover:text-zinc-900 transition-colors" href="#blog">Journal</a>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Chien heureux" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588099140103-eb7e0ae84d00?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 text-center max-w-3xl px-6 mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Nouvelle collection accessoires
            </div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                L'excellence quotidienne pour vos compagnons.
            </h1>
<p className="text-lg text-zinc-200 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Une sélection rigoureuse d'alimentation et d'accessoires premium pour chats, chiens et oiseaux. Parce qu'ils méritent ce qu'il y a de meilleur.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-all" href="#products">
                    Découvrir la boutique
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all" href="#about">
                    Notre histoire
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col items-start gap-4">
<div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-zinc-900">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Naturel &amp; Biologique</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Tous nos produits alimentaires sont certifiés sans additifs artificiels, privilégiant des ingrédients locaux et sains.
                    </p>
</div>

<div className="flex flex-col items-start gap-4">
<div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-zinc-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Sélection Vétérinaire</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Chaque référence est validée par notre comité d'experts vétérinaires pour garantir la sécurité de votre animal.
                    </p>
</div>

<div className="flex flex-col items-start gap-4">
<div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-zinc-900">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Livraison Rapide</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Commandez avant 13h, votre colis est expédié le jour même avec un emballage éco-responsable.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="categories">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Nos Univers</h2>
<a className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                    Voir toutes les catégories
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<a className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer block" href="#">
<img alt="Chiens" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="block text-white text-lg font-medium tracking-tight mb-1">Chiens</span>
<span className="flex items-center gap-1 text-zinc-300 text-xs group-hover:text-white transition-colors">
                            Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer block" href="#">
<img alt="Chats" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&amp;w=2643&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="block text-white text-lg font-medium tracking-tight mb-1">Chats</span>
<span className="flex items-center gap-1 text-zinc-300 text-xs group-hover:text-white transition-colors">
                            Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer block" href="#">
<img alt="Oiseaux" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549608276-5786777e6587?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="block text-white text-lg font-medium tracking-tight mb-1">Oiseaux</span>
<span className="flex items-center gap-1 text-zinc-300 text-xs group-hover:text-white transition-colors">
                            Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer block" href="#">
<img alt="Soins" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="block text-white text-lg font-medium tracking-tight mb-1">Soins &amp; Hygiène</span>
<span className="flex items-center gap-1 text-zinc-300 text-xs group-hover:text-white transition-colors">
                            Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-2">Sélection du Moment</h2>
<p className="text-sm text-zinc-500">Les favoris de nos clients et nos dernières trouvailles.</p>
</div>

<div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
<button className="px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-medium whitespace-nowrap">Tous</button>
<button className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:bg-zinc-100 transition-colors">Alimentation</button>
<button className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:bg-zinc-100 transition-colors">Jouets</button>
<button className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:bg-zinc-100 transition-colors">Couchage</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-amber-600 rounded-sm z-10">Best-seller</span>
<img alt="Croquettes Premium" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?w=800&amp;q=80"/>

<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-amber-600 transition-colors cursor-pointer">Croquettes Bio Poulet</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500 mb-2">Chien Adulte - 12kg</p>
<p className="text-sm font-semibold text-zinc-900">54,90 €</p>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Harnais Cuir" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1589779255805-464eb6ecb47e?w=800&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-amber-600 transition-colors cursor-pointer">Harnais Cuir Artisanal</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500 mb-2">Accessoires - Taille M</p>
<p className="text-sm font-semibold text-zinc-900">39,90 €</p>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<span className="absolute top-3 left-3 px-2 py-1 bg-zinc-900/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-white rounded-sm z-10">Nouveau</span>
<img alt="Arbre à chat" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642394182600-f52d887a4c10?w=800&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-amber-600 transition-colors cursor-pointer">Arbre à Chat Design</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500 mb-2">Mobilier - Bois clair</p>
<p className="text-sm font-semibold text-zinc-900">129,00 €</p>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-4">
<img alt="Mélange Graines" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560813487-803cbe32d18b?w=800&amp;q=80"/>
<button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-lg">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-amber-600 transition-colors cursor-pointer">Mélange Exotique</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500 mb-2">Oiseaux - 1kg</p>
<p className="text-sm font-semibold text-zinc-900">14,50 €</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#">
                    Voir toute la collection
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center text-amber-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight mb-8 leading-snug">
                "Le Cocon d'Or a transformé notre approche de l'alimentation animale. La qualité des produits et la transparence de leur sélection sont inégalées sur le marché actuel."
            </h2>
<div className="flex items-center justify-center gap-4">
<img alt="Sophie Martin" className="w-12 h-12 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="text-left">
<div className="text-sm font-medium text-zinc-900">Dr. Sophie Martin</div>
<div className="text-xs text-zinc-500">Fondatrice, Clinique VetAlliance</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden relative">
<img alt="Fondateur avec un chien" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<h4 className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4">Notre Vision</h4>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-6">Plus qu'une animalerie, un lieu de confiance.</h2>
<div className="space-y-6 text-zinc-500 leading-relaxed font-light">
<p>
                            Fondé en 2018, Le Cocon d'Or est né d'un constat simple : la difficulté de trouver une alimentation saine et transparente pour nos animaux de compagnie. 
                        </p>
<p>
                            Notre mission est de simplifier la vie des propriétaires en proposant une sélection drastique. Nous ne vendons rien que nous ne donnerions pas à nos propres animaux. De l'oiseau exotique au grand danois, chaque besoin est étudié avec soin.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex gap-12">
<div>
<span className="block text-2xl font-medium text-zinc-900 tracking-tight">15k+</span>
<span className="text-xs text-zinc-400">Clients heureux</span>
</div>
<div>
<span className="block text-2xl font-medium text-zinc-900 tracking-tight">850+</span>
<span className="text-xs text-zinc-400">Références</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Ce qu'ils en pensent</h2>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-4 md:mt-0">
<span className="text-zinc-900 font-medium">4.9/5</span> sur 1,240 avis
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"Enfin une boutique qui prend au sérieux l'alimentation des oiseaux exotiques. Les mélanges sont frais et sans poussière."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-xs font-medium text-zinc-600">JB</div>
<span className="text-sm font-medium text-zinc-900">Jean-Baptiste L.</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"Le service client m'a aidé à choisir la taille parfaite pour le harnais de mon Golden. Livraison en 24h, impeccable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-xs font-medium text-zinc-600">MR</div>
<span className="text-sm font-medium text-zinc-900">Marie R.</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex gap-1 text-amber-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">"Les croquettes hypoallergéniques ont sauvé la digestion de mon chat. Un grand merci pour vos conseils."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-xs font-medium text-zinc-600">CD</div>
<span className="text-sm font-medium text-zinc-900">Camille D.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-zinc-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Quels sont les délais de livraison ?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                        Nous expédions toutes les commandes passées avant 13h le jour même. La livraison standard prend 24 à 48 heures ouvrées en France métropolitaine.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Proposez-vous des produits pour oiseaux exotiques ?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                        Absolument. Nous avons une gamme spécialisée pour perroquets, canaris et oiseaux exotiques, incluant des mélanges de graines, des extrudés et des compléments vitaminés.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Quelle est votre politique de retour ?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                        Si un produit ne vous convient pas, vous disposez de 30 jours pour nous le retourner dans son emballage d'origine. Les frais de retour sont offerts pour les échanges.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Comment choisir les bonnes croquettes pour mon chien ?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                        Chaque chien est unique. Nous vous conseillons d'utiliser nos filtres (âge, race, activité) ou de contacter notre service client pour un conseil nutritionnel personnalisé.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm open:ring-1 open:ring-zinc-200">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Avez-vous un programme de fidélité ?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                        Oui, le programme "Cocon Club" vous permet de cumuler des points à chaque commande et de bénéficier de remises exclusives et de cadeaux d'anniversaire pour votre animal.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Le Journal</h2>
<a className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                    Voir tous les articles
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-zinc-200 relative">
<img alt="Chien promenade" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-zinc-900 rounded-sm">Chien</div>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">Comment gérer l'anxiété de séparation ?</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Nos conseils pour aider votre chien à rester serein lorsque vous quittez la maison.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-zinc-200 relative">
<img alt="Chat jeu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&amp;w=2643&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-zinc-900 rounded-sm">Chat</div>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">L'importance du jeu pour le chat d'intérieur</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Découvrez les meilleurs jouets pour stimuler l'instinct de chasseur de votre félin.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-zinc-200 relative">
<img alt="Oiseaux" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-zinc-900 rounded-sm">Oiseau</div>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">Préparer sa volière pour l'hiver</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Tout ce qu'il faut savoir pour protéger vos oiseaux du froid et des courants d'air.</p>
</article>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

<div className="p-12 lg:p-24 flex flex-col justify-center">
<div className="max-w-md mx-auto w-full">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-2">Nous contacter</h2>
<p className="text-sm text-zinc-500 mb-8">Une question sur un produit ou votre commande ?</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Prénom</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-all placeholder:text-zinc-400" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Nom</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-all placeholder:text-zinc-400" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Email</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-all placeholder:text-zinc-400" placeholder="jean@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700">Message</label>
<textarea className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:ring-1 focus:ring-zinc-900 outline-none transition-all placeholder:text-zinc-400 resize-none" placeholder="Comment pouvons-nous vous aider ?" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors" type="button">
                            Envoyer le message
                        </button>
</form>
</div>
</div>

<div className="relative bg-zinc-100 h-64 lg:h-auto overflow-hidden grayscale contrast-125">

<img alt="Map" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center">
<div className="w-3 h-3 bg-amber-500 rounded-full mb-2 animate-pulse"></div>
<span className="text-xs font-bold text-zinc-900">Le Cocon d'Or</span>
<span className="text-[10px] text-zinc-500">Paris, France</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-base font-medium tracking-tighter text-zinc-900 uppercase mb-4 block" href="#">
                        Le Cocon d'Or
                    </a>
<p className="text-sm text-zinc-400 mb-6">L'animalerie en ligne de référence pour les propriétaires exigeants.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Boutique</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Chiens</a></li>
<li><a className="hover:text-zinc-900" href="#">Chats</a></li>
<li><a className="hover:text-zinc-900" href="#">Oiseaux</a></li>
<li><a className="hover:text-zinc-900" href="#">Nouveautés</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Aide</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Livraison</a></li>
<li><a className="hover:text-zinc-900" href="#">Retours</a></li>
<li><a className="hover:text-zinc-900" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Newsletter</h4>
<p className="text-xs text-zinc-400 mb-4">Recevez nos conseils et offres exclusives.</p>
<div className="flex gap-2">
<input className="w-full bg-zinc-50 border-b border-zinc-200 px-2 py-1 text-sm outline-none focus:border-zinc-900 transition-colors" placeholder="Email" type="email"/>
<button className="text-zinc-900 hover:text-amber-600">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Le Cocon d'Or. Tous droits réservés.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Confidentialité</a>
<a className="hover:text-zinc-600" href="#">CGV</a>
<a className="hover:text-zinc-600" href="#">Mentions Légales</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
