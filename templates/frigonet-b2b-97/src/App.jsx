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
      

<div className="spline-container" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-3xl" icon="solar:snowflake-linear"></iconify-icon>
<span className="text-xl tracking-tight font-medium text-white">Frigonet<span className="text-cyan-400">.</span></span>
</div>
<div className="hidden md:flex space-x-8 text-sm font-light text-gray-300">
<a className="hover:text-cyan-300 transition-colors" href="#expertise">Notre Expertise</a>
<a className="hover:text-cyan-300 transition-colors" href="#process">Process &amp; Équipes</a>
<a className="hover:text-cyan-300 transition-colors" href="#partenariat">Solutions B2B</a>
</div>
<div>
<button className="text-xs font-medium border border-cyan-500/30 text-cyan-50 bg-cyan-900/10 rounded-full px-5 py-2 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all">
          Devenir Partenaire
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent content w-full"></div>

<div className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
<div className="container mx-auto px-6 content">
<div className="flex flex-col items-center text-center max-w-5xl mx-auto">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-medium text-cyan-200 uppercase tracking-widest">Sous-traitance spécialisée</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-[1.1]">
          Le partenaire 
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">nettoyage</span> des frigoristes.
        </h1>

<p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-extralight leading-relaxed">
          Libérez vos techniciens qualifiés pour la maintenance. Nous gérons l'hygiène de vos parcs clients avec des process ultra-efficaces et des équipes 100% dédiées.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<button className="bg-white text-black font-medium text-sm rounded-full px-8 py-3.5 hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group">
            Discuter partenariat
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-transparent border border-gray-700 text-gray-300 font-medium text-sm rounded-full px-8 py-3.5 hover:bg-white/5 hover:border-gray-500 transition-all">
            Nos protocoles
          </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-cyan-400">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear"></iconify-icon>
<span className="text-3xl font-light tracking-tight">Rapidité</span>
</div>
<p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Process optimisés</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-cyan-400">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-3xl font-light tracking-tight">Experts</span>
</div>
<p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Équipes formées</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-cyan-400">
<iconify-icon className="text-2xl" icon="solar:handshake-linear"></iconify-icon>
<span className="text-3xl font-light tracking-tight">B2B</span>
</div>
<p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Sous-traitance Pro</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-cyan-400">
<iconify-icon className="text-2xl" icon="solar:check-read-linear"></iconify-icon>
<span className="text-3xl font-light tracking-tight">100%</span>
</div>
<p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Satisfaction Client</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-black content relative" id="expertise">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            Ne gâchez pas le temps <br/> de vos <span className="text-cyan-400">frigoristes.</span>
</h2>
<p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
            Le nettoyage est une tâche chronophage qui mobilise vos techniciens qualifiés au détriment du dépannage à haute valeur ajoutée. Frigonet est votre bras droit opérationnel.
          </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-cyan-900/20 border border-cyan-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Qualité Standardisée</h3>
<p className="text-sm text-gray-500">Nos équipes ne font que du nettoyage. Elles sont plus rapides, mieux équipées et suivent un protocole strict.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-cyan-900/20 border border-cyan-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:case-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Marque Blanche &amp; Confiance</h3>
<p className="text-sm text-gray-500">Nous intervenons en votre nom ou comme partenaire technique. Transparence totale et reporting précis.</p>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-4" icon="solar:user-id-linear"></iconify-icon>
<div className="text-sm font-medium text-white mb-1">Équipes Formées</div>
<div className="text-xs text-gray-500">Spécialistes hygiène</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-4" icon="solar:clipboard-list-linear"></iconify-icon>
<div className="text-sm font-medium text-white mb-1">Protocoles</div>
<div className="text-xs text-gray-500">Process industriels</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-4" icon="solar:gallery-send-linear"></iconify-icon>
<div className="text-sm font-medium text-white mb-1">Reporting</div>
<div className="text-xs text-gray-500">Photos avant/après</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-4" icon="solar:shield-star-linear"></iconify-icon>
<div className="text-sm font-medium text-white mb-1">Garantie</div>
<div className="text-xs text-gray-500">Zéro résidu</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 content" id="partenariat">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Solutions de Partenariat</h2>
<p className="text-gray-400 font-light">Des offres conçues pour s'intégrer à vos contrats de maintenance.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all bg-neutral-900/50 flex flex-col">
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Ponctuel</span>
<h3 className="text-2xl font-light mt-2 text-white">Intervention Spot</h3>
</div>
<div className="text-3xl font-medium tracking-tight mb-6">À la demande</div>
<p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">Besoin de renfort sur un gros chantier ou pour une remise en état spécifique.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Disponibilité rapide
            </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Équipement fourni
            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors">Demander un devis</button>
</div>

<div className="p-8 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 relative flex flex-col">
<div className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Recommandé</div>
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">Cadre</span>
<h3 className="text-2xl font-light mt-2 text-white">Contrat Sous-traitance</h3>
</div>
<div className="text-3xl font-medium tracking-tight mb-6">Tarifs Négociés</div>
<p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">Intégrez nos services de nettoyage dans vos contrats de maintenance annuels.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Planification récurrente
            </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Marque blanche possible
            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition-colors">Devenir partenaire</button>
</div>

<div className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all bg-neutral-900/50 flex flex-col">
<div className="mb-4">
<span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Volume</span>
<h3 className="text-2xl font-light mt-2 text-white">Grands Comptes</h3>
</div>
<div className="text-3xl font-medium tracking-tight mb-6">Sur Mesure</div>
<p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">Pour la gestion de parcs nationaux ou régionaux. Pilotage centralisé.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Gestion de flotte
            </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Reporting API
            </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors">Contacter la direction</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 content">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-500 text-xl" icon="solar:snowflake-bold"></iconify-icon>
<span className="text-lg font-medium tracking-tight">Frigonet.</span>
</div>
<p className="text-gray-500 text-sm font-light max-w-xs">
            Le spécialiste du nettoyage frigorifique pour les professionnels. 
            Efficacité, spécialisation et partenariat.
          </p>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Entreprise</h4>
<ul className="space-y-2 text-sm text-gray-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Notre concept</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Recrutement</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Infos</h4>
<ul className="space-y-2 text-sm text-gray-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
<p className="text-xs text-gray-600 font-light">© 2024 Frigonet. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
