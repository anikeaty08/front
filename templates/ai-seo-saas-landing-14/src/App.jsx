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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-white flex items-center gap-2" href="#">
<span className="iconify text-white" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
                LEADTOMORROW
            </a>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Accueil</a>
<a className="hover:text-white transition-colors" href="#">Articles</a>
<a className="hover:text-white transition-colors" href="#">Tarifs</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Connexion</a>
<a className="bg-white text-black hover:bg-neutral-200 text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2" href="#">
                    Laissez Ascend travailler
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</header>
<main className="relative overflow-hidden pt-32 pb-16">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>

<section className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Par LeadTomorrow
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                L'IA qui optimise votre <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient">SEO et booste</span> votre visibilité
            </h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Ascend optimise votre site de A à Z : analyse SEO, corrections intelligentes et articles personnalisés conçus pour plaire à l’IA et Google. <br className="hidden md:block"/>
                Vous devenez visible, compétitif et incontournable.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Laissez Ascend travailler pour vous
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-800 text-neutral-300 rounded-full text-sm font-medium hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 group">
                    Découvrir nos articles
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
<p className="mt-6 text-xs text-neutral-500">Sans engagement. Sans effort.</p>
</section>

<section className="mt-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs text-neutral-500 font-medium whitespace-nowrap">50+ entreprises propulsent déjà leur SEO avec Ascend</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">

<div className="flex items-center gap-1"><span className="h-4 w-4 bg-white rounded-full"></span><span className="text-sm font-semibold tracking-tighter">ACME</span></div>
<div className="flex items-center gap-1"><span className="h-4 w-4 border border-white rounded-sm"></span><span className="text-sm font-semibold tracking-tighter">KORP</span></div>
<div className="flex items-center gap-1"><span className="h-4 w-4 bg-white rotate-45"></span><span className="text-sm font-semibold tracking-tighter">VELOCITY</span></div>
<div className="flex items-center gap-1"><span className="h-4 w-4 border border-white rounded-full"></span><span className="text-sm font-semibold tracking-tighter">NEXUS</span></div>
<div className="flex items-center gap-1"><span className="h-4 w-4 bg-white rounded-sm"></span><span className="text-sm font-semibold tracking-tighter">STRATOS</span></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">Impact Ascend</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                        Pourquoi optimiser votre SEO avec l’IA est aujourd’hui essentiel ?
                    </h3>
<p className="text-neutral-400 mb-6 font-light leading-relaxed">
                        À l’ère de l’IA, Google comprend désormais vos pages comme un humain : il analyse l’intention derrière chaque texte, la cohérence entre vos pages et la qualité réelle de votre contenu.
                    </p>
<p className="text-neutral-400 mb-6 font-light leading-relaxed">
                        Résultat ? Les sites optimisés pour cette nouvelle logique montent rapidement dans les résultats, tandis que ceux qui n’utilisent pas l’IA perdent en visibilité.
                    </p>
<div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-8">
<p className="text-sm text-indigo-200">
<span className="font-medium text-white">En clair</span>, les sites qui utilisent l'IA progressent. Les autres reculent. Optimiser votre SEO avec l’IA n’est plus une option.
                        </p>
</div>
<a className="text-sm text-white font-medium hover:underline underline-offset-4 flex items-center gap-2" href="#">
                        Découvrir nos articles <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-xl p-8 overflow-hidden h-full min-h-[400px] flex flex-col justify-between">

<div className="flex items-end gap-2 h-40 w-full mb-6 mt-auto">
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[25%]"></div>
<div className="w-full bg-neutral-700 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-neutral-700 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm h-[90%] relative shadow-[0_0_20px_rgba(99,102,241,0.5)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">Ascend</div>
</div>
</div>
<div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs text-neutral-500">
<span>Trafic Organique</span>
<span className="text-green-400 flex items-center gap-1">+124% <span className="iconify" data-icon="lucide:trending-up"></span></span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs font-medium text-indigo-400 mb-2 block uppercase tracking-wider">Comment ça marche</span>
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Simple. Intelligent.<br/>Conçu pour grandir avec vous.</h2>
<p className="text-neutral-400 font-light">Un processus simple à configurer, des résultats puissants.</p>
</div>
<div className="space-y-24 relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

<div className="grid md:grid-cols-2 gap-12 items-center relative">
<div className="md:text-right md:pr-12">
<div className="text-indigo-400 text-xs font-mono mb-2">01</div>
<h3 className="text-xl font-medium text-white mb-3">Analyse intelligente et préparation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Ascend scanne votre site et identifie instantanément les erreurs SEO, les points faibles et les opportunités d’amélioration.</p>
</div>
<div className="md:pl-12">
<div className="bg-neutral-900 border border-white/10 rounded-lg p-6 w-full max-w-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
<span className="text-xs text-neutral-300">Analyse en cours...</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs py-2 border-b border-white/5">
<span className="text-neutral-500">Analyse du site</span>
<span className="text-green-400">100%</span>
</div>
<div className="flex justify-between text-xs py-2 border-b border-white/5">
<span className="text-neutral-500">Étude du marché</span>
<span className="text-green-400">100%</span>
</div>
<div className="flex justify-between text-xs py-2">
<span className="text-neutral-500">Opportunités</span>
<span className="text-white">14 détectées</span>
</div>
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-white/20 rounded-full hidden md:block"></div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center relative">
<div className="md:order-2 md:pl-12">
<div className="text-indigo-400 text-xs font-mono mb-2">02</div>
<h3 className="text-xl font-medium text-white mb-3">Personnalisation et optimisation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Notre équipe développe et configure une version d’Ascend totalement adaptée à vos besoins et à vos objectifs SEO.</p>
</div>
<div className="md:order-1 md:pr-12 flex justify-end">
<div className="bg-[#0D0D0D] border border-white/10 rounded-lg p-0 overflow-hidden w-full max-w-md shadow-2xl">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<pre className="p-4 text-[10px] sm:text-xs font-mono text-neutral-300 leading-relaxed overflow-x-auto custom-scrollbar"><code><span className="text-purple-400">class</span> <span className="text-yellow-200">Ascend</span>:
    <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-red-300">self</span>, site_url):
        <span className="text-red-300">self</span>.site_url = site_url
        <span className="text-red-300">self</span>.seo_score = <span className="text-orange-300">63</span>
        <span className="text-red-300">self</span>.issues = []

    <span className="text-purple-400">def</span> <span className="text-blue-400">scan_site</span>(<span className="text-red-300">self</span>):
        <span className="text-gray-500"># Analyse automatique du site</span>
        <span className="text-red-300">self</span>.issues = detect_seo_issues(<span className="text-red-300">self</span>.site_url)
        <span className="text-red-300">self</span>.seo_score = calculate_score(<span className="text-red-300">self</span>.issues)
        <span className="text-purple-400">return</span> <span className="text-green-300">f"Scan terminé : {len(self.issues)} problèmes."</span>
    
    <span className="text-purple-400">def</span> <span className="text-blue-400">get_summary</span>(<span className="text-red-300">self</span>):
        <span className="text-purple-400">return</span> {
            <span className="text-green-300">"url"</span>: <span className="text-red-300">self</span>.site_url,
            <span className="text-green-300">"seo_score"</span>: <span className="text-red-300">self</span>.seo_score
        }</code></pre>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-white/20 rounded-full hidden md:block"></div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center relative">
<div className="md:text-right md:pr-12">
<div className="text-indigo-400 text-xs font-mono mb-2">03</div>
<h3 className="text-xl font-medium text-white mb-3">Intégration dans votre écosystème</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Nous intégrons Ascend sans perturber votre organisation : tout fonctionne avec vos outils existants.</p>
</div>
<div className="md:pl-12">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10">
<span className="iconify text-black" data-icon="lucide:bot" data-width="32"></span>
</div>
<div className="h-px w-12 bg-gradient-to-r from-white/50 to-white/10 border-t border-dashed border-white/30"></div>
<div className="w-16 h-16 rounded-xl bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:layout-grid" data-width="28"></span>
</div>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-white/20 rounded-full hidden md:block"></div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center relative">
<div className="md:order-2 md:pl-12">
<div className="text-indigo-400 text-xs font-mono mb-2">04</div>
<h3 className="text-xl font-medium text-white mb-3">Optimisation continue et évolutive</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Ascend améliore votre SEO en continu : nouvelles analyses, mises à jour automatiques. Votre site reste compétitif.</p>
</div>
<div className="md:order-1 md:pr-12 flex justify-end gap-4">
<div className="bg-neutral-900 border border-white/5 p-4 rounded-lg w-40 text-center">
<span className="iconify mx-auto text-indigo-400 mb-2" data-icon="lucide:file-edit" data-width="24"></span>
<div className="text-xs font-medium text-white">Articles pros</div>
<div className="text-[10px] text-neutral-500 mt-1">Nouveaux contenus, auto.</div>
</div>
<div className="bg-neutral-900 border border-white/5 p-4 rounded-lg w-40 text-center">
<span className="iconify mx-auto text-indigo-400 mb-2" data-icon="lucide:users" data-width="24"></span>
<div className="text-xs font-medium text-white">Croissance</div>
<div className="text-[10px] text-neutral-500 mt-1">Trafic &amp; leads qualifiés.</div>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-white/20 rounded-full hidden md:block"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-3xl font-medium text-white mb-12 text-center tracking-tight">Les avantages concrets d’Ascend</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Productivité Augmentée</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Ascend automatise l’analyse SEO et la création d’articles, vous faisant gagner énormément de temps.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:smile" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Meilleure Expérience Client</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Contenu clair et pertinent : vos visiteurs trouvent ce qu’ils cherchent et convertissent davantage.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:eye" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Visibilité 24/7</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Votre site reste constamment optimisé et visible sur Google, même pendant que vous dormez.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:wallet" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Réduction des Coûts</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Plus besoin d’agences coûteuses : l’IA génère vos analyses et optimisations automatiquement.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Articles Professionnels</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Des articles complets, optimisés pour l’intention de recherche et conformes à Google.</p>
</div>

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Scalabilité &amp; Croissance</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Trafic, leads et ventes augmentent naturellement grâce à un SEO automatisé et scalable.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Tarifs simples et transparents</h2>
<p className="text-neutral-400 mb-8">Commencez à optimiser votre SEO grâce à l’IA.</p>

<div className="inline-flex bg-neutral-900 p-1 rounded-full border border-white/10 relative">
<div className="w-1/2 h-full absolute left-0 bg-white/10 rounded-full transition-all"></div> 
<button className="px-6 py-2 text-xs font-medium text-white rounded-full relative z-10">Mensuel</button>
<button className="px-6 py-2 text-xs font-medium text-neutral-400 rounded-full relative z-10 hover:text-white transition-colors">Annuel</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col h-full">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-medium text-white mb-1">$29<span className="text-sm text-neutral-500 font-normal">/mois</span></div>
<p className="text-xs text-neutral-400 mb-6">SEO automatisé pour démarrer.</p>
<button className="w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-colors mb-8">Commencer</button>
<ul className="space-y-3 text-xs text-neutral-300 mb-4 flex-1">
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Analyse SEO complète</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> 5 articles/mois (IA)</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Opportunités prioritaires</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/80 border border-indigo-500/50 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] relative flex flex-col h-full scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Populaire</div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="text-3xl font-medium text-white mb-1">$59<span className="text-sm text-neutral-500 font-normal">/mois</span></div>
<p className="text-xs text-neutral-400 mb-6">Idéal pour une croissance rapide.</p>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors mb-8">Commencer</button>
<ul className="space-y-3 text-xs text-neutral-300 mb-4 flex-1">
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Tout du plan Starter</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> 15 articles/mois (IA)</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Analyse concurrentielle</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Support prioritaire</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col h-full">
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<div className="text-3xl font-medium text-white mb-1">$99<span className="text-sm text-neutral-500 font-normal">/mois</span></div>
<p className="text-xs text-neutral-400 mb-6">Pour une visibilité maximale.</p>
<button className="w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-colors mb-8">Commencer</button>
<ul className="space-y-3 text-xs text-neutral-300 mb-4 flex-1">
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> 30 articles/mois (1/jour)</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Analyse concurrentielle auto</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Rapport SEO mensuel IA</li>
<li className="flex items-start gap-2"><span className="iconify text-indigo-400 shrink-0" data-icon="lucide:check"></span> Support VIP 24/7</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Pourquoi les entreprises choisissent Ascend</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
<p className="text-sm text-neutral-300 italic mb-4">“Ascend a totalement automatisé la création de nos articles SEO. On publie désormais chaque semaine sans effort.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">NL</div>
<div>
<div className="text-xs font-medium text-white">Nadine L.</div>
<div className="text-[10px] text-neutral-500">Responsable Communication</div>
</div>
</div>
</div>

<div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
<p className="text-sm text-neutral-300 italic mb-4">“Ascend nous a fait gagner des mois de travail. Nos articles sont mieux écrits, mieux ciblés et Google les indexe en quelques jours.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">JM</div>
<div>
<div className="text-xs font-medium text-white">Julien M.</div>
<div className="text-[10px] text-neutral-500">Responsable Marketing</div>
</div>
</div>
</div>

<div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
<p className="text-sm text-neutral-300 italic mb-4">“On publie maintenant 4 fois plus de contenus sans effort. Le gain de visibilité est réel : +78% de trafic organique en 2 mois.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-xs font-medium text-white">Jean-Marc D.</div>
<div className="text-[10px] text-neutral-500">Consultant SEO</div>
</div>
</div>
</div>

<div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl">
<p className="text-sm text-neutral-300 italic mb-4">“Depuis qu’on utilise Ascend, on reçoit même des demandes de clients que nous ne ciblions pas. La visibilité est devenue forte.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold text-white">CR</div>
<div>
<div className="text-xs font-medium text-white">Camille R.</div>
<div className="text-[10px] text-neutral-500">Directrice – Studio Créatif</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="text-3xl font-medium text-white mb-8 text-center tracking-tight">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-white">
                        Comment l'IA génère-t-elle le contenu ?
                        <span className="iconify group-open:rotate-180 transition-transform text-neutral-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                        Notre IA analyse les top résultats Google, l'intention de recherche et votre ton de marque pour créer un contenu unique et optimisé.
                    </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-white">
                        Puis-je modifier les articles ?
                        <span className="iconify group-open:rotate-180 transition-transform text-neutral-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                        Absolument. Vous gardez un contrôle total avant la publication pour ajuster le moindre détail si nécessaire.
                    </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-white">
                        Est-ce compatible avec mon CMS ?
                        <span className="iconify group-open:rotate-180 transition-transform text-neutral-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                        Ascend s'intègre facilement avec WordPress, Shopify, Webflow et la plupart des CMS modernes.
                    </div>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 text-center">
<div className="p-12 rounded-3xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 relative z-10 tracking-tight">Laissez Ascend travailler pour vous</h2>
<p className="text-neutral-400 mb-8 relative z-10 font-light">Réservez un appel gratuit et découvrez comment l’IA peut booster votre visibilité.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all">
                        Réserver un appel
                    </button>
<button className="px-8 py-3 bg-neutral-800 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition-all border border-neutral-700">
                        Contactez-nous
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-sm font-medium tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<span className="iconify text-white" data-icon="lucide:layers" data-width="20"></span>
                        LEADTOMORROW
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">Plus de visibilité. Plus de clients. Sans effort.<br/>Infrastructure Suisse.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Pages</h4>
<ul className="space-y-2 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#">Articles</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Légal</h4>
<ul className="space-y-2 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Conditions générales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Réseaux</h4>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:youtube" data-width="20"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600">© 2024 LeadTomorrow. All rights reserved.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    System Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
