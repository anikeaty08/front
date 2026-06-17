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



      lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white border-b-4 border-black">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center space-x-12">
<div className="font-display text-3xl font-bold tracking-tight uppercase">
<span className="font-sans font-black">APEX</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-bold transition-colors font-sans uppercase hover:bg-black hover:text-white px-3 py-2" href="#methode">
                Comment ça marche
              </a>
<a className="text-sm font-bold transition-colors font-sans uppercase hover:bg-black hover:text-white px-3 py-2" href="#results">
                Résultats
              </a>
<a className="text-sm font-bold transition-colors font-sans uppercase hover:bg-black hover:text-white px-3 py-2" href="#clients">
                Témoignages
              </a>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="px-6 py-3 text-sm font-bold transition-all font-sans uppercase border-4 border-black bg-yellow-400 hover:-translate-x-1 hover:-translate-y-1 brutal-shadow hover:shadow-none">
              Audit Gratuit
            </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-yellow-100 via-white to-blue-100 border-b-4 border-black" style={{backgroundImage: 'linear-gradient(to bottom right, #facc15, #fef9c3, #ffffff, #0c99a9, #60a5fa, #dbeafe, #f87171, #000000)'}}>
<div className="max-w-7xl mr-auto ml-auto relative">
<div className="text-center max-w-5xl mr-auto ml-auto">

<div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black mb-12 bg-white font-bold uppercase text-xs">
<div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
<span className="font-sans">120+ entreprises ce trimestre</span>
</div>

<h1 className="md:text-8xl leading-none text-6xl font-black uppercase mb-8 tracking-tight">
            Transformez vos budgets Google Ads
            <br/>
<span className="bg-black text-white px-4 inline-block rotate-[-1deg]">
              en croissance explosive
            </span>
</h1>

<p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-tight font-sans font-bold border-4 border-black p-8 bg-white">
            Obtenez +247% de ROAS en moyenne grâce à notre stratégie data-driven
            et notre IA propriétaire,
            <strong className="font-sans font-black bg-yellow-400">
              pour que vous puissiez enfin scaler sans brûler votre budget.
            </strong>
</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
<button className="group transition-all flex sm:w-auto brutal-shadow-lg uppercase hover:-translate-x-2 hover:-translate-y-2 hover:shadow-none text-lg font-extrabold text-white bg-[#0c99a9] w-full border-black border-4 pt-5 pr-10 pb-5 pl-10 space-x-3 items-center justify-center">
<span className="">Audit gratuit 30 min</span>
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
<div className="border-4 border-black p-6 bg-white brutal-shadow">
<div className="text-5xl tracking-tight mb-2 font-sans font-black">
                +247%
              </div>
<div className="text-sm font-bold uppercase font-sans">
                ROAS moyen
              </div>
</div>
<div className="border-4 border-black p-6 bg-white brutal-shadow">
<div className="text-5xl tracking-tight mb-2 font-sans font-black">
                €12M+
              </div>
<div className="text-sm font-bold uppercase font-sans">
                Budget optimisé
              </div>
</div>
<div className="border-4 border-black p-6 bg-white brutal-shadow">
<div className="text-5xl tracking-tight mb-2 font-sans font-black">
                -58%
              </div>
<div className="text-sm font-bold uppercase font-sans">
                Réduction CPA
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 border-b-4 bg-yellow-400 border-black">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl tracking-tight mb-6 font-sans font-black uppercase">
            Vous êtes peut-être dans cette situation...
          </h2>
<p className="text-2xl font-bold uppercase font-sans">
            Et ça vous coûte cher chaque jour
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-start space-x-4">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0 bg-red-400">
<svg className="lucide lucide-alert-circle w-8 h-8" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div>
<h3 className="text-2xl font-black mb-3 font-sans uppercase">
                  "Mes campagnes Google Ads ne sont pas rentables"
                </h3>
<p className="leading-relaxed font-bold font-sans">
                  Vous dépensez des milliers d'euros chaque mois mais votre ROAS
                  ne dépasse pas 200%. Vous brûlez votre budget sans voir de
                  retour sur investissement.
                </p>
</div>
</div>
</div>
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-start space-x-4">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0 bg-blue-400">
<svg className="lucide lucide-clock w-8 h-8" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div>
<h3 className="text-2xl font-black mb-3 font-sans uppercase">
                  "Je perds un temps fou à optimiser"
                </h3>
<p className="leading-relaxed font-bold font-sans">
                  Entre les ajustements d'enchères, l'analyse des mots-clés et
                  les rapports, vous passez 15h par semaine sur Google Ads au
                  lieu de développer votre business.
                </p>
</div>
</div>
</div>
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-start space-x-4">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0 bg-red-400">
<svg className="lucide lucide-trending-down w-8 h-8" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<div>
<h3 className="text-2xl font-black mb-3 font-sans uppercase">
                  "Mon CPA ne cesse d'augmenter"
                </h3>
<p className="leading-relaxed font-bold font-sans">
                  Chaque nouveau client vous coûte de plus en plus cher. Ce qui
                  était rentable il y a 6 mois ne l'est plus aujourd'hui, et
                  vous ne savez pas comment inverser la tendance.
                </p>
</div>
</div>
</div>
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-start space-x-4">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0 bg-blue-400">
<svg className="lucide lucide-target w-8 h-8" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<div>
<h3 className="text-2xl font-black mb-3 font-sans uppercase">
                  "Mes concurrents me dépassent"
                </h3>
<p className="leading-relaxed font-bold font-sans">
                  Vous voyez vos compétiteurs apparaître en première position
                  avec des annonces plus performantes. Vous perdez des parts de
                  marché chaque semaine.
                </p>
</div>
</div>
</div>
</div>
<div className="mt-12 p-10 border-4 border-black text-center bg-black text-white">
<p className="text-3xl font-black mb-3 font-sans uppercase">
            Chaque jour sans optimisation =
            <span className="bg-red-400 text-black px-3">
              argent perdu définitivement
            </span>
</p>
<p className="text-xl font-bold uppercase font-sans">
            Le coût de l'inaction dépasse celui d'une mauvaise stratégie
          </p>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-black border-b-4 border-black">
<div className="max-w-4xl mx-auto text-center">
<h3 className="text-4xl md:text-5xl mb-6 tracking-tight font-sans font-black uppercase text-white">
          Il est temps de reprendre le contrôle
        </h3>
<p className="text-2xl mb-10 font-bold uppercase font-sans text-yellow-400">
          Découvrez gratuitement les opportunités cachées dans vos campagnes
        </p>
<button className="px-10 py-5 text-lg font-black transition-all inline-flex items-center space-x-3 brutal-shadow-lg uppercase border-4 border-black bg-yellow-400 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-none">
<span className="font-sans">Obtenir mon audit gratuit</span>
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-lg mt-6 font-bold uppercase font-sans text-yellow-400">
          ✓ Sans engagement · ✓ Sous 24h · ✓ Valeur 500€
        </p>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white border-b-4 border-black" id="methode">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black mb-8 bg-white font-bold uppercase text-xs">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<span className="font-sans">Notre Méthode</span>
</div>
<h2 className="text-6xl md:text-7xl tracking-tight mb-8 font-sans font-black uppercase">
            Comment nous
            <span className="bg-black text-white px-4 inline-block rotate-[1deg]">
              multiplions votre ROAS
            </span>
</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20">
<div className="p-8 border-4 border-black bg-yellow-400 brutal-shadow">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6 bg-white">
<svg className="lucide lucide-brain w-8 h-8" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5"></path>
<path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
<path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
<path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
<path d="M18 18a4 4 0 0 0 2-7.464"></path>
<path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
<path d="M6 18a4 4 0 0 1-2-7.464"></path>
<path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
</svg>
</div>
<h3 className="text-3xl mb-4 tracking-tight font-sans font-black uppercase">
              Optimisation IA 24/7
            </h3>
<p className="mb-4 leading-tight font-bold font-sans">
              Notre algorithme analyse 50+ métriques en temps réel et ajuste vos
              enchères automatiquement
            </p>
<div className="text-xl font-black font-sans uppercase">
              → +150% de performance moyenne
            </div>
</div>
<div className="p-8 border-4 border-black bg-blue-400 brutal-shadow">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6 bg-white">
<svg className="lucide lucide-target w-8 h-8" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-3xl mb-4 tracking-tight font-sans font-black uppercase">
              Ciblage Prédictif
            </h3>
<p className="mb-4 leading-tight font-bold font-sans">
              Identification des audiences à forte intention d'achat grâce au
              machine learning
            </p>
<div className="text-xl font-black font-sans uppercase">
              → -60% de CPA en moyenne
            </div>
</div>
<div className="p-8 border-4 border-black bg-red-400 brutal-shadow">
<div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6 bg-white">
<svg className="lucide lucide-bar-chart-3 w-8 h-8" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="text-3xl mb-4 tracking-tight font-sans font-black uppercase">
              Dashboards Temps Réel
            </h3>
<p className="mb-4 leading-tight font-bold font-sans">
              Visibilité totale sur vos performances avec alertes instantanées
            </p>
<div className="text-xl font-black font-sans uppercase">
              → Réactivité en moins de 2h
            </div>
</div>
</div>

<div className="p-12 border-4 border-black bg-black text-white brutal-shadow-lg">
<div className="text-center mb-12">
<h3 className="text-4xl mb-4 font-sans font-black uppercase text-yellow-400">
              Ce qui nous rend uniques
            </h3>
<p className="text-xl font-bold uppercase font-sans">
              Pas de flou artistique. Voici exactement ce qui nous différencie.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div className="flex items-start space-x-4 border-4 border-white p-6 bg-black">
<div className="w-12 h-12 border-4 border-white flex items-center justify-center flex-shrink-0 bg-yellow-400">
<svg className="lucide lucide-check w-7 h-7 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="font-black text-2xl mb-3 font-sans uppercase text-yellow-400">
                  Garantie de Performance
                </h4>
<p className="font-bold font-sans">
                  Nous garantissons +150% de ROAS minimum ou vous ne payez pas.
                  Aucune autre agence n'ose faire cette promesse.
                </p>
</div>
</div>
<div className="flex items-start space-x-4 border-4 border-white p-6 bg-black">
<div className="w-12 h-12 border-4 border-white flex items-center justify-center flex-shrink-0 bg-yellow-400">
<svg className="lucide lucide-check w-7 h-7 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="font-black text-2xl mb-3 font-sans uppercase text-yellow-400">
                  Technologie Propriétaire
                </h4>
<p className="font-bold font-sans">
                  Notre IA a été entraînée sur €50M+ de dépenses publicitaires.
                  Elle détecte des patterns que les humains ne voient pas.
                </p>
</div>
</div>
<div className="flex items-start space-x-4 border-4 border-white p-6 bg-black">
<div className="w-12 h-12 border-4 border-white flex items-center justify-center flex-shrink-0 bg-yellow-400">
<svg className="lucide lucide-check w-7 h-7 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="font-black text-2xl mb-3 font-sans uppercase text-yellow-400">
                  Équipe Dédiée Senior
                </h4>
<p className="font-bold font-sans">
                  Pas de junior sur votre compte. Vous travaillez directement
                  avec des experts certifiés Google Partner Premium.
                </p>
</div>
</div>
<div className="flex items-start space-x-4 border-4 border-white p-6 bg-black">
<div className="w-12 h-12 border-4 border-white flex items-center justify-center flex-shrink-0 bg-yellow-400">
<svg className="lucide lucide-check w-7 h-7 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<h4 className="font-black text-2xl mb-3 font-sans uppercase text-yellow-400">
                  Transparence Totale
                </h4>
<p className="font-bold font-sans">
                  Accès complet à vos comptes, dashboards live, et réunions
                  hebdomadaires. Zéro boîte noire.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-yellow-400 border-b-4 border-black" id="clients">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black mb-8 bg-white font-bold uppercase text-xs">
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="font-sans">Témoignages Clients</span>
</div>
<h2 className="text-6xl md:text-7xl tracking-tight mb-8 font-sans font-black uppercase">
            Nos clients obtiennent des
            <span className="bg-black text-white px-4 inline-block rotate-[-1deg]">
              résultats réels
            </span>
</h2>
</div>

<div className="mb-16 p-12 border-4 border-black bg-white brutal-shadow-lg">
<div className="flex items-center space-x-2 mb-8">
<svg className="lucide lucide-star w-6 h-6 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-6 h-6 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-6 h-6 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-6 h-6 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-6 h-6 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-3xl mb-10 leading-tight font-bold font-sans">
            "APEX a
            <span className="font-black bg-yellow-400 px-2">
              multiplié notre ROAS par 3 en seulement 8 semaines.
            </span>
            Nous dépensions €15K/mois avec un ROAS de 180%. Aujourd'hui nous
            sommes à €45K/mois avec un ROAS de 520%. C'est la meilleure décision
            business que j'ai prise cette année."
          </p>
<div className="flex items-center justify-between border-t-4 border-black pt-8">
<div className="flex items-center space-x-4">
<img alt="Client" className="w-20 h-20 border-4 border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-black text-2xl font-sans uppercase">
                  Marc Dubois
                </div>
<div className="font-bold font-sans">CEO, LuxeFashion</div>
</div>
</div>
<div className="text-right border-4 border-black p-6 bg-yellow-400">
<div className="text-5xl font-sans font-black">+312%</div>
<div className="text-sm font-bold uppercase font-sans">ROAS</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-center space-x-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="mb-8 leading-tight font-bold font-sans">
              "Notre
              <strong className="font-black bg-yellow-400 px-1">
                coût par lead a été divisé par 2
              </strong>
              avec des leads beaucoup plus qualifiés. L'équipe APEX comprend
              vraiment le SaaS B2B."
            </p>
<div className="flex items-center space-x-3 border-t-4 border-black pt-6">
<img alt="Client" className="w-14 h-14 border-4 border-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-black font-sans">Sarah Martin</div>
<div className="text-sm font-bold font-sans">CMO, CRMPro</div>
</div>
</div>
</div>
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-center space-x-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="mb-8 leading-tight font-bold font-sans">
              "Transparence totale,
              <strong className="font-black bg-yellow-400 px-1">
                reporting impeccable
              </strong>
              et résultats au rendez-vous mois après mois. Des vrais experts
              Google Ads."
            </p>
<div className="flex items-center space-x-3 border-t-4 border-black pt-6">
<img alt="Client" className="w-14 h-14 border-4 border-black" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-black font-sans">Thomas Laurent</div>
<div className="text-sm font-bold font-sans">Founder, BioCare</div>
</div>
</div>
</div>
<div className="p-8 border-4 border-black bg-white brutal-shadow">
<div className="flex items-center space-x-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-5 h-5 fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="mb-8 leading-tight font-bold font-sans">
              "
              <strong className="font-black bg-yellow-400 px-1">
                Meilleure décision
              </strong>
              que nous ayons prise. Les résultats parlent d'eux-mêmes et
              l'équipe est ultra réactive."
            </p>
<div className="flex items-center space-x-3 border-t-4 border-black pt-6">
<img alt="Client" className="w-14 h-14 border-4 border-black" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="font-black font-sans">Pierre Moreau</div>
<div className="text-sm font-bold font-sans">Dir. Marketing</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white border-b-4 border-black" id="results">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black mb-8 bg-white font-bold uppercase text-xs">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="font-sans">Résultats Concrets</span>
</div>
<h2 className="text-6xl md:text-7xl tracking-tight mb-8 font-sans font-black uppercase">
            Des chiffres qui
            <span className="bg-black text-white px-4 inline-block rotate-[1deg]">
              parlent d'eux-mêmes
            </span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-10">
<div className="p-12 border-4 border-black bg-red-400 brutal-shadow-lg">
<div className="flex items-start justify-between mb-10">
<div>
<div className="text-sm font-black mb-3 font-sans uppercase">
                  E-commerce Mode
                </div>
<div className="text-4xl tracking-tight font-sans font-black uppercase">
                  Luxe &amp; Prêt-à-porter
                </div>
</div>
<div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-white">
<svg className="lucide lucide-shopping-bag w-8 h-8" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a4 4 0 0 1-8 0"></path>
<path d="M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-10 border-4 border-black p-6 bg-white">
<div>
<div className="text-4xl mb-2 font-sans font-black">+312%</div>
<div className="text-sm font-bold uppercase font-sans">ROAS</div>
</div>
<div>
<div className="text-4xl mb-2 font-sans font-black">-45%</div>
<div className="text-sm font-bold uppercase font-sans">CPA</div>
</div>
<div>
<div className="text-4xl mb-2 font-sans font-black">€2.8M</div>
<div className="text-sm font-bold uppercase font-sans">Revenue</div>
</div>
</div>
<p className="leading-tight font-bold font-sans text-lg">
              Restructuration complète avec Performance Max et remarketing
              dynamique intelligent basé sur le comportement d'achat.
            </p>
</div>
<div className="p-12 border-4 border-black bg-blue-400 brutal-shadow-lg">
<div className="flex items-start justify-between mb-10">
<div>
<div className="text-sm font-black mb-3 font-sans uppercase">
                  SaaS B2B
                </div>
<div className="text-4xl tracking-tight font-sans font-black uppercase">
                  Logiciel CRM
                </div>
</div>
<div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-white">
<svg className="lucide lucide-laptop w-8 h-8" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
<path d="M20.054 15.987H3.946"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-10 border-4 border-black p-6 bg-white">
<div>
<div className="text-4xl mb-2 font-sans font-black">+189%</div>
<div className="text-sm font-bold uppercase font-sans">Leads</div>
</div>
<div>
<div className="text-4xl mb-2 font-sans font-black">-62%</div>
<div className="text-sm font-bold uppercase font-sans">CPL</div>
</div>
<div>
<div className="text-4xl mb-2 font-sans font-black">+428%</div>
<div className="text-sm font-bold uppercase font-sans">ROI</div>
</div>
</div>
<p className="leading-tight font-bold font-sans text-lg">
              Campagnes Search hyper-ciblées avec landing pages optimisées et
              séquences de remarketing YouTube pour leads qualifiés.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-red-400 border-b-4 border-black">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-black mb-8 bg-white font-bold uppercase text-xs">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-sans">Places limitées</span>
</div>
<h2 className="text-5xl md:text-6xl tracking-tight mb-6 font-sans font-black uppercase">
          Seulement
          <span className="bg-black text-white px-4 inline-block rotate-[-1deg]">
            5 places disponibles
          </span>
          ce mois-ci
        </h2>
<p className="text-2xl mb-12 max-w-3xl mx-auto font-bold font-sans">
          Pour garantir la qualité de nos services, nous ne prenons que 5
          nouveaux clients par mois.
          <strong className="bg-white px-2">
            3 places ont déjà été prises cette semaine.
          </strong>
</p>
<button className="px-12 py-6 text-xl font-black transition-all inline-flex items-center space-x-3 brutal-shadow-lg uppercase border-4 border-black bg-yellow-400 hover:translate-x-2 hover:translate-y-2">
<span className="font-sans">Réserver ma place maintenant</span>
<svg className="lucide lucide-arrow-right w-7 h-7" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</section>

<section className="py-32 px-6 lg:px-8 bg-black">
<div className="max-w-5xl mx-auto">
<div className="relative p-20 border-4 border-white bg-yellow-400">
<div className="relative text-center">
<h2 className="text-6xl md:text-7xl tracking-tight mb-8 font-sans font-black uppercase">
              Prêt à
              <span className="bg-black text-white px-4 inline-block rotate-[1deg]">
                multiplier votre ROAS
              </span>
              ?
            </h2>
<p className="text-2xl mb-16 max-w-2xl mx-auto font-bold font-sans uppercase">
              Audit gratuit de 30 minutes pour identifier vos opportunités
              cachées
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
<button className="px-12 py-6 text-xl font-black transition-all inline-flex items-center space-x-3 brutal-shadow-lg uppercase border-4 border-black bg-yellow-400 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-none">
<span className="font-sans">Obtenir mon audit gratuit</span>
<svg className="lucide lucide-calendar w-6 h-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</button>
</div>
<div className="flex flex-wrap items-center justify-center gap-8 text-sm font-black uppercase">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check-circle w-6 h-6" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="font-sans">Sans engagement</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check-circle w-6 h-6" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="font-sans">Réponse en 24h</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check-circle w-6 h-6" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="font-sans">100% personnalisé</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 lg:px-8 border-t-4 border-black bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="font-display text-4xl font-black tracking-tight mb-6 uppercase">
<span className="font-sans">APEX</span>
</div>
<p className="mb-8 max-w-md leading-tight font-bold font-sans text-lg">
              L'agence Google Ads qui transforme vos budgets publicitaires en
              croissance exponentielle.
            </p>
</div>
<div>
<div className="text-sm font-black mb-6 font-sans uppercase border-b-4 border-black pb-2">
              Navigation
            </div>
<div className="space-y-4">
<a className="block text-sm transition-colors font-bold font-sans uppercase hover:bg-black hover:text-white px-2 py-1" href="#methode">
                Comment ça marche
              </a>
<a className="block text-sm transition-colors font-bold font-sans uppercase hover:bg-black hover:text-white px-2 py-1" href="#results">
                Résultats
              </a>
<a className="block text-sm transition-colors font-bold font-sans uppercase hover:bg-black hover:text-white px-2 py-1" href="#clients">
                Témoignages
              </a>
</div>
</div>
<div>
<div className="text-sm font-black mb-6 font-sans uppercase border-b-4 border-black pb-2">
              Contact
            </div>
<div className="space-y-4">
<a className="block text-sm transition-colors font-bold font-sans uppercase hover:bg-black hover:text-white px-2 py-1" href="#">
                Réserver un audit
              </a>
<a className="block text-sm transition-colors font-bold font-sans uppercase hover:bg-black hover:text-white px-2 py-1" href="#">
                +33 1 23 45 67 89
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t-4 flex flex-col md:flex-row items-center justify-between gap-4 border-black">
<div className="text-sm font-bold uppercase font-sans">
            © 2024 APEX Agency
          </div>
</div>
</div>
</footer>


    </>
  );
}
