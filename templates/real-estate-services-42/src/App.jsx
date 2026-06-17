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



        // Toggle Mobile Menu (Simplified for this snippet)
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            const nav = document.querySelector('nav');
            if (nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
                nav.classList.add('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white', 'border-b', 'border-slate-100', 'p-4', 'shadow-lg');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-white', 'border-b', 'border-slate-100', 'p-4', 'shadow-lg');
            }
        });

        // Toggle Quote Modal
        function toggleQuoteModal() {
            const modal = document.getElementById('quoteModal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
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
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center justify-center w-10 h-10 bg-slate-900 rounded-md">
<span className="text-white tracking-tighter font-semibold text-lg">CBZ</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tight leading-none">Cabinet Bah Zephirin</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Expertise Immobilière</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#apropos">À propos</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#clients">Clients</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm" onclick="toggleQuoteModal()">
                        Demander une expertise
                    </button>
<button className="md:hidden text-slate-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none"></div>
<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-100 to-slate-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-medium mb-8 border border-slate-200">
<span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                Agréé près les juridictions de Côte d'Ivoire
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
                L'excellence en <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-600">expertise immobilière</span> en Côte d’Ivoire.
            </h1>
<p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Évaluation de biens, gestion d'actifs et expertise technique reconnues par les tribunaux. Un accompagnement de haut niveau pour institutionnels, entreprises et particuliers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-md flex items-center justify-center gap-2" onclick="toggleQuoteModal()">
                    Demander une expertise
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-md transition-all flex items-center justify-center" href="#contact">
                    Nous contacter
                </a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Ils nous font confiance</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-semibold tracking-tighter text-slate-800">BANQUE</div>
<div className="text-xl font-semibold tracking-tighter text-slate-800">ASSURANCE</div>
<div className="text-xl font-semibold tracking-tighter text-slate-800">INSTITUTION</div>
<div className="text-xl font-semibold tracking-tighter text-slate-800">JURIDICTION</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="apropos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">L'autorité et la précision au service de vos actifs.</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                        Le Cabinet Bah Zephirin s'impose comme une référence incontournable dans l'évaluation et la gestion de patrimoine en Côte d'Ivoire. Notre approche combine rigueur juridique, connaissance pointue du marché local et standards internationaux.
                    </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
                        Indépendance, intégrité et précision sont les piliers de chacune de nos interventions, garantissant à nos clients des conclusions incontestables.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Expert diplômé ICH Paris</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Diplômé de l'Université Paris II Assas</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Agréé près la Cour d’Appel et les tribunaux de Côte d’Ivoire</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Membre de la Chambre Nationale des Experts Immobiliers Diplômés (CNEID-CI)</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ee7a4b1-01a6-476f-870d-69d6709a59d8_1600w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-lg font-semibold text-slate-900 tracking-tight">Expertise Judiciaire</div>
<div className="text-xs text-slate-500">Reconnu par les juridictions</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Domaines d'intervention</h2>
<p className="text-base text-slate-600">Une offre de services complète pour répondre aux exigences complexes du marché immobilier et juridique.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Expertise immobilière</h3>
<p className="text-sm text-slate-600 leading-relaxed">Détermination précise de la valeur vénale ou locative de tous types d'actifs immobiliers, avec remise d'un rapport détaillé.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Évaluation de biens</h3>
<p className="text-sm text-slate-600 leading-relaxed">Estimation pointue pour le secteur résidentiel, industriel, commercial et agricole, adaptée à vos besoins stratégiques.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Gestion de biens</h3>
<p className="text-sm text-slate-600 leading-relaxed">Administration professionnelle de votre patrimoine pour optimiser sa rentabilité et garantir sa pérennité physique et juridique.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Expertise pour assurance</h3>
<p className="text-sm text-slate-600 leading-relaxed">Évaluation des dommages (incendie, dégâts des eaux, risques divers) pour faciliter vos indemnisations avec les compagnies.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:user-speak-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Conseil &amp; accompagnement</h3>
<p className="text-sm text-slate-600 leading-relaxed">Assistance technique et stratégique lors d'acquisitions, de ventes ou de développements de projets immobiliers.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div className="w-10 h-10 bg-slate-50 group-hover:bg-amber-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-amber-600 text-xl transition-colors" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Expertise judiciaire</h3>
<p className="text-sm text-slate-600 leading-relaxed">Intervention sur mandat des tribunaux pour éclairer la justice dans le cadre de litiges immobiliers ou de partages.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-32 hidden lg:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Pourquoi nous choisir</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Notre cabinet s'engage à fournir des prestations d'excellence, fondées sur la transparence, l'impartialité et une méthodologie éprouvée.
                    </p>
<button className="px-6 py-2.5 text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-sm" onclick="toggleQuoteModal()">
                        Démarrer une mission
                    </button>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-1 tracking-tight">Agréments officiels</h4>
<p className="text-sm text-slate-400">Agréé par les juridictions ivoiriennes, conférant une force légale à nos rapports.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-1 tracking-tight">Formation internationale</h4>
<p className="text-sm text-slate-400">Diplômes de haut niveau (Paris II, ICH Paris) garantissant une méthodologie rigoureuse.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-1 tracking-tight">Expertise multi-sectorielle</h4>
<p className="text-sm text-slate-400">Capacité d'intervention sur des actifs résidentiels, commerciaux, industriels ou agricoles.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-1 tracking-tight">Intervention rapide</h4>
<p className="text-sm text-slate-400">Réactivité et respect des délais pour répondre aux urgences décisionnelles.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="clients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight text-center mb-16">Nos clients &amp; bénéficiaires</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="p-6 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors flex flex-col items-center text-center">
<iconify-icon className="text-slate-400 text-3xl mb-4" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Particuliers</h4>
<p className="text-xs text-slate-500">Achat, vente, succession, partage.</p>
</div>
<div className="p-6 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors flex flex-col items-center text-center">
<iconify-icon className="text-slate-400 text-3xl mb-4" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Entreprises</h4>
<p className="text-xs text-slate-500">Bilan, fusion, garantie, cessions d'actifs.</p>
</div>
<div className="p-6 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors flex flex-col items-center text-center">
<iconify-icon className="text-slate-400 text-3xl mb-4" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Banques</h4>
<p className="text-xs text-slate-500">Prises de garanties hypothécaires.</p>
</div>
<div className="p-6 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors flex flex-col items-center text-center">
<iconify-icon className="text-slate-400 text-3xl mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Assurances</h4>
<p className="text-xs text-slate-500">Valeur d'assurance, évaluation de sinistres.</p>
</div>
<div className="p-6 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors flex flex-col items-center text-center">
<iconify-icon className="text-slate-400 text-3xl mb-4" icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Juridictions</h4>
<p className="text-xs text-slate-500">Missions d'expertise judiciaire.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<iconify-icon className="text-slate-200 text-5xl mb-6" icon="solar:quote-right-bold" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-8">
                "Le rapport d'expertise fourni par le Cabinet Bah Zephirin a été déterminant dans notre prise de décision lors de l'acquisition de nos nouveaux locaux industriels. Une rigueur et une impartialité exemplaires."
            </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900">Directeur Général</div>
<div className="text-xs text-slate-500">Entreprise Industrielle (Abidjan)</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Contactez-nous</h2>
<p className="text-sm text-slate-600 mb-8">Remplissez ce formulaire ou utilisez nos coordonnées directes pour planifier une consultation.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="firstName">Prénom</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-slate-400" id="firstName" placeholder="Jean" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="lastName">Nom</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-slate-400" id="lastName" placeholder="Kouamé" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-slate-400" id="email" placeholder="jean.kouame@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="subject">Sujet</label>
<div className="relative">
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 appearance-none text-slate-700" id="subject">
<option>Demande d'expertise immobilière</option>
<option>Gestion de biens</option>
<option>Information générale</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all resize-none placeholder-slate-400" id="message" placeholder="Décrivez votre besoin..." rows="4"></textarea>
</div>
<button className="w-full px-5 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all" type="button">
                            Envoyer le message
                        </button>
</form>
</div>

<div className="bg-slate-50 border border-slate-100 rounded-xl p-8 lg:p-10">
<div className="mb-10">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">Coordonnées</h3>
<div className="space-y-6">
<div className="flex gap-4">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-sm text-slate-800 font-medium">Adresse</p>
<p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                        Lot 1418, Résidence Zinsou II<br/>
                                        Riviera Bonoumin, Cocody<br/>
                                        01 BP 11335 Abidjan 01<br/>
                                        Côte d’Ivoire
                                    </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-amber-600 text-xl flex-shrink-0 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<div>
<p className="text-sm text-slate-800 font-medium">Téléphones</p>
<div className="text-sm text-slate-600 mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
<span>(+225) 27 22 43 29 94</span>
<span>(+225) 07 07 67 66 97</span>
<span>(+225) 05 05 10 01 22</span>
<span>(+225) 07 48 35 90 05</span>
</div>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-200">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">Heures d'ouverture</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between py-1 border-b border-slate-200/50">
<span className="text-slate-600">Lundi - Vendredi</span>
<span className="font-medium text-slate-900">07H30 — 17H30</span>
</div>
<div className="flex justify-between py-1 border-b border-slate-200/50">
<span className="text-slate-600">Samedi</span>
<span className="font-medium text-amber-600">Fermé</span>
</div>
<div className="flex justify-between py-1">
<span className="text-slate-600">Dimanche</span>
<span className="font-medium text-amber-600">Fermé</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded text-white text-xs font-semibold tracking-tighter">CBZ</div>
<span className="text-slate-200 font-semibold tracking-tight">Cabinet Bah Zephirin</span>
</div>
<p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-4">
                        Expertise immobilière agréée, évaluation d'actifs et gestion de biens reconnues par les juridictions de Côte d'Ivoire.
                    </p>
<div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        Expert Judiciaire Agréé
                    </div>
</div>
<div>
<h4 className="text-slate-200 text-sm font-semibold mb-4 tracking-tight">Liens rapides</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-amber-500 transition-colors" href="#apropos">À propos du cabinet</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#services">Nos services</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#clients">Bénéficiaires</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#contact">Nous contacter</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-200 text-sm font-semibold mb-4 tracking-tight">Légal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-amber-500 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Politique de confidentialité</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Cabinet Bah Zephirin. Tous droits réservés.</p>
<p>Abidjan, Côte d'Ivoire</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all z-40 group" href="https://wa.me/447725992282" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="logos:whatsapp-icon" width="28"></iconify-icon>
<span className="absolute -top-10 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Discutons sur WhatsApp</span>
</a>

<div className="fixed inset-0 z-[100] hidden" id="quoteModal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="toggleQuoteModal()"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="flex items-center justify-between p-6 border-b border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Demander une expertise</h3>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1" onclick="toggleQuoteModal()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto no-scrollbar">
<p className="text-sm text-slate-600 mb-6">Veuillez détailler votre besoin. Un expert vous recontactera sous 24h ouvrées.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Type d'expertise souhaitée</label>
<div className="relative">
<select className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 appearance-none text-slate-700">
<option>Évaluation de bien résidentiel</option>
<option>Évaluation de bien commercial/industriel</option>
<option>Expertise pour assurance</option>
<option>Expertise judiciaire</option>
<option>Autre demande</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Nom complet</label>
<input className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Téléphone</label>
<input className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Détails du bien / Mission</label>
<textarea className="w-full px-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 resize-none" placeholder="Localisation, superficie, nature du besoin..." rows="3"></textarea>
</div>
</form>
</div>
<div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 mt-auto">
<button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-all" onclick="toggleQuoteModal()">Annuler</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm">Soumettre la demande</button>
</div>
</div>
</div>



    </>
  );
}
