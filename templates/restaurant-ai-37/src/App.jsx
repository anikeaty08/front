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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-orange-500 text-white flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="2" width="16"></iconify-icon>
</div>
                VOICEORDER
            </a>
<nav className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#tarifs">Tarifs</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm" href="#demo">
                    Réserver une démo
                </a>
</nav>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50/50 border border-orange-200/50 text-orange-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Disponible 24h/24, 7j/7
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight mb-6">
                    Votre restaurant ne perd plus un seul appel.
                </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Une IA réceptionniste qui décroche, prend les commandes et les affiche en cuisine. 24h/24, pour 149 €/mois.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20" href="#demo">
                        Réserver une démo gratuite
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors" href="#comment-ca-marche">
<iconify-icon className="mr-2" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Écouter une démo
                    </a>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-zinc-200 to-transparent opacity-50 blur-lg"></div>
<div className="relative bg-white rounded-2xl border border-zinc-200/60 shadow-xl overflow-hidden flex flex-col h-[400px]">

<div className="h-12 border-b border-zinc-100 flex items-center px-4 justify-between bg-zinc-50/50">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
</div>
<div className="text-xs font-medium text-zinc-400">Commandes en cours</div>
<div className="w-16"></div>
</div>

<div className="flex-grow p-6 grid grid-cols-3 gap-4 bg-zinc-50/30 overflow-hidden">

<div className="flex flex-col gap-3">
<div className="text-xs font-semibold text-zinc-500 tracking-tight">NOUVELLE (2)</div>
<div className="bg-white p-3 rounded-xl border border-orange-200 shadow-sm shadow-orange-100/50 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"></div>
<div className="flex justify-between items-start mb-2">
<div className="text-sm font-semibold text-zinc-900">#1042</div>
<div className="text-xs text-zinc-400">À l'instant</div>
</div>
<div className="text-xs text-zinc-600 mb-2">2x Burger Classic<br/>1x Frites Maison</div>
<div className="flex justify-between items-center mt-3">
<div className="text-xs font-medium text-zinc-900">24.50 €</div>
<div className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-md">Accepter</div>
</div>
</div>
<div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-sm opacity-50">
<div className="h-4 bg-zinc-100 rounded w-1/3 mb-2"></div>
<div className="h-3 bg-zinc-100 rounded w-2/3 mb-1"></div>
<div className="h-3 bg-zinc-100 rounded w-1/2"></div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="text-xs font-semibold text-zinc-500 tracking-tight">EN PRÉPARATION (1)</div>
<div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
<div className="flex justify-between items-start mb-2">
<div className="text-sm font-semibold text-zinc-900">#1041</div>
<div className="text-xs text-zinc-400">il y a 5 min</div>
</div>
<div className="text-xs text-zinc-600 mb-2">1x Pizza Margherita<br/>1x Tiramisu</div>
<div className="flex justify-between items-center mt-3">
<div className="text-xs font-medium text-zinc-900">18.00 €</div>
<div className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md">Prêt</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 hidden sm:flex">
<div className="text-xs font-semibold text-zinc-500 tracking-tight">PRÊTE (0)</div>
<div className="border-2 border-dashed border-zinc-200 rounded-xl h-24 flex items-center justify-center">
<span className="text-xs text-zinc-400">Glisser ici</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Combien de commandes vous perdez chaque jour ?</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100 transition-all hover:shadow-md hover:border-zinc-200">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Appels manqués pendant le rush</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Votre équipe est débordée, personne ne décroche. Chaque appel manqué = 15-25 € de CA perdu.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100 transition-all hover:shadow-md hover:border-zinc-200">
<div className="w-10 h-10 rounded-lg bg-zinc-100 text-zinc-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Fermé = plus de commandes</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Après la fermeture, les clients tombent sur le répondeur. Zéro commande entre 22h et 11h.
                        </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100 transition-all hover:shadow-md hover:border-zinc-200">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Un réceptionniste coûte cher</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            1 800 €/mois minimum pour quelqu'un qui décroche. Et il ne travaille pas la nuit ni le dimanche.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="comment-ca-marche">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Comment ça marche</h2>
<p className="text-base text-zinc-500">Simple, invisible pour le client, efficace pour vous.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-200 -translate-y-1/2"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center mb-6 relative">
<iconify-icon className="text-zinc-700" icon="solar:smartphone-linear" width="28"></iconify-icon>
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-500">1</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Le client appelle</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Votre numéro de téléphone habituel. Rien ne change pour vos clients.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-orange-200 shadow-sm shadow-orange-100 flex items-center justify-center mb-6 relative">
<iconify-icon className="text-orange-500" icon="solar:chat-round-line-linear" width="28"></iconify-icon>
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-xs font-semibold text-orange-600">2</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">L'IA prend la commande</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Conversation naturelle. Choix des produits, personnalisation et confirmation.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center mb-6 relative">
<iconify-icon className="text-emerald-500" icon="solar:monitor-smartphone-linear" width="28"></iconify-icon>
<div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xs font-semibold text-emerald-600">3</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">Envoi en cuisine</h3>
<p className="text-sm text-zinc-500 leading-relaxed">La commande s'affiche en temps réel sur votre tablette. Prête à être préparée.</p>
</div>
</div>
</div>

<div className="max-w-md mx-auto mt-16 bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors flex-shrink-0">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</button>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-zinc-900">Exemple de conversation</span>
<span className="text-xs text-zinc-400">0:45</span>
</div>

<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-1/3 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Un tableau de bord simple pour votre équipe</h2>
<p className="text-base text-zinc-400">Pensé pour le rush en cuisine. Zéro formation nécessaire.</p>
</div>

<div className="relative max-w-5xl mx-auto mb-12">
<div className="bg-zinc-800 rounded-2xl border border-zinc-700 shadow-2xl overflow-hidden">
<div className="h-12 border-b border-zinc-700 flex items-center px-4 justify-between bg-zinc-800/50">
<div className="text-sm font-medium text-zinc-300 flex items-center gap-2">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon> Cuisine
                            </div>
<div className="flex gap-4 text-sm text-zinc-400">
<div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> IA Active</div>
<div>Aujourd'hui: 42 commandes</div>
</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-zinc-900/50">

<div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
<h4 className="text-xs font-semibold text-zinc-400 mb-4 tracking-tight flex justify-between">
<span>NOUVELLE</span>
<span className="bg-orange-500/20 text-orange-400 px-1.5 rounded">2</span>
</h4>
<div className="space-y-3">
<div className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="flex justify-between text-xs mb-2">
<span className="font-semibold text-zinc-200">#1042</span>
<span className="text-orange-400 font-medium">19:42</span>
</div>
<div className="text-sm text-zinc-300 leading-snug mb-3">
<span className="text-zinc-500">2x</span> Burger Classic<br/>
<span className="text-zinc-500">1x</span> Frites<br/>
<span className="text-zinc-500">1x</span> Coca Zéro
                                        </div>
<button className="w-full py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded text-xs font-medium transition-colors">Préparer</button>
</div>
<div className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 opacity-70">
<div className="flex justify-between text-xs mb-2">
<span className="font-semibold text-zinc-200">#1043</span>
<span className="text-zinc-400">19:44</span>
</div>
<div className="text-sm text-zinc-300 leading-snug">
<span className="text-zinc-500">1x</span> Salade César
                                        </div>
</div>
</div>
</div>

<div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
<h4 className="text-xs font-semibold text-zinc-400 mb-4 tracking-tight flex justify-between">
<span>EN PRÉPARATION</span>
<span className="bg-blue-500/20 text-blue-400 px-1.5 rounded">1</span>
</h4>
<div className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
<div className="flex justify-between text-xs mb-2">
<span className="font-semibold text-zinc-200">#1041</span>
<span className="text-zinc-400">19:35</span>
</div>
<div className="text-sm text-zinc-300 leading-snug mb-3">
<span className="text-zinc-500">1x</span> Menu Enfant<br/>
<span className="text-zinc-500">2x</span> Pizza 4 Fromages
                                    </div>
<button className="w-full py-1.5 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded text-xs font-medium transition-colors">Terminer</button>
</div>
</div>

<div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50 opacity-50 hidden md:block">
<h4 className="text-xs font-semibold text-zinc-400 mb-4 tracking-tight">PRÊTE</h4>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50 opacity-30 hidden md:block">
<h4 className="text-xs font-semibold text-zinc-400 mb-4 tracking-tight">RÉCUPÉRÉE</h4>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:bell-bing-linear" width="16"></iconify-icon>
</div>
<span className="text-zinc-300">Alerte sonore à chaque nouvelle commande</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<span className="text-zinc-300">Total du jour en un coup d'œil</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:devices-linear" width="16"></iconify-icon>
</div>
<span className="text-zinc-300">Sur tablette, téléphone ou PC</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="16"></iconify-icon>
</div>
<span className="text-zinc-300">Un clic pour faire avancer l'état</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Tout ce dont votre restaurant a besoin</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">Disponible 24h/24</h3>
<p className="text-sm text-zinc-500 leading-relaxed">L'IA répond jour, nuit, week-end, jours fériés. Zéro appel manqué.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">Menu personnalisable</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Ajoutez, retirez, modifiez vos produits et prix en 2 minutes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">SMS automatique</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Le client reçoit un message de confirmation avec demande d'avis Google.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">Rapport quotidien</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Chaque soir, un email avec le résumé : commandes, CA, produits phares.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">Commandes sans erreur</h3>
<p className="text-sm text-zinc-500 leading-relaxed">L'IA récapitule et confirme chaque commande. Taux d'erreur inférieur à 2%.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-1">Installation en 5 jours</h3>
<p className="text-sm text-zinc-500 leading-relaxed">On configure tout. Votre équipe est formée en 30 minutes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">IA Réceptionniste vs Employé classique</h2>
</div>
<div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50/50 text-xs text-zinc-500 uppercase tracking-wider border-b border-zinc-200">
<tr>
<th className="px-6 py-4 font-medium"></th>
<th className="px-6 py-4 font-medium">Employé</th>
<th className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">IA Réceptionniste</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Disponibilité</td>
<td className="px-6 py-4 text-zinc-500">8-12h/jour</td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">24h/24, 7j/7</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Coût mensuel</td>
<td className="px-6 py-4 text-zinc-500">1 800 €+</td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">149 €</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Appels manqués</td>
<td className="px-6 py-4 text-zinc-500">Fréquent</td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">Zéro</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Erreurs de commande</td>
<td className="px-6 py-4 text-zinc-500">5-10%</td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">&lt; 2%</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Congés / Maladie</td>
<td className="px-6 py-4 text-zinc-500">Oui</td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">Jamais</td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">Dashboard en temps réel</td>
<td className="px-6 py-4 text-zinc-400"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50"><iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon></td>
</tr>
<tr>
<td className="px-6 py-4 text-zinc-900 font-medium">SMS de suivi client</td>
<td className="px-6 py-4 text-zinc-400"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></td>
<td className="px-6 py-4 font-medium text-emerald-700 bg-emerald-50/50">Automatique</td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="text-xs text-center text-zinc-400 mt-4">
                    *L'IA ne remplace pas votre équipe en salle ou en cuisine, elle la libère de la contrainte du téléphone.
                </p>
</div>
</section>

<section className="py-24 bg-white" id="tarifs">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Un prix simple, sans engagement</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

<div className="relative p-8 rounded-2xl bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/10 flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                            Le plus choisi
                        </div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-zinc-900">Standard</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-zinc-900">
                                149 €
                                <span className="ml-1 text-base font-medium text-zinc-500">/mois</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-grow text-sm text-zinc-600">
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> IA réceptionniste 24h/24</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> Dashboard temps réel</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> Prise de commande complète</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> SMS de confirmation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> Rapport quotidien email</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> Menu modifiable</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-bold" width="18"></iconify-icon> Support email</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors" href="#demo">
                            Choisir Standard
                        </a>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold text-zinc-900">Premium</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-zinc-900">
                                249 €
                                <span className="ml-1 text-base font-medium text-zinc-500">/mois</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-grow text-sm text-zinc-600">
<li className="font-medium text-zinc-900">Tout dans Standard, plus :</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-400" icon="solar:check-circle-line-duotone" width="18"></iconify-icon> Avis Google automatisés</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-400" icon="solar:check-circle-line-duotone" width="18"></iconify-icon> Upselling intelligent</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-400" icon="solar:check-circle-line-duotone" width="18"></iconify-icon> WhatsApp Business</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-400" icon="solar:check-circle-line-duotone" width="18"></iconify-icon> Statistiques avancées</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-400" icon="solar:check-circle-line-duotone" width="18"></iconify-icon> Support prioritaire</li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-100 transition-colors" href="#demo">
                            Choisir Premium
                        </a>
</div>
</div>
<div className="mt-12 text-center text-sm text-zinc-500 space-y-2">
<p>Setup initial : 500 € (configuration complète + formation de l'équipe).</p>
<p className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Sans engagement. Résiliable à tout moment. Satisfait ou remboursé les 30 premiers jours.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Ils nous font confiance</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 mb-6 leading-relaxed">
                            "On récupère au moins 8 commandes par jour qui partaient dans le vide. L'IA a augmenté notre CA de 20% le premier mois. Un investissement rentabilisé en 3 jours."
                        </p>
<div className="text-sm font-medium text-zinc-900">Mehdi R.</div>
<div className="text-xs text-zinc-500">Gérant, Brasserie Parisienne</div>
</div>
<div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 mb-6 leading-relaxed">
                            "Mes employés adorent. Ils ne courent plus décrocher le téléphone pendant le coup de feu. Tout arrive directement sur la tablette, sans erreur de saisie."
                        </p>
<div className="text-sm font-medium text-zinc-900">Sophie L.</div>
<div className="text-xs text-zinc-500">Propriétaire, Pizzeria Lyon</div>
</div>
<div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-orange-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-700 mb-6 leading-relaxed">
                            "J'étais sceptique sur le côté 'robot'. En fait, les clients trouvent ça plus rapide et apprécient que ça réponde tout le temps. Une vraie révolution."
                        </p>
<div className="text-sm font-medium text-zinc-900">Thomas D.</div>
<div className="text-xs text-zinc-500">Franchisé, Fast-food Marseille</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Questions fréquentes</h2>
</div>
<div className="divide-y divide-zinc-200/60">
<details className="group py-5" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Est-ce que les clients se rendent compte que c'est une IA ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            La grande majorité ne fait pas la différence. L'IA parle naturellement, avec un vrai accent français, et s'adapte à la conversation. C'est très loin d'un répondeur à touches traditionnel.
                        </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Comment je modifie mon menu ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            Votre menu est géré via une interface simple ou un Google Sheets. Vous ajoutez, retirez ou modifiez un produit en 2 minutes. L'IA est mise à jour immédiatement et connaît vos nouveaux plats.
                        </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Ça marche avec mon numéro de téléphone actuel ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            Oui. On configure un simple transfert d'appel (total ou en cas de non-réponse) vers l'IA sans changer votre numéro. Vos clients appellent le même numéro qu'avant.
                        </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Et si l'IA ne comprend pas une demande ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            Si la demande est hors du cadre habituel (demande traiteur, événement spécial, plainte complexe), l'IA le détecte et propose de laisser un message pour que vous rappeliez ou transfère l'appel. Aucun client n'est laissé sans réponse.
                        </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Combien de temps pour mettre en place ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            5 jours ouvrables. Nous nous occupons de toute la configuration technique et de l'intégration de votre menu. Ensuite, nous vous formons en 30 minutes par visio et c'est opérationnel.
                        </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-zinc-900">
                            Et si je veux arrêter ?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                            Il n'y a aucun engagement de durée. Vous résiliez quand vous le souhaitez. En un clic, vos appels reviennent sonner sur votre téléphone classique comme avant.
                        </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Arrêtez de perdre des commandes.<br/>Démarrez en 5 jours.</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Réservez une démo gratuite de 15 minutes. On vous montre l'IA en action avec votre propre menu.
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" href="#">
                    Réserver ma démo gratuite
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-6 text-sm text-zinc-500">
                    Gratuit. Sans engagement. En 15 minutes c'est fait.
                </p>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
</div>
                        VOICEORDER
                    </span>
<span className="text-xs text-zinc-500">L'IA réceptionniste des restaurants modernes.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-zinc-900 transition-colors" href="mailto:contact@voiceorder.fr">Contact</a>
</div>
</div>
<div className="mt-8 text-center md:text-left text-xs text-zinc-400 flex flex-col md:flex-row justify-between items-center">
<p>© 2024 VoiceOrder. Tous droits réservés.</p>
<p className="mt-2 md:mt-0 flex items-center gap-1">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> contact@voiceorder.fr
                </p>
</div>
</div>
</footer>

    </>
  );
}
