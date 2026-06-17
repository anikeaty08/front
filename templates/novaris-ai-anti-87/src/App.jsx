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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] animate-float-delayed"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tighter text-white">N O V A R I S</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#features">Capacités</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Fonctionnement</a>
<a className="hover:text-white transition-colors" href="#investigation">Investigation</a>
<a className="hover:text-white transition-colors" href="#api">API</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Connexion</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Déployer l'IA</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Moteur d'inférence v2.0 actif
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 max-w-4xl leading-tight">
                Éradiquez la fraude sur <br className="hidden md:block"/>les transactions Mobile Money.
            </h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                Notre intelligence artificielle analyse des millions de points de données en temps réel. Elle apprend les habitudes, profile les utilisateurs et bloque les anomalies avant que l'argent ne quitte le compte.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    Démarrer l'intégration
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Voir la démo
                </button>
</div>
</section>

<section className="mt-20 border-y border-white/5 bg-white/[0.01] overflow-hidden py-8">
<div className="max-w-7xl mx-auto px-6 mb-4 text-center">
<p className="text-[11px] font-medium text-neutral-500 tracking-wider uppercase">Conçu pour s'intégrer aux écosystèmes existants</p>
</div>
<div className="relative w-full flex overflow-hidden mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)">
<div className="flex whitespace-nowrap animate-marquee items-center opacity-40 hover:opacity-70 transition-opacity">

<div className="flex items-center gap-16 mx-8 text-lg font-medium tracking-tight text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="solar:server-linear"></iconify-icon> Ericsson Wallet</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:cloud-network-linear"></iconify-icon> Huawei Mobile Money</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:database-linear"></iconify-icon> Core Banking APIs</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Custom Gateways</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> Switch Nationaux</span>
</div>

<div className="flex items-center gap-16 mx-8 text-lg font-medium tracking-tight text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="solar:server-linear"></iconify-icon> Ericsson Wallet</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:cloud-network-linear"></iconify-icon> Huawei Mobile Money</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:database-linear"></iconify-icon> Core Banking APIs</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Custom Gateways</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> Switch Nationaux</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-24">
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="ml-4 text-xs font-medium text-neutral-500 tracking-wide">SURVEILLANCE EN TEMPS RÉEL</div>
</div>
<div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative">
<div className="scanner-line"></div>
<div className="flex-1 space-y-4">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">Flux de transactions</h3>
<span className="text-xs text-neutral-500 font-mono">142 TPS</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">ID-7842A</div>
<div className="text-xs text-neutral-500">+225 07 *** ** 12</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-200">15 000 FCFA</div>
<div className="text-xs text-emerald-400 flex items-center gap-1 justify-end">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Autorisé
                                </div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-rose-500/20 bg-rose-500/5 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
<iconify-icon className="text-rose-400" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">ID-7843B</div>
<div className="text-xs text-neutral-500">+221 77 *** ** 89</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-200">250 000 FCFA</div>
<div className="text-xs text-rose-400 flex items-center gap-1 justify-end animate-pulse">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Bloqué
                                </div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">ID-7844C</div>
<div className="text-xs text-neutral-500">+237 69 *** ** 44</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-200">5 000 FCFA</div>
<div className="text-xs text-emerald-400 flex items-center gap-1 justify-end">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Autorisé
                                </div>
</div>
</div>
</div>
<div className="w-full md:w-72 bg-neutral-950 rounded-xl border border-white/5 p-5">
<div className="text-xs font-medium text-indigo-400 mb-4 tracking-wide uppercase">Analyse IA - ID-7843B</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-400">Score de Risque</span>
<span className="text-rose-400 font-medium">94/100</span>
</div>
<div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[94%]"></div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs text-neutral-300 font-medium border-b border-white/5 pb-2">Déclencheurs (Triggers)</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-400 text-sm mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<div>
<div className="text-xs text-neutral-200">Anomalie de localisation</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Appareil situé à 2000km de la dernière transaction (il y a 5 min).</div>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-orange-400 text-sm mt-0.5" icon="solar:history-linear"></iconify-icon>
<div>
<div className="text-xs text-neutral-200">Rupture d'habitude</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Montant 50x supérieur à la moyenne historique du profil.</div>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-400 text-sm mt-0.5" icon="solar:user-cross-linear"></iconify-icon>
<div>
<div className="text-xs text-neutral-200">Destinataire suspect</div>
<div className="text-[10px] text-neutral-500 mt-0.5">Nouveau compte créé il y a 2h, recevant de multiples transferts.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32" id="how-it-works">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Le cycle de vie d'une décision en 50ms.</h2>
<p className="text-neutral-400 text-sm max-w-xl mx-auto">Novaris ne se contente pas d'observer. Il agit de manière invisible au cœur de votre flux d'autorisation, garantissant sécurité sans friction.</p>
</div>
<div className="relative pl-6 md:pl-0">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 transform -translate-x-1/2"></div>
<div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
<h3 className="text-base font-medium text-white mb-1">1. Ingestion de la requête</h3>
<p className="text-xs text-neutral-400">Réception instantanée via API du contexte de la transaction (montant, expéditeur, destinataire, device).</p>
</div>
<div className="absolute left-[-24px] md:relative md:left-auto md:w-2/12 flex justify-center order-1 md:order-2 z-10">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:data-transfer-both-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="hidden md:block md:w-5/12 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
<div className="hidden md:block md:w-5/12 order-1"></div>
<div className="absolute left-[-24px] md:relative md:left-auto md:w-2/12 flex justify-center order-1 md:order-2 z-10">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400 text-sm" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="md:w-5/12 text-left order-2 md:order-3 mt-4 md:mt-0">
<h3 className="text-base font-medium text-white mb-1">2. Enrichissement des données</h3>
<p className="text-xs text-neutral-400">Croisement avec les historiques utilisateurs, listes de sanctions, et analyse de l'empreinte de l'appareil (Device Fingerprinting).</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
<h3 className="text-base font-medium text-white mb-1">3. Inférence IA</h3>
<p className="text-xs text-neutral-400">Les modèles de Machine Learning évaluent la probabilité de fraude en générant un score de risque de 0 à 100.</p>
</div>
<div className="absolute left-[-24px] md:relative md:left-auto md:w-2/12 flex justify-center order-1 md:order-2 z-10">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400 text-sm" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="hidden md:block md:w-5/12 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
<div className="hidden md:block md:w-5/12 order-1"></div>
<div className="absolute left-[-24px] md:relative md:left-auto md:w-2/12 flex justify-center order-1 md:order-2 z-10">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="md:w-5/12 text-left order-2 md:order-3 mt-4 md:mt-0">
<h3 className="text-base font-medium text-white mb-1">4. Décision &amp; Action</h3>
<p className="text-xs text-neutral-400">Retour immédiat du payload API : autoriser, bloquer ou exiger une authentification renforcée (OTP, biométrie).</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32" id="features">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Une intelligence au-delà des règles simples.</h2>
<p className="text-neutral-400 text-sm max-w-xl">Les systèmes basés sur des règles statiques sont obsolètes. Novaris utilise le Machine Learning pour s'adapter continuellement aux nouvelles techniques de fraude.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-xl text-neutral-300 group-hover:text-indigo-400 transition-colors" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Profilage Dynamique</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        L'IA construit un profil comportemental unique pour chaque utilisateur. Elle apprend ses horaires, ses appareils de confiance et son réseau habituel.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors" icon="solar:graph-new-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Analyse des Graphes</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Détection de réseaux complexes de blanchiment. L'IA cartographie les relations pour identifier les mules financières et attaques coordonnées.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-xl text-neutral-300 group-hover:text-emerald-400 transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Latence Ultra-faible</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Une décision de risque prise en moins de 50 millisecondes. Ne ralentissez pas l'expérience tout en garantissant une sécurité militaire.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group md:col-span-2">
<div className="flex items-start gap-6">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 transition-colors">
<iconify-icon className="text-xl text-neutral-300 group-hover:text-purple-400 transition-colors" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-2">Règles Hybrides &amp; Flexibilité</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-4 max-w-xl">
                                Bien que l'IA soit au cœur du système, vous gardez le contrôle. Combinez les scores de Machine Learning avec vos propres règles métiers strictes (ex: bloquer automatiquement les transactions depuis un pays spécifique).
                            </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-4 rounded-full bg-indigo-500 relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow-sm"></div>
</div>
<span className="text-[10px] text-neutral-300">Mode Auto-Apprentissage</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-4 rounded-full bg-neutral-800 border border-white/10 relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-neutral-500 shadow-sm"></div>
</div>
<span className="text-[10px] text-neutral-500">Approbation Manuelle</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-900/20 to-transparent hover:border-indigo-500/30 transition-colors group flex flex-col justify-center">
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">99.8%</h3>
<p className="text-xs text-indigo-200/70 font-medium uppercase tracking-wider mb-2">Taux de précision</p>
<p className="text-xs text-neutral-400 leading-relaxed">
                         Réduction drastique des faux positifs. Vos clients légitimes ne sont plus bloqués.
                     </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32" id="investigation">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Donnez des super-pouvoirs à vos analystes.</h2>
<p className="text-neutral-400 text-sm max-w-xl">L'IA bloque la fraude en temps réel, mais fournit également des outils d'investigation profonds pour vos équipes de conformité et de risque.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="md:col-span-2 bg-neutral-900/50 border border-white/5 p-6 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-8xl text-indigo-500" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Impact Financier</div>
<div className="text-3xl font-medium text-white mb-4">124.5M FCFA</div>
<div className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md mb-4">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon> Fraude évitée ce mois
                        </div>
<p className="text-xs text-neutral-400 mt-2">Visualisez précisément le ROI du système avec des rapports automatiques générés par l'IA sur l'exposition au risque.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Rapports d'Incidents</div>
<div className="w-full h-20 flex items-end gap-2 mb-4">
<div className="w-1/5 bg-indigo-500/40 hover:bg-indigo-500/60 transition-colors h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-indigo-500/50 hover:bg-indigo-500/70 transition-colors h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-indigo-500/30 hover:bg-indigo-500/50 transition-colors h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-indigo-500/80 hover:bg-indigo-500 transition-colors h-[90%] rounded-sm"></div>
<div className="w-1/5 bg-rose-500/80 hover:bg-rose-500 transition-colors h-[100%] rounded-sm"></div>
</div>
</div>
<p className="text-[11px] text-neutral-400">Exportation en un clic pour les audits régulateurs.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Alertes</div>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<span className="text-sm font-medium text-white">4 critiques</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-neutral-300">12 sous revue</span>
</div>
</div>
<p className="text-[11px] text-neutral-400 mt-4">Priorisation intelligente des cas pour vos agents.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-24">
<div className="border-t border-white/5 pt-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:lock-password-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Chiffrement de bout en bout</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed">Toutes les données PII sont hachées et chiffrées en transit et au repos (AES-256). Nous ne stockons jamais de données en clair.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:shield-user-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Conformité RGPD &amp; Locale</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed">Conçu pour respecter les réglementations sur la protection des données des pays de l'UEMOA, CEMAC et standards internationaux.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:server-square-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Résidence des données</h4>
<p className="text-[11px] text-neutral-400 leading-relaxed">Possibilité de déploiement On-Premise (sur site) ou sur des clouds souverains locaux pour respecter les exigences des banques centrales.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 border-t border-white/5 pt-32" id="api">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Une API pensée pour les développeurs.</h2>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                        Intégrez l'évaluation de risque à votre flux de paiement existant avec une seule requête HTTP. Réponse JSON claire, documentation exhaustive et SDKs disponibles pour les principaux langages.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">
                        Lire la documentation API <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="flex-1 w-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/[0.02]">
<span className="text-[10px] font-mono text-neutral-500">POST /v1/evaluate_transaction</span>
</div>
<div className="p-4 overflow-x-auto">
<pre className="text-[11px] font-mono leading-relaxed"><span className="text-indigo-400">{</span>
  <span className="text-blue-300">"status"</span><span className="text-neutral-400">:</span> <span className="text-emerald-400">"success"</span><span className="text-neutral-400">,</span>
  <span className="text-blue-300">"decision"</span><span className="text-neutral-400">:</span> <span className="text-emerald-400">"allow"</span><span className="text-neutral-400">,</span>
  <span className="text-blue-300">"risk_score"</span><span className="text-neutral-400">:</span> <span className="text-orange-300">12</span><span className="text-neutral-400">,</span>
  <span className="text-blue-300">"analysis"</span><span className="text-neutral-400">:</span> <span className="text-indigo-400">{</span>
    <span className="text-blue-300">"device_trust"</span><span className="text-neutral-400">:</span> <span className="text-orange-300">0.98</span><span className="text-neutral-400">,</span>
    <span className="text-blue-300">"location_match"</span><span className="text-neutral-400">:</span> <span className="text-orange-300">true</span><span className="text-neutral-400">,</span>
    <span className="text-blue-300">"velocity_check"</span><span className="text-neutral-400">:</span> <span className="text-emerald-400">"normal"</span>
  <span className="text-indigo-400">}</span>
<span className="text-indigo-400">}</span></pre>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Prêt à sécuriser vos flux financiers ?</h2>
<p className="text-neutral-400 text-sm mb-10">Rejoignez les opérateurs Mobile Money qui font confiance à Novaris pour protéger des millions de transactions quotidiennes.</p>
<button className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                Contacter l'équipe commerciale
            </button>
</section>
</main>
<footer className="border-t border-white/5 py-12 mt-24">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-tighter text-neutral-500">N O V A R I S © 2024</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-300 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Conditions</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Statut Système</a>
</div>
</div>
</footer>

    </>
  );
}
