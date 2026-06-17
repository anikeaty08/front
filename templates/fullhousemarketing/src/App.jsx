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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-base font-semibold text-white tracking-widest font-manrope">FULLHOUSE</span>
</div>
</div>
</nav>
<main className="relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute inset-0 subtle-grid pointer-events-none opacity-30 z-0 h-screen"></div>

<section className="min-h-screen flex flex-col z-10 pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="text-center max-w-4xl mx-auto space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-sm mx-auto shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-medium text-zinc-300">Pas une agence marketing</span>
</div>
<h1 className="leading-[1.05] linear-text-gradient text-5xl font-medium tracking-tighter text-center bg-gradient-to-br from-white/50 via-white/100 to-white/50 md:text-7xl lg:text-6xl lg:bg-clip-text lg:text-transparent">Remplissez votre restaurant. Augmentez votre chiffre d'affaires. Préparer votre expansion.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-2xl mr-auto ml-auto">
                    FULLHOUSE n’est pas un prestataire. Nous sommes un <span className="text-zinc-200 font-normal">partenaire de revenu</span> pour les restaurants à fort potentiel.
                </p>
<div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group h-12 px-8 rounded-[15px] bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                        Comprendre le système
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 rounded-[15px] border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-medium hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm">
                        Notre philosophie
                    </button>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
<span className="text-[10px] uppercase tracking-widest text-zinc-600">Le problème</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-zinc-700 to-transparent"></div>
</div>
</section>

<section className="bg-black z-10 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 gap-x-20 gap-y-20 items-center">

<div className="space-y-8">
<h2 className="md:text-5xl linear-text-gradient text-3xl font-semibold tracking-tighter">La qualité seule ne crée pas de régularité.</h2>
<div className="space-y-6 text-zinc-500 leading-relaxed text-base font-light">
<p className="">Le constat est partagé par tous les propriétaires pragmatiques : un bon restaurant n’est pas toujours plein. L'excellence culinaire est un prérequis, pas une garantie de flux.</p>
<p className="">
                                L'irrégularité du chiffre d'affaires empêche toute projection. Sans système de visibilité, vous dépendez du hasard.
                            </p>
<div className="border-l-2 border-white/10 pl-6 py-1">
<p className="text-zinc-300 italic">
                                    Cette absence de système est le plafond de verre qui empêche la duplication.
                                </p>
</div>
</div>
</div>

<div className="relative h-80 lg:h-96 w-full bg-[#050505] border border-white/5 rounded-[15px] p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-0 right-0 p-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Instable</span>
</div>

<div className="flex items-end justify-between h-40 w-full gap-2 opacity-60 z-10 relative">
<div className="w-full bg-zinc-800 h-[40%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[80%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[30%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[90%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[50%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[20%] rounded-t-[4px]"></div>
<div className="w-full bg-zinc-800 h-[60%] rounded-t-[4px]"></div>
</div>
<div className="space-y-3 z-10 relative">
<div className="h-px w-full bg-white/5"></div>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>LUN</span><span>MAR</span><span>MER</span><span>JEU</span><span>VEN</span><span>SAM</span><span>DIM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#030303]" id="vision">
<div className="max-w-6xl mx-auto space-y-20">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 linear-text-gradient">
                        Un système de croissance,<br/>pas des services isolés.
                    </h2>
<p className="text-lg font-light text-zinc-300">
                        Nous installons un levier de croissance qui agit directement sur la lisibilité de votre business.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[15px] bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-lg hover:shadow-white/[0.02]">
<div className="w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">1. Générer le flux</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Nous mettons en place les mécanismes pour remplir le restaurant de manière active. Nous créons une demande intentionnelle.
                        </p>
</div>

<div className="group p-8 rounded-[15px] bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-lg hover:shadow-white/[0.02]">
<div className="w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">2. Stabiliser la fréquentation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            L'objectif est la régularité. Transformer les pics aléatoires en une base solide. La stabilité du CA permet la sérénité.
                        </p>
</div>

<div className="group p-8 rounded-[15px] bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-lg hover:shadow-white/[0.02]">
<div className="w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center mb-6 text-white border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scaling" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5m7-7h5v5m0-5L9 15"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">3. Base pour l'expansion</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            On ne duplique pas le chaos. Une fois le modèle stabilisé, vous avez la structure pour ouvrir le prochain.
                        </p>
</div>
</div>
</div>
</section>

<section className="z-10 bg-black border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-12">
<h3 className="text-sm uppercase tracking-widest text-zinc-600 font-semibold">Où nous intervenons</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center gap-4 opacity-30 grayscale transition-opacity hover:opacity-50">
<div className="w-12 h-12 rounded-[15px] border border-white/20 flex items-center justify-center text-zinc-500 bg-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chef-hat" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-1">
<p className="text-sm font-semibold text-white">Cuisine &amp; Menu</p>
<p className="text-xs text-zinc-500">Nous ne touchons pasà votre produit.</p>
</div>
</div>

<div className="flex flex-col items-center gap-4 opacity-30 grayscale transition-opacity hover:opacity-50">
<div className="w-12 h-12 rounded-[15px] border border-white/20 flex items-center justify-center text-zinc-500 bg-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clipboard-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
</div>
<div className="space-y-1">
<p className="text-sm font-semibold text-white">Opérations Interne</p>
<p className="text-xs text-zinc-500">Nous ne gérons pasvotre staff.</p>
</div>
</div>

<div className="flex flex-col items-center gap-4 relative">

<div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
<div className="w-12 h-12 rounded-[15px] bg-white text-black flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-1 relative z-10">
<p className="text-sm font-semibold text-white">Flux &amp; Revenu</p>
<p className="text-xs text-zinc-400">Nous structurons l'apport d'affaires.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-3xl mx-auto bg-zinc-900/20 border border-white/5 rounded-[15px] p-8 md:p-12 backdrop-blur-sm">
<h3 className="flex items-center gap-3 text-lg font-medium text-white mb-8">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-white/10">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:shield-alert" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
                    Ce que nous ne sommes pas
                </h3>
<div className="grid gap-8">
<div className="flex items-start gap-5">
<svg aria-hidden="true" className="iconify text-zinc-700 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="leading-relaxed text-sm text-zinc-300">
                            
                            Si votre restaurant n'a pas d'identité forte, apporter du flux ne servira qu'à accélérer l'échec.
                        </p>
</div>
<div className="flex items-start gap-5">
<svg aria-hidden="true" className="iconify text-zinc-700 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="leading-relaxed text-sm text-zinc-300">
                            
                            Nous construisons des systèmes durables. Si vous cherchez une astuce pour ce week-end, nous ne sommes pas le bon partenaire.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-black z-10 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="md:text-5xl linear-text-gradient text-3xl font-semibold tracking-tighter">L'impact opérationnel au quotidien.</h2>
<p className="text-zinc-500 text-lg font-light">
                            Au-delà des chiffres, la régularité transforme la vie du restaurateur et la qualité du travail.
                        </p>
</div>
<div className="space-y-3">

<div className="flex items-center gap-4 p-5 rounded-[15px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-200 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-400">Moins de mardis "morts" et de services à vide.</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-[15px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-200 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-400">Commandes fournisseurs plus précises (moins de pertes).</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-[15px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-200 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-400">Planning staff optimisé grâce à la prévisibilité.</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-[15px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-200 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-400">Moins de stress, plus de clarté dans la décision.</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#030303]">
<div className="max-w-4xl mx-auto text-center space-y-16">
<h2 className="linear-text-gradient md:text-6xl text-4xl font-semibold tracking-tighter">
                    La régularité change tout.
                </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="bg-zinc-900/20 p-8 rounded-[15px] border border-white/5">
<h4 className="text-zinc-200 font-medium mb-3 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:cloud-drizzle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v1m0-6v1m8 4v1m0-6v1m-4 6v1m0-6v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Avant FULLHOUSE
                        </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Gestion au jour le jour. Stress lié au remplissage des soirs creux. Difficulté à conserver le staff clé à cause de l'incertitude.
                        </p>
</div>
<div className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 rounded-[15px] border border-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]">
<h4 className="text-white font-medium mb-3 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:sun" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
                            Avec le système
                        </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Un flux de clients prévisible. Une trésorerie lissée. La capacité mentale et financière de se projeter sur l'ouverture suivante.
                        </p>
</div>
</div>
<div className="py-2 max-w-2xl mx-auto">
<p className="text-sm text-zinc-500 leading-relaxed">
                        Plus vous attendez, plus l'irrégularité s'installe. Structurer votre flux de revenus crée un effet de levier pour financer votre prochaine étape.
                    </p>
</div>
<div className="space-y-8">
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center h-14 px-10 rounded-[15px] bg-white text-black font-semibold text-base hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]" href="#">
                            Discuter de votre potentiel
                        </a>
<p className="mt-6 text-xs text-zinc-600">
                            Aucune promesse chiffrée sans audit préalable.
                        </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:layers" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-xs font-semibold tracking-widest text-white">FULLHOUSE</span>
</div>
<p className="text-xs text-zinc-700 font-medium">
                    © 2024 FULLHOUSE.
                </p>
</div>
</footer>
</main>

    </>
  );
}
