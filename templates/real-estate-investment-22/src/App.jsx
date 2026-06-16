import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      function openDemo() {
          document.getElementById('demo-modal').classList.remove('hidden');
          document.body.style.overflow = 'hidden';
          if(window.lucide) lucide.createIcons();
      }
      function closeDemo() {
          document.getElementById('demo-modal').classList.add('hidden');
          document.body.style.overflow = '';
      }
      if(window.lucide) lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
<a className="flex items-center space-x-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap text-slate-900 tracking-tight">
            La Brique Bleue
          </span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
            Connexion
          </a>
<a className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40" href="#">
            Commencer
          </a>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-blue-600 md:p-0 transition-colors" href="#">
                Fonctionnalités
              </a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-blue-600 md:p-0 transition-colors" href="#">
                Tarifs
              </a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 hover:text-blue-600 md:p-0 transition-colors" href="#">
                Ressources
              </a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] opacity-20 pointer-events-none"></div>

<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="px-4 mx-auto max-w-7xl text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8 fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Nouvelle version disponible
        </div>
<h1 className="mb-6 text-5xl font-semibold tracking-tight leading-tight text-slate-900 md:text-7xl fade-in-up delay-100">
          Des décisions immobilières
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            claires et rentables.
          </span>
</h1>
<p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 fade-in-up delay-200">
          Analyse complète, scénarios locatifs comparés et prévisions de
          cashflow en un clic. Sachez exactement si un bien vaut le coup avant
          d'acheter.
        </p>
<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 fade-in-up delay-300">
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all shadow-lg shadow-blue-600/30 hover:scale-105" href="#">
            Analyser mon premier bien
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-slate-900 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer" onclick="openDemo()">
            Voir la démo
            <i className="ml-2 w-4 h-4 text-slate-400" data-lucide="play-circle"></i>
</button>
</div>

<div className="mt-16 relative mx-auto max-w-5xl fade-in-up delay-300">
<div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden group">

<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 space-x-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="md:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-slate-900">
                      Appartement Lyon 3
                    </h3>
<p className="text-sm text-slate-500">45m² • 195 000€</p>
</div>
<span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                    Score 87/100
                  </span>
</div>

<div className="h-48 bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-end justify-between gap-2 relative overflow-hidden">
<div className="absolute top-4 left-4 text-xs font-medium text-slate-400">
                    Cashflow Cumulé (10 ans)
                  </div>
<div className="w-full bg-blue-100 h-[20%] rounded-t-sm"></div>
<div className="w-full bg-blue-200 h-[35%] rounded-t-sm"></div>
<div className="w-full bg-blue-300 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-blue-400 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-blue-500 h-[75%] rounded-t-sm"></div>
<div className="w-full bg-blue-600 h-[90%] rounded-t-sm shadow-lg shadow-blue-500/20"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
<p className="text-xs text-slate-500 mb-1">Rentabilité Brute</p>
<p className="text-xl font-semibold text-slate-900">7.2%</p>
</div>
<div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30">
<p className="text-xs text-emerald-600 mb-1">
                      Cashflow Mensuel
                    </p>
<p className="text-xl font-semibold text-emerald-700">+280 €</p>
</div>
</div>
</div>

<div className="md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white flex flex-col justify-between shadow-lg">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-emerald-500 rounded-md">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-emerald-400">
                      Recommandé
                    </span>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-2">
                    Acheter
                  </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                    Le bien présente une excellente rentabilité et un risque
                    maîtrisé. C'est un feu vert pour cet investissement.
                  </p>
</div>
<div className="mt-6 pt-6 border-t border-slate-700">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Indice de confiance</span>
<span className="font-semibold text-white">High</span>
</div>
<div className="w-full bg-slate-700 h-1.5 rounded-full mt-2">
<div className="bg-emerald-500 h-1.5 rounded-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="shield-check"></i>
          Vos données sont sécurisées et confidentielles
        </p>
</div>
</section>
<section className="py-10 border-b border-slate-100 bg-white/80 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<p className="mb-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          Ils nous font confiance
        </p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="fill-slate-800 w-6 h-6" data-lucide="hexagon"></i>
            TechImmo
          </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="fill-slate-800 w-6 h-6" data-lucide="triangle"></i>
            InvestClub
          </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="fill-slate-800 w-6 h-6" data-lucide="circle"></i>
            Patrimoine+
          </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<i className="fill-slate-800 w-6 h-6" data-lucide="square"></i>
            FiscalIA
          </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comment ça marche ?
          </h2>
<p className="mt-4 text-lg text-slate-400">
            Du doute à la décision en 3 étapes simples.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 -z-10"></div>
<div className="relative group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-900/20 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
</div>
<div className="text-center px-4">
<span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold mb-3">
                01
              </span>
<h3 className="text-lg font-semibold text-white mb-2">
                Entrez les informations
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Adresse, prix, surface. Les champs manquants sont estimés
                automatiquement par l'IA.
              </p>
</div>
</div>
<div className="relative group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-900/20 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
</div>
<div className="text-center px-4">
<span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold mb-3">
                02
              </span>
<h3 className="text-lg font-semibold text-white mb-2">
                Analyse automatique
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Score de rentabilité, fiscalité, et comparaison des stratégies
                (LCD, Nu, Meublé).
              </p>
</div>
</div>
<div className="relative group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-900/20 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 text-emerald-400 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="text-center px-4">
<span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold mb-3">
                03
              </span>
<h3 className="text-lg font-semibold text-white mb-2">
                Décision claire
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Verdict simple : Acheter, Négocier ou Fuir. Recevez un rapport
                PDF complet.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl max-w-2xl">
            Un verdict clair pour chaque bien.
          </h2>
<p className="mt-4 text-lg text-slate-500 max-w-2xl">
            Fini les doutes. Notre technologie analyse des millions de points de
            données pour vous donner une recommandation simple.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
<div className="mb-8">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-indigo-600" data-lucide="git-compare"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">
                Comparateur de Stratégies
              </h3>
<p className="text-slate-500 mt-2 text-sm">
                Nous simulons automatiquement toutes les possibilités
                d'exploitation pour maximiser vos revenus.
              </p>
</div>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

<div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-colors cursor-default group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 bg-white border border-slate-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="key"></i>
</div>
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    RECOMMANDÉ
                  </span>
</div>
<p className="font-semibold text-slate-900">Longue durée</p>
<div className="mt-3 space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Rentabilité</span>
<span className="font-medium text-slate-900">5.2%</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Risque</span>
<span className="font-medium text-emerald-600">Faible</span>
</div>
</div>
</div>

<div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-colors cursor-default group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 bg-white border border-slate-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="briefcase"></i>
</div>
</div>
<p className="font-semibold text-slate-900">Courte durée (LCD)</p>
<div className="mt-3 space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Rentabilité</span>
<span className="font-medium text-slate-900">7.8%</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Risque</span>
<span className="font-medium text-amber-500">Moyen</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-rose-600" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">
              Rapport PDF Pro
            </h3>
<p className="text-slate-500 mt-2 text-sm">
              Générez un dossier bancaire complet pour votre banquier ou
              associés.
            </p>
<div className="mt-6 flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="w-8 h-8 bg-rose-100 rounded flex items-center justify-center shrink-0">
<span className="text-[10px] font-bold text-rose-600">PDF</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">
                  Rapport_Lyon_3.pdf
                </p>
<p className="text-[10px] text-slate-400">Prêt pour la banque</p>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="download"></i>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-amber-600" data-lucide="bell-ring"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">
              Alertes Intelligentes
            </h3>
<p className="text-slate-500 mt-2 text-sm">
              Soyez notifié dès qu'un bien correspondant à vos critères de
              rentabilité apparaît.
            </p>
<div className="mt-6 space-y-2">
<div className="flex items-center gap-3 p-2 bg-white border border-slate-100 rounded-lg shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<p className="text-xs text-slate-600">
                  Nouveau bien &gt; 7% rentabilité
                </p>
</div>
<div className="flex items-center gap-3 p-2 bg-slate-50 border border-slate-100 rounded-lg opacity-60">
<span className="h-2 w-2 rounded-full bg-slate-300"></span>
<p className="text-xs text-slate-500">Changement de prix détecté</p>
</div>
</div>
</div>

<div className="md:col-span-3 bg-slate-900 rounded-3xl shadow-sm p-8 md:p-12 text-white overflow-hidden relative group">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                  Données de marché en temps réel
                </div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">
                  Filtrez selon votre stratégie
                </h3>
<p className="text-slate-400 text-lg mb-8 max-w-md">
                  Adaptez l'analyse à votre objectif. Cashflow positif,
                  patrimoine, ou optimisation fiscale. Nous trions les annonces
                  pour vous.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
                    Filtres par cashflow minimum
                  </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
                    Détection des passoires thermiques
                  </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
                    Calcul de la marge de négociation
                  </li>
</ul>
</div>

<div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl transform md:rotate-2 md:group-hover:rotate-0 transition-transform duration-500">
<div className="space-y-4">
<div className="flex justify-between items-center text-sm mb-4 border-b border-slate-700 pb-2">
<span className="text-slate-400">Filtres actifs</span>
<span className="text-blue-400 text-xs cursor-pointer">
                      Réinitialiser
                    </span>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500">
                      Objectif Cashflow
                    </label>
<div className="h-2 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Neutre</span>
<span className="text-white font-medium">Positif ++</span>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs text-slate-500">
                      Rendement minimum
                    </label>
<div className="flex items-center justify-between bg-slate-900 rounded p-2 border border-slate-700">
<span className="text-sm text-white">6%</span>
<span className="text-xs text-slate-500">Brut</span>
</div>
</div>
<div className="pt-4">
<button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                      Appliquer les filtres
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Tarification simple.
          </h2>
<p className="mt-4 text-lg text-slate-500">
            Rentabilisé dès le premier projet.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
<h3 className="text-xl font-semibold text-slate-900">Découverte</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-5xl font-bold tracking-tight">0€</span>
<span className="ml-2 text-xl font-medium text-slate-500">/mois</span>
</div>
<p className="mt-6 text-slate-500">Parfait pour tester l'outil.</p>
<ul className="mt-8 space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-blue-500 shrink-0" data-lucide="check"></i>
                1 Analyse par mois
              </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-blue-500 shrink-0" data-lucide="check"></i>
                Indicateurs de base
              </li>
</ul>
<a className="block w-full py-3 px-6 border border-slate-200 rounded-xl text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#">
              S'inscrire
            </a>
</div>
<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 p-3 bg-blue-600 rounded-bl-2xl text-xs font-bold text-white">
              POPULAIRE
            </div>
<h3 className="text-xl font-semibold text-white">Investisseur</h3>
<div className="mt-4 flex items-baseline text-white">
<span className="text-5xl font-bold tracking-tight">19€</span>
<span className="ml-2 text-xl font-medium text-slate-400">/mois</span>
</div>
<p className="mt-6 text-slate-400">
              Pour ceux qui veulent investir sérieusement.
            </p>
<ul className="mt-8 space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check"></i>
                Analyses illimitées
              </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check"></i>
                Rapports PDF Banques
              </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check"></i>
                Alertes temps réel
              </li>
</ul>
<a className="block w-full py-3 px-6 bg-blue-600 rounded-xl text-center font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20" href="#">
              Commencer
            </a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Ils ont sauté le pas.
          </h2>
<p className="mt-4 text-lg text-slate-500">
            Rejoignez 2,000+ investisseurs rentables.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
              "L'outil m'a évité un mauvais achat à Bordeaux. Le calcul de
              cashflow est d'une précision redoutable et a révélé des charges
              cachées."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                TL
              </div>
<div>
<p className="font-semibold text-slate-900">Thomas L.</p>
<p className="text-xs text-slate-500">Investisseur débutant</p>
</div>
</div>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
              "Le rapport PDF est super pro. Mon banquier a validé mon dossier
              en 48h grâce à la clarté des chiffres présentés."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700">
                SJ
              </div>
<div>
<p className="font-semibold text-slate-900">Sarah J.</p>
<p className="text-xs text-slate-500">3 biens immobiliers</p>
</div>
</div>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-1 text-amber-400 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
              "La comparaison des stratégies fiscales (LMNP vs Nu) est un game
              changer. J'ai optimisé ma rentabilité de +1.5%."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
                MK
              </div>
<div>
<p className="font-semibold text-slate-900">Marc K.</p>
<p className="text-xs text-slate-500">Investisseur Pro</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Tout ce dont vous avez besoin pour investir.
          </h2>
<p className="mt-4 text-slate-500">
            Un outil complet pour remplacer vos fichiers Excel.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Tableau de bord
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Suivez tous vos indicateurs clés en un coup d'œil.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="bell"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Alertes temps réel
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Ne ratez plus aucune opportunité sur le marché.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="file-check"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Rapports Pro
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Exportation PDF pour convaincre les banques.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="filter"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Filtres avancés
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Ciblez uniquement les biens à fort potentiel.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="history"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Historique
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Retrouvez toutes vos analyses passées.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-600" data-lucide="shield"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Scoring Précis
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Algorithme basé sur des milliers de données.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-blue-700">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>
<div className="relative max-w-4xl mx-auto text-center px-4">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Commencez à analyser votre premier bien
        </h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Créez votre compte gratuitement et découvrez pourquoi les
          investisseurs rentables utilisent La Brique Bleue.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg" href="#">
            Démarrer gratuitement
            <i className="inline-block ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<p className="text-blue-200 text-sm mt-4 sm:mt-0 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
            Pas de carte requise
          </p>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center space-x-2 text-white mb-4">
<i className="w-6 h-6" data-lucide="building-2"></i>
<span className="font-semibold text-lg tracking-tight">
                La Brique Bleue
              </span>
</div>
<p className="text-sm text-slate-500">
              L'outil d'analyse incontournable pour l'investisseur immobilier
              moderne.
            </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Produit</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Fonctionnalités
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Tarifs
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Simulateur
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Ressources</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Guide de l'investisseur
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  FAQ
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Mentions légales
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  Confidentialité
                </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors" href="#">
                  CGV
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2024 La Brique Bleue. Tous droits réservés.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto hidden" id="demo-modal">
<div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
<button className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group" onclick="closeDemo()">
<i className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i>
            Retour à l'accueil
          </button>
<span className="font-semibold text-slate-900 tracking-tight">
            Démonstration
          </span>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 py-16 text-center">
<span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-6 uppercase tracking-wide">
          Tutoriel Vidéo
        </span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
          Découvrez la puissance de l'analyse.
        </h2>
<p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          Une interface simple pour des décisions complexes. Voyez comment ça
          marche en 2 minutes.
        </p>
<div className="relative w-full aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden mb-16 border-4 border-white ring-1 ring-slate-200 group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-xl">
<i className="w-10 h-10 text-white fill-current ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
<div className="text-left">
<p className="font-medium text-lg">Tutoriel complet</p>
<p className="text-sm text-slate-300">2:45 • HD</p>
</div>
</div>
</div>
<div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10">
<h3 className="text-3xl font-semibold mb-6 tracking-tight">
              Convaincu par la démonstration ?
            </h3>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg" onclick="closeDemo()">
                Créer mon compte gratuitement
              </button>
<button className="px-8 py-3.5 bg-blue-700 text-white border border-blue-400 font-medium rounded-full hover:bg-blue-800 transition-colors" onclick="closeDemo()">
                Retour au site
              </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
