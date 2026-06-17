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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="flex flex-wrap max-w-screen-xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<a className="flex items-center space-x-1 rtl:space-x-reverse" href="#">
<span className="self-center text-lg font-medium tracking-tighter text-slate-900">PHARMA<span className="text-slate-400">GENCE</span></span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all" type="button">Contact</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
<li className="">
<a className="block hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors text-slate-900 rounded pt-2 pr-3 pb-2 pl-3" href="#">Services</a>
</li>
<li className="">
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors" href="#">Conformité</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors" href="#">Studio</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 z-0 subtle-grid"></div>
<div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-full">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Expertise Pharmaceutique &amp; Médicale
            </div>
<h1 className="mb-6 text-4xl tracking-tight leading-none text-slate-900 md:text-6xl lg:text-7xl font-medium">
                Conception et impression <br className="hidden md:block"/> de supports <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">pharmaceutiques</span>.
            </h1>
<p className="mb-10 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 max-w-4xl mx-auto">
                De la création graphique à l'adaptation réglementaire, jusqu'à l'impression haute définition. Nous accompagnons les laboratoires dans leur communication visuelle.
            </p>
<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
<a className="inline-flex justify-center items-center py-3 px-6 text-sm font-medium text-center text-white rounded-full bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all" href="#services">
                    Découvrir nos services
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center py-3 px-6 text-sm font-medium text-center text-slate-900 rounded-full border border-slate-200 hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all" href="#">
                    Demander un devis
                </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 flex justify-center gap-8 grayscale opacity-50">

<div className="h-6 w-20 bg-slate-200 rounded"></div>
<div className="h-6 w-20 bg-slate-200 rounded"></div>
<div className="h-6 w-20 bg-slate-200 rounded"></div>
<div className="h-6 w-20 bg-slate-200 rounded hidden sm:block"></div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-screen-xl px-4 mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Une offre globale dédiée à la santé</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Nous maîtrisons l'ensemble de la chaîne graphique, en respectant les contraintes réglementaires strictes du secteur pharmaceutique.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Conception</h3>
<p className="text-sm text-slate-500 leading-relaxed">Création d'identités visuelles, packaging, et supports promotionnels (ADV) adaptés à l'univers médical et patient.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon icon="solar:ruler-cross-pen-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Adaptation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Déclinaison de vos campagnes master sur tous formats : presse, affichage, digital, et supports congrès.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon icon="solar:restart-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Modification</h3>
<p className="text-sm text-slate-500 leading-relaxed">Mises à jour réglementaires, changements de mentions légales, correction de notices et packagings existants.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon icon="solar:printer-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Impression</h3>
<p className="text-sm text-slate-500 leading-relaxed">Impression offset et numérique haute qualité. Brochures, aide de visite, PLV, packaging avec finitions soignées.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-screen-xl px-4 mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Précision et conformité <br/>à chaque étape.</h2>
<p className="text-slate-500 mb-8 text-lg">
                        Dans l'industrie pharmaceutique, l'erreur n'est pas une option. Nos processus intègrent des étapes de validation rigoureuses pour garantir que vos supports imprimés et digitaux sont conformes aux exigences de l'ANSM.
                    </p>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 mt-1">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-slate-900 font-medium">Contrôle Qualité</h4>
<p className="text-sm text-slate-500 mt-1">Relecture technique et réglementaire avant toute impression.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 mt-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-slate-900 font-medium">Réactivité Studio</h4>
<p className="text-sm text-slate-500 mt-1">Traitement rapide des modifications pour respecter vos délais de lancement.</p>
</div>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden p-8">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-teal-50 text-teal-600 flex items-center justify-center">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Brochure_Produit_V3.pdf</div>
<div className="text-xs text-slate-400">Prêt pour impression</div>
</div>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                Validé
                            </span>
</div>
<div className="space-y-4">
<div className="h-2 bg-slate-100 rounded w-3/4"></div>
<div className="h-2 bg-slate-100 rounded w-full"></div>
<div className="h-2 bg-slate-100 rounded w-5/6"></div>
<div className="h-2 bg-slate-100 rounded w-4/6"></div>
</div>
<div className="mt-8 flex gap-4">
<div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-400 mb-1">Format</div>
<div className="text-sm font-medium text-slate-900">A4</div>
</div>
<div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="text-xs text-slate-400 mb-1">Papier</div>
<div className="text-sm font-medium text-slate-900">350g Mat</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-screen-xl px-4 mx-auto">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Prêt à lancer votre campagne ?</h2>
<p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">Confiez-nous la production de vos supports. Devis rapide, respect des délais et qualité pharmaceutique garantie.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">
                            Contactez-nous
                        </button>
<button className="bg-transparent border border-slate-700 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                            Voir le portfolio
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-screen-xl px-4 mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-slate-900">PHARMA<span className="text-slate-400">GENCE</span></span>
<p className="mt-4 text-sm text-slate-500">Agence spécialisée dans la production publicitaire pour l'industrie pharmaceutique.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Conception</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Adaptation</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Modification</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">L'Agence</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Références</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">RSE</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
                            contact@pharmagence.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-linear"></iconify-icon>
                            +33 1 23 45 67 89
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Pharmagence. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
