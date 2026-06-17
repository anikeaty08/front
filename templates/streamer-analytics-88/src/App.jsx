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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<aside className="w-64 border-r border-white/5 bg-[#050505] hidden md:flex flex-col justify-between z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded flex items-center justify-center">
<span className="text-white font-semibold text-xs">S</span>
</div>
<span className="text-white font-medium text-sm tracking-tight">Sorino Tip</span>
</div>
</div>

<nav className="p-3 space-y-1 mt-4">
<p className="px-3 text-[10px] uppercase tracking-wider text-slate-500 font-medium mb-2">Menu</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm font-medium border border-white/5" href="#">
<i className="w-4 h-4 text-emerald-400" data-lucide="layout-dashboard"></i>
                    Vue d'ensemble
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="banknote"></i>
                    Transactions
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                    Analyses
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Supporters
                </a>
</nav>
<nav className="p-3 space-y-1 mt-4">
<p className="px-3 text-[10px] uppercase tracking-wider text-slate-500 font-medium mb-2">Configuration</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="palette"></i>
                    Apparence
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="zap"></i>
                    Intégrations
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Paramètres
                </a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-white">
                    AK
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Akram Gamer</p>
<p className="text-xs text-slate-500 truncate">Pro Plan</p>
</div>
<i className="w-4 h-4 text-slate-500 group-hover:text-white" data-lucide="more-horizontal"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-grid-pattern relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<h1 className="text-sm font-medium text-white">Vue d'ensemble</h1>
<span className="text-slate-600">/</span>
<span className="text-xs text-slate-500">Oct 24 - Nov 24</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-400">Stream En Ligne</span>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors relative">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-[#050505]"></span>
</button>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Aide</a>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Bonjour, Akram 👋</h2>
<p className="text-sm text-slate-500">Voici ce qui se passe sur votre stream aujourd'hui.</p>
</div>
<div className="flex items-center gap-2 bg-[#0A0A0A] p-1.5 rounded-lg border border-white/10 w-full md:w-auto">
<div className="pl-3 pr-2 text-xs text-slate-500 select-none">sorino.tip/</div>
<input className="bg-transparent text-white text-sm focus:outline-none w-24" readonly="" type="text" value="akramgamer"/>
<button className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-slate-200 transition-colors flex items-center gap-2">
<i className="w-3 h-3" data-lucide="copy"></i> Copier
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-5 rounded-xl">
<div className="flex items-start justify-between mb-4">
<span className="text-xs font-medium text-slate-500">Solde Disponible</span>
<i className="w-4 h-4 text-emerald-500" data-lucide="wallet"></i>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">42,500</span>
<span className="text-sm font-medium text-slate-500">DZD</span>
</div>
<div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+12% vs semaine dernière</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl">
<div className="flex items-start justify-between mb-4">
<span className="text-xs font-medium text-slate-500">Revenus (30j)</span>
<i className="w-4 h-4 text-purple-500" data-lucide="bar-chart"></i>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">128,400</span>
<span className="text-sm font-medium text-slate-500">DZD</span>
</div>
<div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+8.2% vs mois dernier</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl">
<div className="flex items-start justify-between mb-4">
<span className="text-xs font-medium text-slate-500">Nouveaux Tips</span>
<i className="w-4 h-4 text-rose-500" data-lucide="heart"></i>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">142</span>
<span className="text-sm font-medium text-slate-500">tips</span>
</div>
<div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
<span>Moyenne: 900 DZD</span>
</div>
</div>

<div className="glass-panel p-5 rounded-xl">
<div className="flex items-start justify-between mb-4">
<span className="text-xs font-medium text-slate-500">Top Donateur</span>
<i className="w-4 h-4 text-amber-400" data-lucide="crown"></i>
</div>
<div className="flex items-center gap-3 mt-1">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-[1px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">SM</div>
</div>
<div>
<p className="text-sm font-medium text-white">Sofiane M.</p>
<p className="text-xs text-slate-500">12,000 DZD</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Analyse des revenus</h3>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white">7J</button>
<button className="px-2 py-1 rounded text-xs font-medium text-slate-500 hover:text-white hover:bg-white/5 transition">30J</button>
<button className="px-2 py-1 rounded text-xs font-medium text-slate-500 hover:text-white hover:bg-white/5 transition">1A</button>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 md:gap-4 w-full">

<div className="absolute inset-x-6 top-20 h-[1px] bg-white/5 pointer-events-none"></div>
<div className="absolute inset-x-6 top-40 h-[1px] bg-white/5 pointer-events-none"></div>
<div className="absolute inset-x-6 top-60 h-[1px] bg-white/5 pointer-events-none"></div>

<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '30%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Lun: 1200 DA</div>
</div>
<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '45%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Mar: 2500 DA</div>
</div>
<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '25%'}}></div>
<div className="w-full bg-emerald-500 rounded-t hover:bg-emerald-400 transition-all cursor-pointer group relative shadow-[0_0_20px_rgba(16,185,129,0.3)] chart-bar" style={{height: '75%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Jeu: 8500 DA</div>
</div>
<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '55%'}}></div>
<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '40%'}}></div>
<div className="w-full bg-white/5 rounded-t hover:bg-emerald-500/80 transition-all cursor-pointer group relative chart-bar" style={{height: '60%'}}></div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-500 font-medium px-1">
<span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
</div>
</div>

<div className="glass-panel rounded-xl p-0 flex flex-col overflow-hidden">
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#050505]/50">
<h3 className="text-sm font-medium text-white">Activité Récente</h3>
<button className="text-xs text-emerald-400 hover:text-emerald-300">Tout voir</button>
</div>
<div className="overflow-y-auto max-h-[300px] p-2">

<div className="p-3 hover:bg-white/5 rounded-lg transition-colors group">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-white truncate">Karim DZ</p>
<span className="text-xs font-medium text-emerald-400">+2,000 DA</span>
</div>
<p className="text-xs text-slate-400 line-clamp-1 italic">"Merci pour le stream frérot ! Continue comme ça."</p>
<span className="text-[10px] text-slate-600 mt-1 block">Il y a 2 min</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-white/5 rounded-lg transition-colors group">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
<i className="w-3.5 h-3.5" data-lucide="twitch"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-white truncate">Amine Tech</p>
<span className="text-xs font-medium text-emerald-400">+500 DA</span>
</div>
<p className="text-xs text-slate-400 line-clamp-1 italic">"GG pour la game!"</p>
<span className="text-[10px] text-slate-600 mt-1 block">Il y a 15 min</span>
</div>
</div>
</div>

<div className="p-3 hover:bg-white/5 rounded-lg transition-colors group">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center border border-white/10">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-white truncate">Anonyme</p>
<span className="text-xs font-medium text-emerald-400">+10,000 DA</span>
</div>
<p className="text-xs text-slate-400 line-clamp-1 italic">"Soutien depuis Oran ❤️"</p>
<span className="text-[10px] text-slate-600 mt-1 block">Il y a 1h</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="p-4 rounded-xl border border-dashed border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" data-lucide="flask-conical"></i>
</div>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Tester l'alerte</span>
</button>
<button className="p-4 rounded-xl border border-dashed border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-slate-300 group-hover:text-blue-400" data-lucide="credit-card"></i>
</div>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Retirer les fonds</span>
</button>
<button className="p-4 rounded-xl border border-dashed border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-slate-300 group-hover:text-purple-400" data-lucide="pencil"></i>
</div>
<span className="text-sm font-medium text-slate-400 group-hover:text-white">Modifier la page</span>
</button>
</div>
</div>

<footer className="mt-12 mb-6 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
<p>© 2024 Sorino Inc. Tous droits réservés.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-slate-400" href="#">Support</a>
<a className="hover:text-slate-400" href="#">Conditions</a>
<a className="hover:text-slate-400" href="#">Confidentialité</a>
</div>
</footer>
</div>
</main>


    </>
  );
}
