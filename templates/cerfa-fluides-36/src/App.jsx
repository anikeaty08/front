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
sans: ['Inter', 'sans-serif'],
},
colors: {
easy: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
950: '#082f49',
}
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
      

<section className="pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-easy-50 text-easy-700 text-xs font-medium mb-6 border border-easy-200">
<iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon>
              Nouveauté
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Le CERFA fluides frigorigènes, directement depuis votre téléphone
            </h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0">
              Obligatoire depuis juillet 2024. Remplissez, signez et archivez
              votre fiche d'intervention en 2 minutes — sans papier, sans
              ressaisie.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-easy-900 rounded-xl hover:bg-easy-800 transition-colors shadow-sm" href="#pricing">
                Essayer gratuitement
              </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors" href="#demo">
                Voir une démo
              </a>
</div>
</div>

<div className="lg:col-span-6 relative flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.2s'}}>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
<div className="w-32 h-6 bg-slate-900 rounded-b-xl"></div>
</div>

<div className="bg-easy-900 pt-12 pb-4 px-4 text-white z-10">
<div className="flex items-center justify-between mb-4">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Intervention #8492</span>
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight">
                  CERFA 15497*04
                </h2>
</div>

<div className="flex-1 bg-slate-50 p-4 overflow-y-auto">

<div className="bg-white p-3 rounded-xl border border-slate-200 mb-3 shadow-sm">
<label className="text-xs text-slate-500 block mb-1">
                    Équipement (Auto-détecté)
                  </label>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900">
<iconify-icon className="text-easy-600" icon="solar:air-conditioner-linear"></iconify-icon>
                    Daikin Altherma 3 H HT
                  </div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-200 mb-3 shadow-sm">
<label className="text-xs text-slate-500 block mb-1">
                    Fluide frigorigène
                  </label>
<div className="flex justify-between items-center text-sm font-medium text-slate-900">
<span>R-32 (HFC)</span>
<span className="text-easy-600 bg-easy-50 px-2 py-0.5 rounded text-xs">
                      Conforme
                    </span>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-200 mb-4 shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-sm text-slate-700">
                      Contrôle d'étanchéité
                    </span>
<div className="w-10 h-6 bg-easy-500 rounded-full relative">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-700">
                      Récupération de fluide
                    </span>
<div className="w-10 h-6 bg-slate-200 rounded-full relative">
<div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-200 border-dashed mb-4 flex flex-col items-center justify-center py-6">
<iconify-icon className="text-slate-400 mb-2" icon="solar:pen-new-round-linear" width="24"></iconify-icon>
<span className="text-xs text-slate-500">
                    Signature client requise
                  </span>
</div>
<button className="w-full bg-easy-900 text-white py-3 rounded-xl text-sm font-medium mt-auto">
                  Générer et faire signer
                </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-easy-400/20 blur-3xl rounded-full -z-10 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="pt-4 md:pt-0">
<p className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
              66 000+
            </p>
<p className="text-sm text-slate-500">modèles d'équipements reconnus</p>
</div>
<div className="pt-4 md:pt-0">
<p className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
              5 500+
            </p>
<p className="text-sm text-slate-500">
              professionnels CVC utilisateurs
            </p>
</div>
<div className="pt-4 md:pt-0">
<p className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">
              5 ans
            </p>
<p className="text-sm text-slate-500">
              d'archivage conforme automatique
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Le CERFA papier, c'est fini.
          </h2>
<p className="text-lg text-slate-500">
            Gérer les fiches d'intervention à la main sur le terrain est devenu
            un risque pour votre entreprise.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-900">
              Un carnet à souche perdu = une intervention non prouvée
            </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-900">
              15 minutes perdues pour remplir un formulaire à la main sur le
              terrain
            </p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-base font-medium text-slate-900">
              Pas de registre à jour = risque immédiat de contrôle administratif
            </p>
</div>
</div>
<p className="text-center text-base font-medium text-easy-600">
          Il existe une solution, directement dans votre app EasySAV. ↓
        </p>
</div>
</section>

<section className="py-24 bg-slate-50 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Le CERFA 15497*04, intégré dans votre app
          </h2>
<p className="text-lg text-slate-500">
            Tout ce dont vous avez besoin pour être en règle, sans changer vos
            habitudes de travail.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-easy-600 shadow-sm">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Auto-remplissage depuis la base
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Le modèle, le fluide, la quantité — EasySAV pré-remplit tout
                depuis sa base de 66 000 équipements. Vous ne ressaisissez rien.
              </p>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-easy-600 shadow-sm">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Signature digitale sur place
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Le client signe directement sur l'écran de votre téléphone.
                Propre, rapide, et juridiquement légal.
              </p>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-easy-600 shadow-sm">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Archivage automatique 5 ans
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Chaque CERFA est archivé sur la fiche client. Votre registre est
                tenu à jour automatiquement, sans effort.
              </p>
</div>
</div>

<div className="flex flex-col gap-4 lg:col-start-1 lg:col-end-2 lg:ml-auto">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-easy-600 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Conforme F-Gas III — HFO inclus
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                La version *04 intègre les nouveaux fluides HFO des équipements
                dernière génération. EasySAV est déjà à jour.
              </p>
</div>
</div>

<div className="flex flex-col gap-4 lg:col-start-2 lg:col-end-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-easy-600 shadow-sm">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                0 papier, 0 outil supplémentaire
              </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-md">
                Tout se passe dans l'app que vous utilisez déjà pour vos
                interventions. Aucune formation complexe, aucune installation de
                logiciel tiers.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="p-8 sm:p-10 bg-easy-50/50 border border-easy-100 rounded-3xl relative overflow-hidden">

<iconify-icon className="absolute -right-8 -bottom-8 text-easy-100/50 w-64 h-64 pointer-events-none" icon="solar:document-text-linear" width="256"></iconify-icon>
<div className="relative z-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              C'est obligatoire depuis le 6 juillet 2024
            </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
              L'Arrêté du 29 mai 2024 rend le
              <strong>CERFA 15497*04</strong>
              obligatoire pour toute intervention sur un équipement
              thermodynamique contenant un fluide frigorigène (PAC,
              climatisation, froid). Tout opérateur attesté catégories I à IV
              est concerné.
            </p>
<div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-6">
<iconify-icon className="text-amber-600 mt-0.5 shrink-0" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-sm font-medium text-amber-900">
                Sans CERFA conforme à jour : risque de sanction administrative
                lors d'un contrôle de votre registre.
              </p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-easy-600 hover:text-easy-700 transition-colors" href="https://entreprendre.service-public.fr/vosdroits/R41627" rel="noopener noreferrer" target="_blank">
              Voir le texte officiel
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            En 3 étapes, votre CERFA est fait
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-slate-200 -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-semibold text-lg mb-6 bg-white z-10">
              1
            </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">
              Scannez l'équipement
            </h3>
<p className="text-sm text-slate-500">
              EasySAV reconnaît instantanément le modèle et pré-remplit
              automatiquement toutes les informations techniques (fluide,
              charge).
            </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-semibold text-lg mb-6 bg-white z-10">
              2
            </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">
              Complétez l'intervention
            </h3>
<p className="text-sm text-slate-500">
              Cochez les opérations réalisées (contrôle fuite, récupération...)
              et renseignez les quantités de fluide ajoutées. L'app vous guide
              pas à pas.
            </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-easy-900 border-2 border-easy-900 text-white rounded-full flex items-center justify-center font-semibold text-lg mb-6 z-10 shadow-sm">
              3
            </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">
              Signez et archivez
            </h3>
<p className="text-sm text-slate-500">
              Faites signer votre client sur l'écran. Le CERFA est généré en
              PDF, envoyé par mail et archivé instantanément dans votre espace.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Ils l'utilisent déjà sur le terrain
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">
              "J'ai arrêté les carnets papier en 1 semaine. Mes gars n'oublient
              plus de remplir les champs obligatoires, et les clients signent
              sur le téléphone, c'est beaucoup plus pro vis-à-vis d'eux."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">
                M
              </div>
<div>
<p className="text-sm font-semibold text-slate-900">Marc D.</p>
<p className="text-xs text-slate-500">
                  Gérant entreprise CVC, Lyon
                </p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">
              "Lors de mon dernier audit d'attestation de capacité, j'ai juste
              eu à exporter mon registre depuis EasySAV. Fini le stress des
              fiches perdues dans les utilitaires. Un gain de temps énorme."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">
                T
              </div>
<div>
<p className="text-sm font-semibold text-slate-900">Thomas R.</p>
<p className="text-xs text-slate-500">
                  Frigoriste indépendant, Nantes
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-16" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Inclus dans votre abonnement EasySAV
          </h2>
<p className="text-lg text-slate-500">
            Pas de surcoût, pas de module additionnel à acheter. La
            fonctionnalité CERFA est disponible dans notre offre standard.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border-2 border-easy-900 bg-white shadow-lg relative flex flex-col">
<div className="absolute top-0 right-6 transform -translate-y-1/2">
<span className="bg-easy-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Le plus choisi
              </span>
</div>
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
                Artisans &amp; TPE
              </h3>
<p className="text-sm text-slate-500 mb-6">Jusqu'à 5 techniciens</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                  25 €
                </span>
<span className="text-sm text-slate-500 font-medium">
                  HT / mois / util.
                </span>
</div>
<p className="text-xs text-easy-600 mt-2 font-medium">
                Ou 20,83 €HT en annuel (2 mois offerts)
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-easy-600 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Création de CERFA illimitée
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-easy-600 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Signature digitale
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-easy-600 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Archivage conforme 5 ans
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-easy-600 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Base de données +66k équipements
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-easy-900 rounded-xl hover:bg-easy-800 transition-colors shadow-sm" href="#">
              Commencer l'essai gratuit
            </a>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
                PME &amp; Grands Comptes
              </h3>
<p className="text-sm text-slate-500 mb-6">Plus de 5 techniciens</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">
                  Sur mesure
                </span>
</div>
<p className="text-xs text-slate-500 mt-2 opacity-0">Spacer</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Tout de l'offre TPE
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Import de votre base parc matériel
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Accompagnement déploiement
              </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
                Support prioritaire
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors" href="#demo">
              Demander une démo
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 text-center mb-10">
          Questions fréquentes
        </h2>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-2xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Le CERFA EasySAV est-il juridiquement valide ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
              Oui, la signature digitale recueillie via l'application est
              légalement reconnue. Le document PDF généré est strictement
              conforme à l'arrêté du 29 mai 2024 (formulaire CERFA 15497*04)
              exigé par l'administration.
            </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Ça fonctionne pour les PAC et les climatisations ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
              Absolument. Tout équipement thermodynamique contenant un fluide
              frigorigène fluoré est couvert. La mise à jour vers la version *04
              intègre également les nouveaux fluides HFO.
            </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Et si je n'ai pas encore de compte EasySAV ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
              Vous pouvez démarrer un essai gratuit de 14 jours directement
              depuis cette page. Vous aurez accès à toutes les fonctionnalités
              de l'application, y compris la génération de CERFA.
            </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
<span>Mes anciens CERFAs papier peuvent-ils être importés ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
              Il n'est pas nécessaire de numériser vos anciens carnets à souche.
              Vous pouvez simplement conserver vos archives papier actuelles.
              Tous vos nouveaux CERFAs créés via EasySAV constitueront votre
              nouveau registre numérique, conforme en cas de contrôle.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-easy-950 rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-easy-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-easy-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
              Mettez-vous en conformité aujourd'hui
            </h2>
<p className="text-lg text-easy-200 mb-10 max-w-2xl mx-auto">
              Rejoignez 5 500+ professionnels CVC qui gèrent leurs interventions
              avec EasySAV, sans stress administratif.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-easy-950 bg-white rounded-xl hover:bg-easy-50 transition-colors" href="#pricing">
                Essayer gratuitement
              </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-easy-800/50 border border-easy-700 rounded-xl hover:bg-easy-800 transition-colors backdrop-blur-sm" href="#demo" id="demo">
                Voir une démo
              </a>
</div>
<div className="flex items-center justify-center gap-2 text-xs font-medium text-easy-300">
<span>Sans engagement</span>
<span className="w-1 h-1 rounded-full bg-easy-600"></span>
<span>Accès immédiat</span>
<span className="w-1 h-1 rounded-full bg-easy-600"></span>
<span>Support inclus</span>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
