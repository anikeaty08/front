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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden text-stone-800">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>

<a className="text-xl tracking-tighter uppercase font-medium text-stone-900 z-50 relative" href="#">
                Flower House
            </a>

<nav className="hidden lg:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Nouveautés</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Bouquets Secs</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Vases &amp; Objets</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">L'Atelier</a>
</nav>

<div className="flex items-center gap-5">
<button className="text-stone-800 hover:text-stone-600 transition-colors hidden sm:block">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="text-stone-800 hover:text-stone-600 transition-colors relative">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-800"></span>
</span>
</button>
</div>
</div>
</header>

<main className="pt-20">
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Fleurs séchées artistiques" className="w-full h-full object-cover object-center opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent opacity-90"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 mt-20">
<span className="block text-xs uppercase tracking-[0.2em] text-stone-600 mb-4 animate-[fadeIn_1s_ease-out]">Collection Intemporelle</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl serif font-light text-stone-900 leading-[0.9] tracking-tight mb-8">
                    L'art de la<br/><span className="italic text-stone-600">nature figée</span>
</h1>
<p className="text-base md:text-lg text-stone-700 max-w-lg mx-auto mb-10 font-light leading-relaxed">
                    Des créations florales durables, sculptées par le temps. Une esthétique brute et poétique pour sublimer votre intérieur sans jamais s'effacer.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative px-8 py-3 bg-stone-900 text-stone-50 text-sm font-medium overflow-hidden rounded-sm transition-all hover:bg-stone-800 hover:shadow-lg" href="#collection">
<span className="relative z-10 flex items-center gap-2">
                            Explorer la collection
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</a>
</div>
</div>
</section>

<div className="border-y border-stone-200 py-4 bg-white overflow-hidden">
<div className="flex whitespace-nowrap gap-12 animate-[marquee_20s_linear_infinite] items-center opacity-60 hover:opacity-100 transition-opacity">

<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:star" data-width="12"></span> Fait main à Paris</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:flower" data-width="12"></span> Fleurs 100% Naturelles</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:box" data-width="12"></span> Emballage Zéro Plastique</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> Durée de vie +2 ans</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:star" data-width="12"></span> Fait main à Paris</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:flower" data-width="12"></span> Fleurs 100% Naturelles</div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500"><span className="iconify" data-icon="lucide:box" data-width="12"></span> Emballage Zéro Plastique</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24" id="collection">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl serif text-stone-900 tracking-tight mb-2">Sélection Saisonnière</h2>
<p className="text-stone-500 text-sm font-light">Automne / Hiver 2024</p>
</div>
<div className="flex gap-6 border-b border-stone-200 pb-2">
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors group-hover:border-stone-500 bg-white">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10" style={{strokeWidth: '3'}}></span>
</div>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">En stock</span>
</label>
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center transition-colors group-hover:border-stone-500 bg-white">
<span className="iconify hidden text-white" data-icon="lucide:check" data-width="10" style={{strokeWidth: '3'}}></span>
</div>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Nouveautés</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Bouquet Pampa" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">Bestseller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">La Pampa Sauvage</h3>
<p className="text-xs text-stone-500">Herbes de pampa, Lagurus</p>
</div>
<span className="text-sm font-medium text-stone-900">45€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Eucalyptus" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">Eucalyptus Cinerea</h3>
<p className="text-xs text-stone-500">Feuillage stabilisé</p>
</div>
<span className="text-sm font-medium text-stone-900">28€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Bouquet Coton" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">Douceur Coton</h3>
<p className="text-xs text-stone-500">Fleurs de coton, Blé</p>
</div>
<span className="text-sm font-medium text-stone-900">32€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Vase Céramique" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">Vase Kanso</h3>
<p className="text-xs text-stone-500">Céramique artisanale</p>
</div>
<span className="text-sm font-medium text-stone-900">55€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Bouquet Rose" className="w-full h-full object-cover image-hover-zoom" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">L'Aurore</h3>
<p className="text-xs text-stone-500">Hortensias, Immortelles</p>
</div>
<span className="text-sm font-medium text-stone-900">49€</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 rounded-sm">
<img alt="Couronne" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="absolute top-4 left-4 bg-stone-100/90 backdrop-blur text-stone-800 text-[10px] uppercase font-bold px-2 py-1 tracking-wider">Pièce Unique</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg serif font-medium text-stone-900 leading-none mb-1 group-hover:underline decoration-stone-300 underline-offset-4">Couronne d'Hiver</h3>
<p className="text-xs text-stone-500">Lianes, Pin, Baies</p>
</div>
<span className="text-sm font-medium text-stone-900">65€</span>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-1">
                    Voir toute la collection
                </button>
</div>
</section>

<section className="bg-stone-900 text-stone-100 py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute -top-10 -left-10 w-32 h-32 rounded-full border border-stone-700/50"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl serif leading-tight mb-6">
                                La beauté ne devrait jamais faner.
                            </h2>
<p className="text-stone-400 text-base leading-relaxed mb-8 font-light">
                                Chez Flower House, nous repensons le bouquet traditionnel. Finis les jets de fleurs après 5 jours. Nos compositions sont réalisées à partir de fleurs séchées naturellement et stabilisées, garantissant une tenue parfaite pendant des années.
                            </p>
<div className="grid grid-cols-2 gap-8 mb-8 border-t border-stone-800 pt-8">
<div>
<h4 className="text-xl serif text-white mb-2">Durable</h4>
<p className="text-xs text-stone-400 leading-5">Une empreinte carbone réduite grâce à une longévité exceptionnelle.</p>
</div>
<div>
<h4 className="text-xl serif text-white mb-2">Artisanal</h4>
<p className="text-xs text-stone-400 leading-5">Chaque tige est sélectionnée et arrangée à la main dans notre atelier.</p>
</div>
</div>
<a className="text-sm text-white font-medium hover:text-stone-300 flex items-center gap-2" href="#">
                                Lire notre manifeste <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
<div className="order-1 lg:order-2 relative h-[500px] w-full bg-stone-800 rounded-sm overflow-hidden">
<img alt="Atelier Flower House" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-stone-200">
<div className="max-w-xl mx-auto px-6 text-center">
<span className="iconify mx-auto mb-6 text-stone-400" data-height="24" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-2xl serif text-stone-900 mb-2">Journal Floral</h3>
<p className="text-sm text-stone-500 mb-8">Inspirations déco et accès aux ventes privées.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 appearance-none bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all" placeholder="votre@email.com" type="email"/>
<button className="px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-sm hover:bg-stone-800 transition-colors" type="button">
                        S'inscrire
                    </button>
</form>
<p className="text-[10px] text-stone-400 mt-4">Nous respectons votre jardin secret. Pas de spam.</p>
</div>
</section>
</main>

<footer className="bg-[#FDFCF8] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg tracking-tighter uppercase font-medium text-stone-900 block mb-6" href="#">
                    Flower House
                </a>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed mb-6">
                    Maison de composition florale permanente. Pour un design d'intérieur qui dure.
                </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:pinterest" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Bouquets</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Couronnes</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Vases</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Cartes Cadeaux</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">Maison</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">À propos</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">L'Atelier</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Durabilité</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">Aide</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Livraison &amp; Retours</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Entretien</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Flower House. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Confidentialité</a>
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">CGV</a>
</div>
</div>
</footer>

    </>
  );
}
