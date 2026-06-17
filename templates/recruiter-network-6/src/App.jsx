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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-white/[0.03] blur-3xl rounded-full pointer-events-none"></div>

<nav className="w-full relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
<div className="font-medium text-base tracking-tighter text-white uppercase">SWITCH</div>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<main className="flex-grow relative z-10">

<header className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center flex flex-col items-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Réseau de recruteurs<br className="hidden md:block"/> entrepreneurs.
            </h1>
<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xl md:text-2xl font-normal text-white tracking-tight mb-8">
<span>100 % de commission.</span>
<span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="text-neutral-500">Une structure claire.</span>
<span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-800"></span>
<span className="text-neutral-500">Une vision long terme.</span>
</div>
<p className="text-base text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
                Switch s’adresse aux recruteurs expérimentés qui souhaitent piloter leur activité comme une véritable entreprise.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Télécharger la brochure
                    <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                    Planifier un échange
                </button>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#111111] border border-white/5 flex flex-col">
<iconify-icon className="text-2xl text-neutral-500 mb-6" icon="solar:pie-chart-2-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Le modèle</h3>
<div className="text-sm space-y-5 flex-grow">
<p className="text-neutral-300">Une formule simple.</p>
<ul className="space-y-2.5 border-l border-white/10 pl-4 py-1">
<li className="flex items-start gap-2">
<span className="text-white mt-0.5 text-xs">→</span>
<span className="text-white">100 % de commission</span>
</li>
<li className="flex items-start gap-2">
<span className="text-neutral-600 mt-0.5 text-xs">→</span>
                                190 € HT / mois
                            </li>
<li className="flex items-start gap-2">
<span className="text-neutral-600 mt-0.5 text-xs">→</span>
                                2 200 € par tranche de 12 000 € de CA
                            </li>
</ul>
<div className="pt-2 text-neutral-500 space-y-1">
<p>Aucun plafond.</p>
<p>Aucun lien de subordination.</p>
<p>Une responsabilité totale.</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111111] border border-white/5 flex flex-col">
<iconify-icon className="text-2xl text-neutral-500 mb-6" icon="solar:target-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Positionnement</h3>
<div className="text-sm space-y-5 flex-grow">
<p className="text-neutral-300">Recrutement à forte valeur.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-neutral-300">CDI</span>
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-neutral-300">CDD</span>
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-neutral-300">Intérim</span>
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-neutral-300">Approche directe</span>
</div>
<div className="pt-4 border-t border-white/5 space-y-1.5 text-neutral-500">
<p className="flex items-center gap-2"><iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon> Vous choisissez vos missions.</p>
<p className="flex items-center gap-2"><iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon> Vous définissez votre stratégie.</p>
<p className="flex items-center gap-2 text-white"><iconify-icon className="text-xs text-neutral-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Vous pilotez votre croissance.</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111111] border border-white/5 flex flex-col md:col-span-2 lg:col-span-1">
<iconify-icon className="text-2xl text-neutral-500 mb-6" icon="solar:server-square-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Infrastructure</h3>
<div className="text-sm space-y-5 flex-grow">
<p className="text-neutral-300">Une base professionnelle, sans rigidité.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
<div>
<p className="text-xs font-medium text-neutral-600 mb-3 uppercase tracking-widest">Cloud Switch</p>
<ul className="space-y-1.5 border-l border-white/10 pl-3">
<li>Templates commerciaux</li>
<li>Documentation juridique</li>
<li>Facturation structurée</li>
<li>Ressources marketing</li>
<li>Process opérationnels</li>
</ul>
</div>
<div>
<p className="text-xs font-medium text-neutral-600 mb-3 uppercase tracking-widest">Formation continue</p>
<ul className="space-y-1.5 border-l border-white/10 pl-3">
<li>1 formation par semaine</li>
<li>Accès bibliothèque existante</li>
</ul>
</div>
</div>
<div className="flex gap-4 pt-2 text-white">
<span className="inline-flex items-center gap-1.5"><iconify-icon className="text-neutral-500" icon="solar:check-read-linear"></iconify-icon> Support</span>
<span className="inline-flex items-center gap-1.5"><iconify-icon className="text-neutral-500" icon="solar:check-read-linear"></iconify-icon> Collectif</span>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111111] border border-white/5 flex flex-col">
<iconify-icon className="text-2xl text-neutral-500 mb-6" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Environnement</h3>
<div className="text-sm space-y-5 flex-grow">
<p className="text-neutral-300">Un cadre, où que vous soyez.</p>
<p className="text-neutral-500">Accès à des espaces de coworking partenaires, pensé pour votre mobilité.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">
<iconify-icon className="text-neutral-500" icon="solar:tag-price-linear"></iconify-icon>
                            Sans frais supplémentaires
                        </div>
<ul className="pt-2 space-y-2 text-neutral-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-neutral-700"></div> Recevez vos clients.</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-neutral-700"></div> Travaillez dans un environnement adapté.</li>
</ul>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111111] border border-white/5 flex flex-col">
<iconify-icon className="text-2xl text-neutral-500 mb-6" icon="solar:network-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Collectif</h3>
<div className="text-sm space-y-5 flex-grow">
<div className="space-y-1">
<p className="text-white">Un séminaire annuel.</p>
<p className="text-neutral-500">Un réseau actif toute l'année.</p>
</div>
<div className="flex items-center justify-between border border-white/5 bg-white/[0.02] rounded-lg p-4">
<div className="text-center">
<iconify-icon className="text-lg text-neutral-500 mb-1" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-xs text-neutral-400">Échanges</p>
</div>
<div className="w-px h-8 bg-white/5"></div>
<div className="text-center">
<iconify-icon className="text-lg text-neutral-500 mb-1" icon="solar:eye-linear"></iconify-icon>
<p className="text-xs text-neutral-400">Vision</p>
</div>
<div className="w-px h-8 bg-white/5"></div>
<div className="text-center">
<iconify-icon className="text-lg text-neutral-500 mb-1" icon="solar:graph-up-linear"></iconify-icon>
<p className="text-xs text-neutral-400">Progression</p>
</div>
</div>
<div className="pt-2">
<p className="text-neutral-500">Indépendant. <span className="text-white">Jamais isolé.</span></p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
<iconify-icon className="text-2xl text-white mb-6 relative z-10" icon="solar:user-check-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 relative z-10">Pour qui ?</h3>
<div className="text-sm space-y-5 flex-grow relative z-10">
<p className="text-white">Switch est conçu pour :</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-400">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Recruteurs expérimentés
                            </li>
<li className="flex items-center gap-3 text-neutral-400">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Profils orientés chiffre d'affaires
                            </li>
<li className="flex items-center gap-3 text-neutral-400">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Entrepreneurs assumant leur autonomie
                            </li>
<li className="flex items-center gap-3 text-neutral-400">
<iconify-icon className="text-white shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Ambitions long terme
                            </li>
</ul>
<div className="mt-auto pt-5">
<p className="text-xs text-neutral-500 flex items-start gap-2 bg-black/20 p-3 rounded-md border border-white/5">
<iconify-icon className="text-base shrink-0 mt-0.5 text-neutral-400" icon="solar:info-circle-linear"></iconify-icon>
                                Ce modèle n'est pas destiné aux profils débutants.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-8 text-center mt-auto">
<div className="font-medium text-xs tracking-tighter text-neutral-600 uppercase mb-2">SWITCH</div>
<p className="text-xs text-neutral-700">© 2023 Switch. Tous droits réservés.</p>
</footer>

    </>
  );
}
