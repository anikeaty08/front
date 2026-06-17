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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-slate-900 font-medium tracking-tight text-xl flex items-center gap-2.5" href="#">
<div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-sm shadow-sky-500/30">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
                DOCTEUR GLACONS
            </a>

<div className="hidden md:flex items-center gap-10 text-base font-normal text-slate-500">
<a className="hover:text-sky-600 transition-colors" href="#produits">Produits</a>
<a className="hover:text-sky-600 transition-colors" href="#livraison">Livraison</a>
<a className="hover:text-sky-600 transition-colors" href="#apropos">À propos</a>
<a className="hover:text-sky-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all items-center gap-2 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5" href="#commander">
<span>Commander</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 p-1">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white -z-20"></div>
<div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-bl from-sky-200/40 to-transparent blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm text-sm font-medium text-sky-600 mb-8">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
</span>
                        Livraison express 7j/7 sur Paris &amp; IDF
                    </div>
<h1 className="text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
                        L'art du froid <br/> <span className="text-sky-500">livré à l'heure.</span>
</h1>
<p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                        Le spécialiste du glaçon à Paris. Glaçons, glace pilée et glace carbonique livrés en moins d'une heure. Sublimez vos cocktails avec une glace pure et cristalline.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 text-base" href="#commander">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
                            Commander maintenant
                        </a>
<a className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-base" href="#produits">
                            Voir la gamme
                        </a>
</div>
<div className="mt-12 flex items-center gap-8 text-sm text-slate-400 font-medium tracking-tight">
<span>PARTICULIERS</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>PROFESSIONNELS</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>ÉVÉNEMENTIEL</span>
</div>
</div>

<div className="relative hidden lg:block">

<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-sky-900/10 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
<img alt="Cocktail Spritz on stone" className="w-full h-[600px] object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 z-20 backdrop-blur-md bg-white/30 border border-white/40 p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-sky-600">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Glaçons Premium</p>
<p className="text-white/80 text-xs">Transparence parfaite, fonte lente</p>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/30 blur-[60px] rounded-full -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 hover:bg-sky-50/50 border border-slate-100 hover:border-sky-100 transition-colors group">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-sky-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stopwatch-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Rapidité Éclair</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Livraison en 1h dans Paris intramuros. Nous sauvons vos soirées quand le stock s'épuise, avec une fiabilité absolue.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 hover:bg-sky-50/50 border border-slate-100 hover:border-sky-100 transition-colors group">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-sky-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Qualité Mixologie</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Glaçons denses, purs et sans goût parasite. Certifiés aux normes HACCP pour garantir l'excellence de vos boissons.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 hover:bg-sky-50/50 border border-slate-100 hover:border-sky-100 transition-colors group">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-sky-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Service Sur Mesure</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Du simple sac de 5kg pour un apéro à la palette complète pour un festival, notre logistique s'adapte à vos volumes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="produits">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-4">La Collection</h2>
<p className="text-lg text-slate-500 max-w-xl">Des produits d'exception pour sublimer chaque gorgée. Choisissez la forme adaptée à votre verre.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-base font-medium text-sky-600 hover:text-sky-700 mt-4 md:mt-0 group" href="#commander">
                    Voir les tarifs complets <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col">
<div className="h-64 bg-slate-100 relative overflow-hidden">
<img alt="Glaçons Cubiques" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Glaçons Cubiques</h3>
<p className="text-sm text-slate-500 mt-2 mb-6 leading-relaxed">Le standard premium. Dense et géométrique pour une dilution minimale.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-base font-medium text-slate-900">15€ <span className="text-sm font-normal text-slate-400">/ 5kg</span></span>
<button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col">
<div className="h-64 bg-slate-100 relative overflow-hidden">
<img alt="Glace Pilée" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599307767316-77f884a441b8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Glace Pilée</h3>
<p className="text-sm text-slate-500 mt-2 mb-6 leading-relaxed">La touche fraîcheur. Parfaite pour les Mojitos, Caïpirinhas et la présentation.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-base font-medium text-slate-900">18€ <span className="text-sm font-normal text-slate-400">/ 5kg</span></span>
<button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col">
<div className="h-64 bg-slate-100 relative overflow-hidden">
<img alt="Glace Carbonique" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1496317506642-08a81674e605?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-slate-900 shadow-sm">Pro</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Glace Carbonique</h3>
<p className="text-sm text-slate-500 mt-2 mb-6 leading-relaxed">Carboglace à -78°C. Pour effets de fumée spectaculaires et transport surgelé.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-base font-medium text-slate-900">Sur devis</span>
<button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col">
<div className="h-64 bg-slate-900 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<iconify-icon className="text-sky-400 relative z-10 w-16 h-16 group-hover:scale-110 transition-transform duration-500" icon="solar:stars-minimalistic-linear" width="64"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Clear Ice &amp; Sur Mesure</h3>
<p className="text-sm text-slate-500 mt-2 mb-6 leading-relaxed">Sphères parfaites, cubes 5x5, ou inclusion de logo pour un branding unique.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-base font-medium text-slate-900">Sur mesure</span>
<button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-20">Fonctionnement simplifié</h2>
<div className="relative grid md:grid-cols-3 gap-16">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-slate-100 -z-10"></div>

<div className="flex flex-col items-center group">
<div className="w-20 h-20 rounded-[20px] bg-white border border-slate-200 shadow-sm group-hover:border-sky-200 group-hover:shadow-sky-100 flex items-center justify-center text-slate-900 mb-8 z-10 transition-all duration-300">
<span className="font-medium text-2xl">1</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Sélectionnez</h3>
<p className="text-base text-slate-500 max-w-xs mx-auto">Choisissez vos produits et la quantité nécessaire pour votre événement.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-20 h-20 rounded-[20px] bg-white border border-slate-200 shadow-sm group-hover:border-sky-200 group-hover:shadow-sky-100 flex items-center justify-center text-slate-900 mb-8 z-10 transition-all duration-300">
<span className="font-medium text-2xl">2</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Validation</h3>
<p className="text-base text-slate-500 max-w-xs mx-auto">Vos glaçons sont conditionnés en sacs isothermes pour une conservation optimale.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-20 h-20 rounded-[20px] bg-white border border-slate-200 shadow-sm group-hover:border-sky-200 group-hover:shadow-sky-100 flex items-center justify-center text-slate-900 mb-8 z-10 transition-all duration-300">
<span className="font-medium text-2xl">3</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Réception</h3>
<p className="text-base text-slate-500 max-w-xs mx-auto">Un coursier vous livre en main propre en moins d'une heure ou sur créneau.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50" id="commander">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-900/10">

<div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Prêt à rafraîchir l'ambiance ?</h2>
<p className="text-slate-400 mb-12 text-xl font-light">Ne laissez pas vos boissons se réchauffer. Livraison immédiate disponible.</p>
<form className="max-w-lg mx-auto space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<select className="w-full appearance-none bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:bg-white/10 text-base transition-colors">
<option className="text-slate-900">Glaçons (5kg)</option>
<option className="text-slate-900">Glaçons (10kg)</option>
<option className="text-slate-900">Glace Pilée (5kg)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:bg-white/10 text-base transition-colors" placeholder="Quantité" type="number"/>
</div>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:bg-white/10 text-base transition-colors" placeholder="Adresse de livraison (Paris/IDF)" type="text"/>
<button className="w-full bg-white text-slate-900 font-medium rounded-xl px-5 py-4 hover:bg-sky-50 transition-colors text-base shadow-lg shadow-white/10" type="button">
                        Commander Maintenant
                    </button>
<p className="text-sm text-slate-500 mt-6 pt-2">Paiement sécurisé à la commande ou à la livraison.</p>
</form>
<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-base">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                        01 23 45 67 89
                    </div>
<div className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                        contact@docteurglacons.fr
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-slate-900 font-medium tracking-tight text-base flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="solar:snowflake-linear" width="20"></iconify-icon>
                DOCTEUR GLACONS
            </div>
<div className="flex gap-8 text-base text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-slate-900 transition-colors" href="#">CGV</a>
<a className="hover:text-slate-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
<div className="text-sm text-slate-400">
                © 2023 Docteur Glaçons. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
