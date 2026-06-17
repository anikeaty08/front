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



tailwind.config = {
theme: {
extend: {
colors: {
border: 'rgba(226, 232, 240, 0.8)',
background: '#fafafa',
primary: '#0f172a', // Slate 900
},
fontSize: {
xxs: '0.625rem',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<aside className="hidden md:flex flex-col w-[260px] h-full flex-shrink-0 border-r border-slate-200/60 bg-white/80 backdrop-blur-xl z-30">

<div className="h-16 flex items-center px-6">
<div className="flex items-center gap-3 text-slate-900 group cursor-pointer">
<div className="relative w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center overflow-hidden shadow-lg shadow-slate-200">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700"></div>
<iconify-icon className="relative z-10 text-white" icon="lucide:zap" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">TelegramX</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
<div className="px-2 mb-3 text-xs font-medium text-slate-400 uppercase tracking-widest">Principal</div>
<a className="nav-item-active flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="18"></iconify-icon>
<span>Vue d'ensemble</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="18"></iconify-icon>
<span>Campagnes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:workflow" strokeWidth="1.5" width="18"></iconify-icon>
<span>Automatisations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
<span>Audience</span>
</a>
<div className="px-2 mt-8 mb-3 text-xs font-medium text-slate-400 uppercase tracking-widest">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>Paramètres</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all duration-200 group border border-transparent" href="#">
<iconify-icon icon="lucide:puzzle" strokeWidth="1.5" width="18"></iconify-icon>
<span>Intégrations</span>
</a>
</div>

<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-slate-50 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-xs font-medium">
                    AM
                </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Alex M.</p>
<p className="text-xxs text-slate-500 truncate">Pro Plan</p>
</div>
<iconify-icon className="text-slate-400" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 sticky top-0 z-20 backdrop-blur-md bg-white/60 border-b border-slate-200/60 transition-all">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-sm">
<span className="text-slate-500">Espace de travail</span>
<iconify-icon className="text-slate-300" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="font-medium text-slate-900">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center px-3 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
<span className="text-xs font-medium text-slate-600">Système opérationnel</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Vue d'ensemble</h1>
<p className="text-sm text-slate-500 mt-1">Vos performances des 30 derniers jours.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
                            Oct 24 - Nov 24
                        </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm hover:shadow-md transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                            Nouveau Message
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-900">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50/50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                12%
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">8,450</h3>
<p className="text-xs font-medium text-slate-500">Messages livrés</p>
</div>
</div>

<div className="glass-card rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-900">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50/50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                4%
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">1,203</h3>
<p className="text-xs font-medium text-slate-500">Abonnés actifs</p>
</div>
</div>

<div className="glass-card rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-900">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 bg-slate-50/50 border border-slate-100 px-2 py-0.5 rounded-full">
                                0%
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">98.5%</h3>
<p className="text-xs font-medium text-slate-500">Taux de succès</p>
</div>
</div>

<div className="glass-card rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-900">
<iconify-icon icon="lucide:activity" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">24ms</h3>
<p className="text-xs font-medium text-slate-500">Latence API</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl lg:col-span-2 flex flex-col">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white/40">
<h3 className="font-medium text-slate-900 text-sm">Envoi Rapide</h3>
<div className="flex gap-2">
<button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:maximize-2" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col gap-4">
<div className="relative flex-1 group">
<textarea className="w-full h-32 bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900/10 focus:border-slate-300 resize-none transition-all placeholder:text-slate-400 group-hover:bg-white" placeholder="Rédigez votre message..."></textarea>
<div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-white/80 backdrop-blur-sm p-1 rounded-md border border-slate-100 shadow-sm">
<button className="p-1 text-slate-400 hover:text-slate-900 rounded hover:bg-slate-50 transition-colors">
<iconify-icon icon="lucide:bold" width="14"></iconify-icon>
</button>
<button className="p-1 text-slate-400 hover:text-slate-900 rounded hover:bg-slate-50 transition-colors">
<iconify-icon icon="lucide:italic" width="14"></iconify-icon>
</button>
<div className="w-px h-3 bg-slate-200 mx-1"></div>
<button className="p-1 text-slate-400 hover:text-slate-900 rounded hover:bg-slate-50 transition-colors">
<iconify-icon icon="lucide:link" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative inline-block w-48">
<select className="w-full appearance-none bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-lg px-3 py-2.5 pr-8 focus:outline-none focus:border-slate-400 transition-colors cursor-pointer">
<option>Canal Principal</option>
<option>Canal de Test</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
<div className="flex-1"></div>
<div className="text-xs text-slate-400 font-medium tabular-nums">0/4096</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-5 rounded-lg text-sm transition-all shadow-sm flex items-center gap-2 group">
<span>Envoyer</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass-card rounded-xl flex flex-col overflow-hidden">
<div className="p-5 border-b border-slate-100 bg-white/40">
<h3 className="font-medium text-slate-900 text-sm">État du Bot</h3>
</div>
<div className="p-6 flex flex-col items-center justify-center flex-1 relative overflow-hidden group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
<div className="relative w-20 h-20 mb-4">
<svg className="w-full h-full -rotate-90 transform" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-emerald-500 drop-shadow-sm" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="98, 100" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xs font-bold text-slate-900">98%</span>
</div>
</div>
<div className="text-center relative z-10">
<h4 className="text-sm font-semibold text-slate-900">AutoBot_v1</h4>
<p className="text-xs text-slate-500 mt-1">Opérationnel depuis 4j</p>
</div>
<div className="grid grid-cols-2 gap-2 w-full mt-6">
<button className="flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 transition-colors">
<iconify-icon icon="lucide:rotate-cw" width="14"></iconify-icon>
                                    Restart
                                </button>
<button className="flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 transition-colors">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                                    Logs
                                </button>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white/40">
<h3 className="font-medium text-slate-900 text-sm">Historique Récent</h3>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
</button>
<button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100/80 text-xs font-semibold text-slate-500 bg-slate-50/30">
<th className="px-5 py-3 w-10">
<input className="rounded border-slate-300 text-slate-900 focus:ring-slate-900/20" type="checkbox"/>
</th>
<th className="px-5 py-3">Contenu</th>
<th className="px-5 py-3">Destination</th>
<th className="px-5 py-3">Statut</th>
<th className="px-5 py-3 text-right">Date</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-100/80">
<tr className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
<td className="px-5 py-3">
<div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md border border-slate-100 bg-white text-slate-500 shadow-sm">
<iconify-icon icon="lucide:image" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-700 text-xs">promo_banner_v2.png</span>
</div>
</td>
<td className="px-5 py-3 text-xs text-slate-500">
                                        @marketing_channel
                                    </td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-700">Envoyé</span>
</div>
</td>
<td className="px-5 py-3 text-right text-slate-400 text-xs tabular-nums">
                                        Just now
                                    </td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
<td className="px-5 py-3">
<div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md border border-slate-100 bg-white text-slate-500 shadow-sm">
<iconify-icon icon="lucide:type" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-700 text-xs truncate max-w-[200px]">Mise à jour des CGV 2024</span>
</div>
</td>
<td className="px-5 py-3 text-xs text-slate-500">
                                        @legal_updates
                                    </td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500">Programmé</span>
</div>
</td>
<td className="px-5 py-3 text-right text-slate-400 text-xs tabular-nums">
                                        14:00
                                    </td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
<td className="px-5 py-3">
<div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md border border-slate-100 bg-white text-slate-500 shadow-sm">
<iconify-icon icon="lucide:link" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-700 text-xs truncate max-w-[200px]">https://telegramx.com/blog/new...</span>
</div>
</td>
<td className="px-5 py-3 text-xs text-slate-500">
                                        @news_feed
                                    </td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
<span className="text-xs font-medium text-red-700">Erreur</span>
</div>
</td>
<td className="px-5 py-3 text-right text-slate-400 text-xs tabular-nums">
                                        Hier
                                    </td>
</tr>
</tbody>
</table>
</div>
<div className="px-5 py-3 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
<span className="text-xs text-slate-400">Affichage 1-3 sur 45</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all">
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="p-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 pb-4 text-xs text-slate-400 border-t border-slate-200/50">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span>v2.4.0 (Stable)</span>
</div>
<div className="flex gap-6 mt-2 md:mt-0">
<a className="hover:text-slate-600 transition-colors" href="#">Documentation</a>
<a className="hover:text-slate-600 transition-colors" href="#">Support</a>
<a className="hover:text-slate-600 transition-colors" href="#">API</a>
</div>
</div>
</main>
</div>

    </>
  );
}
