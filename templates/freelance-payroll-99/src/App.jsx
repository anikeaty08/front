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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
// Palette inspirée de Paie&Co mais traitée style "Linear" (plus subtil)
slate: {
850: '#1e293b', // Darker text
},
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue propre et corporate
600: '#0284c7',
900: '#0c4a6e',
}
},
letterSpacing: {
tightest: '-.04em',
}
}
}
}

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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-slate-900 font-semibold tracking-tight text-sm flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">A</div>
                AMBERT
            </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#expertise">Notre expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#tarifs">Tarifs</a>
</div>
<a className="hidden md:flex items-center gap-1.5 bg-slate-900 text-white text-[11px] font-medium px-3 py-1.5 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                Devis gratuit
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-dots opacity-40 -z-10 mask-gradient h-full w-full"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-[11px] font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                Cabinet de gestion sociale indépendant
            </div>
<h1 className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Votre gestion de paie, <br/>
<span className="text-slate-400">en toute sérénité.</span>
</h1>
<p className="text-base text-slate-500 max-w-lg mx-auto mb-10 font-normal leading-relaxed">
                Externalisez vos bulletins de salaire et vos déclarations sociales. 
                Nous transformons la complexité administrative en tranquillité d'esprit pour les TPE et PME.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition-all text-xs shadow-lg shadow-slate-200" href="#contact">
                    Confier ma paie
                </a>
<a className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-md font-medium hover:bg-slate-50 transition-all text-xs flex items-center justify-center gap-2" href="#services">
                    Découvrir l'offre
                </a>
</div>

<div className="mt-16 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-w-2xl mx-auto">
<div className="text-center">
<div className="text-lg font-medium text-slate-900 mb-0.5">100%</div>
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Conformité DSN</div>
</div>
<div className="text-center border-l border-slate-100">
<div className="text-lg font-medium text-slate-900 mb-0.5">24h</div>
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Réactivité</div>
</div>
<div className="text-center border-l border-slate-100">
<div className="text-lg font-medium text-slate-900 mb-0.5">Dédié</div>
<div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Interlocuteur</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="expertise">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight">Pourquoi externaliser ?</h2>
<p className="text-slate-500 text-sm mt-2 font-light">Concentrez-vous sur votre cœur de métier, nous gérons le social.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Sécurité juridique</h3>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Une veille sociale permanente pour garantir des bulletins conformes aux dernières évolutions conventionnelles.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Gain de temps</h3>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Ne perdez plus de temps sur les déclarations URSSAF ou la DSN. Nous prenons tout en charge de A à Z.
                    </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Maîtrise des coûts</h3>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Pas de logiciel coûteux à installer. Une tarification claire au bulletin ou au forfait, sans surprise.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="services">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-10">Nos missions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="p-6 bg-white rounded-lg border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-brand-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-slate-400 group-hover:text-brand-600 transition-colors" icon="solar:document-add-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium bg-slate-50 px-2 py-1 rounded text-slate-500">Mensuel</span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Production de la paie</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Établissement des bulletins de salaire, gestion des éléments variables, acomptes et primes.
                    </p>
</div>

<div className="p-6 bg-white rounded-lg border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-brand-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-slate-400 group-hover:text-brand-600 transition-colors" icon="solar:file-check-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium bg-slate-50 px-2 py-1 rounded text-slate-500">Déclaratif</span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Charges Sociales</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Télédéclarations et télépaiements aux organismes (URSSAF, Retraite, Prévoyance) via DSN.
                    </p>
</div>

<div className="p-6 bg-white rounded-lg border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-brand-300 transition-colors group">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="text-slate-400 group-hover:text-brand-600 transition-colors" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium bg-slate-50 px-2 py-1 rounded text-slate-500">Admin</span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-2">Administration du personnel</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        DPAE, gestion des congés payés, arrêts maladie, attestations Pôle Emploi, solde de tout compte.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-3 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex gap-4 items-start">
<div className="p-3 bg-white/10 rounded-md text-white">
<iconify-icon icon="solar:chat-round-call-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-1">Besoin d'un audit de conformité ?</h3>
<p className="text-xs text-slate-400 max-w-lg">
                                Vérification de vos paramétrages actuels et régularisation des dossiers existants.
                            </p>
</div>
</div>
<a className="px-4 py-2 bg-white text-slate-900 text-xs font-medium rounded hover:bg-brand-50 transition-colors whitespace-nowrap" href="#contact">
                        Contacter Ambert Conseil
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tarifs">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight">Tarification claire</h2>
<p className="text-slate-500 text-sm mt-2 font-light">Une offre adaptée à la taille de votre structure.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 items-start">

<div className="p-8 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium text-slate-900">À la carte</h3>
<p className="text-xs text-slate-400 mt-1">Idéal pour besoins ponctuels</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:ticket-linear"></iconify-icon>
</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-900 tracking-tight">20€</span>
<span className="text-slate-500 text-xs font-normal">/ bulletin</span>
</div>
<div className="space-y-3 mb-8 border-t border-slate-100 pt-6">
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon>
                            Édition du bulletin de paie
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon>
                            Gestion des entrées/sorties simple
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon>
                            Envoi PDF sécurisé
                        </div>
</div>
<a className="block w-full py-2 rounded bg-slate-50 text-slate-600 text-xs font-medium text-center hover:bg-slate-100 transition-colors border border-slate-100" href="#contact">Demander</a>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-slate-900 text-white shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:crown-star-linear" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<h3 className="text-base font-medium text-white">Pack Sérénité</h3>
<p className="text-xs text-slate-400 mt-1">Gestion sociale intégrale</p>
</div>
</div>
<div className="mb-6 flex items-baseline gap-1 relative z-10">
<span className="text-3xl font-medium text-white tracking-tight">Sur devis</span>
</div>
<div className="space-y-3 mb-8 border-t border-slate-700 pt-6 relative z-10">
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Bulletins + Déclarations (DSN)
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Gestion maladie, congés, prévoyance
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Assistance &amp; Conseil illimité
                        </div>
<div className="flex items-center gap-3 text-xs text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Coffre-fort numérique (option)
                        </div>
</div>
<a className="block w-full py-2 rounded bg-brand-600 text-white text-xs font-medium text-center hover:bg-brand-500 transition-colors relative z-10" href="#contact">Obtenir une offre personnalisée</a>
</div>
</div>
<p className="text-center text-[10px] text-slate-400 mt-8">
                Tarifs indicatifs HT. Des frais de dossier initiaux peuvent s'appliquer pour la création de l'entreprise dans le logiciel.
            </p>
</div>
</section>

<section className="bg-slate-50 border-t border-slate-200 py-24" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="text-center mb-8">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Parlons de votre projet</h2>
<p className="text-slate-500 text-xs mt-1">Amel Bertrand, votre gestionnaire dédiée.</p>
</div>
<div className="flex flex-col gap-4 mb-8">
<a className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group" href="tel:0618146261">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-700">06 18 14 62 61</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-600" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group" href="mailto:amel.bertrand17@gmail.com">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-700">amel.bertrand17@gmail.com</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-600" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium mb-4">Ou envoyez un message rapide</p>
</div>
<form action="mailto:amel.bertrand17@gmail.com" className="space-y-3" enctype="text/plain" method="post">
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-xs focus:outline-none focus:border-brand-500 transition-colors" placeholder="Nom de votre société" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-xs focus:outline-none focus:border-brand-500 transition-colors" placeholder="Votre email professionnel" type="email"/>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-xs focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="Comment puis-je vous aider ?" rows="3"></textarea>
<button className="w-full py-2.5 bg-slate-900 text-white rounded font-medium text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" type="submit">
                        Envoyer
                        <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
<div className="mt-12 text-center">
<div className="flex justify-center items-center gap-1 mb-2">
<div className="w-4 h-4 bg-slate-900 rounded flex items-center justify-center text-white text-[8px]">A</div>
<span className="text-xs font-semibold text-slate-900 tracking-tight">AMBERT Conseil</span>
</div>
<p className="text-[10px] text-slate-400">© 2023 Gestion de Paie &amp; Social. Tous droits réservés.</p>
</div>
</div>
</section>

    </>
  );
}
