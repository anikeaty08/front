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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl tracking-tighter text-neutral-900 flex items-center gap-2 font-geist font-semibold" href="#">
                SWITCH
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-geist" href="#entreprises">Entreprises</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-geist" href="#candidats">Candidats</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-geist" href="#offres">Nos Offres</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-geist" href="#apropos">L'Agence</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-geist" href="#blog">Insights</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 font-geist" href="#contact">
                    Contactez-nous
                </a>
</div>

<button className="md:hidden text-neutral-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8 font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Recrutement de précision
                </div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] text-neutral-900 mb-6 tracking-tight font-geist font-semibold">
                    Ne cherchez plus <br/>
<span className="text-neutral-500 font-geist font-semibold">les meilleurs talents.</span> <br/>
                    Attirez-les.
                </h1>
<p className="text-lg text-neutral-500 mb-10 max-w-lg leading-relaxed font-light font-geist">
                    Switch connecte les leaders de demain aux entreprises visionnaires. Une approche sur-mesure pour un alignement parfait entre compétences et culture.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-indigo-700 rounded-full hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-700/20 group font-geist" href="#recruter">
                        Je recrute
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all font-geist" href="#offres">
                        Je trouve mon poste idéal
                    </a>
</div>
</div>
<div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200 order-first lg:order-last">
<img alt="Team meeting" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1632&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-white/20 max-w-xs">
<div className="flex items-center gap-4 mb-2">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-xs font-semibold text-neutral-900 font-geist">
                            +500 Placements
                            <span className="text-neutral-500 font-normal font-geist">cette année</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8 font-geist">Ils nous font confiance pour bâtir leurs équipes</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-neutral-800 font-geist"><iconify-icon className="text-neutral-900" icon="lucide:hexagon"></iconify-icon> ACME Corp</div>
<div className="flex items-center gap-2 text-xl font-bold text-neutral-800 font-geist"><iconify-icon className="text-neutral-900" icon="lucide:triangle"></iconify-icon> Vertex</div>
<div className="flex items-center gap-2 text-xl font-bold text-neutral-800 font-geist"><iconify-icon className="text-neutral-900" icon="lucide:circle"></iconify-icon> Sphere</div>
<div className="flex items-center gap-2 text-xl font-bold text-neutral-800 font-geist"><iconify-icon className="text-neutral-900" icon="lucide:square"></iconify-icon> Block</div>
<div className="flex items-center gap-2 text-xl font-bold text-neutral-800 font-geist"><iconify-icon className="text-neutral-900" icon="lucide:diamond"></iconify-icon> Gem</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl text-neutral-900 mb-4 tracking-tight font-geist font-semibold">Plus qu'un CV, une rencontre.</h2>
<p className="text-neutral-500 text-lg font-light font-geist">Nous redéfinissons les standards du recrutement grâce à une approche humaine augmentée par la data.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 rounded-2xl icon-depth flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:search" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 font-geist">Sourcing Proactif</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-geist">Nous ne nous contentons pas des candidatures entrantes. Nous chassons les talents passifs là où ils se trouvent.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 rounded-2xl icon-depth flex items-center justify-center mb-6 text-white" style={{background: 'linear-gradient(135deg, #ccfbf1 0%, #14b8a6 100%)', boxShadow: '4px 10px 20px rgba(20, 184, 166, 0.25)'}}>
<iconify-icon icon="lucide:users" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 font-geist">Adéquation Culturelle</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-geist">Au-delà des compétences techniques (Hard Skills), nous évaluons le fit culturel et les Soft Skills.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 rounded-2xl icon-depth flex items-center justify-center mb-6 text-white" style={{background: 'linear-gradient(135deg, #ede9fe 0%, #8b5cf6 100%)', boxShadow: '4px 10px 20px rgba(139, 92, 246, 0.25)'}}>
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 font-geist">Conseil Stratégique</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-geist">Nous accompagnons les DRH et CEO dans la définition de leur marque employeur et leur grille de rémunération.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-neutral-900 mb-16 text-center tracking-tight font-geist font-semibold">Votre objectif, notre mission</h2>
<div className="grid lg:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-[2rem] bg-neutral-900 p-10 lg:p-14 text-white">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:building-2" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm border border-white/10 font-geist">Pour les Entreprises</span>
<h3 className="text-3xl mb-4 font-geist font-semibold">Construisez une équiped'élite.</h3>
<p className="text-neutral-300 mb-8 max-w-sm font-light font-geist">Accédez à notre vivier exclusif de talents et bénéficiez d'un accompagnement 360° pour vos recrutements stratégiques.</p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors font-geist" href="#">
                            Découvrir nos solutions RH
                            <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] bg-neutral-100 p-10 lg:p-14 text-neutral-900 border border-neutral-200">
<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity text-neutral-900">
<iconify-icon icon="lucide:briefcase" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block py-1 px-3 rounded-full bg-neutral-200 text-xs font-semibold tracking-wide uppercase mb-6 text-neutral-600 font-geist">Pour les Talents</span>
<h3 className="text-3xl mb-4 font-geist font-semibold">Élevez votre carrièreau niveau supérieur.</h3>
<p className="text-neutral-500 mb-8 max-w-sm font-light font-geist">Des opportunités confidentielles dans les plus belles structures, adaptées à vos ambitions et votre style de vie.</p>
<a className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors font-geist" href="#">
                            Voir les opportunités
                            <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-neutral-900 mb-12 tracking-tight font-geist font-semibold">Domaines d'expertise</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:banknote" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Finance &amp; Légal</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:code-2" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Tech &amp; IT</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:factory" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Industrie &amp; Ingénierie</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:shopping-bag" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Retail &amp; Luxe</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:megaphone" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Marketing &amp; Digital</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:heart-pulse" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Santé &amp; Life Sciences</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:building" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Immobilier</span>
</a>
<a className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:border-indigo-500 hover:shadow-md transition-all flex flex-col items-start gap-4" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-indigo-600 transition-colors" icon="lucide:users-2" width="24"></iconify-icon>
<span className="font-medium text-neutral-700 group-hover:text-neutral-900 font-geist">Ressources Humaines</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<span className="text-indigo-300 font-semibold tracking-wide uppercase text-xs mb-4 block font-geist">Ressource Gratuite</span>
<h2 className="text-3xl md:text-5xl mb-6 font-geist font-semibold">Guide Stratégique du Recrutement 2024</h2>
<p className="text-indigo-100 text-lg mb-8 font-light max-w-lg font-geist">Découvrez les tendances salariales, les nouvelles attentes des candidats et les stratégies pour attirer les meilleurs talents dans un marché compétitif.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/95 backdrop-blur" placeholder="Votre email professionnel" type="email"/>
<button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-900/50 font-geist" type="button">Recevoir</button>
</form>
<p className="text-xs text-indigo-300 mt-3 font-geist">* 100% gratuit. Désabonnement à tout moment.</p>
</div>

<div className="flex-1 flex justify-center book-container">
<div className="book w-64 h-80 relative bg-white rounded-r-md shadow-2xl">

<div className="absolute inset-0 bg-neutral-900 rounded-r-md flex flex-col items-center justify-center p-6 border-l-4 border-neutral-800 text-center">
<div className="text-indigo-500 mb-4"><iconify-icon icon="lucide:award" width="48"></iconify-icon></div>
<h3 className="text-white text-2xl mb-2 font-geist font-semibold">Le GuideRecrutement</h3>
<div className="w-12 h-1 bg-indigo-500 my-4"></div>
<p className="text-neutral-400 text-xs uppercase tracking-widest font-geist">Édition 2024</p>
<div className="mt-auto text-neutral-500 text-[10px] font-geist">SWITCH AGENCY</div>
</div>

<div className="absolute top-1 bottom-1 right-2 w-4 bg-white shadow-inner rounded-r-sm"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-neutral-900 mb-16 text-center font-geist font-semibold">Ce qu'ils disent de nous</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 text-sm leading-relaxed font-geist">"Switch a compris notre culture d'entreprise dès le premier rendez-vous. Les 3 profils présentés étaient tous pertinents. Un gain de temps précieux."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-semibold text-neutral-900 font-geist">Marc D.</div>
<div className="text-xs text-neutral-500 font-geist">DRH, TechSolutions</div>
</div>
</div>
</div>

<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 text-sm leading-relaxed font-geist">"Un accompagnement exceptionnel durant tout le processus de recrutement. J'ai trouvé le poste de CFO idéal grâce à leur réseau."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-semibold text-neutral-900 font-geist">Sophie L.</div>
<div className="text-xs text-neutral-500 font-geist">Candidat placé</div>
</div>
</div>
</div>

<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hidden lg:block">
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 text-sm leading-relaxed font-geist">"Une approche moderne, sans jargon, et très efficace. Switch est devenu notre partenaire exclusif pour tous les recrutements C-Level."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-semibold text-neutral-900 font-geist">Alexandre P.</div>
<div className="text-xs text-neutral-500 font-geist">CEO, GreenEnergy</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
<div>
<h2 className="text-2xl md:text-3xl text-white mb-2 font-geist font-semibold">Experts Freelance ?</h2>
<p className="text-neutral-300 font-light font-geist">Rejoignez notre communauté de consultants pour des missions à fort impact.</p>
</div>
<a className="whitespace-nowrap px-6 py-3 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-100 transition-colors font-geist" href="#">
                    Rejoindre l'aventure
                </a>
</div>
</div>
</section>

<section className="py-32 bg-neutral-50 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl text-neutral-900 mb-6 tracking-tight font-geist font-semibold">Prêt à transformer votre avenir ?</h2>
<p className="text-lg text-neutral-500 mb-10 font-light font-geist">Que vous cherchiez la perle rare ou votre prochaine opportunité, tout commence par une discussion.</p>
<a className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 font-geist" href="#">
                Demander un diagnostic gratuit
            </a>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<a className="text-2xl text-white tracking-tighter flex items-center gap-2 mb-6 font-geist font-semibold" href="#">
                    SWITCH
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
</a>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 font-geist">
                    Cabinet de recrutement nouvelle génération. Nous connectons l'excellence à l'ambition.
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">Entreprises</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Recrutement Permanent</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Executive Search</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">RPO &amp; Conseil</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Grille Salariale</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">Candidats</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Toutes nos offres</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Candidature Spontanée</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Conseils Carrière</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-geist" href="#">Freelance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">Contact</h4>
<ul className="space-y-3 text-sm mb-6">
<li className="font-geist">Paris, France</li>
<li className="font-geist">hello@switch-recrutement.com</li>
<li className="font-geist">+33 1 23 45 67 89</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
<p className="font-geist">© 2024 Switch Recruitment. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white font-geist" href="#">Mentions Légales</a>
<a className="hover:text-white font-geist" href="#">Confidentialité</a>
<a className="hover:text-white font-geist" href="#">CGV</a>
</div>
</div>
</footer>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
