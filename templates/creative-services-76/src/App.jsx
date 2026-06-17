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
      

<main className="relative w-full flex flex-col min-h-screen">

<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#Fdfcf8]/95 backdrop-blur-md transition-all duration-300">
<div className="flex items-center gap-5">
<a className="font-instrument-serif italic text-4xl text-stone-900 tracking-tight hover:opacity-80 transition-opacity pb-1" href="#">
            Bila.
          </a>
</div>
<div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
<a className="text-lg font-medium text-stone-900 hover:text-teal-600 transition-colors" href="#">Services</a>
<a className="text-lg font-medium text-stone-900 hover:text-teal-600 transition-colors" href="/portfolio">Portfolio</a>
<a className="text-lg font-medium text-stone-900 hover:text-teal-600 transition-colors" href="/agence">L'agence</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block border border-stone-900 text-stone-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-stone-900 hover:text-[#Fdfcf8] transition-all duration-300" onclick="window.location.href='/contact'">
            Discutons
          </button>
<button className="md:hidden text-stone-900">
<svg className="lucide lucide-menu w-8 h-8 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="pt-48 pb-20 md:pt-60 md:pb-32 px-6 md:px-12 max-w-[90rem] mx-auto w-full">
<div className="max-w-4xl">
<h1 className="text-[12vw] md:text-[7vw] leading-[0.9] tracking-tighter text-stone-900 mb-8 animate-reveal">
            Notre <span className="italic text-teal-600 font-light serif">Processus</span>
<br/>de Création.
          </h1>
<p className="text-lg md:text-2xl text-stone-500 font-light max-w-xl leading-relaxed animate-reveal delay-200">
            Une approche en trois temps pour transformer votre vision en une marque digitale pérenne et impactante.
          </p>
</div>
</section>

<section className="relative w-full px-6 md:px-12 pb-32 max-w-[90rem] mx-auto">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">

<aside className="hidden md:block w-1/4 min-w-[280px]">
<div className="sticky top-40 flex flex-col gap-8 border-l border-stone-200 pl-8">
<span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2">Étapes Clés</span>
<a className="group flex items-center gap-4 opacity-100 hover:opacity-100 transition-opacity" href="#step-1">
<div className="step-marker w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-medium text-stone-500 bg-white group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900">1</div>
<span className="serif text-xl italic text-stone-900 group-hover:translate-x-1 transition-transform">Fondation &amp; Stratégie</span>
</a>
<a className="group flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity" href="#step-2">
<div className="step-marker w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-medium text-stone-500 bg-white">2</div>
<span className="serif text-xl italic text-stone-900 group-hover:translate-x-1 transition-transform">Interface Web</span>
</a>
<a className="group flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity" href="#step-3">
<div className="step-marker w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-medium text-stone-500 bg-white">3</div>
<span className="serif text-xl italic text-stone-900 group-hover:translate-x-1 transition-transform">Rebranding Global</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col gap-24 md:gap-40">

<div className="group scroll-mt-40" id="step-1">
<div className="border-t border-stone-900 mb-6 w-12 pt-4">
<span className="text-sm font-bold tracking-widest text-teal-600 uppercase">Phase 01</span>
</div>
<h2 className="text-5xl md:text-7xl serif text-stone-900 mb-8">
                Stratégie &amp; Identité.
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="text-lg text-stone-600 font-light leading-relaxed">
<p className="mb-6">
                    Tout commence par une immersion. Avant de dessiner, nous définissons l'âme de votre projet. Cette première phase pose les bases de votre discours et de votre univers visuel initial.
                  </p>
<ul className="flex flex-col gap-3 mt-8">
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Audit de marque &amp; positionnement
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Direction Artistique (Moodboards)
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Logotype &amp; Typographie
                    </li>
</ul>
</div>
<div className="relative h-80 w-full bg-[#E8E6E1] rounded-2xl overflow-hidden flex items-center justify-center">
<div className="absolute w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 top-10 left-10 animate-pulse"></div>
<div className="absolute w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 bottom-10 right-10"></div>
<div className="z-10 bg-white/40 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg">
<div className="serif text-4xl italic text-stone-900">Aa</div>
</div>
</div>
</div>
</div>

<div className="group scroll-mt-40" id="step-2">
<div className="border-t border-stone-200 mb-6 w-12 pt-4">
<span className="text-sm font-bold tracking-widest text-stone-400 group-hover:text-teal-600 transition-colors uppercase">Phase 02</span>
</div>
<h2 className="text-5xl md:text-7xl serif text-stone-900 mb-8">
                Création Digitale.
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="text-lg text-stone-600 font-light leading-relaxed">
<p className="mb-6">
                    Nous traduisons votre stratégie en une expérience interactive. Votre site web n'est pas une simple vitrine, c'est un outil de conversion alliant esthétique éditoriale et performance technique.
                  </p>
<ul className="flex flex-col gap-3 mt-8">
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> UX/UI Design (Maquettes)
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Développement (Webflow / Next.js)
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Animations &amp; Intéractions
                    </li>
</ul>
</div>
<div className="relative h-80 w-full bg-stone-900 rounded-2xl overflow-hidden flex items-center justify-center border border-stone-800">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#2dd4bf 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="w-2/3 h-40 bg-stone-800 rounded border border-stone-700 shadow-2xl flex flex-col p-3 gap-2 group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-1.5 mb-1">
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
</div>
<div className="w-full h-full bg-stone-700/50 rounded flex items-center justify-center">
<span className="text-teal-500/50 text-xs font-mono">&lt;Code /&gt;</span>
</div>
</div>
</div>
</div>
</div>

<div className="group scroll-mt-40" id="step-3">
<div className="border-t border-stone-200 mb-6 w-12 pt-4">
<span className="text-sm font-bold tracking-widest text-stone-400 group-hover:text-teal-600 transition-colors uppercase">Phase 03</span>
</div>
<h2 className="text-5xl md:text-7xl serif text-stone-900 mb-8">
                Rebranding Complet.
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="text-lg text-stone-600 font-light leading-relaxed">
<p className="mb-6">
                    Une fois le digital établi, nous étendons votre nouvelle identité à l'ensemble de votre écosystème. C'est l'étape de la maturité : une refonte globale pour assurer une cohérence totale sur tous les supports.
                  </p>
<ul className="flex flex-col gap-3 mt-8">
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Charte Graphique Étendue
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Supports Marketing (Print &amp; Social)
                    </li>
<li className="flex items-center gap-3 text-stone-800">
<i className="w-5 h-5 text-teal-500" data-lucide="check"></i> Brand Book &amp; Guidelines
                    </li>
</ul>
</div>
<div className="relative h-80 w-full bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-white text-5xl serif italic mb-2">Bila.</div>
<span className="text-teal-100 text-xs tracking-[0.3em] uppercase">Collection 2025</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 pb-32 max-w-[90rem] mx-auto border-t border-stone-200 pt-24">

<div className="mb-16 md:mb-20">
<h2 className="serif text-5xl md:text-7xl text-stone-900 mb-4 tracking-tight">Et après...</h2>
<p className="text-xl md:text-2xl text-stone-500 font-light tracking-tight max-w-2xl">
            La visibilité ne s'arrête pas au lancement. Découvrez nos packs d'optimisation continue.
          </p>
</div>


<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">


<div className="flex-none w-[85vw] md:w-[400px] snap-center h-full mobile-scroll-hint">
<div className="h-full bg-[#F0F0EE] p-8 md:p-10 rounded-2xl border border-stone-200 flex flex-col justify-between group hover:border-stone-400 transition-colors duration-300">
<div>
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-6 text-stone-900">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<h3 className="serif text-3xl text-stone-900 mb-2">Pack SEO Initial</h3>
<p className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-6">L'essentiel pour exister</p>
<div className="w-full h-px bg-stone-300 mb-6"></div>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-stone-700 text-lg">
<i className="w-6 h-6 text-stone-400 shrink-0" data-lucide="check-circle-2"></i>
                    Audit technique complet
                  </li>
<li className="flex items-start gap-3 text-stone-700 text-lg">
<i className="w-6 h-6 text-stone-400 shrink-0" data-lucide="check-circle-2"></i>
                    Indexation &amp; Sitemap
                  </li>
<li className="flex items-start gap-3 text-stone-700 text-lg">
<i className="w-6 h-6 text-stone-400 shrink-0" data-lucide="check-circle-2"></i>
                    Optimisation balises (Title/Meta)
                  </li>
<li className="flex items-start gap-3 text-stone-700 text-lg">
<i className="w-6 h-6 text-stone-400 shrink-0" data-lucide="check-circle-2"></i>
                    Configuration Google Console
                  </li>
</ul>
</div>
<div className="pt-10 mt-auto">
<span className="block text-right text-sm font-bold text-stone-400">One shot</span>
</div>
</div>
</div>


<div className="flex-none w-[85vw] md:w-[400px] snap-center h-full mobile-scroll-hint" style={{animationDelay: '0.2s'}}>
<div className="h-full bg-[#E0F2F1] p-8 md:p-10 rounded-2xl border border-teal-200 flex flex-col justify-between group hover:border-teal-400 transition-colors duration-300">
<div>
<div className="w-12 h-12 rounded-full bg-teal-500 border border-teal-600 flex items-center justify-center mb-6 text-white shadow-lg shadow-teal-500/20">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="serif text-3xl text-teal-950 mb-2">Pack SEO Premium</h3>
<p className="text-teal-700 text-sm font-medium uppercase tracking-wider mb-6">Stratégie de croissance</p>
<div className="w-full h-px bg-teal-200/60 mb-6"></div>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-teal-900 text-lg">
<i className="w-6 h-6 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                    Recherche mots-clés mensuelle
                  </li>
<li className="flex items-start gap-3 text-teal-900 text-lg">
<i className="w-6 h-6 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                    Stratégie de Netlinking
                  </li>
<li className="flex items-start gap-3 text-teal-900 text-lg">
<i className="w-6 h-6 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                    Suivi de positionnement
                  </li>
<li className="flex items-start gap-3 text-teal-900 text-lg">
<i className="w-6 h-6 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                    Rapport de performance
                  </li>
</ul>
</div>
<div className="pt-10 mt-auto">
<span className="block text-right text-sm font-bold text-teal-600">Mensuel</span>
</div>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[400px] snap-center h-full mobile-scroll-hint" style={{animationDelay: '0.4s'}}>
<div className="h-full bg-[#F5E6D3] p-8 md:p-10 rounded-2xl border border-orange-200/50 flex flex-col justify-between group hover:border-orange-300 transition-colors duration-300">
<div>
<div className="w-12 h-12 rounded-full bg-white border border-orange-200 flex items-center justify-center mb-6 text-orange-800">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h3 className="serif text-3xl text-stone-900 mb-2">Pack SEO Max</h3>
<p className="text-orange-800/70 text-sm font-medium uppercase tracking-wider mb-6">Autorité &amp; Contenu</p>
<div className="w-full h-px bg-orange-900/10 mb-6"></div>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-stone-800 text-lg">
<i className="w-6 h-6 text-orange-600/70 shrink-0" data-lucide="check-circle-2"></i>
                    Tout le Pack Premium inclus
                  </li>
<li className="flex items-start gap-3 text-stone-800 text-lg">
<i className="w-6 h-6 text-orange-600/70 shrink-0" data-lucide="check-circle-2"></i>
                    Rédaction 2 articles / mois
                  </li>
<li className="flex items-start gap-3 text-stone-800 text-lg">
<i className="w-6 h-6 text-orange-600/70 shrink-0" data-lucide="check-circle-2"></i>
                    Optimisation sémantique
                  </li>
<li className="flex items-start gap-3 text-stone-800 text-lg">
<i className="w-6 h-6 text-orange-600/70 shrink-0" data-lucide="check-circle-2"></i>
                    Maillage interne avancé
                  </li>
</ul>
</div>
<div className="pt-10 mt-auto">
<span className="block text-right text-sm font-bold text-orange-800/60">Mensuel +</span>
</div>
</div>
</div>

<div className="w-6 shrink-0 md:hidden"></div>
</div>
</section>

<section className="mt-auto bg-stone-900 py-24 px-6 md:px-12 rounded-t-[3rem] text-center">
<h2 className="serif text-5xl md:text-8xl text-[#Fdfcf8] mb-8">
          Prêt à commencer ?
        </h2>
<p className="text-stone-400 text-lg mb-12 max-w-xl mx-auto">
          Discutons de vos objectifs et définissons ensemble la première étape de votre transformation.
        </p>
<button className="hover:bg-teal-400 transition-colors duration-300 text-lg font-medium text-stone-900 bg-teal-500 rounded-full pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/contact'" role="button">
          Réserver un appel découverte
        </button>
</section>

<footer className="bg-stone-900 pb-8 text-center">
<div className="border-t border-stone-800 max-w-[90rem] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-sm text-stone-500">
<p className="">© 2025 Bila Designs</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-teal-400" href="#">Mentions légales</a>
<a className="hover:text-teal-400" href="#">Politique de confidentialité</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
