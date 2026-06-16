import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icons
    lucide.createIcons();
    
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Elements
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const closeMenuOverlay = document.getElementById('closeMenu');
    const openSearch = document.getElementById('openSearch');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearchBtn');

    // Menu Logic
    function toggleMenu(show) {
      if (show) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
      } else {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
      }
    }

    menuBtn?.addEventListener('click', () => toggleMenu(true));
    closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
    closeMenuOverlay?.addEventListener('click', () => toggleMenu(false));

    // Search Logic
    function toggleSearch(show) {
      if (show) {
        searchOverlay.classList.remove('hidden');
        setTimeout(() => {
          searchOverlay.classList.remove('opacity-0');
          searchOverlay.querySelector('input')?.focus();
        }, 10);
        document.body.style.overflow = 'hidden';
      } else {
        searchOverlay.classList.add('opacity-0');
        setTimeout(() => searchOverlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
      }
    }

    openSearch?.addEventListener('click', () => toggleSearch(true));
    closeSearchBtn?.addEventListener('click', () => toggleSearch(false));
    
    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleMenu(false);
        toggleSearch(false);
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2.5 text-xs sm:text-sm font-light tracking-wide">
<p className="text-white/90"><span className="text-[#C5A059] mr-2">✦</span> Livraison offerte pour toute commande supérieure à 200€</p>
<div className="hidden sm:flex items-center gap-4 text-white/80">
<a className="hover:text-[#C5A059] transition" href="#">Abonnement</a>
<span className="text-neutral-700">|</span>
<a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
<span>Paris • FR</span>
</a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur border-b border-neutral-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<button aria-label="Menu" className="inline-flex items-center justify-center p-2 text-neutral-800 hover:text-[#C5A059] transition sm:hidden" id="menuBtn">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>

<a className="flex items-center gap-3 group" href="#">
<span className="font-serif text-3xl sm:text-4xl tracking-tight font-medium text-black group-hover:opacity-80 transition">MUSE</span>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-neutral-800 hover:text-[#C5A059] transition text-sm uppercase tracking-widest font-medium" href="#">Mode</a>
<a className="text-neutral-800 hover:text-[#C5A059] transition text-sm uppercase tracking-widest font-medium" href="#">Beauté</a>
<a className="text-neutral-800 hover:text-[#C5A059] transition text-sm uppercase tracking-widest font-medium" href="#">Culture</a>
<a className="text-neutral-800 hover:text-[#C5A059] transition text-sm uppercase tracking-widest font-medium" href="#">Défilés</a>
<a className="text-neutral-800 hover:text-[#C5A059] transition text-sm uppercase tracking-widest font-medium" href="#">Boutique</a>
</nav>

<div className="flex items-center gap-2 sm:gap-4">
<button aria-label="Recherche" className="p-2 text-neutral-800 hover:text-[#C5A059] transition" id="openSearch">
<i className="h-5 w-5" data-lucide="search"></i>
</button>
<a aria-label="Compte" className="hidden sm:inline-flex p-2 text-neutral-800 hover:text-[#C5A059] transition" href="#">
<i className="h-5 w-5" data-lucide="user"></i>
</a>
<button aria-label="Panier" className="p-2 text-neutral-800 hover:text-[#C5A059] transition relative">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>
<span className="absolute top-2 right-1 h-2 w-2 rounded-full bg-[#C5A059]"></span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden transition-opacity duration-300" id="mobileMenu">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" id="closeMenu"></div>
<div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-[#FDFBF7] shadow-2xl p-6 transform transition-transform duration-300">
<div className="flex items-center justify-between mb-8 border-b border-neutral-200 pb-4">
<span className="font-serif text-2xl font-medium">MUSE</span>
<button className="p-2 text-neutral-500 hover:text-black" id="closeMenuBtn">
<i className="h-6 w-6" data-lucide="x"></i>
</button>
</div>
<nav className="space-y-6">
<a className="block text-lg font-serif italic text-neutral-900 hover:text-[#C5A059]" href="#">Mode</a>
<a className="block text-lg font-serif italic text-neutral-900 hover:text-[#C5A059]" href="#">Beauté</a>
<a className="block text-lg font-serif italic text-neutral-900 hover:text-[#C5A059]" href="#">Culture</a>
<a className="block text-lg font-serif italic text-neutral-900 hover:text-[#C5A059]" href="#">Défilés</a>
<a className="block text-lg font-serif italic text-neutral-900 hover:text-[#C5A059]" href="#">Boutique</a>
<div className="pt-6 border-t border-neutral-200">
<a className="block py-2 text-sm text-neutral-600 hover:text-black" href="#">Se connecter</a>
<a className="block py-2 text-sm text-neutral-600 hover:text-black" href="#">Newsletter</a>
</div>
</nav>
</div>
</div>

<div className="fixed inset-0 z-50 hidden bg-[#FDFBF7]/95 backdrop-blur-xl transition-opacity duration-300" id="searchOverlay">
<button className="absolute top-6 right-6 p-4 text-neutral-500 hover:text-black" id="closeSearchBtn">
<i className="h-8 w-8" data-lucide="x"></i>
</button>
<div className="flex h-full items-center justify-center px-4">
<div className="w-full max-w-3xl">
<input className="w-full bg-transparent border-b-2 border-neutral-200 py-4 text-3xl font-serif text-neutral-900 placeholder-neutral-300 focus:border-[#C5A059] focus:outline-none transition-colors text-center" placeholder="Rechercher un article, un produit..." type="text"/>
</div>
</div>
</div>

<section className="relative h-[90vh] w-full overflow-hidden">
<img alt="Muse Cover Girl" className="absolute inset-0 h-full w-full object-cover object-top filter brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3ffcfc1-a587-46f5-9598-6877287b1197_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-12 sm:pb-0">
<p className="text-[#C5A059] text-sm sm:text-base uppercase tracking-[0.2em] font-medium mb-4 animate-fade-in-up">Édition Spéciale</p>
<h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white font-medium tracking-tight mb-6 leading-none">
        L'Élégance <br/><span className="italic font-light">au Quotidien</span>
</h1>
<div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
<a className="inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-900 text-sm tracking-widest uppercase hover:bg-[#C5A059] hover:text-white transition duration-500 min-w-[180px]" href="#">
          Lire l'Édito
        </a>
<a className="inline-flex items-center justify-center px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-neutral-900 transition duration-500 min-w-[180px]" href="#">
          La Boutique
        </a>
</div>
</div>
</section>

<section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-4xl sm:text-5xl text-neutral-900 mb-4 tracking-tight">À la Une</h2>
<div className="h-1 w-24 bg-[#C5A059]"></div>
</div>
<a className="text-sm border-b border-neutral-900 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition uppercase tracking-widest" href="#">Voir tous les articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<a className="group md:col-span-7 block relative overflow-hidden" href="#">
<div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden">
<img alt="Fashion Week" className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3da1789-0f7a-4fbc-b7b6-606f9b85b083_1600w.jpg"/>
</div>
<div className="mt-6">
<p className="text-[#C5A059] text-xs uppercase tracking-widest mb-2 font-medium">Tendance</p>
<h3 className="font-serif text-3xl font-medium leading-tight group-hover:text-[#C5A059] transition-colors">Le retour du minimalisme : pourquoi moins c'est mieux</h3>
<p className="mt-3 text-neutral-500 font-light line-clamp-2">Une exploration des silhouettes épurées qui dominent les podiums cette saison. Analyse d'un phénomène intemporel.</p>
</div>
</a>

<div className="md:col-span-5 flex flex-col gap-12">
<a className="group block" href="#">
<div className="aspect-[3/2] overflow-hidden mb-4">
<img alt="Accessories" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b27b251-238a-455a-97d9-9d8a169f5d9e_1600w.jpg"/>
</div>
<div>
<p className="text-[#C5A059] text-xs uppercase tracking-widest mb-2 font-medium">Accessoires</p>
<h3 className="font-serif text-2xl font-medium group-hover:text-[#C5A059] transition-colors">Les indispensables de l'hiver</h3>
</div>
</a>
<a className="group block" href="#">
<div className="aspect-[3/2] overflow-hidden mb-4">
<img alt="Denim" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d953ad7f-2dd7-42f7-8f74-593d55181036_1600w.jpg"/>
</div>
<div>
<p className="text-[#C5A059] text-xs uppercase tracking-widest mb-2 font-medium">Guide Style</p>
<h3 className="font-serif text-2xl font-medium group-hover:text-[#C5A059] transition-colors">Le denim parfait pour chaque silhouette</h3>
</div>
</a>
</div>
</div>
</section>

<div className="border-y border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
<a className="group py-12 px-6 text-center hover:bg-neutral-50 transition" href="#">
<span className="block font-serif text-2xl md:text-3xl italic text-neutral-400 group-hover:text-[#C5A059] transition mb-2">01</span>
<span className="text-sm uppercase tracking-widest font-medium">Haute Couture</span>
</a>
<a className="group py-12 px-6 text-center hover:bg-neutral-50 transition" href="#">
<span className="block font-serif text-2xl md:text-3xl italic text-neutral-400 group-hover:text-[#C5A059] transition mb-2">02</span>
<span className="text-sm uppercase tracking-widest font-medium">Prêt-à-porter</span>
</a>
<a className="group py-12 px-6 text-center hover:bg-neutral-50 transition" href="#">
<span className="block font-serif text-2xl md:text-3xl italic text-neutral-400 group-hover:text-[#C5A059] transition mb-2">03</span>
<span className="text-sm uppercase tracking-widest font-medium">Joaillerie</span>
</a>
<a className="group py-12 px-6 text-center hover:bg-neutral-50 transition" href="#">
<span className="block font-serif text-2xl md:text-3xl italic text-neutral-400 group-hover:text-[#C5A059] transition mb-2">04</span>
<span className="text-sm uppercase tracking-widest font-medium">Maison</span>
</a>
</div>
</div>
</div>

<section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-[#C5A059] text-sm uppercase tracking-widest font-medium mb-3">La Boutique</p>
<h2 className="font-serif text-4xl sm:text-5xl text-neutral-900 tracking-tight">Sélection de la Saison</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 bg-neutral-100 aspect-[3/4]">
<img alt="Blazer" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3c2511d-906f-428c-8556-5ca787aecab6_800w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 translate-y-full group-hover:translate-y-0 transition duration-300 border-t border-neutral-100 flex justify-center">
<span className="text-xs uppercase tracking-widest">Ajouter au panier</span>
</div>
<div className="absolute top-4 left-4">
<span className="text-[10px] uppercase tracking-widest bg-white/90 px-2 py-1">Nouveauté</span>
</div>
</div>
<h3 className="font-serif text-xl text-neutral-900 group-hover:text-[#C5A059] transition">Blazer Structuré</h3>
<p className="text-neutral-500 text-sm mt-1">Laine Vierge • Beige</p>
<p className="font-medium mt-2">298 €</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 bg-neutral-100 aspect-[3/4]">
<img alt="T-shirt" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6583f216-e37c-4884-a1e8-609113d5d851_800w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 translate-y-full group-hover:translate-y-0 transition duration-300 border-t border-neutral-100 flex justify-center">
<span className="text-xs uppercase tracking-widest">Ajouter au panier</span>
</div>
</div>
<h3 className="font-serif text-xl text-neutral-900 group-hover:text-[#C5A059] transition">T-shirt Essentiel</h3>
<p className="text-neutral-500 text-sm mt-1">Coton Bio • Blanc</p>
<p className="font-medium mt-2">68 €</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 bg-neutral-100 aspect-[3/4]">
<img alt="Pantalon" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://cdn.midjourney.com/10f03a8b-e31f-4c33-9d4e-35fdae9a0e4a/0_0.png?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 translate-y-full group-hover:translate-y-0 transition duration-300 border-t border-neutral-100 flex justify-center">
<span className="text-xs uppercase tracking-widest">Ajouter au panier</span>
</div>
</div>
<h3 className="font-serif text-xl text-neutral-900 group-hover:text-[#C5A059] transition">Pantalon Large</h3>
<p className="text-neutral-500 text-sm mt-1">Soie Sauvage • Noir</p>
<p className="font-medium mt-2">168 €</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-6 bg-neutral-100 aspect-[3/4]">
<img alt="Pull" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_800w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-3 translate-y-full group-hover:translate-y-0 transition duration-300 border-t border-neutral-100 flex justify-center">
<span className="text-xs uppercase tracking-widest">Ajouter au panier</span>
</div>
</div>
<h3 className="font-serif text-xl text-neutral-900 group-hover:text-[#C5A059] transition">Pull Cachemire</h3>
<p className="text-neutral-500 text-sm mt-1">100% Cachemire • Taupe</p>
<p className="font-medium mt-2">228 €</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-3 px-8 py-3 bg-neutral-900 text-white rounded-none hover:bg-[#C5A059] transition duration-300" href="#">
<span className="uppercase tracking-widest text-xs font-medium">Découvrir toute la collection</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
<div className="absolute inset-0 opacity-40">
<img alt="Atelier" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1b56f8e-aa02-4cd2-8f19-6bfb1ccad521_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-[#C5A059] text-sm uppercase tracking-widest font-medium mb-4">Savoir-Faire</p>
<h2 className="font-serif text-5xl sm:text-6xl mb-6 leading-tight">L'Art du Détail</h2>
<p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
          Chaque pièce de nos collections raconte une histoire. Celle d'artisans passionnés, de matières nobles sélectionnées avec rigueur, et d'une quête incessante de la coupe parfaite. Chez MUSE, le vêtement n'est pas qu'un objet, c'est une émotion.
        </p>
<a className="text-white border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition uppercase tracking-widest text-sm" href="#">Notre Atelier</a>
</div>
</div>
</section>

<section className="py-20 px-4 bg-[#F5F3EF]">
<div className="max-w-xl mx-auto text-center">
<span className="inline-block p-3 rounded-full bg-white mb-6 shadow-sm">
<i className="h-5 w-5 text-[#C5A059]" data-lucide="mail"></i>
</span>
<h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-4">La Lettre MUSE</h2>
<p className="text-neutral-600 mb-8 font-light">Recevez nos dernières éditoriaux, accès aux ventes privées et inspirations quotidiennes.</p>
<form className="flex flex-col sm:flex-row gap-2">
<input className="flex-1 bg-white px-4 py-3 border border-neutral-200 focus:outline-none focus:border-[#C5A059] placeholder-neutral-400" placeholder="Votre adresse email" type="email"/>
<button className="bg-neutral-900 text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-[#C5A059] transition" type="button">S'inscrire</button>
</form>
</div>
</section>

<footer className="bg-neutral-900 text-white border-t border-neutral-800 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="font-serif text-3xl tracking-tight block mb-6">MUSE</span>
<p className="text-neutral-400 text-sm leading-relaxed">
            L'élégance au quotidien.<br/>
            Paris, France.
          </p>
<div className="flex gap-4 mt-6">
<a className="text-neutral-400 hover:text-[#C5A059]" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-[#C5A059]" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
<a className="text-neutral-400 hover:text-[#C5A059]" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="text-[#C5A059] text-xs uppercase tracking-widest font-medium mb-6">Magazine</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#">Derniers Articles</a></li>
<li><a className="hover:text-white transition" href="#">Tendances</a></li>
<li><a className="hover:text-white transition" href="#">Interviews</a></li>
<li><a className="hover:text-white transition" href="#">Podcasts</a></li>
</ul>
</div>
<div>
<h4 className="text-[#C5A059] text-xs uppercase tracking-widest font-medium mb-6">Service Client</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#">Nous Contacter</a></li>
<li><a className="hover:text-white transition" href="#">Livraisons &amp; Retours</a></li>
<li><a className="hover:text-white transition" href="#">FAQ</a></li>
<li><a className="hover:text-white transition" href="#">Guide des Tailles</a></li>
</ul>
</div>
<div>
<h4 className="text-[#C5A059] text-xs uppercase tracking-widest font-medium mb-6">Légal</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition" href="#">Politique de Confidentialité</a></li>
<li><a className="hover:text-white transition" href="#">CGV</a></li>
<li><a className="hover:text-white transition" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500">
<p>© <span id="year">2025</span> MUSE Studio. Tous droits réservés.</p>
<p className="mt-2 sm:mt-0 font-serif italic">Fait avec élégance.</p>
</div>
</div>
</footer>


    </>
  );
}
