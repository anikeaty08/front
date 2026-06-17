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



        // Simple logic to switch between "Pages" for the demo
        function switchTab(tabId) {
            // Hide all content
            const contents = document.querySelectorAll('.page-content');
            contents.forEach(content => content.classList.remove('active'));
            
            // Show selected content
            const selected = document.getElementById(tabId) || document.getElementById('expert'); // default to expert if home clicked
            if(tabId === 'home') {
                 // Reset to Expert view as Home for this demo context
                 document.getElementById('expert').classList.add('active');
            } else {
                 selected.classList.add('active');
            }

            // Update Header Links State (Visual only)
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                if(link.getAttribute('onclick').includes(tabId)) {
                    link.classList.add('text-slate-900');
                    link.classList.remove('text-slate-600');
                } else {
                    link.classList.remove('text-slate-900');
                    link.classList.add('text-slate-600');
                }
            });

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Initialize defaults
        switchTab('expert');
    
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
      

<header className="fixed top-0 w-full z-50 border-b glass-panel border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex-shrink-0 flex items-center gap-0.5 cursor-pointer" href="#" onclick="switchTab('home')">
<div className="flex items-center justify-center">
<span className="text-xl tracking-tighter text-slate-900 font-semibold">ls</span>
</div>
<span className="text-[#5261d5] tracking-tighter text-xl font-semibold">compta</span>
</a>

<nav className="hidden lg:flex space-x-8 h-full items-center">
<button className="nav-link text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 flex items-center gap-1" onclick="switchTab('expert')">
                        Expert-comptable
                    </button>
<button className="nav-link text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 flex items-center gap-1" onclick="switchTab('creation')">
                        Création d'entreprise
                    </button>
<button className="nav-link text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 flex items-center gap-1" onclick="switchTab('tarifs')">
                        Tarifs
                    </button>
<button className="nav-link text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 flex items-center gap-1" onclick="switchTab('ressources')">
                        Ressources
                    </button>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Espace Client</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg bg-[#5261d5] hover:bg-[#4351b5] transition-all shadow-sm shadow-[#5261d5]/20 text-white" href="#">
                        Devis gratuit
                    </a>
</div>
</div>
</div>
</header>

<main className="pt-16 flex-grow relative min-h-screen">

<div className="page-content active" id="expert">

<section className="relative pt-20 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-6">
<iconify-icon className="text-[#5261d5]" icon="solar:star-linear"></iconify-icon>
<span>Expertise certifiée OEC</span>
</div>
<h1 className="text-4xl lg:text-5xl tracking-tight font-semibold text-slate-900 mb-6 leading-[1.15]">
                                La comptabilité,<br/>
<span className="text-[#5261d5]">moins le stress.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                                Déléguez vos obligations comptables, fiscales et sociales à une équipe dédiée. Des outils modernes pour piloter, des experts pour conseiller.
                            </p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-[#5261d5] hover:bg-[#4351b5] text-white rounded-xl text-sm font-medium transition-all shadow-lg shadow-[#5261d5]/20">
                                    Prendre rendez-vous
                                </button>
<button className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-medium transition-all">
                                    Découvrir nos outils
                                </button>
</div>
</div>
<div className="relative">

<div className="aspect-square rounded-3xl bg-slate-50 border border-slate-100 p-8 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5261d5] rounded-full blur-[100px] opacity-10"></div>
<div className="relative z-10 grid grid-cols-2 gap-4 h-full">
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between">
<iconify-icon className="text-[#5261d5] mb-4" icon="solar:graph-new-up-linear" width="32"></iconify-icon>
<div>
<div className="text-2xl font-bold text-slate-900 mb-1">+24%</div>
<div className="text-xs text-slate-400">Croissance CA</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between mt-8">
<iconify-icon className="text-emerald-500 mb-4" icon="solar:bill-check-linear" width="32"></iconify-icon>
<div>
<div className="text-sm font-semibold text-slate-900 mb-1">TVA Déclarée</div>
<div className="text-xs text-slate-400">À temps, chaque mois</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Notre accompagnement complet</h2>
<p className="text-slate-500">Une suite de services conçue pour couvrir l'intégralité des besoins de votre entreprise.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5261d5]/30 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-[#5261d5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Comptabilité &amp; Bilan</h3>
<p className="text-sm text-slate-500 mb-4">Tenue complète, révision, établissement des comptes annuels et liasse fiscale.</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-[#5261d5]" icon="solar:check-circle-linear"></iconify-icon> Bilan &amp; Compte de résultat</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#5261d5]" icon="solar:check-circle-linear"></iconify-icon> Situations intermédiaires</li>
</ul>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5261d5]/30 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Social &amp; RH</h3>
<p className="text-sm text-slate-500 mb-4">Gestion de la paie, contrats de travail et déclarations sociales (DSN).</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-600" icon="solar:check-circle-linear"></iconify-icon> Bulletins de paie</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-600" icon="solar:check-circle-linear"></iconify-icon> Gestion des entrées/sorties</li>
</ul>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5261d5]/30 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Juridique annuel</h3>
<p className="text-sm text-slate-500 mb-4">Secrétariat juridique, assemblées générales et formalités exceptionnelles.</p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon> PV d'Assemblée Générale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon> Dépôt des comptes</li>
</ul>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5261d5]/30 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Conseil &amp; Gestion</h3>
<p className="text-sm text-slate-500 mb-4">Tableaux de bord, prévisionnels et optimisation de la rémunération du dirigeant.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5261d5]/30 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fiscalité personnelle</h3>
<p className="text-sm text-slate-500 mb-4">Aide à la déclaration d'impôt sur le revenu (IR) et IFI pour les dirigeants.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="creation">
<section className="pt-32 pb-24 relative overflow-hidden bg-slate-900">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5261d5] rounded-full blur-[120px] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium mb-6 backdrop-blur-sm">Offre Spéciale</span>
<h1 className="text-4xl lg:text-6xl tracking-tight font-semibold text-white mb-6">
                        Lancez votre entreprise<br/>
<span className="text-[#5261d5]">Gratuitement.</span>
</h1>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                        Nous prenons en charge les honoraires de création (rédaction des statuts, formulaire M0) pour toute souscription à un pack comptable.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-50 rounded-xl text-sm font-semibold transition-all">
                            Créer ma société maintenant
                        </button>
<button className="px-8 py-3.5 bg-transparent border border-slate-700 text-white hover:bg-white/5 rounded-xl text-sm font-semibold transition-all">
                            Parler à un expert
                        </button>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comment ça marche ?</h2>
<p className="text-slate-500">Kbis en main en 48h après signature des statuts.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="relative bg-white pt-4">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-6 text-[#5261d5] z-10">
<iconify-icon icon="solar:file-text-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-semibold text-slate-900 mb-2">1. Formulaire</h3>
<p className="text-center text-xs text-slate-500 px-4">Vous remplissez un questionnaire simple en 5 minutes sur votre projet.</p>
</div>

<div className="relative bg-white pt-4">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-6 text-[#5261d5] z-10">
<iconify-icon icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-semibold text-slate-900 mb-2">2. Statuts</h3>
<p className="text-center text-xs text-slate-500 px-4">Nos juristes rédigent vos statuts sur-mesure (SASU, EURL, SARL...).</p>
</div>

<div className="relative bg-white pt-4">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-6 text-[#5261d5] z-10">
<iconify-icon icon="solar:bank-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-semibold text-slate-900 mb-2">3. Dépôt capital</h3>
<p className="text-center text-xs text-slate-500 px-4">Vous déposez votre capital social auprès de notre banque partenaire (Qonto, Shine...).</p>
</div>

<div className="relative bg-white pt-4">
<div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-900 shadow-lg flex items-center justify-center mx-auto mb-6 text-white z-10">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-center font-semibold text-slate-900 mb-2">4. Kbis</h3>
<p className="text-center text-xs text-slate-500 px-4">Nous transmettons le dossier au Greffe. Vous recevez votre Kbis.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="tarifs">
<section className="pt-24 pb-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Des tarifs clairs, sans surprise</h1>
<p className="text-lg text-slate-500">Choisissez le pack adapté à votre stade de développement. Changement d'offre possible à tout moment.</p>

<div className="mt-8 inline-flex bg-slate-100 p-1 rounded-xl">
<button className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-slate-900">Mensuel</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Annuel (-10%)</button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="border border-slate-200 rounded-3xl p-8 bg-white hover:border-slate-300 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-slate-500">Essentiel</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">79€</span>
<span className="text-slate-500">/mois</span>
</div>
<p className="text-xs text-slate-500 mb-8 h-10">Pour les consultants, freelances et prestataires de services sans salariés.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8">Commencer</button>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Comptabilité de trésorerie</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Déclarations TVA</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Bilan &amp; Liasse Fiscale</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Accès app mobile</span>
</div>
</div>
</div>

<div className="border border-[#5261d5]/20 rounded-3xl p-8 bg-slate-900 relative shadow-xl shadow-[#5261d5]/10 transform md:-translate-y-4">
<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#5261d5] to-purple-500 rounded-t-3xl"></div>
<div className="mb-4 flex justify-between items-center">
<span className="text-sm font-medium text-white">Croissance</span>
<span className="text-[10px] font-bold uppercase tracking-wide bg-[#5261d5] text-white px-2 py-0.5 rounded">Populaire</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">129€</span>
<span className="text-slate-400">/mois</span>
</div>
<p className="text-xs text-slate-400 mb-8 h-10">Pour les petites entreprises (SAS, SARL) avec du volume ou des stocks.</p>
<button className="w-full py-2.5 bg-[#5261d5] hover:bg-[#4351b5] rounded-xl text-sm font-medium text-white transition-colors mb-8">Choisir ce pack</button>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5261d5] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Tout du pack Essentiel</strong></span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5261d5] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Comptabilité d'engagement</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5261d5] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Conseil illimité (email/tél)</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#5261d5] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Tableau de bord de gestion</span>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-3xl p-8 bg-white hover:border-slate-300 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-slate-500">Complet</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">Sur devis</span>
</div>
<p className="text-xs text-slate-500 mb-8 h-10">Pour les PME avec salariés et besoins spécifiques (reporting, analytique).</p>
<button className="w-full py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8">Nous contacter</button>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Gestion sociale (Paie)</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Comptabilité analytique</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Reporting trimestriel</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Juridique annuel inclus</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="ressources">
<section className="bg-slate-50 py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Bibliothèque de ressources</h1>
<p className="text-slate-500 text-lg mb-8">Guides pratiques, simulateurs et actualités fiscales pour gérer votre boîte comme un pro.</p>
<div className="relative max-w-lg">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5261d5] focus:border-transparent shadow-sm" placeholder="Rechercher un guide, un outil (ex: TVA, SASU...)" type="text"/>
</div>
</div>
</div>
</section>
<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex overflow-x-auto gap-4 mb-12 no-scrollbar pb-2">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium whitespace-nowrap">Tout voir</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:border-[#5261d5] hover:text-[#5261d5] rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Création</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:border-[#5261d5] hover:text-[#5261d5] rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Fiscalité</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:border-[#5261d5] hover:text-[#5261d5] rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Gestion Sociale</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:border-[#5261d5] hover:text-[#5261d5] rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Outils Gratuits</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[2/1] md:aspect-auto">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#5261d5]/40 to-transparent"></div>
<div className="relative z-10 p-8 flex flex-col justify-between h-full">
<div>
<span className="inline-block px-2 py-1 bg-[#5261d5] text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3">Outil populaire</span>
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Simulateur TNS vs Assimilé Salarié</h3>
<p className="text-slate-300 max-w-md text-sm md:text-base">SASU ou EURL ? Comparez vos revenus nets après impôts et charges sociales en 3 clics.</p>
</div>
<button className="mt-6 w-fit flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                                    Lancer la simulation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<a className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:gallery-wide-linear" width="40"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-wide text-[#5261d5] bg-[#5261d5]/10 px-2 py-0.5 rounded">Guide TVA</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#5261d5] transition-colors">Comprendre la TVA intracommunautaire</h3>
<p className="text-sm text-slate-500 line-clamp-3">Les règles de facturation changent quand vous vendez hors de France. Voici l'essentiel à savoir.</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
<span>5 min de lecture</span>
</div>
</div>
</a>

<a className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:gallery-wide-linear" width="40"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Juridique</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#5261d5] transition-colors">Dividendes ou Rémunération ?</h3>
<p className="text-sm text-slate-500 line-clamp-3">Le dilemme éternel du dirigeant. Analyse fiscale et opportunités pour 2024.</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
<span>8 min de lecture</span>
</div>
</div>
</a>

<a className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:gallery-wide-linear" width="40"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Gestion</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#5261d5] transition-colors">5 indicateurs à suivre chaque mois</h3>
<p className="text-sm text-slate-500 line-clamp-3">Ne pilotez plus à vue. Mettez en place ces KPIs simples pour sécuriser votre trésorerie.</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
<span>3 min de lecture</span>
</div>
</div>
</a>

<div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-6 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-slate-400 mb-4" icon="solar:download-square-linear" width="40"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Modèles de documents</h3>
<p className="text-xs text-slate-500 mb-4">Accédez à notre bibliothèque de +50 modèles (Lettres, AG, Contrats).</p>
<button className="text-sm font-medium text-[#5261d5] hover:underline">Accéder à la base</button>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t pt-16 pb-12 text-sm bg-white border-slate-100 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-0.5 mb-6">
<div className="flex items-center justify-center">
<span className="text-xl tracking-tighter text-slate-900 font-semibold">ls</span>
</div>
<span className="text-[#5261d5] tracking-tighter text-xl font-semibold">compta</span>
</div>
<p className="text-slate-500 mb-6 text-xs leading-relaxed">
                        L'expertise comptable digitale et humaine. Simplifiez votre gestion, concentrez-vous sur votre business.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4 text-slate-900">Services</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-[#5261d5]" href="#">Comptabilité</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Fiscalité</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Social &amp; Paie</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Juridique</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-slate-900">Entreprise</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-[#5261d5]" href="#">Qui sommes-nous</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Carrières</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Partenaires</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-slate-900">Légal</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-[#5261d5]" href="#">Mentions légales</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Confidentialité</a></li>
<li><a className="hover:text-[#5261d5]" href="#">CGV</a></li>
<li><a className="hover:text-[#5261d5]" href="#">Cookies</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 text-slate-900">Nous contacter</h4>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-2 text-slate-500 text-xs">
<iconify-icon className="flex-shrink-0 text-[#5261d5]" icon="solar:phone-linear"></iconify-icon>
<span>01 02 03 04 05</span>
</li>
<li className="flex items-start gap-2 text-slate-500 text-xs">
<iconify-icon className="flex-shrink-0 text-[#5261d5]" icon="solar:letter-linear"></iconify-icon>
<span>hello@ls-compta.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex justify-between items-center">
<p className="text-[10px] text-slate-400">© 2024 LS Compta. Tous droits réservés.</p>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<span>Inscrit à l'ordre des experts-comptables</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
