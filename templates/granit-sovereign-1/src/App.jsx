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
      

<div className="absolute top-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none z-0"></div>
<div className="absolute top-[30%] right-[-10%] w-[40%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none z-0 opacity-20"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800/50 bg-neutral-950/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-white" href="#">GRANIT</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">Produit</a>
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">Établissements</a>
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">Sécurité &amp; Souveraineté</a>
<a className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">Ressources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-neutral-400 hover:text-neutral-50 transition-colors" href="#">Connexion</a>
<a className="px-4 py-2 text-sm font-normal text-neutral-950 bg-neutral-50 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Demander une démo
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-normal text-indigo-300 mb-8 hover:bg-indigo-500/20 transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                Granit intègre désormais les modèles Mistral AI
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 leading-[1.15]">
                L'IA générative souveraine<br className="hidden md:block"/> pour votre établissement.
            </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Automatisez la saisie et le traitement de vos documents administratifs. Augmentez la productivité de vos agents tout en garantissant la confidentialité absolue de vos données sensibles.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]" href="#">
                    Découvrir la solution
                </a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-normal text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
                    Contacter notre équipe
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent blur-2xl rounded-3xl"></div>
<div className="relative rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

<div className="hidden md:flex w-64 border-r border-neutral-800/50 bg-neutral-900/30 flex-col p-4">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-6 h-6 rounded-md bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
<span className="text-[10px] font-medium text-indigo-400 tracking-tighter">GR</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-200">Espace Admissions</span>
</div>
<div className="space-y-1">
<div className="px-2 py-1.5 rounded-md bg-neutral-800/50 text-xs font-medium text-neutral-200 flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:inbox-in-linear"></iconify-icon> À traiter
                            </div>
<span className="text-[10px] font-medium bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded">12</span>
</div>
<div className="px-2 py-1.5 rounded-md text-xs font-normal text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors flex items-center gap-2 cursor-pointer">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Dossiers patients
                        </div>
<div className="px-2 py-1.5 rounded-md text-xs font-normal text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30 transition-colors flex items-center gap-2 cursor-pointer">
<iconify-icon icon="solar:history-linear"></iconify-icon> Historique des extractions
                        </div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-[400px]">

<div className="h-14 border-b border-neutral-800/50 flex items-center justify-between px-6 bg-neutral-900/10">
<span className="text-sm font-medium text-neutral-300 tracking-tight">Traitement Automatique - Dossier #8492</span>

<div className="flex items-center gap-2 bg-neutral-900/50 px-3 py-1.5 rounded-full border border-neutral-800">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs text-neutral-400 font-medium">Hébergé en France</span>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative bg-neutral-950/50">
<div className="absolute top-[20%] left-[50%] w-[30%] h-[40%] rounded-full bg-indigo-600/5 blur-[80px] pointer-events-none"></div>

<div className="flex items-start gap-4 self-end max-w-[80%]">
<div className="px-4 py-3 rounded-2xl rounded-tr-sm bg-neutral-800 flex items-center gap-3 shadow-lg border border-neutral-700/50">
<div className="bg-neutral-900 p-2 rounded-lg border border-neutral-700/50">
<iconify-icon className="text-blue-400 text-xl" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium">cni_recto_verso_patient.jpg</p>
<p className="text-xs text-neutral-500">Document d'identité scanné • 1.2 MB</p>
</div>
</div>
</div>

<div className="flex items-start gap-4 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(79,70,229,0.2)]">
<span className="text-xs font-medium text-indigo-400 tracking-tighter">GR</span>
</div>
<div className="px-5 py-4 rounded-2xl rounded-tl-sm bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 font-normal leading-relaxed w-full shadow-lg">
<div className="flex items-center justify-between mb-4 border-b border-neutral-800/80 pb-3">
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Extraction des données réussie
                                    </span>
<span className="text-[10px] text-neutral-500 bg-neutral-800/50 px-2 py-0.5 rounded-full border border-neutral-700/50">Confiance: 99.8%</span>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6">
<div className="bg-neutral-950/50 p-2.5 rounded-lg border border-neutral-800/50">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-medium">Type de document</p>
<p className="text-sm text-neutral-200">Carte Nationale d'Identité</p>
</div>
<div className="bg-neutral-950/50 p-2.5 rounded-lg border border-neutral-800/50">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-medium">Nom de naissance</p>
<p className="text-sm text-neutral-200">DUPONT</p>
</div>
<div className="bg-neutral-950/50 p-2.5 rounded-lg border border-neutral-800/50">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-medium">Prénom(s)</p>
<p className="text-sm text-neutral-200">Jean, Michel</p>
</div>
<div className="bg-neutral-950/50 p-2.5 rounded-lg border border-neutral-800/50">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-medium">Date de naissance</p>
<p className="text-sm text-neutral-200">14/05/1978</p>
</div>
</div>
<div className="mt-5 pt-4 border-t border-neutral-800/80 flex justify-end gap-3">
<button className="px-3 py-1.5 text-neutral-400 text-xs hover:text-neutral-200 transition-colors flex items-center gap-1">
<iconify-icon icon="solar:pen-linear"></iconify-icon> Éditer
                                    </button>
<button className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-medium rounded-lg border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:database-export-linear"></iconify-icon> Intégrer au DPI
                                    </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-neutral-800/50 bg-neutral-950">
<div className="relative flex items-center">
<input className="w-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-neutral-500" placeholder="Glissez-déposez un document (Carte d'identité, mutuelle, ordonnance)..." type="text"/>
<button className="absolute right-2 p-1.5 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:upload-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
<div className="p-5 rounded-2xl border border-neutral-800/50 bg-neutral-900/40 backdrop-blur-md flex items-center justify-between group hover:border-neutral-700 transition-colors">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase mb-1">Gain de temps</span>
<span className="text-sm text-neutral-200 font-medium">Récupérées par jour</span>
</div>
<div className="flex items-baseline gap-1 text-indigo-400">
<span className="text-3xl font-medium tracking-tighter">3</span>
<span className="text-base font-medium">heures</span>
</div>
</div>
<div className="p-5 rounded-2xl border border-neutral-800/50 bg-neutral-900/40 backdrop-blur-md flex items-center justify-between group hover:border-neutral-700 transition-colors">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase mb-1">Fiabilité</span>
<span className="text-sm text-neutral-200 font-medium">Sur les traitements automatisés</span>
</div>
<div className="flex items-baseline gap-1 text-emerald-400">
<span className="text-3xl font-medium tracking-tighter">99</span>
<span className="text-base font-medium">%</span>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative z-10 px-6 border-t border-neutral-800/30 bg-neutral-900/10">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Quel que soit votre établissement,<br/> Granit s'adapte.</h2>
<p className="text-sm md:text-base text-neutral-400 font-normal">Une plateforme conçue pour répondre aux exigences réglementaires et opérationnelles des acteurs publics et privés de premier plan.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-indigo-500/30 transition-colors group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-neutral-200 mb-2">Collectivités Territoriales</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">
                        Mairies, Départements, Régions. Simplifiez vos démarches, l'analyse des délibérations et la relation citoyenne.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-indigo-500/30 transition-colors group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:hospital-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-neutral-200 mb-2">Santé &amp; CHU</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">
                        Hôpitaux publics, cliniques, ARS. Gagnez du temps sur les saisies de dossiers et la gestion administrative.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-indigo-500/30 transition-colors group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-neutral-200 mb-2">Ministères &amp; Agences</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">
                        Services de l'État, opérateurs publics. Exploitez vos vastes bases documentaires en toute sécurité souveraine.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-indigo-500/30 transition-colors group text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-indigo-400 transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-neutral-200 mb-2">OIV &amp; Entreprises</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">
                        Acteurs stratégiques, industries régulées. Protégez vos secrets industriels tout en bénéficiant de l'IA générative.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">L'IA sans compromis sur la souveraineté</h2>
<p className="text-sm md:text-base text-neutral-400 font-normal">Conçue dès le premier jour pour protéger les données les plus sensibles de la nation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
<div className="mb-4 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 mb-2">Hébergement 100% Français</h3>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">
                        Infrastructures qualifiées SecNumCloud (en cours) ou certifiées HDS. Vos données ne quittent jamais le territoire national.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
<div className="mb-4 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 mb-2">Modèles Open Source</h3>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">
                        Intégration native des modèles d'excellence européens (Mistral AI, Llama). Indépendance technologique totale garantie.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
<div className="mb-4 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:lock-password-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-neutral-100 mb-2">Herméticité des données</h3>
<p className="text-sm text-neutral-400 font-normal leading-relaxed">
                        Isolation forte par locataire. Vos documents et requêtes ne servent en aucun cas à ré-entraîner les modèles de fondation.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6 border-t border-neutral-800/30">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-normal text-neutral-400">
<iconify-icon icon="solar:folder-open-linear"></iconify-icon> Connectivité Système
                </div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
                    S'intègre naturellement<br/> à vos logiciels métiers.
                </h2>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed max-w-lg">
                    Connectez Granit à vos Dossiers Patients Informatisés (DPI), espaces SharePoint, ou GED existants. Transférez les données extraites automatiquement sans double saisie.
                </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Respecte vos politiques de droits d'accès existantes (SSO)
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        Traçabilité complète des actions et modifications
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
                        API disponible pour les intégrations sur mesure
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/80 p-1 backdrop-blur-xl shadow-2xl">
<div className="border border-neutral-800/50 rounded-xl bg-neutral-950 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-800/50 flex items-center gap-3 bg-neutral-900/30">
<iconify-icon className="text-neutral-500" icon="solar:database-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Sources de données connectées</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:laptop-3-linear"></iconify-icon>
<span className="text-sm text-neutral-200">Logiciel DPI Principal</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Actif</span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:cloud-linear"></iconify-icon>
<span className="text-sm text-neutral-200">GED Alfresco</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Synchronisé</span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:server-square-update-linear"></iconify-icon>
<span className="text-sm text-neutral-200">Serveur HL7</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">En cours...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6">
<div className="max-w-4xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-900/30 overflow-hidden relative backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-neutral-900/20"></div>
<div className="relative p-12 md:p-20 text-center">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-6">Équipez vos agents d'une IA souveraine</h2>
<p className="text-sm md:text-base text-neutral-400 font-normal mb-8 max-w-xl mx-auto">
                    Rejoignez les institutions qui ont déjà fait le choix de Granit pour moderniser leurs processus administratifs sans compromettre la sécurité.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 text-sm font-medium text-neutral-950 bg-white rounded-full hover:bg-neutral-200 transition-colors" href="#">
                        Demander une démo
                    </a>
<a className="px-8 py-3 text-sm font-normal text-neutral-300 bg-transparent border border-neutral-700 rounded-full hover:bg-neutral-800 transition-colors" href="#">
                        Discuter de votre projet
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800/50 bg-neutral-950 pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-medium tracking-tighter text-white mb-4 block">GRANIT</span>
<p className="text-xs text-neutral-500 font-normal max-w-xs leading-relaxed">
                    Plateforme d'IA générative souveraine conçue pour les établissements publics et les entreprises stratégiques.
                </p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-200 tracking-wider uppercase mb-4">Solution</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Plateforme Agent</a></li>
<li><a className="hover:text-white transition-colors" href="#">Connecteurs de données</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sécurité &amp; Souveraineté</a></li>
<li><a className="hover:text-white transition-colors" href="#">Modèles d'IA</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-200 tracking-wider uppercase mb-4">Établissements</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Collectivités territoriales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Secteur Santé</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ministères &amp; Agences</a></li>
<li><a className="hover:text-white transition-colors" href="#">OIV &amp; Grandes entreprises</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-200 tracking-wider uppercase mb-4">Légal</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sécurité</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2024 Granit AI. Conçu et hébergé en France.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
