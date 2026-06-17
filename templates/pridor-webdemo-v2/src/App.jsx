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
      
tailwind.config = {
theme: {
extend: {
colors: {
pridor: {
base: '#FBF9F6',    // Blanc cassé doux
dark: '#2A2A2A',    // Gris très foncé au lieu de noir pur
green: '#2A9D4E',   // Vert émeraude inspiré de la devanture
gold: '#C9A254',    // Or riche
'gold-light': '#E8CF8F',
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialisation des icônes Lucide
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
      

<div className="bg-pridor-green text-white py-2 px-4 text-sm font-medium text-center flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Venez nous rendre visite à Aulnay-sous-Bois - Ouvert 7j/7</span>
</div>

<header className="sticky top-0 z-50 bg-pridor-base/90 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-4 lg:hidden">
<button className="p-2 -ml-2 text-pridor-dark hover:text-pridor-gold transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-pridor-dark hover:text-pridor-gold transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>

<nav className="hidden lg:flex gap-8 items-center flex-1">
<a className="text-base font-medium hover:text-pridor-gold transition-colors" href="#">Nouveautés</a>
<a className="text-base font-medium hover:text-pridor-gold transition-colors" href="#">Univers</a>
<a className="text-base font-medium text-red-600 hover:text-red-700 transition-colors" href="#">Promos</a>
</nav>

<div className="flex-shrink-0 flex items-center justify-center flex-1 lg:flex-none">
<a className="flex flex-col items-center" href="#">

<div className="text-3xl font-serif font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pridor-gold to-pridor-gold-light">
                            PRIDOR
                        </div>
</a>
</div>

<div className="flex items-center justify-end gap-2 sm:gap-4 flex-1">
<button className="hidden lg:flex p-2 text-pridor-dark hover:text-pridor-gold transition-colors items-center gap-2">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-base font-medium">Rechercher</span>
</button>
<button className="p-2 text-pridor-dark hover:text-pridor-gold transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-pridor-dark hover:text-pridor-gold transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 border-b border-gray-200/50">
<div className="flex overflow-x-auto gap-4 sm:gap-8 pb-4 hide-scrollbar justify-start lg:justify-center items-center">

<a className="group flex flex-col items-center gap-3 min-w-[72px]" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-pridor-gold to-pridor-gold-light group-hover:scale-105 transition-transform duration-300">
<div className="w-full h-full rounded-full border-2 border-pridor-base bg-white overflow-hidden flex items-center justify-center p-3">
<img alt="Parfums" className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<span className="text-sm font-medium text-center">Parfums</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[72px]" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-pridor-gold group-hover:to-pridor-gold-light transition-all duration-300">
<div className="w-full h-full rounded-full border-2 border-pridor-base bg-white overflow-hidden flex items-center justify-center p-3">
<img alt="Mode" className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<span className="text-sm font-medium text-center">Mode</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[72px]" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-pridor-gold group-hover:to-pridor-gold-light transition-all duration-300">
<div className="w-full h-full rounded-full border-2 border-pridor-base bg-white overflow-hidden flex items-center justify-center p-3">
<img alt="Maison" className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<span className="text-sm font-medium text-center">Maison</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[72px]" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-pridor-gold group-hover:to-pridor-gold-light transition-all duration-300">
<div className="w-full h-full rounded-full border-2 border-pridor-base bg-white overflow-hidden flex items-center justify-center p-3">
<img alt="Épicerie" className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<span className="text-sm font-medium text-center">Épicerie</span>
</a>

<a className="group flex flex-col items-center gap-3 min-w-[72px]" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-pridor-gold group-hover:to-pridor-gold-light transition-all duration-300">
<div className="w-full h-full rounded-full border-2 border-pridor-base bg-white overflow-hidden flex items-center justify-center p-3">
<img alt="Librairie" className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
<span className="text-sm font-medium text-center">Librairie</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pridor-gold/10 text-pridor-gold text-sm font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pridor-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pridor-gold"></span>
</span>
                        Nouveaux arrivages en magasin
                    </div>
<h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-pridor-dark tracking-tight leading-[1.1] mb-6">
                        Le meilleur de l'Orient,<br/>pour toute la famille.
                    </h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Découvrez notre sélection soigneusement choisie de parfums, mode, décoration et épicerie fine. L'élégance à prix accessibles, dans un grand magasin chaleureux près de chez vous.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-pridor-dark text-white text-base font-semibold hover:bg-black transition-colors" href="#">
                            Voir les promos de la semaine
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-pridor-dark border border-gray-200 text-base font-medium hover:bg-gray-50 transition-colors" href="#store">
                            Infos magasin
                        </a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 lg:gap-6 h-[500px] lg:h-[600px]">
<div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden bg-gray-100 relative group">
<img alt="Parfum de luxe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Parfumerie Fine</span>
</div>
</div>
<div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden bg-gray-100 relative group">
<img alt="Dates et épicerie" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<span className="text-white font-medium text-lg">Épicerie &amp; Dattes</span>
</div>
</div>
<div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden bg-pridor-green relative flex items-center justify-center p-8 text-center group">
<div className="relative z-10 text-white">
<i className="w-10 h-10 mx-auto mb-3 opacity-90" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="font-serif text-2xl tracking-tight mb-2">Accueil Famille</h3>
<p className="text-white/80 text-sm">Des espaces pensés pour tous</p>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-pridor-green text-white py-8 mt-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center divide-x divide-white/20">
<div className="flex flex-col items-center gap-3 px-4">
<i className="w-8 h-8 opacity-90" data-lucide="car-front" strokeWidth="1.5"></i>
<span className="text-base font-medium leading-tight">Parking Privé<br/>Gratuit</span>
</div>
<div className="flex flex-col items-center gap-3 px-4">
<i className="w-8 h-8 opacity-90" data-lucide="baby" strokeWidth="1.5"></i>
<span className="text-base font-medium leading-tight">Accueil Famille<br/>&amp; Poussettes</span>
</div>
<div className="flex flex-col items-center gap-3 px-4">
<i className="w-8 h-8 opacity-90" data-lucide="map-pinned" strokeWidth="1.5"></i>
<span className="text-base font-medium leading-tight">Situé à<br/>Aulnay-sous-Bois</span>
</div>
<div className="flex flex-col items-center gap-3 px-4">
<i className="w-8 h-8 opacity-90" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-base font-medium leading-tight">Click &amp; Collect<br/>Disponible</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-pridor-dark mb-3">Arrivages &amp; Promos</h2>
<p className="text-lg text-gray-600">Faites-vous plaisir sans compromis sur la qualité.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-pridor-dark font-medium hover:text-pridor-gold transition-colors" href="#">
                    Voir tout <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

<div className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square rounded-2xl bg-[#F8F8F8] mb-4 overflow-hidden flex items-center justify-center p-4">
<span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">-30% Promo</span>
<img alt="Produit" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Parfums</span>
<h3 className="text-base font-medium text-pridor-dark leading-snug mb-2 line-clamp-2">Oud &amp; Santal Royal - Extrait de parfum 100ml</h3>
<div className="mt-auto flex items-end justify-between">
<div className="flex flex-col">
<span className="text-sm text-gray-400 line-through">129,00 €</span>
<span className="text-xl font-semibold text-pridor-gold">89,90 €</span>
</div>
<button className="w-10 h-10 rounded-full bg-pridor-base flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square rounded-2xl bg-[#F8F8F8] mb-4 overflow-hidden flex items-center justify-center p-4">
<span className="absolute top-3 left-3 bg-pridor-green text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">Nouveauté</span>
<img alt="Produit" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Maison</span>
<h3 className="text-base font-medium text-pridor-dark leading-snug mb-2 line-clamp-2">Service à thé artisanal en céramique - 6 pièces</h3>
<div className="mt-auto flex items-end justify-between">
<div className="flex flex-col">
<span className="text-xl font-semibold text-pridor-gold">45,00 €</span>
</div>
<button className="w-10 h-10 rounded-full bg-pridor-base flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square rounded-2xl bg-[#F8F8F8] mb-4 overflow-hidden flex items-center justify-center p-4">
<span className="absolute top-3 left-3 bg-pridor-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">Top Vente</span>
<img alt="Produit" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Épicerie</span>
<h3 className="text-base font-medium text-pridor-dark leading-snug mb-2 line-clamp-2">Coffret Dattes Medjool Premium Fourrées - 500g</h3>
<div className="mt-auto flex items-end justify-between">
<div className="flex flex-col">
<span className="text-xl font-semibold text-pridor-gold">24,50 €</span>
</div>
<button className="w-10 h-10 rounded-full bg-pridor-base flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="relative aspect-square rounded-2xl bg-[#F8F8F8] mb-4 overflow-hidden flex items-center justify-center p-4">
<img alt="Produit" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Mode</span>
<h3 className="text-base font-medium text-pridor-dark leading-snug mb-2 line-clamp-2">Abaya Minimaliste en Lin Mélangé - Collection Été</h3>
<div className="mt-auto flex items-end justify-between">
<div className="flex flex-col">
<span className="text-xl font-semibold text-pridor-gold">59,90 €</span>
</div>
<button className="w-10 h-10 rounded-full bg-pridor-base flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-gray-300 text-pridor-dark text-base font-medium hover:bg-white transition-colors" href="#">
                    Voir toutes les offres
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="store">
<div className="bg-white rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-sm border border-gray-100">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square">

<img alt="Devanture Magasin Pridor" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-pridor-dark text-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-pridor-green"></span> Ouvert aujourd'hui
                            </div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-pridor-dark mb-6">
                            Votre concept store à<br/>Aulnay-sous-Bois
                        </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Plus qu'un simple magasin, Pridor est un véritable lieu de vie. Nous avons pensé chaque espace pour que votre visite soit un moment de plaisir. Venez flâner en famille, découvrir nos nouveautés et profiter de nos conseils personnalisés dans une atmosphère chaleureuse.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-pridor-green/10 flex items-center justify-center flex-shrink-0 text-pridor-green">
<i className="w-6 h-6" data-lucide="car" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-pridor-dark">Garez-vous sans stress</h4>
<p className="text-base text-gray-600">Un grand parking gratuit est à la disposition de notre clientèle juste devant le magasin.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-pridor-gold/10 flex items-center justify-center flex-shrink-0 text-pridor-gold">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-pridor-dark">Ouvert 7 jours sur 7</h4>
<p className="text-base text-gray-600">Nous vous accueillons tous les jours de 10h à 20h, même le dimanche.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-pridor-dark text-white text-base font-semibold hover:bg-black transition-colors" href="#">
                                Voir l'itinéraire
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-gray-200/50">
<div className="text-center mb-10">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-pridor-dark mb-4">L'ambiance en boutique</h2>
<p className="text-lg text-gray-600 flex items-center justify-center gap-2">
                    Suivez-nous sur <i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i> <strong>@pridor_off</strong>
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-200" href="#">
<img alt="Vidéo Instagram" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
<i className="w-5 h-5 ml-1" data-lucide="play" strokeWidth="2"></i>
</div>
</div>
</a>
<a className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-200 mt-0 md:mt-8" href="#">
<img alt="Vidéo Instagram" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
<i className="w-5 h-5 ml-1" data-lucide="play" strokeWidth="2"></i>
</div>
</div>
</a>
<a className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-200" href="#">
<img alt="Vidéo Instagram" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
<i className="w-5 h-5 ml-1" data-lucide="play" strokeWidth="2"></i>
</div>
</div>
</a>
<a className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-gray-200 mt-0 md:mt-8 hidden md:block" href="#">
<img alt="Vidéo Instagram" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
<i className="w-5 h-5 ml-1" data-lucide="play" strokeWidth="2"></i>
</div>
</div>
</a>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="lg:col-span-1">
<div className="text-2xl font-serif font-semibold tracking-tighter text-pridor-gold mb-6">
                        PRIDOR
                    </div>
<p className="text-base text-gray-600 mb-6">Le meilleur de l'Orient, réuni dans un concept store pensé pour toute la famille.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pridor-dark hover:bg-pridor-gold hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-lg text-pridor-dark mb-6">Nos Univers</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Parfumerie Fine</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Mode &amp; Prêt-à-porter</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Décoration Maison</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Épicerie &amp; Dattes</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Librairie</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-lg text-pridor-dark mb-6">Informations</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Le magasin (Accès &amp; Horaires)</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Click &amp; Collect</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Contactez-nous</a></li>
<li><a className="text-base text-gray-600 hover:text-pridor-gold transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-lg text-pridor-dark mb-6">Rejoignez-nous</h4>
<p className="text-base text-gray-600 mb-4">Inscrivez-vous pour recevoir nos offres exclusives et être informé des nouveaux arrivages.</p>
<form className="flex gap-2">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-pridor-gold/50 focus:border-pridor-gold" placeholder="Votre email" type="email"/>
<button className="bg-pridor-dark text-white rounded-full px-6 py-2.5 font-medium hover:bg-black transition-colors" type="submit">
                            OK
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Pridor. Tous droits réservés.</p>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span>Paiement sécurisé</span>
<div className="flex gap-2">

<div className="w-10 h-6 bg-gray-200 rounded"></div>
<div className="w-10 h-6 bg-gray-200 rounded"></div>
<div className="w-10 h-6 bg-gray-200 rounded"></div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
