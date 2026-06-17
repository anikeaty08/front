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
      
<div className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">

<header className="mb-12 flex flex-col items-center text-center">
<div className="h-12 w-12 bg-zinc-900 text-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
<span className="text-xl font-semibold tracking-tighter">CBC</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">Manuel Opérationnel</h1>
<p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">Standardisation des processus internes. Destiné aux rôles de Gestionnaire et Coach Délégué.</p>
</header>

<section className="mb-8 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="24" icon="solar:target-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight">1. Vision et Standard CBC</h2>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="">
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Mission</h3>
<p className="leading-relaxed text-sm text-zinc-600">Créer un écosystème e-commerce rentable via une exécution disciplinée et validée.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Positionnement</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Programme d'accompagnement structuré, élitiste par l'effort, mesurable par les résultats.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Principe</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Exécution contrôlée. Pas de passage à l'étape suivante sans validation stricte de l'étape en cours.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-red-50/30 border border-red-100 rounded-lg p-5">
<h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Ce que le CBC n'est pas
                        </h3>
<ul className="space-y-3">
<li className="text-sm text-zinc-700 flex gap-3"><span className="text-red-400 mt-0.5">—</span> Une formation vidéo passive</li>
<li className="text-sm text-zinc-700 flex gap-3"><span className="text-red-400 mt-0.5">—</span> Un groupe motivationnel ou de discussion</li>
<li className="text-sm text-zinc-700 flex gap-3"><span className="text-red-400 mt-0.5">—</span> Un programme "facile" ou magique</li>
</ul>
</div>
<div className="bg-zinc-50 border border-zinc-100 rounded-lg p-5">
<h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Règles non négociables
                        </h3>
<ul className="space-y-3">
<li className="text-sm text-zinc-700 flex gap-3 items-start"><iconify-icon className="text-zinc-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Aucune négociation de prix autorisée.</li>
<li className="text-sm text-zinc-700 flex gap-3 items-start"><iconify-icon className="text-zinc-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Aucune promesse de garantie financière.</li>
<li className="text-sm text-zinc-700 flex gap-3 items-start"><iconify-icon className="text-zinc-400 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon> Maintien absolu du standard de qualité.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mb-8 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="24" icon="solar:users-group-two-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight">2. Rôles et Responsabilités</h2>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-200">
<th className="py-3 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider w-1/5">Domaine</th>
<th className="py-3 px-6 text-xs font-semibold text-zinc-900 uppercase tracking-wider w-2/5 border-l border-zinc-100">Gestionnaire CBC</th>
<th className="py-3 px-6 text-xs font-semibold text-zinc-900 uppercase tracking-wider w-2/5 border-l border-zinc-100">Coach Délégué</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-100">
<tr>
<td className="py-4 px-6 font-medium text-zinc-700">Mission</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Acquisition, qualification et intégration des nouveaux membres.</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Garantir l'exécution, corriger les travaux et débloquer les membres.</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-zinc-700">Responsabilités</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Filtrage des leads, closing, onboarding administratif, relance inactifs.</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Validation des étapes, support technique, maintien de la dynamique d'action.</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-zinc-700">Membres</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Interagit avant l'achat, pendant l'onboarding et en cas d'inactivité.</td>
<td className="py-4 px-6 text-zinc-600 border-l border-zinc-100">Interagit quotidiennement sur les validations et blocages techniques.</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-8 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="24" icon="solar:briefcase-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight">3. SOP — Gestionnaire CBC</h2>
</div>
<span className="text-xs font-medium px-2.5 py-1 bg-zinc-200 text-zinc-700 rounded-full">Acquisition &amp; Onboarding</span>
</div>
<div className="p-6 space-y-10">

<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5">
<h3 className="text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:checklist-linear"></iconify-icon>
                        Checklist Quotidienne
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">Répondre aux leads entrants (&lt; 12h)</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">Relancer les paiements en attente</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">Envoyer les accès aux nouveaux</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">Vérifier les membres inactifs à J+3 / J+7</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-zinc-900 mb-4 border-l-2 border-zinc-900 pl-3">A. Process &amp; Scripts de Vente</h3>
<div className="space-y-4">
<div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
<div className="flex items-center gap-2 mb-2">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-200 text-xs font-medium text-zinc-700">1</span>
<h4 className="text-sm font-semibold">Qualification approfondie</h4>
</div>
<div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">Script Standard</p>
<div className="bg-white border border-zinc-200 p-3 rounded text-sm text-zinc-700">
                                        "Avant de t'envoyer le lien, j'ai besoin de valider 3 points :<br/>
                                        1. Quel est ton objectif de revenu à 90 jours ?<br/>
                                        2. As-tu au moins 1h à 2h par jour à allouer à l'exécution pure ?<br/>
                                        3. Es-tu prêt à appliquer à la lettre sans dévier de la méthode ?"
                                    </div>
</div>
<div>
<p className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">Réponse si Hésitation</p>
<div className="bg-white border border-zinc-200 p-3 rounded text-sm text-zinc-700">
                                        "Je sens une hésitation. Le CBC n'est pas pour tout le monde. Si tu n'es pas certain d'avoir le temps ou la discipline requise en ce moment, je préfère te conseiller de reporter. On avance uniquement avec des personnes décidées. Qu'en penses-tu ?"
                                    </div>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
<div className="flex items-center gap-2 mb-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-200 text-xs font-medium text-zinc-700">2</span>
<h4 className="text-sm font-semibold">Traitement des Objections</h4>
</div>
<div className="pl-7 space-y-3">
<div className="bg-white border border-zinc-200 p-3 rounded text-sm">
<span className="font-semibold text-zinc-900 block mb-1">Objection : "C'est trop cher"</span>
<span className="text-zinc-700">"Si c'est une question de trésorerie vitale, ne le fais pas. Stabilise ta situation d'abord. Si c'est une question de valeur perçue, dis-moi précisément ce qui te fait douter par rapport au ROI attendu."</span>
</div>
<div className="bg-white border border-zinc-200 p-3 rounded text-sm">
<span className="font-semibold text-zinc-900 block mb-1">Objection : "Je n'ai pas le temps"</span>
<span className="text-zinc-700">"Le programme est architecturé pour les emplois du temps chargés. L'objectif n'est pas de travailler plus, mais d'exécuter la bonne action au bon moment. Si tu as 60 minutes de focus total par jour, c'est suffisant."</span>
</div>
<div className="bg-white border border-zinc-200 p-3 rounded text-sm">
<span className="font-semibold text-zinc-900 block mb-1">Objection : "Est-ce qu'il y a une garantie ?"</span>
<span className="text-zinc-700">"La seule garantie que nous offrons, c'est que si tu n'appliques pas, tu n'auras aucun résultat. Nous te garantissons la méthode, les process et notre suivi. Tes résultats dépendront uniquement de ton exécution."</span>
</div>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-zinc-100">
<h3 className="text-base font-semibold text-zinc-900 mb-4 border-l-2 border-zinc-900 pl-3">B. Procédure de Relance (Inactifs)</h3>
<p className="text-sm text-zinc-600 mb-4">Le suivi des inactifs est crucial pour maintenir le taux de complétion élevé.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border border-zinc-200 rounded-lg p-4 bg-white relative">
<span className="absolute top-3 right-3 text-xs font-semibold text-zinc-400">J+3</span>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chat-line-linear"></iconify-icon>
                                Relance Douce
                            </h4>
<div className="text-sm text-zinc-700 bg-zinc-50 p-3 rounded border border-zinc-100 leading-relaxed">
                                "Salut [Prénom]. Ça fait 3 jours que tu n'as rien soumis. Quel est le point de blocage actuel ? Dis-moi pour qu'on ajuste le tir."
                            </div>
</div>
<div className="border border-zinc-200 rounded-lg p-4 bg-white relative">
<span className="absolute top-3 right-3 text-xs font-semibold text-zinc-400">J+7</span>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:danger-triangle-linear"></iconify-icon>
                                Relance d'Urgence
                            </h4>
<div className="text-sm text-zinc-700 bg-zinc-50 p-3 rounded border border-zinc-100 leading-relaxed">
                                "[Prénom], 7 jours d'inactivité. Le système exige ton exécution. Si tu restes muet, ton compte risque la suspension. J'attends ton retour dans la journée."
                            </div>
</div>
<div className="border border-zinc-200 rounded-lg p-4 bg-white relative">
<span className="absolute top-3 right-3 text-xs font-semibold text-zinc-400">J+14</span>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:lock-password-linear"></iconify-icon>
                                Avis de Suspension
                            </h4>
<div className="text-sm text-zinc-700 bg-zinc-50 p-3 rounded border border-zinc-100 leading-relaxed">
                                "Suspension de compte imminente suite à 14 jours de silence radio. L'accès sera coupé demain à midi. Réponds à ce message si tu souhaites conserver ta place."
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-8 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="border-b border-zinc-100 bg-zinc-50/50 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="24" icon="solar:user-speak-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight">4. SOP — Coach Délégué</h2>
</div>
<span className="text-xs font-medium px-2.5 py-1 bg-zinc-200 text-zinc-700 rounded-full">Exécution &amp; Support Technique</span>
</div>
<div className="p-6 space-y-10">

<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:shield-check-linear"></iconify-icon>
                            Grille de Validation des Modules
                        </h3>
<span className="text-xs bg-white border border-zinc-200 px-2 py-1 rounded text-zinc-500 font-medium">À vérifier avant chaque "Approbation"</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
<div className="flex items-start gap-3">
<div className="w-4 h-4 mt-0.5 rounded border border-zinc-300 bg-white shrink-0"></div>
<span className="text-sm text-zinc-700">Le livrable correspond exactement à la consigne.</span>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 mt-0.5 rounded border border-zinc-300 bg-white shrink-0"></div>
<span className="text-sm text-zinc-700">Aucune étape du process n'a été sautée.</span>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 mt-0.5 rounded border border-zinc-300 bg-white shrink-0"></div>
<span className="text-sm text-zinc-700">La qualité d'exécution (visuelle ou texte) respecte le standard.</span>
</div>
<div className="flex items-start gap-3">
<div className="w-4 h-4 mt-0.5 rounded border border-zinc-300 bg-white shrink-0"></div>
<span className="text-sm text-zinc-700">En cas d'erreur, le feedback donné est applicable en &lt; 5 min.</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-zinc-900 mb-4 border-l-2 border-zinc-900 pl-3">A. Procédure de Correction &amp; Exemples</h3>
<p className="text-sm text-zinc-600 mb-4">Ne jamais valider un travail moyen pour "faire plaisir". La rigueur est notre service.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-red-100 rounded-lg p-4 relative shadow-sm">
<span className="absolute -top-2.5 left-4 bg-red-50 text-red-600 px-2 text-xs font-semibold uppercase tracking-wider rounded border border-red-100">Ce qu'il ne faut PAS faire</span>
<div className="text-sm text-zinc-700 mt-2 space-y-3 opacity-70">
<p>"C'est pas mal ! Attention quand même à ton texte qui est un peu long. Sinon c'est validé, passe à la suite."</p>
<p className="text-xs italic border-t border-red-100 pt-2 mt-2">→ Problème : Trop flou, validation sans correction, subjectif.</p>
</div>
</div>
<div className="bg-white border border-emerald-100 rounded-lg p-4 relative shadow-sm">
<span className="absolute -top-2.5 left-4 bg-emerald-50 text-emerald-600 px-2 text-xs font-semibold uppercase tracking-wider rounded border border-emerald-100">Exemple de Standard CBC</span>
<div className="text-sm text-zinc-700 mt-2 space-y-3">
<p>"1. Ton ciblage d'audience est correct.<br/>
                                2. Le problème : La ligne 3 de ton copy est superflue et dilue l'offre.<br/>
                                3. Action : Supprime la phrase [citation], et mets le bénéfice principal en gras.<br/>
                                4. Refuse la soumission. Soumets la correction d'ici ce soir."</p>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-zinc-100">
<h3 className="text-base font-semibold text-zinc-900 mb-4 border-l-2 border-zinc-900 pl-3">B. Scripts de Déblocage</h3>
<div className="space-y-4">
<div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-start">
<div className="w-full md:w-1/4">
<span className="text-sm font-semibold text-zinc-900 block mb-1">Blocage Technique</span>
<span className="text-xs text-zinc-500">Le membre incrimine le logiciel.</span>
</div>
<div className="w-full md:w-3/4 bg-white p-3 border border-zinc-200 rounded text-sm text-zinc-700">
                                "Le souci ne vient pas de l'outil. C'est une erreur de paramétrage à l'étape 2. Va dans [Menu] &gt; [Sous-menu] et coche [Option]. Voici la capture d'écran. Fais-le maintenant et confirme-moi."
                            </div>
</div>
<div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-start">
<div className="w-full md:w-1/4">
<span className="text-sm font-semibold text-zinc-900 block mb-1">Défaut de Mindset</span>
<span className="text-xs text-zinc-500">Travail bâclé ou recherche de raccourci.</span>
</div>
<div className="w-full md:w-3/4 bg-white p-3 border border-zinc-200 rounded text-sm text-zinc-700">
                                "L'exécution est présente, mais le niveau d'exigence n'y est pas. Tu as sauté le contrôle qualité mentionné à la minute 12 de la vidéo. On ne cherche pas à cocher une case ici, on cherche à construire un système qui vend. Reprends depuis le début en appliquant le standard."
                            </div>
</div>
<div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-start">
<div className="w-full md:w-1/4">
<span className="text-sm font-semibold text-zinc-900 block mb-1">Syndrome de l'Imposteur</span>
<span className="text-xs text-zinc-500">Le membre paralyse par peur de mal faire.</span>
</div>
<div className="w-full md:w-3/4 bg-white p-3 border border-zinc-200 rounded text-sm text-zinc-700">
                                "La perfection est l'ennemie de l'exécution. Ton brouillon actuel est à 80% bon. C'est suffisant pour tester la data sur le marché. Valide cette étape telle quelle, le marché te donnera le feedback manquant. Soumets."
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-8 bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-zinc-800">
<div className="border-b border-zinc-800 bg-zinc-950/50 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" height="24" icon="solar:document-add-linear" width="24"></iconify-icon>
<h2 className="text-lg font-semibold tracking-tight text-white">5. Bibliothèque de Templates Prêts à Copier</h2>
</div>
<span className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full">Usage Rapide</span>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="bg-zinc-800 rounded-lg p-1 group hover:ring-1 hover:ring-zinc-600 transition-all">
<div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700/50">
<span className="text-xs font-semibold text-zinc-300">Message d'Accueil (Intégration)</span>
<button className="text-zinc-400 hover:text-white transition-colors" title="Copier">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3">
<p className="text-sm text-zinc-400 font-mono leading-relaxed select-all">
                                Bienvenue dans le CBC, [Prénom]. Ton accès est activé. Voici les 4 règles d'or pour réussir ici :<br/><br/>
                                1. Tu progresses module par module.<br/>
                                2. L'application est obligatoire à chaque étape.<br/>
                                3. Tu dois soumettre le formulaire pour avancer.<br/>
                                4. Attends la validation du coach.<br/><br/>
                                Ta première action : Connecte-toi et complète le Module 0. Go.
                            </p>
</div>
</div>

<div className="bg-zinc-800 rounded-lg p-1 group hover:ring-1 hover:ring-zinc-600 transition-all">
<div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700/50">
<span className="text-xs font-semibold text-zinc-300">Félicitation Étape Clé (Coach)</span>
<button className="text-zinc-400 hover:text-white transition-colors" title="Copier">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3">
<p className="text-sm text-zinc-400 font-mono leading-relaxed select-all">
                                Excellent travail sur ce module [Prénom].<br/><br/>
                                L'exécution est précise et respecte nos standards. Tu as acquis la compétence clé de cette étape.<br/><br/>
                                Je valide ce module. Ton accès à la section suivante est maintenant débloqué. Maintiens ce niveau d'exigence.
                            </p>
</div>
</div>

<div className="bg-zinc-800 rounded-lg p-1 group hover:ring-1 hover:ring-zinc-600 transition-all">
<div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700/50">
<span className="text-xs font-semibold text-zinc-300">Procédure de Remboursement (Litige)</span>
<button className="text-zinc-400 hover:text-white transition-colors" title="Copier">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3">
<p className="text-sm text-zinc-400 font-mono leading-relaxed select-all">
                                Bonjour [Prénom], j'ai bien pris en compte ta demande.<br/><br/>
                                Comme stipulé dans nos CGV signées lors de l'inscription, notre programme est conditionné à l'exécution. Notre suivi montre une inactivité de ton côté depuis X jours sur le module Y.<br/><br/>
                                Nous ne remboursons pas l'abandon. Si tu souhaites reprendre, ton coach est à disposition.
                            </p>
</div>
</div>

<div className="bg-zinc-800 rounded-lg p-1 group hover:ring-1 hover:ring-zinc-600 transition-all">
<div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700/50">
<span className="text-xs font-semibold text-zinc-300">Escalade Technique Complèxe</span>
<button className="text-zinc-400 hover:text-white transition-colors" title="Copier">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3">
<p className="text-sm text-zinc-400 font-mono leading-relaxed select-all">
                                [Prénom], j'ai identifié un comportement anormal sur ton compte lié à une API externe.<br/><br/>
                                J'ai remonté le dossier à notre équipe technique de niveau 2. Le délai de traitement moyen est de 24h ouvrées.<br/><br/>
                                En attendant, je te débloque manuellement l'accès à la théorie du module suivant pour que tu ne perdes pas de temps.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold tracking-tight mb-4 px-2">6. Tableaux KPI CBC</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="bg-zinc-50/80 px-5 py-3 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-zinc-900">KPI Gestionnaire CBC</h3>
<iconify-icon className="text-zinc-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<table className="w-full text-left text-sm">
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="py-3 px-5 text-zinc-600">Temps de réponse initial</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900">&lt; 4h</td>
</tr>
<tr>
<td className="py-3 px-5 text-zinc-600">Ventes mensuelles</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900 bg-zinc-50">Min. 5</td>
</tr>
<tr>
<td className="py-3 px-5 text-zinc-600">Taux d'activation &lt;48h</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900 bg-zinc-50">&gt; 85%</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="bg-zinc-50/80 px-5 py-3 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-zinc-900">KPI Coach Délégué</h3>
<iconify-icon className="text-zinc-400" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<table className="w-full text-left text-sm">
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="py-3 px-5 text-zinc-600">Temps de validation max</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900">&lt; 24h</td>
</tr>
<tr>
<td className="py-3 px-5 text-zinc-600">Membres bloqués &gt;48h</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900 bg-zinc-50">0 absolu</td>
</tr>
<tr>
<td className="py-3 px-5 text-zinc-600">Taux de rétention M1</td>
<td className="py-3 px-5 text-right font-medium text-zinc-900 bg-zinc-50">&gt; 90%</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
<h2 className="text-lg font-semibold tracking-tight mb-5 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:route-linear"></iconify-icon>
                    7. Process Onboarding Staff
                </h2>
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="w-12 text-xs font-semibold text-zinc-500 pt-0.5">J 1</div>
<div className="flex-1 text-sm bg-zinc-50 border border-zinc-100 px-3 py-2 rounded">Lecture intégrale du manuel</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-xs font-semibold text-zinc-500 pt-0.5">J 2</div>
<div className="flex-1 text-sm bg-zinc-50 border border-zinc-100 px-3 py-2 rounded">Simulation de réponses (cas réels)</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-xs font-semibold text-zinc-500 pt-0.5">J 3</div>
<div className="flex-1 text-sm bg-zinc-50 border border-zinc-100 px-3 py-2 rounded">Observation direct d'un senior</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-xs font-semibold text-zinc-500 pt-0.5">J 4-5</div>
<div className="flex-1 text-sm bg-zinc-50 border border-zinc-100 px-3 py-2 rounded">Prise en charge partielle (revue avant envoi)</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 text-xs font-semibold text-zinc-500 pt-0.5">J 6-7</div>
<div className="flex-1 text-sm bg-zinc-50 border border-zinc-100 px-3 py-2 rounded">Autonomie surveillée</div>
</div>
</div>
<div className="mt-6 pt-5 border-t border-zinc-100">
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-2">Critères d'évaluation</p>
<div className="flex flex-wrap gap-2 mb-3">
<span className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">Respect scripts</span>
<span className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">Respect ton</span>
<span className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">Respect KPI</span>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
<h2 className="text-lg font-semibold tracking-tight mb-5 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
                    8. Système de Reporting
                </h2>
<p className="text-sm text-zinc-600 mb-5">Format hebdomadaire obligatoire. À transmettre via le canal dédié (Vendredi 18h max).</p>
<div className="space-y-6">
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 border-b border-zinc-100 pb-1">Trame Reporting Gestionnaire :</h3>
<div className="bg-zinc-50 p-3 rounded border border-zinc-200 font-mono text-xs text-zinc-600 leading-relaxed">
                            - Nouveaux leads traités : X<br/>
                            - Closings réalisés : X<br/>
                            - Inactifs relancés J+7 : X<br/>
                            - Insight marché : [Objection principale entendue cette semaine]
                        </div>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 border-b border-zinc-100 pb-1">Trame Reporting Coach :</h3>
<div className="bg-zinc-50 p-3 rounded border border-zinc-200 font-mono text-xs text-zinc-600 leading-relaxed">
                            - Modules validés : X<br/>
                            - Temps de réponse moyen : Xh<br/>
                            - Goulot d'étranglement : [Module où les membres bloquent le plus]<br/>
                            - Action corrective proposée : [Ex: Refaire le tuto vidéo X]
                        </div>
</div>
</div>
</section>
</div>

<section className="bg-zinc-900 rounded-xl shadow-md p-8 md:p-10 text-center relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
<h2 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">9. La Règle d'Or CBC</h2>
<p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight mb-6">
                Le standard est supérieur à l'individu.
            </p>
<p className="text-base text-zinc-300 font-medium mb-8 max-w-lg mx-auto">
                L'utilisation des templates est strictement obligatoire. Aucune déviation du process n'est tolérée sans validation préalable.
            </p>
<div className="pt-8 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium text-zinc-400">
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Remplacement Rapide
                </div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
                    Standard Homogène
                </div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                    Scalabilité Facilitée
                </div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:link-broken-linear" width="20"></iconify-icon>
                    Indépendance Accrue
                </div>
</div>
</section>
</div>

    </>
  );
}
