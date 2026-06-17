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
emerald: '#042b1e', // Vert Émeraude Profond
'emerald-light': '#0a3f2d',
gold: '#c5a059',    // Doré Champagne
'gold-light': '#d4b476',
beige: '#fcfbf9',   // Off-White/Beige Clair
surface: '#ffffff'
}
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<header className="fixed top-0 inset-x-0 z-50 bg-pridor-emerald border-b border-pridor-gold/10 backdrop-blur-xl bg-opacity-95 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

<button className="md:hidden text-pridor-beige hover:text-pridor-gold transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<nav className="hidden md:flex gap-8 items-center text-sm font-medium text-pridor-beige/80 tracking-wide">
<a className="hover:text-pridor-gold transition-colors" href="#univers">Nos Univers</a>
<a className="hover:text-pridor-gold transition-colors" href="#boutique">Boutique</a>
<a className="hover:text-pridor-gold transition-colors" href="#esprit">L'Esprit Pridor</a>
</nav>

<a className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group" href="#">
<span className="font-serif text-pridor-gold text-3xl leading-none tracking-tighter group-hover:scale-105 transition-transform duration-500">P</span>
<span className="font-serif text-pridor-gold text-xs tracking-[0.25em] mt-1 uppercase">Pridor</span>
</a>

<div className="flex gap-4 items-center text-pridor-beige hover:text-pridor-gold transition-colors">
<button className="hover:text-pridor-gold transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hover:text-pridor-gold transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
<button className="hover:text-pridor-gold transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-3-linear"></iconify-icon>
<span className="absolute -top-1 -right-1.5 w-4 h-4 bg-pridor-gold text-pridor-emerald rounded-full flex items-center justify-center text-xs font-medium">2</span>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative bg-pridor-emerald pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[85vh]">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pridor-gold/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#021f15] rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
<span className="text-pridor-gold text-xs tracking-[0.3em] uppercase font-medium mb-6 block">Concept Store Premium</span>
<h1 className="font-serif text-pridor-beige text-4xl sm:text-5xl md:text-7xl tracking-tight font-medium leading-[1.1] mb-8">
                    L'Élégance de l'Orient, <br/>
<span className="text-pridor-gold italic font-normal">à Votre Portée.</span>
</h1>
<p className="font-sans text-pridor-beige/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Découvrez une sélection minutieuse de Parfums, Prêt-à-porter, Décoration &amp; Épicerie Fine. Un lieu unique à Aulnay et accessible partout en ligne.
                </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium tracking-wide text-pridor-emerald bg-pridor-gold rounded-full overflow-hidden transition-all hover:bg-pridor-gold-light hover:scale-105 duration-300" href="#univers">
                    Découvrir la Boutique
                </a>
</div>
</section>

<section className="py-24 md:py-32 px-4 max-w-7xl mx-auto" id="univers">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-serif text-pridor-emerald text-3xl md:text-5xl tracking-tight font-medium mb-4">Nos Univers</h2>
<div className="w-12 h-[1px] bg-pridor-gold mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">

<a className="md:col-span-2 lg:col-span-2 bg-pridor-surface rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group flex flex-col justify-end isolate" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-pridor-beige/80 to-transparent z-0"></div>

<div className="absolute -right-12 -top-12 w-64 h-64 bg-pridor-gold/5 rounded-full blur-3xl group-hover:bg-pridor-gold/10 transition-colors duration-500"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-pridor-gold mb-6 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:bottle-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-medium">Senteurs d'ailleurs</h3>
<p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">Parfums de niche, huiles précieuses et Bakhoor traditionnels pour embaumer votre quotidien.</p>
</div>
</a>

<a className="md:col-span-1 lg:col-span-2 bg-pridor-emerald rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group flex flex-col justify-end isolate text-pridor-beige" href="#">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pridor-emerald-light to-pridor-emerald z-0"></div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-pridor-gold mb-6 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:hanger-2-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl text-pridor-beige tracking-tight mb-3 font-medium">Le Style Pridor</h3>
<p className="text-sm text-pridor-beige/70 max-w-sm font-light leading-relaxed">Une mode modeste, élégante et contemporaine. Abayas, Qamis et prêt-à-porter exclusif.</p>
</div>
</a>

<a className="md:col-span-2 lg:col-span-2 bg-pridor-surface rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group flex flex-col justify-end isolate" href="#">
<div className="relative z-10">
<iconify-icon className="text-4xl text-pridor-gold mb-6 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:sofa-2-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-medium">L'Art de Vivre</h3>
<p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">Décoration d'intérieur, tapis d'Orient revisités et vaisselle pour des tables mémorables.</p>
</div>
</a>

<a className="md:col-span-1 lg:col-span-2 bg-pridor-surface rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group flex flex-col justify-end isolate" href="#">
<div className="relative z-10">
<iconify-icon className="text-4xl text-pridor-gold mb-6 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:cup-star-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-medium">Saveurs Gourmandes</h3>
<p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">Épicerie fine, dattes premium, miels rares et thés pour éveiller vos sens.</p>
</div>
</a>
</div>
</section>

<section className="py-24 bg-pridor-surface border-y border-black/5" id="esprit">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 aspect-square md:aspect-[4/3] lg:aspect-square bg-pridor-emerald rounded-[2.5rem] relative overflow-hidden flex items-center justify-center p-8 group">
<div className="absolute inset-0 bg-[linear-gradient(110deg,#042b1e,45%,#0a3f2d,55%,#042b1e)] bg-[length:200%_100%] animate-[shimmer_8s_infinite] opacity-50"></div>
<div className="absolute inset-0 border border-pridor-gold/20 rounded-[2.5rem] m-4"></div>
<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto mb-8 border border-pridor-gold rounded-full flex items-center justify-center bg-pridor-emerald-light/50 backdrop-blur-sm">
<span className="font-serif text-pridor-gold text-5xl tracking-tighter">P</span>
</div>
<h3 className="font-serif text-pridor-beige text-2xl tracking-tight mb-2">Aulnay-sous-Bois</h3>
<p className="text-pridor-gold text-sm tracking-widest uppercase font-medium">Ouvert 7j/7</p>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-pridor-gold text-xs tracking-[0.2em] uppercase font-medium mb-4 block">Notre Philosophie</span>
<h2 className="font-serif text-pridor-emerald text-3xl md:text-5xl tracking-tight mb-8 leading-[1.1] font-medium">Plus qu'une boutique, <br/>une expérience.</h2>
<div className="space-y-6 text-base text-gray-600 font-light leading-relaxed">
<p>
                            Pensé comme un véritable lieu de vie, Pridor fusionne l'héritage de l'art de vivre oriental avec une esthétique minimaliste contemporaine.
                        </p>
<p>
                            Notre espace à Aulnay a été conçu pour vous offrir un accueil chaleureux et familial. Parcourez nos allées épurées en toute sérénité, profitez de notre parking privé gratuit et laissez-vous guider par nos experts passionnés.
                        </p>
<p>
                            L'excellence ne devrait pas être un luxe inaccessible. C'est l'engagement Pridor.
                        </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex items-center gap-3 text-sm text-pridor-emerald font-medium">
<div className="w-10 h-10 rounded-full bg-pridor-beige flex items-center justify-center border border-black/5">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:routing-2-linear"></iconify-icon>
</div>
                            Parking Gratuit
                        </div>
<div className="flex items-center gap-3 text-sm text-pridor-emerald font-medium">
<div className="w-10 h-10 rounded-full bg-pridor-beige flex items-center justify-center border border-black/5">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:cup-hot-linear"></iconify-icon>
</div>
                            Espace Détente
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 max-w-7xl mx-auto" id="boutique">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-serif text-pridor-emerald text-3xl md:text-4xl tracking-tight font-medium mb-2">Sélection Pridor</h2>
<p className="text-sm text-gray-500 font-light">Les pièces maîtresses du moment.</p>
</div>
<a className="text-sm font-medium text-pridor-emerald hover:text-pridor-gold transition-colors flex items-center gap-2 pb-1 border-b border-pridor-emerald hover:border-pridor-gold w-fit" href="#">
                    Découvrir toute la collection
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<a className="group cursor-pointer flex flex-col" href="#">
<div className="aspect-[4/5] bg-pridor-surface rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-black/5">

<div className="w-3/5 h-3/5 bg-pridor-beige rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-gray-300 text-6xl" icon="solar:bottle-linear"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pridor-surface/40 backdrop-blur-[2px] z-10">
<span className="font-serif text-pridor-gold/80 text-8xl tracking-tighter">P</span>
</div>

<div className="absolute top-4 left-4 z-20 bg-pridor-emerald text-pridor-beige text-xs px-3 py-1 rounded-full tracking-wider font-medium">Nouveau</div>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="font-serif font-medium text-pridor-emerald text-lg tracking-tight group-hover:text-pridor-gold transition-colors">Extrait de Parfum "Oud Royal"</h3>
<p className="text-xs text-gray-500 mt-1 font-light">Senteurs d'ailleurs</p>
</div>
<p className="text-sm font-medium text-pridor-emerald whitespace-nowrap">145 €</p>
</div>
</a>

<a className="group cursor-pointer flex flex-col" href="#">
<div className="aspect-[4/5] bg-pridor-surface rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-black/5">
<div className="w-3/5 h-3/5 bg-pridor-beige rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-gray-300 text-6xl" icon="solar:hanger-2-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pridor-surface/40 backdrop-blur-[2px] z-10">
<span className="font-serif text-pridor-gold/80 text-8xl tracking-tighter">P</span>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="font-serif font-medium text-pridor-emerald text-lg tracking-tight group-hover:text-pridor-gold transition-colors">Abaya Soie Émeraude</h3>
<p className="text-xs text-gray-500 mt-1 font-light">Le Style Pridor</p>
</div>
<p className="text-sm font-medium text-pridor-emerald whitespace-nowrap">89 €</p>
</div>
</a>

<a className="group cursor-pointer flex flex-col" href="#">
<div className="aspect-[4/5] bg-pridor-surface rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-black/5">
<div className="w-3/5 h-3/5 bg-pridor-beige rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-gray-300 text-6xl" icon="solar:tea-cup-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pridor-surface/40 backdrop-blur-[2px] z-10">
<span className="font-serif text-pridor-gold/80 text-8xl tracking-tighter">P</span>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="font-serif font-medium text-pridor-emerald text-lg tracking-tight group-hover:text-pridor-gold transition-colors">Service à Thé "Andalousie"</h3>
<p className="text-xs text-gray-500 mt-1 font-light">L'Art de Vivre</p>
</div>
<p className="text-sm font-medium text-pridor-emerald whitespace-nowrap">120 €</p>
</div>
</a>

<a className="group cursor-pointer flex flex-col" href="#">
<div className="aspect-[4/5] bg-pridor-surface rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-black/5">
<div className="w-3/5 h-3/5 bg-pridor-beige rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-gray-300 text-6xl" icon="solar:jar-of-pills-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pridor-surface/40 backdrop-blur-[2px] z-10">
<span className="font-serif text-pridor-gold/80 text-8xl tracking-tighter">P</span>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="font-serif font-medium text-pridor-emerald text-lg tracking-tight group-hover:text-pridor-gold transition-colors">Miel de Jujubier (Sidr)</h3>
<p className="text-xs text-gray-500 mt-1 font-light">Saveurs Gourmandes</p>
</div>
<p className="text-sm font-medium text-pridor-emerald whitespace-nowrap">45 €</p>
</div>
</a>
</div>
</section>
</main>

<footer className="bg-pridor-emerald pt-20 pb-10 border-t border-pridor-gold/20">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex flex-col items-start group mb-6 w-fit" href="#">
<span className="font-serif text-pridor-gold text-4xl leading-none tracking-tighter">P</span>
<span className="font-serif text-pridor-gold text-sm tracking-[0.25em] mt-1 uppercase">Pridor</span>
</a>
<p className="text-sm text-pridor-beige/60 font-light leading-relaxed mb-6">
                    L'excellence modernisée. Votre concept store premium pour l'art de vivre, la mode modeste et la parfumerie de niche.
                </p>
<div className="flex gap-4">
<a className="text-pridor-beige hover:text-pridor-gold transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-pridor-beige hover:text-pridor-gold transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-serif text-pridor-beige text-lg tracking-tight mb-6">Boutique</h4>
<ul className="space-y-4 text-sm text-pridor-beige/70 font-light">
<li><a className="hover:text-pridor-gold transition-colors" href="#">Senteurs d'ailleurs</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Prêt-à-porter</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Décoration &amp; Maison</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Épicerie Fine</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Cartes Cadeaux</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-pridor-beige text-lg tracking-tight mb-6">Service Client</h4>
<ul className="space-y-4 text-sm text-pridor-beige/70 font-light">
<li><a className="hover:text-pridor-gold transition-colors" href="#">Contactez-nous</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Livraisons &amp; Retours</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-pridor-gold transition-colors" href="#">CGV</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-pridor-beige text-lg tracking-tight mb-6">Notre Concept Store</h4>
<div className="bg-pridor-emerald-light/30 border border-pridor-gold/10 p-5 rounded-2xl relative overflow-hidden">
<div className="relative z-10 flex flex-col gap-3">
<div className="flex items-start gap-3 text-sm text-pridor-beige/90">
<iconify-icon className="text-pridor-gold text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<p className="font-light">123 Avenue de l'Excellence<br/>93600 Aulnay-sous-Bois</p>
</div>
<div className="flex items-center gap-3 text-sm text-pridor-beige/90">
<iconify-icon className="text-pridor-gold text-lg shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<p className="font-light">Lun - Dim : 10h00 - 20h00</p>
</div>
<a className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-pridor-beige text-pridor-emerald text-xs font-medium rounded-full hover:bg-pridor-gold transition-colors w-full" href="#">
                            Itinéraire
                        </a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 pt-8 border-t border-pridor-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-pridor-beige/40 font-light">
                © 2023 Pridor Concept Store. Tous droits réservés.
            </p>
<div className="flex gap-4 items-center">
<iconify-icon className="text-pridor-beige/40 text-xl" icon="solar:card-2-linear"></iconify-icon>
<iconify-icon className="text-pridor-beige/40 text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
</div>
</footer>
<style>
        /* Custom Keyframes for the shimmer effect in the storefront placeholder */
        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    </style>

    </>
  );
}
