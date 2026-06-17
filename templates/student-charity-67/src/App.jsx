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
      

<div className="bg-amber-50 border-b border-amber-100 py-3">
<div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-2 text-sm font-medium text-amber-900">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Besoin d'aide ? Nos distributions sont ouvertes à tous les étudiants, sans justificatif et anonymes.</span>
</div>
</div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 text-xl font-semibold text-slate-900 tracking-tighter" href="/home">
<div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="text-sm font-semibold tracking-tight">A</span>
</div>
                AIDETU
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#prochains-evenements">Événements</a>
<a className="hover:text-slate-900 transition-colors" href="#a-propos">À propos</a>
<a className="hover:text-slate-900 transition-colors" href="#benevoles">Devenir bénévole</a>
<a className="hover:text-slate-900 transition-colors" href="#dons">Faire un don</a>
</div>

<button aria-label="Menu" className="md:hidden p-2 text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-3">
<a className="hover:text-slate-900 text-sm font-medium text-slate-600" href="/espace-b-n-vole">Espace bénévole</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all shadow-sm shadow-slate-300/50" href="#dons">
                    Soutenir
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f1f5f9_100%)]"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Prochaine distribution : Mercredi 26 Février
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Des étudiants,<br/>pour les étudiants.
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed font-normal">
                L'association caritative de l'IUT Lyon 1. Nous luttons contre la précarité étudiante à travers des distributions alimentaires et une aide matérielle.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#prochains-evenements">
                    Voir les distributions
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-all" href="#benevoles">
                    Devenir bénévole
                </a>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20 md:mt-28">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 pt-12">
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">2 500+</p>
<p className="text-sm text-slate-500 mt-1">Étudiants aidés</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">12T</p>
<p className="text-sm text-slate-500 mt-1">Denrées distribuées</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">45</p>
<p className="text-sm text-slate-500 mt-1">Bénévoles actifs</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">100%</p>
<p className="text-sm text-slate-500 mt-1">Gratuit &amp; Anonyme</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-slate-50/50 border-y border-slate-200/60" id="prochains-evenements">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">Calendrier des distributions</h2>
<p className="text-slate-500 max-w-md">Retrouvez-nous à l'IUT B – Gratte-Ciel. Aucun justificatif n'est demandé.</p>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
                        Ajouter au calendrier
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
                        iCal
                    </button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-900 group-hover:bg-indigo-600 transition-colors"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">Prochainement</span>
<h3 className="text-lg font-semibold text-slate-900">Mercredi 26 Février</h3>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">Distribution</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>12h00 – 13h30 &amp; 17h30 – 18h30</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>IUT B, 17 rue de France, Villeurbanne</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:bag-heart-linear" width="18"></iconify-icon>
<span>Alimentaire &amp; Hygiène</span>
</div>
</div>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs text-slate-400">Accès libre</span>
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors" href="#">
                            Détails <iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-900 group-hover:bg-indigo-600 transition-colors"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">Prochainement</span>
<h3 className="text-lg font-semibold text-slate-900">Jeudi 27 Février</h3>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">Distribution</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>12h00 – 13h30 &amp; 17h30 – 18h30</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>IUT B, 17 rue de France, Villeurbanne</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:bag-heart-linear" width="18"></iconify-icon>
<span>Alimentaire &amp; Hygiène</span>
</div>
</div>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs text-slate-400">Accès libre</span>
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors" href="#">
                            Détails <iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center text-sm text-slate-500">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                    Filtres :
                </span>
<div className="flex flex-wrap justify-center gap-2">
<button className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition">Distributions</button>
<button className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition">Réunions AG</button>
<button className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition">Événements spéciaux</button>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-white" id="a-propos">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-6">Notre mission</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Née de l'initiative d'étudiants de l'IUT Lyon 1, AIDETU a pour vocation de venir en aide à tous les étudiants en situation de précarité. Nous croyons fermement que la réussite académique ne devrait pas être compromise par des difficultés matérielles.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Basés à Villeurbanne, nous organisons chaque semaine des collectes et des distributions pour offrir des produits de première nécessité (alimentaire, hygiène) dans un cadre bienveillant et sans jugement.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-1">Communauté</h4>
<p className="text-xs text-slate-500 leading-snug">Créer du lien social et rompre l'isolement étudiant.</p>
</div>
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-1">Confidentialité</h4>
<p className="text-xs text-slate-500 leading-snug">Respect total de l'anonymat des bénéficiaires.</p>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-slate-200 space-y-12">
<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-300 ring-4 ring-slate-50"></div>
<span className="text-xs font-medium text-slate-400">2021</span>
<h3 className="text-lg font-medium text-slate-900 mt-1">Création de l'association</h3>
<p className="text-sm text-slate-500 mt-2">Fondation par un groupe d'étudiants de l'IUT face à la crise sanitaire.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-300 ring-4 ring-slate-50"></div>
<span className="text-xs font-medium text-slate-400">2023</span>
<h3 className="text-lg font-medium text-slate-900 mt-1">Nouveau local à Gratte-Ciel</h3>
<p className="text-sm text-slate-500 mt-2">Déménagement au 17 rue de France pour augmenter la capacité de stockage.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-900 ring-4 ring-indigo-50"></div>
<span className="text-xs font-medium text-indigo-600">Aujourd'hui</span>
<h3 className="text-lg font-medium text-slate-900 mt-1">Expansion des aides</h3>
<p className="text-sm text-slate-500 mt-2">Lancement des aides produits d'hygiène et vêtements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="benevoles">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
<div>
<span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30 mb-6">Rejoins l'équipe</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Deviens acteur de la solidarité</h2>
<p className="text-slate-400 mb-8 text-lg leading-relaxed">
                    Donner de ton temps, c'est aussi important que les dons financiers. Que ce soit pour 1h ou pour l'année, chaque geste compte.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:box-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-white text-sm">Logistique &amp; Tri</h4>
<p className="text-xs text-slate-500 mt-1">Aide-nous à trier les dons et préparer les paniers.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:hand-shake-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-white text-sm">Distributions</h4>
<p className="text-xs text-slate-500 mt-1">Accueille les étudiants et distribue les denrées.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:megaphone-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-white text-sm">Communication</h4>
<p className="text-xs text-slate-500 mt-1">Fais connaître l'asso sur les réseaux et le campus.</p>
</div>
</li>
</ul>
</div>

<div className="bg-white rounded-xl p-6 md:p-8 text-slate-900 shadow-2xl shadow-black/20">
<h3 className="text-xl font-semibold tracking-tight mb-6">Formulaire d'inscription</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Merci ! Nous te recontacterons bientôt.')">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Prénom</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" placeholder="Alex" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Nom</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" placeholder="Dupont" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email étudiant</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" placeholder="alex.dupont@etu.univ-lyon1.fr" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Formation &amp; Année</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" placeholder="BUT Informatique 2ème année" type="text"/>
</div>
<div className="space-y-2 pt-2">
<span className="text-xs font-medium text-slate-700 block">Disponibilités (préférences)</span>
<div className="flex flex-wrap gap-2">
<label className="inline-flex cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all select-none">Midi</span>
</label>
<label className="inline-flex cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all select-none">Soirée</span>
</label>
<label className="inline-flex cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all select-none">Week-end</span>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-md text-sm hover:bg-slate-800 transition shadow-lg shadow-slate-900/10" type="submit">
                            Envoyer ma candidature
                        </button>
<p className="text-[10px] text-slate-400 mt-2 text-center">
                            En envoyant ce formulaire, j'accepte d'être recontacté par AIDETU.
                        </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200" id="dons">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Soutenir AIDETU</h2>
<p className="text-slate-500 mb-10 max-w-lg mx-auto">Vos dons nous permettent d'acheter des denrées fraîches et de maintenir nos actions toute l'année.</p>

<div className="inline-flex p-1 bg-white rounded-lg border border-slate-200 mb-10 shadow-sm">
<button className="px-6 py-2 rounded-md text-sm font-medium bg-slate-900 text-white shadow-sm transition">Don Financier</button>
<button className="px-6 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 transition">Don Matériel</button>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 max-w-3xl mx-auto overflow-hidden text-left">
<div className="p-8">
<div className="mb-8">
<label className="text-sm font-medium text-slate-900 mb-3 block">Choisir un montant</label>
<div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
</div>
<p className="text-xs text-slate-400 mt-2">1€ = 3 repas complets.</p>
</div>

<div className="bg-indigo-50/50 rounded-lg p-4 mb-6 border border-indigo-100 flex items-start gap-4">
<iconify-icon className="text-indigo-600 shrink-0 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div className="text-sm text-indigo-900">
                             100% de votre don est utilisé pour l'achat de denrées et le fonctionnement de l'association. 
                        </div>
</div>

<div className="flex items-start gap-3 mb-6">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" id="leaderboard" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-slate-900" htmlFor="leaderboard">Apparaître dans le classement des donateurs</label>
<p className="text-slate-500 text-xs">Si coché, votre prénom et initiale seront affichés dans le tableau ci-dessous.</p>
</div>
</div>
<button className="hover:bg-slate-800 transition flex shadow-indigo-500/10 font-semibold text-white bg-slate-900 w-full rounded-lg pt-3 pb-3 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://www.leetchi.com/fr/c/aidetu-7329495?utm_source=copylink&amp;utm_medium=social_sharing'" role="button">
                        Procéder au paiement sécurisé <iconify-icon icon="solar:card-linear"></iconify-icon>
</button>
<div className="mt-4 flex justify-center gap-4 text-slate-400 grayscale opacity-60">

<iconify-icon icon="logos:stripe" width="30"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon icon="logos:visa" width="30"></iconify-icon>
</div>
</div>
</div>

<div className="mt-16 max-w-3xl mx-auto">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Classement des donateurs 2025</h3>
<select className="text-xs bg-white border border-slate-200 rounded px-2 py-1 text-slate-600 focus:outline-none">
<option>Montant total</option>
<option>Nombre de dons</option>
</select>
</div>
<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium">Rang</th>
<th className="px-6 py-3 font-medium">Donateur</th>
<th className="px-6 py-3 font-medium text-right">Montant</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-3 font-medium text-slate-900">#1</td>
<td className="px-6 py-3 text-slate-600 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold">🥇</div>
                                    Anonyme
                                </td>
<td className="px-6 py-3 text-right font-medium text-slate-900">500 €</td>
</tr>
<tr>
<td className="px-6 py-3 font-medium text-slate-900">#2</td>
<td className="px-6 py-3 text-slate-600 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold">🥈</div>
                                    Julie M.
                                </td>
<td className="px-6 py-3 text-right font-medium text-slate-900">250 €</td>
</tr>
<tr>
<td className="px-6 py-3 font-medium text-slate-900">#3</td>
<td className="px-6 py-3 text-slate-600 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-amber-700/10 text-amber-800 flex items-center justify-center text-[10px] font-bold">🥉</div>
                                    Thomas B.
                                </td>
<td className="px-6 py-3 text-right font-medium text-slate-900">120 €</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-semibold text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-semibold tracking-tight">A</span>
</div>
                        AIDETU
                    </a>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Association étudiante de l'IUT Lyon 1, engagée contre la précarité et pour l'égalité des chances.
                    </p>
<div className="flex gap-4">
<a className="hover:text-slate-900 transition text-slate-400" href="https://www.instagram.com/aide.etudiant?igsh=MXFra2YyZ2tkbHZiZA%3D%3D&amp;utm_source=qr"><iconify-icon className="hover:grayscale-0 transition grayscale" height="20" icon="logos:instagram-icon" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition" href="#"><iconify-icon className="grayscale hover:grayscale-0 transition" icon="logos:linkedin-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Navigation</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition" href="#">Accueil</a></li>
<li><a className="hover:text-indigo-600 transition" href="#a-propos">À propos</a></li>
<li><a className="hover:text-indigo-600 transition" href="#prochains-evenements">Calendrier</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Légal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition" href="#">Mentions légales</a></li>
<li><a className="hover:text-indigo-600 transition" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-indigo-600 transition" href="#">Statuts de l'association</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Nous trouver</h4>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2021 AIDETU. Tous droits réservés.</p>
<p>Développé avec ❤️ par des étudiants.</p>
</div>
</div>
</footer>

    </>
  );
}
