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
      

<nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-neutral-900">
                CBC
            </div>
<button className="hover:bg-neutral-800 transition-colors cursor-pointer text-sm font-medium text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4" onclick="window.location.href='https://tally.so/r/vGN0p4'" role="button">
                Postuler maintenant
            </button>
</div>
</nav>

<main className="max-w-4xl mx-auto px-6 pt-16 sm:pt-24">

<header className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-600">Recrutement ouvert</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                Gestionnaire CBC
            </h1>
<p className="text-base sm:text-lg text-neutral-500 font-medium">
                Cashflow Business Club – Programme ECOM360
            </p>
</header>

<section className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-10 mb-16 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-neutral-900">Mission Principale</h2>
</div>
<p className="text-base text-neutral-600 leading-relaxed mb-6">
                Convertir les prospects qualifiés en membres ECOM360 et assurer leur activation rapide dans le programme afin d’augmenter :
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 text-lg mt-0.5" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-700">Le chiffre d’affaires</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 text-lg mt-0.5" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-700">Le taux de démarrage des membres</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 text-lg mt-0.5" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-700">L’engagement communautaire</span>
</li>
</ul>
<div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
<p className="text-sm text-neutral-600 font-medium">
                    Le gestionnaire CBC n’est pas un simple modérateur. <br className="hidden sm:block"/>
                    C’est un <span className="text-neutral-900">accélérateur de décision et d’exécution</span>.
                </p>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Responsabilités</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-5" icon="solar:chat-round-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-4 tracking-tight">1. Gestion &amp; Conversion</h3>
<p className="text-xs text-neutral-500 mb-4">Le prospect a déjà accès à la page de vente. Votre rôle :</p>
<ul className="space-y-3 mb-6 flex-grow">
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Répondre aux messages entrants (WhatsApp / Instagram / DM)</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Vérifier que la page a été consultée</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Qualifier le profil (revenu, urgence, capacité d’investissement)</li>
</ul>
<div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:flag-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-800">Transformer l’intérêt en décision.</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-5" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-4 tracking-tight">2. Intégration des Membres</h3>
<ul className="space-y-3 mb-6 flex-grow">
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Vérifier la preuve de paiement</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Envoyer les accès (formation + Discord)</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Expliquer le fonctionnement : modules progressifs, passage à l'action obligatoire, soumission pour validation</li>
</ul>
<div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:flag-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-800">Aucun membre fantôme.</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-5" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-4 tracking-tight">3. Activation &amp; Suivi</h3>
<ul className="space-y-3 mb-6 flex-grow">
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Relancer les membres inactifs</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Encourager les soumissions</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Identifier les blocages</li>
</ul>
<div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:flag-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-800">Maintenir un taux de progression élevé.</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-5" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-neutral-900 mb-4 tracking-tight">4. Animation Communautaire</h3>
<p className="text-xs text-neutral-500 mb-4">Gestion sur Discord :</p>
<ul className="space-y-3 mb-6 flex-grow">
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Stimuler les échanges</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Mettre en avant les réussites</li>
<li className="text-sm text-neutral-600 flex items-start gap-2"><span className="text-neutral-300 mt-0.5">-</span> Maintenir une dynamique ambitieuse</li>
</ul>
<div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:flag-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-800">Créer un environnement orienté résultats.</span>
</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Indicateurs de Performance (KPIs)</h2>
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/60">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-900" icon="solar:cart-large-linear"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900">Vente</h4>
</div>
<ul className="space-y-2 mb-6">
<li className="text-xs text-neutral-600">• Nombre de leads traités / sem</li>
<li className="text-xs text-neutral-600">• Taux conv. discussion → paiement</li>
<li className="text-xs text-neutral-600">• Nombre de ventes / mois</li>
</ul>
<div className="bg-white rounded-lg p-3 border border-neutral-200">
<div className="text-xs text-neutral-500 mb-1">Objectif minimum</div>
<div className="text-sm font-medium text-neutral-900 mb-2">5 ventes / mois</div>
<div className="text-xs text-neutral-500 mb-1">Objectif cible</div>
<div className="text-sm font-medium text-neutral-900">8 à 12 ventes / mois</div>
</div>
</div>

<div className="flex-1 bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/60">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-900" icon="solar:bolt-linear"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900">Activation</h4>
</div>
<ul className="space-y-2">
<li className="text-xs text-neutral-600">• % des nouveaux membres commençant sous 48h</li>
<li className="text-xs text-neutral-600">• Taux de progression Module 1 → Module 2</li>
<li className="text-xs text-neutral-600">• Nombre de membres inactifs relancés</li>
</ul>
</div>

<div className="flex-1 bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/60">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-900" icon="solar:star-linear"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900">Qualité</h4>
</div>
<ul className="space-y-2">
<li className="text-xs text-neutral-600">• Satisfaction des membres</li>
<li className="text-xs text-neutral-600">• Réactivité aux messages (&lt; 24h)</li>
<li className="text-xs text-neutral-600">• Discipline et reporting hebdomadaire</li>
</ul>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Rémunération</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-900 border border-neutral-200">1</span>
<h3 className="text-base font-medium text-neutral-900">Fixe Évolutif</h3>
</div>
<div className="bg-white border border-neutral-200/80 rounded-2xl p-6 h-full shadow-sm">
<div className="text-2xl font-medium tracking-tight text-neutral-900 mb-1">30 000 FCFA <span className="text-sm font-normal text-neutral-500">/ mois</span></div>
<p className="text-xs text-neutral-500 mb-6">Période test (1 à 3 mois)</p>
<div className="pt-6 border-t border-neutral-100">
<p className="text-xs font-medium text-neutral-900 mb-3">Évolution vers 50 000 FCFA / mois si :</p>
<ul className="space-y-2">
<li className="text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Minimum 5 ventes/mois atteintes
                                </li>
<li className="text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Bonne gestion communauté
                                </li>
<li className="text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Reporting régulier
                                </li>
</ul>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded bg-neutral-900 flex items-center justify-center text-xs font-medium text-white shadow-sm">2</span>
<h3 className="text-base font-medium text-neutral-900">Deal ECOM (Performance)</h3>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-full shadow-lg relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<p className="text-xs text-neutral-400 mb-6">Idéal pour profil ambitieux.</p>
<div className="mb-6">
<p className="text-sm text-white font-medium mb-1">Commission par vente</p>
<div className="text-2xl font-medium tracking-tight text-white">10% <span className="text-base text-neutral-500 font-normal">à</span> 20%</div>
</div>
<div className="text-xs text-neutral-500 mb-4 flex items-center gap-4">
<div className="h-px bg-neutral-800 flex-1"></div>
<span>OU</span>
<div className="h-px bg-neutral-800 flex-1"></div>
</div>
<p className="text-sm text-white font-medium mb-3">Palier progressif</p>
<table className="w-full text-left text-sm mb-6">
<thead>
<tr className="border-b border-neutral-800">
<th className="py-2 text-xs font-medium text-neutral-400">Ventes / mois</th>
<th className="py-2 text-xs font-medium text-neutral-400 text-right">Bonus</th>
</tr>
</thead>
<tbody className="text-white">
<tr className="border-b border-neutral-800/50">
<td className="py-2 text-xs">5 ventes</td>
<td className="py-2 text-xs text-right text-neutral-300">Prime X</td>
</tr>
<tr className="border-b border-neutral-800/50">
<td className="py-2 text-xs">8 ventes</td>
<td className="py-2 text-xs text-right text-neutral-300">Prime supérieure</td>
</tr>
<tr>
<td className="py-2 text-xs">10+ ventes</td>
<td className="py-2 text-xs text-right text-neutral-300">Prime premium</td>
</tr>
</tbody>
</table>
<p className="text-xs text-neutral-400">👉 Possibilité de dépasser largement 50 000 FCFA.</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pt-10 border-t border-neutral-200/60">
<div>
<h2 className="text-xl font-medium tracking-tight text-neutral-900 mb-6">Profil Idéal</h2>
<ul className="space-y-3">
<li className="text-sm text-neutral-600 flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Mentalité business
                    </li>
<li className="text-sm text-neutral-600 flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Aisance en discussion écrite
                    </li>
<li className="text-sm text-neutral-600 flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Bonne compréhension de la psychologie d’achat
                    </li>
</ul>
</div>
<div className="">
<h2 className="text-xl font-medium tracking-tight text-neutral-900 mb-6">Évolution Possible</h2>
<p className="text-sm text-neutral-500 mb-4">Un gestionnaire performant peut évoluer vers :</p>
<div className="flex flex-col gap-2">
<div className="bg-white border border-neutral-200/80 rounded-lg py-2.5 px-4 text-sm text-neutral-700 shadow-sm flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
                        Responsable commercial CBC
                    </div>
<div className="bg-white border border-neutral-200/80 rounded-lg py-2.5 px-4 text-sm text-neutral-700 shadow-sm flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
                        Responsable communauté
                    </div>
<div className="bg-white border border-neutral-200/80 rounded-lg py-2.5 px-4 text-sm text-neutral-700 shadow-sm flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
                        Bras droit opérationnel
                    </div>
<div className="bg-white border border-neutral-200/80 rounded-lg py-2.5 px-4 text-sm text-neutral-700 shadow-sm flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
                        Partenaire stratégique
                    </div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto text-center my-20">
<iconify-icon className="text-4xl text-neutral-200 mb-6 mx-auto block" icon="solar:quote-right-linear"></iconify-icon>
<h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">Philosophie CBC</h2>
<blockquote className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 leading-snug">
                "On ne force pas les gens à entrer.<br/>
                On sélectionne ceux qui sont prêts à passer à l’action."
            </blockquote>
</section>

<div className="text-center pt-10 border-t border-neutral-200/60">
<button className="hover:bg-neutral-800 hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-base font-medium text-white bg-neutral-900 rounded-full pt-3 pr-8 pb-3 pl-8 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]" onclick="window.location.href='https://tally.so/r/vGN0p4'" role="button">
                Postuler pour ce poste
            </button>
</div>
</main>

    </>
  );
}
