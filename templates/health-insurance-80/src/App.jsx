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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-slate-900 font-semibold tracking-tighter text-lg">MaCouvertureSanté<span className="text-slate-400">.fr</span></span>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navFeatures" onclick="handleNavClick('features'); return false;">Notre expertise</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navOffers" onclick="handleNavClick('offers'); return false;">Offres par profil</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navTestimonials" onclick="handleNavClick('testimonials'); return false;">Témoignages</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navBlog" onclick="handleNavClick('blog'); return false;">Conseils</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navFaq" onclick="handleNavClick('faq'); return false;">FAQ</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#" id="navPartner" onclick="handleNavClick('partner'); return false;">
<i className="w-4 h-4" data-lucide="briefcase"></i> Espace Partenaire
                    </a>
<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95" onclick="openModal('loginModal')">
                        Connexion
                    </button>
<button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onclick="toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="menu" id="menuIcon"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('features'); toggleMobileMenu(); return false;">Notre expertise</a>
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('offers'); toggleMobileMenu(); return false;">Offres par profil</a>
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('testimonials'); toggleMobileMenu(); return false;">Témoignages</a>
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('blog'); toggleMobileMenu(); return false;">Conseils</a>
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('faq'); toggleMobileMenu(); return false;">FAQ</a>
<a className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2" href="#" onclick="handleNavClick('partner'); toggleMobileMenu(); return false;">Espace Partenaire</a>
<div className="pt-3 border-t border-slate-200">
<button className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium" onclick="openModal('loginModal'); toggleMobileMenu();">Connexion Adhérent</button>
</div>
</div>
</div>
</nav>

<div id="mainContent">

<div className="page" id="homePage">

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        🎉 Nouveau : Remboursement en 48h garanti
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        La santé, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">simplifiée.</span><br/>
                        Assurez-vous en 2 minutes.
                    </h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed font-normal">
                        Comparez, souscrivez et gérez votre couverture santé sur une plateforme unique. 
                        Zéro papier, signature immédiate et un assistant IA à vos côtés.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5" onclick="scrollToSection('comparator')">
                            Comparer mes offres
                            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all hover:border-slate-300" onclick="openModal('videoModal')">
<i className="mr-2 w-5 h-5" data-lucide="play-circle"></i>
                            Voir la démo
                        </button>
</div>

<div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-400">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Agréé ACPR</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-500" data-lucide="lock"></i>
<span className="text-sm font-medium">Données sécurisées</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="award"></i>
<span className="text-sm font-medium">Élu service client 2024</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-yellow-500" data-lucide="star"></i>
<span className="text-sm font-medium">4.8/5 sur Trustpilot</span>
</div>
</div>

<div className="mt-16 scroll-indicator">
<button className="text-slate-400 hover:text-slate-600 transition-colors" onclick="scrollToSection('stats')">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</button>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100" id="stats">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center">
<div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight" data-count="125000">0</div>
<div className="mt-2 text-sm text-slate-500 font-medium">Clients satisfaits</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight" data-count="47">0</div>
<div className="mt-2 text-sm text-slate-500 font-medium">Partenaires assureurs</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-bold text-blue-600 tracking-tight">4.8<span className="text-2xl">/5</span></div>
<div className="mt-2 text-sm text-slate-500 font-medium">Note Trustpilot</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">2<span className="text-2xl">min</span></div>
<div className="mt-2 text-sm text-slate-500 font-medium">Pour être couvert</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 relative" id="comparator">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Trouvez votre mutuelle idéale</h2>
<p className="mt-2 text-slate-500">Répondez à quelques questions et obtenez des offres personnalisées</p>
</div>
<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[550px]">

<div className="bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 w-full md:w-64 flex-shrink-0 p-6">
<div className="flex md:flex-col gap-6 md:gap-8 overflow-x-auto md:overflow-visible">
<div className="flex items-center gap-3 min-w-max cursor-pointer" id="step1Indicator" onclick="goToStep(1)">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium shadow-sm" id="step1Circle">1</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Mon Profil</span>
<span className="text-xs text-slate-500 hidden md:block">Situation &amp; Famille</span>
</div>
</div>
<div className="flex items-center gap-3 min-w-max opacity-60 cursor-pointer" id="step2Indicator" onclick="goToStep(2)">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center text-sm font-medium" id="step2Circle">2</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Mes Besoins</span>
<span className="text-xs text-slate-500 hidden md:block">Niveaux de garantie</span>
</div>
</div>
<div className="flex items-center gap-3 min-w-max opacity-60 cursor-pointer" id="step3Indicator" onclick="goToStep(3)">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center text-sm font-medium" id="step3Circle">3</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Résultats</span>
<span className="text-xs text-slate-500 hidden md:block">Offres personnalisées</span>
</div>
</div>
</div>
<div className="hidden md:flex mt-8 bg-blue-50 rounded-xl p-4 flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
<i className="text-blue-600 w-4 h-4" data-lucide="bot"></i>
</div>
<span className="text-sm font-medium text-blue-900">Henry 360°</span>
</div>
<p className="text-xs text-blue-700 leading-relaxed" id="henryTip">
                                    Besoin d'aide sur votre régime ? Je suis là pour clarifier les termes complexes.
                                </p>
</div>

<div className="hidden md:block mt-6">
<div className="flex justify-between text-xs text-slate-500 mb-2">
<span>Progression</span>
<span id="progressPercent">33%</span>
</div>
<div className="h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full transition-all duration-500" id="progressBar" style={{width: '33%'}}></div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 lg:p-10 relative overflow-hidden">

<div className="max-w-xl mx-auto" id="step1">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Quelle est votre situation actuelle ?</h3>
<p className="text-sm text-slate-500 mb-8">Ces informations nous permettent de calculer votre tarif au plus juste.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="status" onchange="updateFormData()" type="radio" value="salarie"/>
<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/50 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all h-full flex flex-col items-center justify-center text-center gap-3">
<i className="text-slate-400 w-6 h-6" data-lucide="briefcase"></i>
<span className="text-sm font-medium text-slate-700">Salarié</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="status" onchange="updateFormData()" type="radio" value="tns"/>
<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/50 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all h-full flex flex-col items-center justify-center text-center gap-3">
<i className="text-slate-400 w-6 h-6" data-lucide="store"></i>
<span className="text-sm font-medium text-slate-700">TNS / Indépendant</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="status" onchange="updateFormData()" type="radio" value="etudiant"/>
<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/50 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all h-full flex flex-col items-center justify-center text-center gap-3">
<i className="text-slate-400 w-6 h-6" data-lucide="graduation-cap"></i>
<span className="text-sm font-medium text-slate-700">Étudiant</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="status" onchange="updateFormData()" type="radio" value="retraite"/>
<div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-500/50 peer-checked:border-blue-600 peer-checked:bg-blue-50/50 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all h-full flex flex-col items-center justify-center text-center gap-3">
<i className="text-slate-400 w-6 h-6" data-lucide="armchair"></i>
<span className="text-sm font-medium text-slate-700">Retraité</span>
</div>
</label>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-2">Code Postal</label>
<div className="relative">
<input className="block w-full rounded-lg border border-slate-200 pl-10 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm text-slate-900 bg-slate-50/50" id="postalCode" oninput="validatePostalCode()" placeholder="75000" type="text" value="75011"/>
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="text-slate-400 w-4 h-4" data-lucide="map-pin"></i>
</div>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-xs text-emerald-600 font-medium" id="cityName">Paris</span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-2">Qui assurer ?</label>
<div className="flex gap-3">
<button className="flex-1 py-2.5 px-3 border border-blue-600 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium transition-colors" id="btnMoi" onclick="toggleCoverage('moi')" type="button">Moi-même</button>
<button className="flex-1 py-2.5 px-3 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors" id="btnConjoint" onclick="toggleCoverage('conjoint')" type="button">+ Conjoint</button>
<button className="flex-1 py-2.5 px-3 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors" id="btnEnfant" onclick="toggleCoverage('enfant')" type="button">+ Enfant</button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-2">Date de naissance</label>
<input className="block w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm text-slate-900 bg-slate-50/50" id="birthDate" onchange="updateFormData()" type="date" value="1985-06-15"/>
</div>
</div>
<div className="mt-10 flex justify-end">
<button className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" onclick="nextStep()">
                                        Étape suivante <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="max-w-xl mx-auto hidden" id="step2">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Définissez vos besoins de santé</h3>
<p className="text-sm text-slate-500 mb-8">Ajustez les curseurs selon vos priorités pour obtenir des offres adaptées.</p>
<div className="space-y-8">
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
<i className="text-slate-400 w-4 h-4" data-lucide="bed"></i>
                                                Hospitalisation
                                            </label>
<span className="text-sm font-semibold text-blue-600" id="hospiValue">Moyen</span>
</div>
<input className="w-full" id="hospiRange" max="3" min="1" oninput="updateRangeLabel('hospi')" type="range" value="2"/>
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Essentiel</span>
<span>Moyen</span>
<span>Renforcé</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
<i className="text-slate-400 w-4 h-4" data-lucide="stethoscope"></i>
                                                Soins courants
                                            </label>
<span className="text-sm font-semibold text-blue-600" id="soinsValue">Moyen</span>
</div>
<input className="w-full" id="soinsRange" max="3" min="1" oninput="updateRangeLabel('soins')" type="range" value="2"/>
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Essentiel</span>
<span>Moyen</span>
<span>Renforcé</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
<i className="text-slate-400 w-4 h-4" data-lucide="glasses"></i>
                                                Optique
                                            </label>
<span className="text-sm font-semibold text-blue-600" id="optiqueValue">Moyen</span>
</div>
<input className="w-full" id="optiqueRange" max="3" min="1" oninput="updateRangeLabel('optique')" type="range" value="2"/>
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Essentiel</span>
<span>Moyen</span>
<span>Renforcé</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-3">
<label className="text-sm font-medium text-slate-700 flex items-center gap-2">
<i className="text-slate-400 w-4 h-4" data-lucide="smile"></i>
                                                Dentaire
                                            </label>
<span className="text-sm font-semibold text-blue-600" id="dentaireValue">Moyen</span>
</div>
<input className="w-full" id="dentaireRange" max="3" min="1" oninput="updateRangeLabel('dentaire')" type="range" value="2"/>
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Essentiel</span>
<span>Moyen</span>
<span>Renforcé</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-3">Budget mensuel maximum</label>
<div className="flex items-center gap-4">
<input className="flex-1" id="budgetRange" max="150" min="20" oninput="updateBudget()" type="range" value="60"/>
<span className="text-lg font-semibold text-slate-900 w-20 text-right" id="budgetValue">60€</span>
</div>
</div>
</div>
<div className="mt-10 flex justify-between">
<button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors" onclick="prevStep()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Retour
                                    </button>
<button className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" onclick="nextStep()">
                                        Voir les offres <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="max-w-2xl mx-auto hidden" id="step3">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Vos offres personnalisées</h3>
<p className="text-sm text-slate-500">Basées sur votre profil : <span className="text-blue-600 font-medium" id="profileSummary">Salarié, 38 ans, Paris</span></p>
</div>
<button className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1" onclick="prevStep()">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i> Modifier
                                    </button>
</div>

<div className="py-16 text-center" id="loadingResults">
<div className="inline-flex flex-col items-center gap-4">
<svg className="animate-spin h-8 w-8 text-blue-600" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
<span className="text-slate-600">Analyse de 47 offres en cours...</span>
<div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full animate-pulse" style={{width: '60%'}}></div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="resultsContainer">

<div className="flex items-center justify-between mb-4 p-3 bg-slate-50 rounded-lg">
<span className="text-sm text-slate-600"><span className="font-medium text-slate-900">3 offres</span> correspondent à vos critères</span>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Trier par:</span>
<select className="text-sm border-0 bg-transparent font-medium text-slate-700 focus:ring-0 cursor-pointer" onchange="sortResults(this.value)">
<option value="score">Recommandation</option>
<option value="price-asc">Prix croissant</option>
<option value="price-desc">Prix décroissant</option>
</select>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer card-hover" onclick="openOfferDetail('eco')">
<div className="flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<span className="text-blue-700 font-bold text-sm">APR</span>
</div>
<div>
<h4 className="font-semibold text-slate-900">APRIL Santé Éco</h4>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">Meilleur prix</span>
<span className="text-xs text-slate-400">Score: 87/100</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-slate-900">24,90€</div>
<div className="text-xs text-slate-500">/ mois</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="bed"></i> 100%</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="glasses"></i> 150€</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="smile"></i> 125%</span>
</div>
<span className="text-blue-600 text-sm font-medium flex items-center gap-1">Voir détails <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i></span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border-2 border-blue-600 shadow-lg relative cursor-pointer card-hover" onclick="openOfferDetail('confort')">
<div className="absolute -top-3 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                                            Recommandé par Henry
                                        </div>
<div className="flex justify-between items-start mt-2">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
<span className="text-indigo-700 font-bold text-sm">ALP</span>
</div>
<div>
<h4 className="font-semibold text-slate-900">ALPTIS Confort Plus</h4>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">Équilibré</span>
<span className="text-xs text-slate-400">Score: 94/100</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-slate-900">42,50€</div>
<div className="text-xs text-slate-500">/ mois</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="bed"></i> 150%</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="glasses"></i> 250€</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="smile"></i> 200%</span>
</div>
<span className="text-blue-600 text-sm font-medium flex items-center gap-1">Voir détails <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i></span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer card-hover" onclick="openOfferDetail('premium')">
<div className="flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
<span className="text-purple-700 font-bold text-sm">NEO</span>
</div>
<div>
<h4 className="font-semibold text-slate-900">NEOLIANE Premium</h4>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded">Complet</span>
<span className="text-xs text-slate-400">Score: 91/100</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-slate-900">68,00€</div>
<div className="text-xs text-slate-500">/ mois</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="bed"></i> 300%</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="glasses"></i> 400€</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="smile"></i> 300%</span>
</div>
<span className="text-blue-600 text-sm font-medium flex items-center gap-1">Voir détails <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i></span>
</div>
</div>

<div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
<i className="text-blue-600 w-4 h-4" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Besoin d'aide pour choisir ?</p>
<p className="text-xs text-slate-500">Un conseiller vous rappelle en 5 minutes</p>
</div>
</div>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap" onclick="openModal('callbackModal')">
                                            Être rappelé gratuitement
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Pourquoi nous choisir</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">L'écosystème All-in-One</h2>
<p className="mt-4 text-slate-500 text-lg">Nous ne sommes pas qu'un comparateur. Nous sommes votre partenaire santé digital, de la souscription au remboursement.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer" onclick="openModal('featureModal1')">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="text-orange-500 w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Souscription Éclair</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Un parcours 100% digital. Signature électronique sécurisée eIDAS et carte de Tiers-Payant disponible immédiatement après validation.
                            </p>
<span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">En savoir plus <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
</div>
<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer" onclick="toggleChat()">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="text-blue-600 w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Henry 360°</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Notre IA analyse vos besoins réels pour éviter les surprimes inutiles. Un doute ? Henry vous explique les garanties en langage clair.
                            </p>
<span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">Discuter avec Henry <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
</div>
<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer" onclick="openModal('featureModal3')">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="text-emerald-500 w-6 h-6" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Espace Centralisé</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                                Retrouvez vos contrats, remboursements et documents au même endroit. Changez de formule en un clic si votre famille s'agrandit.
                            </p>
<span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">En savoir plus <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
</div>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center p-6 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
<div className="w-12 h-12 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-4">
<i className="text-blue-600 w-5 h-5" data-lucide="clock"></i>
</div>
<h4 className="font-medium text-slate-900 text-sm">Remboursement 48h</h4>
<p className="text-xs text-slate-500 mt-1">Traitement express garanti</p>
</div>
<div className="text-center p-6 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
<div className="w-12 h-12 mx-auto bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
<i className="text-emerald-600 w-5 h-5" data-lucide="file-check"></i>
</div>
<h4 className="font-medium text-slate-900 text-sm">Zéro paperasse</h4>
<p className="text-xs text-slate-500 mt-1">100% dématérialisé</p>
</div>
<div className="text-center p-6 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
<div className="w-12 h-12 mx-auto bg-orange-50 rounded-xl flex items-center justify-center mb-4">
<i className="text-orange-600 w-5 h-5" data-lucide="headphones"></i>
</div>
<h4 className="font-medium text-slate-900 text-sm">Support 7j/7</h4>
<p className="text-xs text-slate-500 mt-1">Toujours disponibles</p>
</div>
<div className="text-center p-6 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
<div className="w-12 h-12 mx-auto bg-purple-50 rounded-xl flex items-center justify-center mb-4">
<i className="text-purple-600 w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h4 className="font-medium text-slate-900 text-sm">Résiliation gratuite</h4>
<p className="text-xs text-slate-500 mt-1">On s'occupe de tout</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Comment ça marche</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">3 étapes pour être couvert</h2>
<p className="mt-4 text-slate-500 text-lg">Un processus simplifié pour une souscription sans stress</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
<div className="relative text-center">
<div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 relative z-10">1</div>
<h3 className="mt-6 text-lg font-semibold text-slate-900">Comparez en 2 min</h3>
<p className="mt-2 text-sm text-slate-500">Répondez à quelques questions simples et recevez des offres personnalisées parmi nos 47 partenaires.</p>
</div>
<div className="relative text-center">
<div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 relative z-10">2</div>
<h3 className="mt-6 text-lg font-semibold text-slate-900">Souscrivez en ligne</h3>
<p className="mt-2 text-sm text-slate-500">Signature électronique sécurisée. Aucun document à imprimer ou à envoyer par courrier.</p>
</div>
<div className="relative text-center">
<div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 relative z-10">3</div>
<h3 className="mt-6 text-lg font-semibold text-slate-900">Soyez couvert</h3>
<p className="mt-2 text-sm text-slate-500">Recevez votre carte de tiers-payant instantanément. Profitez de vos garanties dès le premier jour.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20" onclick="scrollToSection('comparator')">
                            Commencer maintenant
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="offers">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<div>
<span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Nos formules</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Le meilleur du marché</h2>
<p className="mt-2 text-slate-500">Une sélection impartiale parmi les leaders de l'assurance.</p>
</div>

<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" onclick="openModal('partnersModal')">
<span className="text-lg font-bold tracking-tighter text-slate-800">APRIL</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">ALPTIS</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">CEGEMA</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">NEOLIANE</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative hover:shadow-lg transition-all card-hover">
<div className="flex justify-between items-start mb-4">
<div className="text-xl font-bold tracking-tight text-slate-800">FORMULE ÉCO</div>
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Essentiel</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-slate-900">24,90€</span><span className="text-slate-500 text-sm"> / mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Hospitalisation 100%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Soins courants 100%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Optique 100€/an
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4 flex-shrink-0" data-lucide="minus"></i> Dentaire de base
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4 flex-shrink-0" data-lucide="x"></i> Médecines douces
                                </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="openSubscribeModal('eco', '24,90€', 'FORMULE ÉCO')">Souscrire en ligne</button>
</div>
<div className="bg-white rounded-2xl p-6 border-2 border-blue-600 shadow-xl relative transform lg:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide flex items-center gap-1">
<i className="w-3 h-3" data-lucide="star"></i>
                                Meilleur Rapport Qualité/Prix
                            </div>
<div className="flex justify-between items-start mb-4 mt-2">
<div className="text-xl font-bold tracking-tight text-slate-800">CONFORT +</div>
<span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">Populaire</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-slate-900">42,50€</span><span className="text-slate-500 text-sm"> / mois</span>
<div className="text-xs text-emerald-600 font-medium mt-1">Économisez 18% vs. marché</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Hospitalisation 150%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Médecins (Dépassements)
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Dentaire Renforcé 200%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Optique 250€/an
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Médecines douces 150€
                                </li>
</ul>
<button className="w-full py-3 rounded-xl bg-orange-500 text-white font-medium text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" onclick="openSubscribeModal('confort', '42,50€', 'CONFORT +')">Souscrire en ligne</button>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative hover:shadow-lg transition-all card-hover">
<div className="flex justify-between items-start mb-4">
<div className="text-xl font-bold tracking-tight text-slate-800">PREMIUM</div>
<span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">Max</span>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-slate-900">68,00€</span><span className="text-slate-500 text-sm"> / mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Hospitalisation 300%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Chambre particulière
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Dentaire Premium 300%
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Optique 400€/an
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-emerald-500 w-4 h-4 flex-shrink-0" data-lucide="check"></i> Médecines douces 300€
                                </li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="openSubscribeModal('premium', '68,00€', 'PREMIUM')">Souscrire en ligne</button>
</div>
</div>

<div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
<i className="text-blue-600 w-7 h-7" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Satisfait ou remboursé 30 jours</h4>
<p className="text-sm text-slate-600">Changez d'avis ? Remboursement intégral, sans justification.</p>
</div>
</div>
<button className="px-6 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap shadow-sm" onclick="openModal('guaranteeModal')">
                            En savoir plus
                        </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Témoignages</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Ils nous font confiance</h2>
<p className="mt-4 text-slate-500 text-lg">Plus de 125 000 clients satisfaits. Découvrez leurs avis.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl p-6 border border-slate-200 testimonial-card">
<div className="flex items-center gap-1 mb-4">
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"J'ai souscrit en moins de 5 minutes. La carte de tiers-payant était disponible immédiatement dans mon espace. Impressionnant !"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm">SL</div>
<div>
<div className="font-medium text-slate-900 text-sm">Sophie L.</div>
<div className="text-xs text-slate-500">Salariée, Paris</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 testimonial-card">
<div className="flex items-center gap-1 mb-4">
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"En tant qu'indépendant, j'avais du mal à trouver une mutuelle adaptée. Henry m'a guidé vers la formule parfaite. Remboursé en 48h !"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">MD</div>
<div>
<div className="font-medium text-slate-900 text-sm">Marc D.</div>
<div className="text-xs text-slate-500">Freelance, Lyon</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-200 testimonial-card">
<div className="flex items-center gap-1 mb-4">
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
<i className="text-yellow-400 fill-yellow-400 w-4 h-4" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Le service client est exceptionnel. J'ai eu une question un dimanche soir et j'ai eu une réponse en moins de 10 minutes via le chat."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-semibold text-sm">AB</div>
<div>
<div className="font-medium text-slate-900 text-sm">Amélie B.</div>
<div className="text-xs text-slate-500">Retraitée, Bordeaux</div>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center">
<a className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow" href="#">
<span className="text-sm text-slate-600">Excellent</span>
<div className="flex items-center gap-0.5">
<i className="text-emerald-500 fill-emerald-500 w-4 h-4" data-lucide="star"></i>
<i className="text-emerald-500 fill-emerald-500 w-4 h-4" data-lucide="star"></i>
<i className="text-emerald-500 fill-emerald-500 w-4 h-4" data-lucide="star"></i>
<i className="text-emerald-500 fill-emerald-500 w-4 h-4" data-lucide="star"></i>
<i className="text-emerald-500 fill-emerald-500 w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-slate-900">4.8/5 sur Trustpilot</span>
<span className="text-xs text-slate-400">2,847 avis</span>
<i className="text-slate-400 w-3.5 h-3.5" data-lucide="external-link"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Questions fréquentes</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">On répond à tout</h2>
<p className="mt-4 text-slate-500">Les réponses aux questions les plus posées par nos clients</p>
</div>
<div className="space-y-4" id="faqContainer">
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Comment résilier ma mutuelle actuelle ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Nous nous occupons de tout ! Grâce à la loi Hamon, après un an d'engagement, vous pouvez résilier à tout moment. Il vous suffit de nous fournir votre ancien contrat, et notre équipe s'occupe de toutes les démarches administratives gratuitement.
                            </div>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Y a-t-il un délai de carence ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Les délais de carence varient selon les garanties. Chez nos partenaires : 0 jour pour les soins courants et l'hospitalisation, 3 mois maximum pour l'optique et le dentaire. Certaines offres proposent des délais réduits ou nuls.
                            </div>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Comment fonctionne le remboursement ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Avec le tiers-payant, vous n'avancez rien chez le médecin ou à la pharmacie. Pour les autres actes, envoyez vos factures via l'application et recevez votre remboursement en 48h maximum sur votre compte bancaire.
                            </div>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Puis-je changer de formule en cours de contrat ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Oui ! Vous pouvez faire évoluer votre formule à tout moment depuis votre espace client : naissance, mariage, changement de situation professionnelle... Nous adaptons votre couverture à votre vie.
                            </div>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Mes données sont-elles sécurisées ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Absolument. Nous sommes conformes au RGPD et utilisons un chiffrement de niveau bancaire (SSL 256 bits). Vos données de santé sont hébergées en France chez un hébergeur agréé HDS (Hébergeur de Données de Santé).
                            </div>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900">Qu'est-ce que le 100% Santé ?</span>
<i className="text-slate-400 transition-transform w-5 h-5" data-lucide="chevron-down"></i>
</button>
<div className="hidden px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                                Le 100% Santé est une réforme qui permet d'accéder à des équipements optiques, auditifs et dentaires sans reste à charge. Toutes nos formules sont compatibles avec le 100% Santé et vous permettent d'en bénéficier pleinement.
                            </div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-600 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors" onclick="toggleChat()">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                                Discuter avec Henry
                            </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors" onclick="openModal('callbackModal')">
<i className="w-4 h-4" data-lucide="phone"></i>
                                Être rappelé
                            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="b2b">
<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 skew-x-12 transform translate-x-20"></div>
<div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i>
                                POUR LES COURTIERS &amp; PARTENAIRES
                            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Un CRM de courtage surpuissant</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Équipez votre force de vente avec notre outil B2B. Gestion de leads, multi-tarification, click-to-call et suivi des commissions en temps réel.
                            </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400 mt-0.5"><i className="w-4 h-4" data-lucide="pie-chart"></i></div>
<div>
<h4 className="font-medium">Tableaux de bord temps réel</h4>
<p className="text-sm text-slate-500">Suivez le CA, les taux de conversion et l'activité des consultants.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400 mt-0.5"><i className="w-4 h-4" data-lucide="users"></i></div>
<div>
<h4 className="font-medium">Gestion de Pipeline</h4>
<p className="text-sm text-slate-500">Distribution automatique des leads et relances programmées.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400 mt-0.5"><i className="w-4 h-4" data-lucide="wallet"></i></div>
<div>
<h4 className="font-medium">Commissions transparentes</h4>
<p className="text-sm text-slate-500">Visualisez vos commissions en temps réel et suivez vos paiements.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors" onclick="openModal('demoModal')">
                                    Demander une démo
                                </button>
<button className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-sm font-medium rounded-lg text-white hover:bg-slate-800 transition-colors" onclick="openModal('partnerModal')">
                                    Devenir partenaire
                                </button>
</div>
</div>
<div className="relative">
<div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-2 shadow-2xl backdrop-blur-sm">
<div className="h-10 border-b border-slate-700 flex items-center px-4 gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/60"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
<div className="w-3 h-3 rounded-full bg-green-500/60"></div>
</div>
<div className="h-1.5 w-24 bg-slate-600 rounded-full"></div>
</div>
<div className="p-6">

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-slate-700/50 rounded-lg p-4 text-center">
<div className="text-2xl font-bold text-white">127</div>
<div className="text-xs text-slate-400">Leads ce mois</div>
</div>
<div className="bg-slate-700/50 rounded-lg p-4 text-center">
<div className="text-2xl font-bold text-emerald-400">34%</div>
<div className="text-xs text-slate-400">Taux conversion</div>
</div>
<div className="bg-slate-700/50 rounded-lg p-4 text-center">
<div className="text-2xl font-bold text-blue-400">8.2k€</div>
<div className="text-xs text-slate-400">Commission</div>
</div>
</div>

<div className="h-32 bg-slate-700/50 rounded-lg flex items-end p-4 gap-2">
<div className="flex-1 h-[40%] bg-blue-500/40 rounded-t"></div>
<div className="flex-1 h-[60%] bg-blue-500/60 rounded-t"></div>
<div className="flex-1 h-[50%] bg-blue-500/50 rounded-t"></div>
<div className="flex-1 h-[80%] bg-blue-500 rounded-t"></div>
<div className="flex-1 h-[65%] bg-blue-500/70 rounded-t"></div>
<div className="flex-1 h-[75%] bg-blue-500/80 rounded-t"></div>
<div className="flex-1 h-[90%] bg-blue-600 rounded-t"></div>
</div>
</div>
</div>
<div className="absolute -right-4 top-10 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold border border-emerald-400 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                                +12 Nouveaux Leads
                            </div>
<div className="absolute -left-4 bottom-10 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold border border-blue-500">
                                💰 Commission versée !
                            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Prêt à simplifier votre santé ?</h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Rejoignez les 125 000 Français qui ont déjà fait confiance à MaCouvertureSanté.fr</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-base font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-xl" onclick="scrollToSection('comparator')">
                            Obtenir mon devis gratuit
                            <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-semibold rounded-xl text-white hover:bg-white/10 transition-colors" onclick="openModal('callbackModal')">
<i className="mr-2 w-5 h-5" data-lucide="phone"></i>
                            Être rappelé
                        </button>
</div>
<div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-blue-100">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span className="text-sm">Sans engagement</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span className="text-sm">Gratuit</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span className="text-sm">Résultat en 2 min</span>
</div>
</div>
</div>
</section>
</div>

<div className="page hidden" id="blogPage">
<div className="pt-24 pb-16 bg-white min-h-screen">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a className="hover:text-blue-600" href="#" onclick="navigateTo('home'); return false;">Accueil</a>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
<span className="text-slate-900">Blog Santé</span>
</div>
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Conseils &amp; Actualités Santé</h1>
<p className="text-lg text-slate-500">Restez informé sur les dernières actualités de l'assurance santé et découvrez nos conseils pratiques.</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium" onclick="filterBlog('all')">Tous</button>
<button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors" onclick="filterBlog('guide')">Guides</button>
<button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors" onclick="filterBlog('actu')">Actualités</button>
<button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors" onclick="filterBlog('temoignage')">Témoignages</button>
<button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors" onclick="filterBlog('conseil')">Conseils</button>
</div>

<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 cursor-pointer hover:shadow-lg transition-shadow" onclick="openModal('articleModal')">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">À la une</span>
<h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Comment choisir sa mutuelle en 2024 : le guide complet</h2>
<p className="mt-4 text-slate-600">Découvrez tous les critères essentiels pour sélectionner la mutuelle santé adaptée à vos besoins et à votre budget.</p>
<div className="mt-6 flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">DR</div>
<span className="text-sm text-slate-600">Dr. Marie Dupont</span>
</div>
<span className="text-sm text-slate-400">15 min de lecture</span>
</div>
</div>
<div className="bg-white rounded-xl h-64 flex items-center justify-center shadow-sm">
<i className="text-slate-300 w-16 h-16" data-lucide="book-open"></i>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="openModal('articleModal')">
<div className="h-48 bg-slate-100 flex items-center justify-center">
<i className="text-slate-300 w-12 h-12" data-lucide="shield"></i>
</div>
<div className="p-6">
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-medium">Guide</span>
<h3 className="mt-3 text-lg font-semibold text-slate-900">100% Santé : tout ce qu'il faut savoir</h3>
<p className="mt-2 text-sm text-slate-500 line-clamp-2">La réforme 100% Santé expliquée simplement : optique, dentaire, audiologie...</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">12 Jan 2024</span>
<span className="text-sm text-blue-600 font-medium">Lire →</span>
</div>
</div>
</article>
<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="openModal('articleModal')">
<div className="h-48 bg-slate-100 flex items-center justify-center">
<i className="text-slate-300 w-12 h-12" data-lucide="calculator"></i>
</div>
<div className="p-6">
<span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">Conseil</span>
<h3 className="mt-3 text-lg font-semibold text-slate-900">Optimiser ses remboursements santé</h3>
<p className="mt-2 text-sm text-slate-500 line-clamp-2">5 astuces pour maximiser vos remboursements et réduire votre reste à charge.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">8 Jan 2024</span>
<span className="text-sm text-blue-600 font-medium">Lire →</span>
</div>
</div>
</article>
<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="openModal('articleModal')">
<div className="h-48 bg-slate-100 flex items-center justify-center">
<i className="text-slate-300 w-12 h-12" data-lucide="trending-up"></i>
</div>
<div className="p-6">
<span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-medium">Actualité</span>
<h3 className="mt-3 text-lg font-semibold text-slate-900">Hausse des tarifs 2024 : ce qui change</h3>
<p className="mt-2 text-sm text-slate-500 line-clamp-2">Analyse des augmentations prévues et comment y faire face.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">3 Jan 2024</span>
<span className="text-sm text-blue-600 font-medium">Lire →</span>
</div>
</div>
</article>
</div>

<div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
<h3 className="text-2xl font-semibold text-white mb-4">Restez informé</h3>
<p className="text-slate-400 mb-6">Recevez nos conseils santé et les dernières actualités directement dans votre boîte mail.</p>
<form className="max-w-md mx-auto flex gap-3" onsubmit="handleNewsletter(event)">
<input className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500" placeholder="votre@email.com" required="" type="email"/>
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors" type="submit">S'inscrire</button>
</form>
</div>
</div>
</div>
</div>

<div className="page hidden" id="partnerPage">
<div className="pt-24 pb-16 bg-slate-900 text-white min-h-screen">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
<a className="hover:text-blue-400" href="#" onclick="navigateTo('home'); return false;">Accueil</a>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
<span className="text-white">Espace Partenaire</span>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center py-12">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                                PLATEFORME B2B
                            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Développez votre activité de courtage</h1>
<p className="text-xl text-slate-400 mb-8">Accédez à notre plateforme de courtage complète : multi-tarification, CRM intégré, et commissions attractives.</p>
<div className="grid grid-cols-2 gap-6 mb-10">
<div className="bg-slate-800/50 rounded-xl p-4">
<div className="text-3xl font-bold text-blue-400">47</div>
<div className="text-sm text-slate-400">Compagnies partenaires</div>
</div>
<div className="bg-slate-800/50 rounded-xl p-4">
<div className="text-3xl font-bold text-emerald-400">+35%</div>
<div className="text-sm text-slate-400">Taux de conversion moyen</div>
</div>
<div className="bg-slate-800/50 rounded-xl p-4">
<div className="text-3xl font-bold text-orange-400">48h</div>
<div className="text-sm text-slate-400">Paiement commissions</div>
</div>
<div className="bg-slate-800/50 rounded-xl p-4">
<div className="text-3xl font-bold text-purple-400">24/7</div>
<div className="text-sm text-slate-400">Support dédié</div>
</div>
</div>
<div className="flex gap-4">
<button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors" onclick="openModal('partnerLoginModal')">
                                    Connexion Partenaire
                                </button>
<button className="px-8 py-3 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors" onclick="openModal('partnerModal')">
                                    Devenir partenaire
                                </button>
</div>
</div>
<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
<h3 className="text-xl font-semibold mb-6">Accès rapide</h3>
<div className="space-y-4">
<button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl flex items-center gap-4 transition-colors text-left" onclick="openModal('partnerLoginModal')">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
<i className="text-blue-400 w-6 h-6" data-lucide="layout-dashboard"></i>
</div>
<div>
<div className="font-medium">Mon Dashboard</div>
<div className="text-sm text-slate-400">Accéder à mon espace de gestion</div>
</div>
<i className="ml-auto text-slate-500 w-5 h-5" data-lucide="chevron-right"></i>
</button>
<button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl flex items-center gap-4 transition-colors text-left" onclick="openModal('partnerLoginModal')">
<div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<i className="text-emerald-400 w-6 h-6" data-lucide="calculator"></i>
</div>
<div>
<div className="font-medium">Multi-Tarificateur</div>
<div className="text-sm text-slate-400">Comparer 47 offres en 1 clic</div>
</div>
<i className="ml-auto text-slate-500 w-5 h-5" data-lucide="chevron-right"></i>
</button>
<button className="w-full p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl flex items-center gap-4 transition-colors text-left" onclick="openModal('partnerLoginModal')">
<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
<i className="text-orange-400 w-6 h-6" data-lucide="wallet"></i>
</div>
<div>
<div className="font-medium">Mes Commissions</div>
<div className="text-sm text-slate-400">Suivi en temps réel</div>
</div>
<i className="ml-auto text-slate-500 w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
<div className="flex items-center gap-3">
<i className="text-blue-400 w-5 h-5" data-lucide="headphones"></i>
<div>
<div className="text-sm font-medium">Besoin d'aide ?</div>
<div className="text-xs text-slate-400">Support partenaire : 01 23 45 67 89</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page hidden" id="memberPage">
<div className="pt-20 pb-16 bg-slate-50 min-h-screen">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-slate-200">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Bonjour, Jean-Pierre 👋</h1>
<p className="text-slate-500">Bienvenue dans votre espace adhérent</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2" onclick="openModal('callbackModal')">
<i className="w-4 h-4" data-lucide="headphones"></i>
                                Assistance
                            </button>
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2" onclick="handleLogout()">
<i className="w-4 h-4" data-lucide="log-out"></i>
                                Déconnexion
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="text-blue-600 w-5 h-5" data-lucide="file-text"></i>
</div>
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">Actif</span>
</div>
<div className="text-sm text-slate-500">Mon contrat</div>
<div className="text-lg font-semibold text-slate-900">CONFORT +</div>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
<i className="text-emerald-600 w-5 h-5" data-lucide="euro"></i>
</div>
</div>
<div className="text-sm text-slate-500">Cotisation mensuelle</div>
<div className="text-lg font-semibold text-slate-900">42,50€</div>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
<i className="text-orange-600 w-5 h-5" data-lucide="refresh-cw"></i>
</div>
</div>
<div className="text-sm text-slate-500">Remboursements en attente</div>
<div className="text-lg font-semibold text-slate-900">156,80€</div>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<i className="text-purple-600 w-5 h-5" data-lucide="calendar"></i>
</div>
</div>
<div className="text-sm text-slate-500">Prochain prélèvement</div>
<div className="text-lg font-semibold text-slate-900">05 Fév 2024</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8 mt-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100">
<h2 className="text-lg font-semibold text-slate-900">Actions rapides</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
<button className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center group" onclick="showToast('Téléchargement de votre carte...')">
<div className="w-12 h-12 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="text-blue-600 w-5 h-5" data-lucide="credit-card"></i>
</div>
<span className="text-sm font-medium text-slate-700">Ma carte TP</span>
</button>
<button className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-center group" onclick="showToast('Ouverture du formulaire de remboursement...')">
</button></div></div></div></div></div></div></div></div>
    </>
  );
}
