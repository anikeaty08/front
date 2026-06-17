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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200/50 bg-[#FDFBF7]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-3 rtl:space-x-reverse" href="#">
<img alt="Fidelizza Logo" className="h-10 w-auto" src="https://i.imgur.com/vHq6A8b.jpeg"/>
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-slate-900">Fidelizza</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-slate-900 bg-white border border-stone-200 hover:bg-stone-50 focus:ring-4 focus:outline-none focus:ring-stone-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 transition-all duration-200" type="button">Connexion</button>
<button className="text-white bg-[#FF4D4D] hover:bg-[#E04343] focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center transition-all duration-200 shadow-lg shadow-red-500/20" type="button">Essayer gratuitement</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-stone-100 rounded-lg bg-stone-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-[#FF4D4D] md:p-0 transition-colors text-lg" href="#comment-ca-marche">Fonctionnement</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-[#FF4D4D] md:p-0 transition-colors text-lg" href="#benefices">Avantages</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-[#FF4D4D] md:p-0 transition-colors text-lg" href="#temoignage">Témoignages</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-base font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Spécial Pizzaiolos
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        La carte de fidélité qui ne se <span className="text-[#FF4D4D]">perd jamais.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-normal">
                        Fidélisez vos clients en 2 secondes chrono. Pas d'application à installer, juste un QR code reçu par SMS. Modernisez votre pizzeria sans ralentir le service.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center py-4 px-8 text-lg font-medium text-center text-white rounded-lg bg-[#FF4D4D] hover:bg-[#E04343] focus:ring-4 focus:ring-red-200 transition-all shadow-xl shadow-red-500/20" href="#">
                            Essayer gratuitement
                            <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center py-4 px-8 text-lg font-medium text-center text-slate-700 border border-stone-200 rounded-lg hover:bg-white hover:text-[#FF4D4D] focus:ring-4 focus:ring-stone-100 bg-white/50 transition-all" href="#demo">
<i className="mr-2 w-5 h-5" data-lucide="play-circle"></i>
                            Voir la démo
                        </a>
</div>
<p className="text-base text-slate-400 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Essai gratuit 14 jours, sans engagement.
                    </p>
</div>

<div className="relative lg:h-auto z-10">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-50 rounded-[2rem] blur-2xl opacity-50 -z-10"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-100 bg-white">
<img alt="Pizzaiolo servant une pizza" className="object-cover w-full h-[500px] opacity-90" src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-6 rounded-xl border border-stone-100 shadow-lg">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Scan validé !</p>
<p className="text-xs text-slate-500">Client: Thomas M.</p>
</div>
</div>
<span className="text-[#FF4D4D] font-bold text-lg">+1 Point</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-2.5">
<div className="bg-[#FF4D4D] h-2.5 rounded-full" style={{width: '80%'}}></div>
</div>
<p className="text-xs text-slate-500 mt-2 text-right">8/10 points pour une pizza offerte</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Arrêtez de perdre de l'argent avec du papier</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">La fidélité moderne doit être simple pour vous et invisible pour le client jusqu'au moment de la récompense.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-10 rounded-3xl bg-stone-50 border border-stone-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-32 h-32 text-slate-400" data-lucide="trash-2"></i>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-slate-200 rounded-lg text-slate-600">
<i className="w-6 h-6" data-lucide="x"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-700">Cartes Papier</h3>
</div>
<ul className="space-y-4 text-lg text-slate-600">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" data-lucide="minus-circle"></i>
                            Oubliées ou perdues par 40% des clients.
                        </li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" data-lucide="minus-circle"></i>
                            Coût d'impression récurrent et polluant.
                        </li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" data-lucide="minus-circle"></i>
                            Aucune donnée client (impossible de les relancer).
                        </li>
</ul>
</div>

<div className="p-10 rounded-3xl bg-[#FFF5F5] border border-red-100 relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-32 h-32 text-[#FF4D4D]" data-lucide="smartphone"></i>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-[#FF4D4D] rounded-lg text-white shadow-md shadow-red-200">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900">Fidelizza</h3>
</div>
<ul className="space-y-4 text-lg text-slate-700">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Toujours dans la poche (Apple Wallet / Google Pay).</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Économique et 100% écologique.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Relance automatique par SMS (ex: anniversaire).</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]" id="comment-ca-marche">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#FF4D4D] font-semibold tracking-wide uppercase text-sm">Simple comme bonjour</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mt-2">Fidélisez en 3 étapes</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-200 border-t border-dashed border-slate-300 -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-200 shadow-lg flex items-center justify-center mb-8 transform transition hover:scale-105 duration-300">
<i className="w-10 h-10 text-[#FF4D4D]" data-lucide="message-square-plus"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">1. Inscription Flash</h3>
<p className="text-lg text-slate-500">Le client donne son numéro. Il reçoit instantanément sa carte QR unique par SMS. Rien à télécharger.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-200 shadow-lg flex items-center justify-center mb-8 transform transition hover:scale-105 duration-300">
<i className="w-10 h-10 text-[#FF4D4D]" data-lucide="scan-line"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">2. Scan au comptoir</h3>
<p className="text-lg text-slate-500">À chaque passage, le client montre son QR code. Vous le scannez avec votre mobile en 1 seconde.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-stone-200 shadow-lg flex items-center justify-center mb-8 transform transition hover:scale-105 duration-300">
<i className="w-10 h-10 text-[#FF4D4D]" data-lucide="pizza"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">3. Récompense</h3>
<p className="text-lg text-slate-500">Les points s'ajoutent automatiquement. Au 10ème passage ? Une notification invite le client pour sa pizza offerte.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="benefices">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">Conçu pour le rush du samedi soir.</h2>
<p className="text-xl text-slate-400">Nous savons que chaque seconde compte en cuisine et au service. Fidelizza est optimisé pour la vitesse.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<i className="w-6 h-6 text-[#FF4D4D]" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-1">Ultra Rapide</h4>
<p className="text-slate-400 text-lg">L'interface est épurée. Un scan, un bip de confirmation, c'est fini. Moins de temps qu'il n'en faut pour rendre la monnaie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<i className="w-6 h-6 text-[#FF4D4D]" data-lucide="smartphone-nfc"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-1">Aucun matériel à acheter</h4>
<p className="text-slate-400 text-lg">Fonctionne sur votre smartphone actuel ou une tablette. Pas de douchettes coûteuses ou de système de caisse complexe.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<i className="w-6 h-6 text-[#FF4D4D]" data-lucide="bar-chart-3"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-1">Marketing Automatisé</h4>
<p className="text-slate-400 text-lg">Le système détecte les clients absents depuis 30 jours et leur envoie un SMS promo automatiquement pour les faire revenir.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
<img alt="Pizzaiolo heureux" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-2 backdrop-blur-md">
<i className="w-4 h-4" data-lucide="trending-up"></i> +20% de chiffre d'affaires
                        </div>
<p className="text-white font-medium text-lg">"Mes clients adorent le côté tech, et moi j'adore voir la salle pleine le mardi soir grâce aux relances SMS."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-200" id="temoignage">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center">
<div className="flex gap-1">
<i className="w-6 h-6 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-6 h-6 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-6 h-6 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-6 h-6 text-orange-400 fill-orange-400" data-lucide="star"></i>
<i className="w-6 h-6 text-orange-400 fill-orange-400" data-lucide="star"></i>
</div>
</div>
<blockquote className="text-2xl md:text-4xl font-semibold text-slate-900 leading-snug mb-8">
                "Depuis que j'utilise Fidelizza, mes clients reviennent <span className="text-emerald-600 bg-emerald-50 px-2 rounded">2x plus souvent</span> pour compléter leurs points. C'est simple, c'est génial."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<img alt="Marco" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="font-semibold text-slate-900 text-lg">Marco Rossi</div>
<div className="text-slate-500">Gérant de "Pizza Napoli", Lyon</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#FF4D4D] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl shadow-red-500/30 relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight relative z-10">Prêt à remplir votre pizzeria ?</h2>
<p className="text-red-100 text-xl md:text-2xl max-w-2xl mx-auto mb-10 relative z-10">Commencez dès ce soir. Pas de carte bancaire requise pour l'essai gratuit.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-white text-[#FF4D4D] text-lg font-semibold py-4 px-8 rounded-xl hover:bg-stone-50 transition-colors shadow-lg">
                        Commencer maintenant
                    </button>
<button className="bg-transparent border-2 border-white/30 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors">
                        Parler à un expert
                    </button>
</div>
<p className="text-red-200 mt-6 text-sm relative z-10">Rejoignez +500 pizzerias en France</p>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center space-x-2 mb-4" href="#">
<img alt="Fidelizza Logo" className="h-8 w-auto" src="https://i.imgur.com/vHq6A8b.jpeg"/>
<span className="text-lg font-semibold text-slate-900">Fidelizza</span>
</a>
<p className="text-slate-500 text-base">La solution de fidélité #1 pour les artisans de la pizza.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Produit</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Fonctionnalités</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Matériel compatible</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Ressources</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Blog Pizzaiolo</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Guide de fidélisation</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Centre d'aide</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-[#FF4D4D] transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm">© 2023 Fidelizza SAS. Fait avec <i className="w-3 h-3 inline text-[#FF4D4D] fill-[#FF4D4D]" data-lucide="heart"></i> et de la farine.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
