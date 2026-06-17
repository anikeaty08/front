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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] hero-glow"></div>
<div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
<iconify-icon icon="solar:chat-square-code-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">FaceBot AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#workflow">Fonctionnement</a>
<a className="hover:text-white transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#pricing">Tarifs</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<button className="text-xs font-medium px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-colors">
                Connexion
            </button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nouveau: Support Multilingue V2
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white leading-tight">
                Engagez votre audience<br/>
<span className="gradient-text">sans lever le petit doigt</span>
</h1>
<p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Un agent intelligent qui surveille, analyse et répond automatiquement aux commentaires et messages privés sur votre page Facebook. Transformez chaque interaction en opportunité.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
                    Activer l'Agent Gratuitement
                </button>
<button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Voir la démo
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto relative mt-12">
<div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

<div className="glass-card rounded-2xl overflow-hidden border border-slate-700/50">
<div className="h-10 border-b border-slate-700/50 bg-slate-900/50 px-4 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
<iconify-icon className="text-green-500" icon="solar:shield-check-linear"></iconify-icon>
                            LIVE MONITORING
                        </span>
</div>
<div className="p-6 space-y-6">

<div className="relative pl-6 border-l border-slate-700">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900"></div>
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">JD</div>
<span className="text-xs text-slate-300 font-medium">Jean Dupont</span>
<span className="text-[10px] text-slate-500">il y a 2m • Commentaire</span>
</div>
</div>
<p className="text-xs text-slate-400 mb-3 bg-slate-800/50 p-2 rounded">"Est-ce que ce produit est compatible avec Mac ?"</p>
<div className="flex gap-3 mt-2">
<div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] text-blue-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                                            Agent IA
                                        </span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
                                        "Bonjour Jean ! Oui, tout à fait. Notre logiciel est 100% compatible avec macOS Monterey et plus récent. 🍏"
                                    </p>
</div>
</div>
</div>

<div className="relative pl-6 border-l border-slate-700 opacity-60">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-600 border-2 border-slate-900"></div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<span className="text-xs text-slate-300">Message Privé</span>
</div>
<div className="h-2 w-3/4 bg-slate-800 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="glass-card p-5 rounded-xl flex items-center gap-4 animate-float">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Temps de réponse</div>
<div className="text-xl font-medium text-white">Instantanté</div>
<div className="text-[10px] text-slate-500">24/7 sans interruption</div>
</div>
</div>
<div className="glass-card p-5 rounded-xl flex items-center gap-4 animate-float" style={{animationDelay: '1s'}}>
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Connaissance</div>
<div className="text-xl font-medium text-white">Base Produits</div>
<div className="text-[10px] text-slate-500">Apprend de votre documentation</div>
</div>
</div>
<div className="glass-card p-5 rounded-xl flex flex-col gap-3" style={{animationDelay: '2s'}}>
<div className="flex justify-between items-center text-xs text-slate-400">
<span>Taux de satisfaction</span>
<span className="text-white font-medium">98.5%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-blue-500 to-violet-500 h-full rounded-full w-[98.5%]"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative py-24 bg-slate-950" id="workflow">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Workflow Automatisé</h2>
<p className="text-slate-400 text-sm">Comment l'agent gère vos interactions en 3 étapes</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent border-t border-dashed border-slate-700"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-blue-500/30 shadow-lg shadow-black/50">
<iconify-icon className="text-blue-400" icon="solar:eye-scan-linear" width="40"></iconify-icon>
<div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-center">
<div className="inline-block px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 mb-2">Étape 01</div>
<h3 className="text-lg font-medium text-white mb-2">Surveillance</h3>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                            L'agent scanne en permanence vos publications pour de nouveaux <span className="text-blue-300">commentaires</span> et surveille votre boîte de réception.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-violet-500/30 shadow-lg shadow-black/50">
<iconify-icon className="text-violet-400" icon="solar:brain-linear" width="40"></iconify-icon>
<div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100">
<div className="w-full h-1 bg-violet-500/50 absolute top-0 animate-beam"></div>
</div>
</div>
<div className="text-center">
<div className="inline-block px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 mb-2">Étape 02</div>
<h3 className="text-lg font-medium text-white mb-2">Traitement IA</h3>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                            Analyse contextuelle. L'IA croise la question avec sa connaissance de vos <span className="text-violet-300">produits &amp; services</span>.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-green-500/30 shadow-lg shadow-black/50">
<iconify-icon className="text-green-400" icon="solar:plain-linear" width="40"></iconify-icon>
<div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-center">
<div className="inline-block px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 mb-2">Étape 03</div>
<h3 className="text-lg font-medium text-white mb-2">Réponse Auto</h3>
<p className="text-sm text-slate-400 leading-relaxed px-4">
                            Publication immédiate de la réponse, soit en <span className="text-green-300">commentaire public</span> soit en <span className="text-green-300">message privé</span>.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 relative overflow-hidden" id="features">

<div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Puissance sous le capot</h2>
<p className="text-slate-400 text-sm">Tout ce dont vous avez besoin pour automatiser votre support.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group glass-card-hover transition-all">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon icon="solar:user-hand-up-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Escalade Humaine Intelligente</h3>
<p className="text-sm text-slate-400 max-w-sm">
                                L'IA sait quand elle ne sait pas. Si une question est trop complexe ou sensible, elle notifie instantanément votre équipe humaine et marque la conversation comme "À traiter".
                            </p>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400 border border-slate-700">Détection de colère</div>
<div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400 border border-slate-700">Alertes Slack/Email</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden glass-card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">35+ Langues</h3>
<p className="text-sm text-slate-400 mb-4">
                        L'agent détecte automatiquement la langue de l'utilisateur et répond dans celle-ci.
                    </p>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">🇫🇷</div>
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">🇬🇧</div>
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">🇪🇸</div>
<div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">+</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden glass-card-hover transition-all">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Analytique</h3>
<p className="text-sm text-slate-400">
                        Suivez les sentiments, les volumes de messages et les sujets les plus fréquents en temps réel.
                    </p>
<div className="mt-4 h-16 w-full flex items-end gap-1">
<div className="w-1/5 bg-slate-800 h-8 rounded-t"></div>
<div className="w-1/5 bg-slate-700 h-12 rounded-t"></div>
<div className="w-1/5 bg-pink-500/50 h-16 rounded-t animate-pulse"></div>
<div className="w-1/5 bg-slate-700 h-10 rounded-t"></div>
<div className="w-1/5 bg-slate-800 h-6 rounded-t"></div>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden glass-card-hover transition-all flex items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Connecté à votre stock</h3>
<p className="text-sm text-slate-400">
                            Synchronisez votre catalogue Shopify ou WooCommerce. L'agent connaît vos prix, vos stocks et peut recommander des produits alternatifs.
                        </p>
</div>
<div className="hidden sm:block w-40 h-32 bg-slate-900 rounded-lg border border-slate-800 p-3 ml-6 shrink-0 rotate-3 transform group-hover:rotate-0 transition-all">
<div className="flex gap-2 mb-2">
<div className="w-8 h-8 bg-slate-800 rounded"></div>
<div className="flex-1 space-y-1">
<div className="h-2 w-full bg-slate-800 rounded"></div>
<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
</div>
</div>
<div className="text-[10px] text-green-400 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> En stock (12)
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/50" id="pricing">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Tarification Simple</h2>
<p className="text-slate-400 text-sm">Commencez gratuitement, évoluez selon vos besoins.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
<div className="text-sm font-medium text-slate-400 mb-2">Starter</div>
<div className="text-3xl font-semibold text-white mb-6">200 k
  Ar<span className="text-sm font-normal text-slate-500">/mois</span></div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> 50 réponses / mois</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> 1 Page Facebook</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Base de connaissance basique</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-medium hover:bg-slate-800 transition-all">Commencer</button>
</div>

<div className="glass-card rounded-2xl ring-blue-500/50 ring-1 pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg text-white">POPULAIRE</div>
<div className="text-sm font-medium text-blue-400 mb-2">Pro</div>
<div className="text-3xl font-semibold text-white mb-6">500K Ar <span className="text-sm font-normal text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> 1000 réponses / mois</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> 3 Pages Facebook</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Sentiment Analysis</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">Essayer 14 jours</button>
</div>

<div className="border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
<div className="text-sm font-medium text-slate-400 mb-2">Business</div>
<div className="text-3xl font-semibold text-white mb-6">1 000 K Ar <span className="text-sm font-normal text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Réponses illimitées</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Pages illimitées</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-medium hover:bg-slate-800 transition-all">Contacter les ventes</button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
<h2 className="text-2xl font-medium text-white mb-10 text-center">Questions Fréquentes</h2>
<div className="space-y-4">

<div className="border-b border-slate-800 pb-4">
<details className="group cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-slate-200 list-none">
                        Est-ce conforme aux règles de Meta (Facebook) ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-400 text-sm mt-3 leading-relaxed">
                        Absolument. FaceBot AI utilise l'API officielle de Meta et respecte toutes les conditions d'utilisation, y compris les limites de débit et les règles de confidentialité.
                    </p>
</details>
</div>

<div className="border-b border-slate-800 pb-4">
<details className="group cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-slate-200 list-none">
                        Comment l'IA apprend-elle sur mes produits ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-400 text-sm mt-3 leading-relaxed">
                        Vous pouvez importer votre site web (URL), des documents PDF ou simplement coller du texte. L'IA indexe ces informations pour construire sa base de connaissances en quelques minutes.
                    </p>
</details>
</div>

<div className="border-b border-slate-800 pb-4">
<details className="group cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-slate-200 list-none">
                        Puis-je modifier les réponses avant publication ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-400 text-sm mt-3 leading-relaxed">
                        Oui, en mode "Copilote", l'IA suggère des réponses que vous validez en un clic. En mode "Autopilote", elle répond seule, sauf si le score de confiance est trop bas.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Prêt à automatiser votre croissance ?</h2>
<p className="text-slate-300 mb-8 max-w-lg mx-auto">Rejoignez 500+ entreprises qui utilisent FaceBot AI pour convertir leurs visiteurs en clients fidèles.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                        Commencer l'essai gratuit
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-400 mt-2 sm:mt-0">Aucune carte requise</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800 bg-slate-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:chat-square-code-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-medium">FaceBot AI</span>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Conditions</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600">
                © 2023 Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
