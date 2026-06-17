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
      

<div className="max-w-md mx-auto relative pb-28 min-h-screen shadow-2xl overflow-hidden bg-[#F6F3EE]">

<header className="px-6 pt-12 pb-2 flex justify-between items-center z-10 sticky top-0 bg-[#F6F3EE]/95 backdrop-blur-sm transition-all duration-200">
<div>
<p className="text-xs font-medium text-[#003C2E]/60 mb-0.5">Bonjour Thomas</p>
<h1 className="text-2xl font-semibold tracking-tight text-[#003C2E]">Accueil</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center relative shadow-sm">
<i className="w-5 h-5 text-[#003C2E]" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="h-10 w-10 rounded-full bg-white border border-[#C5A065]/30 shadow-sm overflow-hidden flex items-center justify-center">
<img alt="Avatar" className="h-full w-full object-cover opacity-90" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</header>

<main className="px-4 space-y-6 pt-4">

<div className="space-y-5">

<div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E0D6]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<img alt="Marc" className="w-10 h-10 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=1"/>
<div>
<h3 className="text-sm font-semibold text-[#003C2E]">Marc</h3>
<p className="text-[10px] text-gray-500">Il y a 2h • Royal Mougins</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xl font-bold tracking-tight">79</span>
<span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">+7</span>
</div>
</div>
<p className="text-xs text-gray-700 mb-3 leading-relaxed">
                        Partie solide ce matin. Le putting commence à payer ! ⛳️
                    </p>

<div className="relative h-32 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
<svg className="absolute inset-0 w-full h-full object-cover" preserveaspectratio="none" viewbox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0 h400 v150 h-400 z" fill="#e6f4f1"></path>
<path d="M0,100 Q100,50 200,100 T400,80 V150 H0 z" fill="#C5A065" opacity="0.1"></path>
<path d="M-50,120 Q150,80 450,130 V150 H-50 z" fill="#003C2E" opacity="0.1"></path>
</svg>
<div className="absolute bottom-3 left-4 z-20 flex gap-4 text-white">
<div>
<p className="text-[10px] opacity-80 uppercase tracking-wider">GIR</p>
<p className="text-sm font-semibold">61%</p>
</div>
<div>
<p className="text-[10px] opacity-80 uppercase tracking-wider">Putts</p>
<p className="text-sm font-semibold">29</p>
</div>
<div>
<p className="text-[10px] opacity-80 uppercase tracking-wider">FIR</p>
<p className="text-sm font-semibold">9/14</p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-gray-50">
<div className="flex -space-x-1">
<div className="bg-gray-50 rounded-full px-2 py-1 text-[10px] border border-white z-10">👍</div>
<div className="bg-gray-50 rounded-full px-2 py-1 text-[10px] border border-white z-0">🔥</div>
<span className="text-[10px] text-gray-400 pl-2 self-center">5 réactions</span>
</div>
<button className="text-xs font-medium text-[#003C2E] hover:text-[#C5A065] transition-colors">
                            Voir la carte
                        </button>
</div>
</div>

<div className="relative w-full bg-[#003C2E] rounded-[28px] p-6 text-white overflow-hidden shadow-lg shadow-[#003C2E]/20">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A065] opacity-10 blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<i className="text-[#C5A065] w-4 h-4" data-lucide="sparkles"></i>
<span className="text-xs font-bold tracking-wide text-[#C5A065] uppercase">Suggestion IA du jour</span>
</div>
<div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
<div>
<p className="text-xs text-white/60 mb-0.5">Parcours recommandé</p>
<p className="text-lg font-medium">La Grande Bastide</p>
</div>
<div className="text-right">
<p className="text-xs text-white/60 mb-0.5">Samedi 14 Oct.</p>
<p className="text-[#C5A065] text-lg font-medium">09:10</p>
</div>
</div>
<div className="flex items-center gap-3 mb-5">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#003C2E]" src="https://i.pravatar.cc/150?u=1" />
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#003C2E]" src="https://i.pravatar.cc/150?u=2" />
</img></img></div>
<p className="text-xs text-white/80">Marc et Julien sont dispo</p>
</div>
<button className="w-full py-3 bg-[#C5A065] hover:bg-[#b08d55] text-[#003C2E] font-medium text-xs rounded-xl transition-colors shadow-lg shadow-[#C5A065]/10 flex justify-center items-center gap-2">
<span>Réserver ce départ</span>
</button>
</div>
</div>

<div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E0D6]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<img alt="Julie" className="w-10 h-10 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=3"/>
<div>
<h3 className="text-sm font-semibold text-[#003C2E]">Julie</h3>
<p className="text-[10px] text-gray-500">Il y a 3h • Practice</p>
</div>
</div>
<div className="flex items-center gap-1 bg-[#FDFCF8] border border-[#C5A065]/20 px-2 py-1 rounded-full">
<i className="w-3 h-3 text-[#C5A065]" data-lucide="award"></i>
<span className="text-[9px] font-bold text-[#C5A065] uppercase tracking-wide">Coach Approuve</span>
</div>
</div>
<p className="text-xs text-gray-700 mb-3 italic">
                        "J’ai enfin arrêté de faire des fusées au 52° 😂"
                    </p>
<div className="bg-[#F6F3EE] rounded-xl p-3 mb-3 border border-[#E5E0D6]">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-bold uppercase text-gray-500">Objectif Précision</span>
<span className="text-[10px] font-mono text-[#003C2E]">100–120m</span>
</div>
<div className="flex gap-1 h-12 items-end">
<div className="flex-1 bg-green-200 rounded-t h-[60%]"></div>
<div className="flex-1 bg-green-300 rounded-t h-[80%]"></div>
<div className="flex-1 bg-green-500 rounded-t h-[90%]"></div>
<div className="flex-1 bg-green-600 rounded-t h-[75%]"></div>
<div className="flex-1 bg-green-700 rounded-t h-[95%]"></div>
</div>
<p className="text-[10px] text-center mt-2 text-gray-500">Dispersion réduite de 15%</p>
</div>
<div className="flex items-center gap-4 text-gray-400">
<button className="flex items-center gap-1 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="heart"></i> <span className="text-xs">12</span>
</button>
<button className="flex items-center gap-1 hover:text-[#003C2E] transition-colors">
<i className="w-4 h-4" data-lucide="message-circle"></i> <span className="text-xs">3</span>
</button>
</div>
<button className="w-full mt-4 py-2 border border-[#E5E0D6] rounded-xl text-xs font-medium text-[#003C2E] hover:bg-gray-50 transition-colors">
                        Essayer cet entraînement
                    </button>
</div>

<div className="bg-gradient-to-br from-white to-[#FDFCF8] rounded-[24px] p-5 shadow-sm border border-[#E5E0D6]">
<div className="flex items-center gap-3 mb-3">
<img alt="Antoine" className="w-10 h-10 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=4"/>
<div className="flex-1">
<p className="text-xs text-gray-600"><span className="font-semibold text-[#003C2E]">Antoine</span> participe à</p>
<h3 className="text-sm font-semibold text-[#003C2E] flex items-center gap-1.5">
                                Médaille Mensuelle <i className="w-3.5 h-3.5 text-red-500 fill-current" data-lucide="flag"></i>
</h3>
</div>
</div>
<div className="bg-white border border-[#E5E0D6] rounded-xl p-3 flex gap-4 items-center shadow-sm">
<div className="flex flex-col items-center justify-center bg-gray-50 w-10 h-10 rounded-lg border border-gray-100 shrink-0">
<span className="text-[9px] font-bold text-gray-400 uppercase">Dim</span>
<span className="text-xs font-bold text-[#003C2E]">08</span>
</div>
<div className="flex-1">
<p className="text-xs text-[#003C2E] font-medium">Saint Donat</p>
<p className="text-[10px] text-gray-500">08:30 • Stroke Play</p>
</div>
<span className="text-[9px] font-bold text-[#C5A065] bg-[#C5A065]/10 px-2 py-1 rounded-full">
                            7 places
                        </span>
</div>
<button className="w-full mt-3 text-xs font-semibold text-[#C5A065] hover:text-[#a08150] transition-colors text-right">
                        Voir l'événement →
                    </button>
</div>

<div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E0D6]">
<div className="flex items-center gap-3 mb-2">
<div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
<img alt="Thomas" className="w-full h-full rounded-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<p className="text-xs text-gray-600"><span className="font-semibold text-[#003C2E]">Thomas</span> a ajouté du matériel</p>
<p className="text-[10px] text-gray-400">Hier</p>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center p-2">
<svg className="w-full h-full text-gray-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M4 20 L20 4 L22 6 L6 22 Z"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-bold text-[#003C2E]">TaylorMade MG3 56°</h4>
<span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-full">
                                    Gap +7m
                                </span>
</div>
<p className="text-[10px] text-gray-500 mt-1">Bounce: 12° • Finition: Chrome</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] shadow-sm border border-[#E5E0D6] overflow-hidden group transition-all duration-300">
<input className="peer hidden" id="score-details" type="checkbox"/>

<div className="p-5 pb-2">
<div className="flex justify-between items-center mb-3">
<p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ton dernier score</p>
<span className="text-xs text-gray-500">Hier • 13h40</span>
</div>
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-base font-semibold text-[#003C2E]">Saint Endréol</h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<p className="text-xs text-gray-500">Départs Jaunes</p>
</div>
</div>
<div className="text-right">
<span className="text-3xl font-bold tracking-tighter text-[#003C2E]">83</span>
<span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded ml-1 align-top">+11</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
<div>
<p className="text-[9px] text-gray-400 uppercase font-bold">GIR</p>
<p className="text-sm font-semibold text-[#003C2E]">44%</p>
</div>
<div className="border-l border-gray-200">
<p className="text-[9px] text-gray-400 uppercase font-bold">FIR</p>
<p className="text-sm font-semibold text-[#003C2E]">64%</p>
</div>
<div className="border-l border-gray-200">
<p className="text-[9px] text-gray-400 uppercase font-bold">Putts</p>
<p className="text-sm font-semibold text-[#003C2E]">31</p>
</div>
</div>
</div>

<label className="w-full flex justify-center items-center py-3 border-t border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors text-xs font-semibold text-[#003C2E]" htmlFor="score-details">
<span className="peer-checked:hidden">Analyse complète</span>
<span className="hidden peer-checked:inline">Masquer l'analyse</span>
<i className="w-4 h-4 ml-1 transition-transform duration-300 peer-checked:rotate-180" data-lucide="chevron-down"></i>
</label>

<div className="hidden peer-checked:block bg-gray-50/60 border-t border-gray-100">

<div className="px-5 pt-5">
<h4 className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="table-2"></i> Carte de Score
                        </h4>

<div className="overflow-x-auto no-scrollbar -mx-5 px-5 pb-2">
<div className="min-w-max">
<div className="grid grid-rows-3 grid-flow-col gap-x-1 gap-y-1">

<div className="w-8 h-6 flex items-center justify-center text-[9px] text-gray-400 uppercase font-bold bg-white rounded border border-gray-100">#</div>
<div className="w-8 h-6 flex items-center justify-center text-[9px] text-gray-400 bg-white rounded border border-gray-100">Par</div>
<div className="w-8 h-6 flex items-center justify-center text-[9px] text-gray-800 font-bold bg-white rounded border border-gray-100">Sc</div>

<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">1</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-[#003C2E] bg-white rounded border border-gray-200">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">2</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">3</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-red-600 bg-red-50 rounded border border-red-100">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">3</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-[#003C2E] bg-white rounded border border-gray-200">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-blue-600 bg-blue-50 rounded border border-blue-100">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-[#003C2E] bg-white rounded border border-gray-200">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">6</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-[#003C2E] bg-white rounded border border-gray-200">4</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">7</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">3</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-white bg-[#003C2E] rounded">2</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-600">8</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] text-gray-400">5</div>
<div className="w-8 h-6 flex items-center justify-center text-[10px] font-bold text-[#003C2E] bg-white rounded border border-gray-200">6</div>
</div>
</div>
</div>
</div>

<div className="px-5 py-2">
<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-[#C5A065]" data-lucide="crosshair"></i>
<p className="text-[9px] font-bold text-gray-400 uppercase">Approches</p>
</div>
<p className="text-xs text-gray-800"><span className="font-bold text-lg">2.4m</span> <span className="text-[9px] text-gray-400">moyenne</span></p>
</div>
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-[#003C2E]" data-lucide="arrow-up-right"></i>
<p className="text-[9px] font-bold text-gray-400 uppercase">Driving</p>
</div>
<p className="text-xs text-gray-800"><span className="font-bold text-lg">228m</span> <span className="text-[9px] text-gray-400">moyenne</span></p>
</div>
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-blue-400" data-lucide="waves"></i>
<p className="text-[9px] font-bold text-gray-400 uppercase">Bunkers</p>
</div>
<p className="text-xs text-gray-800"><span className="font-bold text-lg">2/3</span> <span className="text-[9px] text-gray-400">sauvetages</span></p>
</div>
<div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-red-400" data-lucide="alert-circle"></i>
<p className="text-[9px] font-bold text-gray-400 uppercase">Pénalités</p>
</div>
<p className="text-xs text-gray-800"><span className="font-bold text-lg">1</span> <span className="text-[9px] text-gray-400">coup</span></p>
</div>
</div>
</div>

<div className="p-5 pb-6">
<div className="bg-[#003C2E] rounded-xl p-4 relative overflow-hidden shadow-lg">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A065] opacity-20 blur-[40px] rounded-full translate-x-10 -translate-y-10"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<i className="w-4 h-4 text-[#C5A065]" data-lucide="bot"></i>
<h3 className="text-xs font-bold text-white uppercase tracking-wider">Coach Intelligence</h3>
</div>
<p className="text-xs text-gray-200 leading-relaxed relative z-10">
<span className="text-[#C5A065] font-semibold">Analyse :</span> Tu as perdu 3 coups sur les pars 3 aujourd'hui, principalement à cause de fers longs manqués à droite. Ton putting courte distance (&lt; 2m) a sauvé ta carte.
                            </p>
<div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center relative z-10">
<span className="text-[10px] text-white/50">Basé sur 18 trous</span>
<button className="text-[10px] font-semibold text-[#C5A065] hover:text-white transition-colors">
                                    Voir le détail SG →
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-[#E5E0D6] group">
<input className="peer hidden" id="progression-toggle" type="checkbox"/>
<label className="block p-5 cursor-pointer select-none" htmlFor="progression-toggle">
<div className="flex justify-between items-center">
<div>
<p className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">Progression Mensuelle</p>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-[#003C2E]">Index 11.4</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1 rounded"><i className="w-3 h-3 mr-0.5" data-lucide="trending-down"></i>0.8</span>
</div>
</div>
<i className="w-4 h-4 text-gray-400 transform transition-transform peer-checked:rotate-180" data-lucide="chevron-down"></i>
</div>
</label>

<div className="hidden peer-checked:block px-5 pb-5 pt-0 bg-gray-50/50 border-t border-gray-50">
<div className="mt-4 h-20 w-full flex items-end gap-1 mb-4">
<div className="flex-1 bg-[#003C2E]/10 rounded-t h-[40%]"></div>
<div className="flex-1 bg-[#003C2E]/20 rounded-t h-[60%]"></div>
<div className="flex-1 bg-[#003C2E]/15 rounded-t h-[50%]"></div>
<div className="flex-1 bg-[#003C2E]/30 rounded-t h-[75%]"></div>
<div className="flex-1 bg-[#C5A065] rounded-t h-[85%] relative"></div>
</div>
<div className="flex gap-3 items-start p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
<i className="w-4 h-4 text-[#003C2E] shrink-0 mt-0.5" data-lucide="bot"></i>
<p className="text-xs text-gray-600 leading-snug">
<span className="font-semibold text-[#003C2E]">Analyse IA :</span> Ta zone forte ce mois-ci est clairement les fers moyens (F7/F8).
                        </p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-[#FDFCF8] to-[#F4EFDF] rounded-[24px] p-5 shadow-sm border border-[#C5A065]/20 flex items-center justify-between">
<div className="space-y-1">
<h3 className="text-sm font-semibold text-[#8A6D3B] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="scan-face"></i> Digital Twin
                    </h3>
<div className="text-[10px] space-y-0.5">
<p className="text-green-700">✓ Point fort: Long jeu</p>
<p className="text-red-500">⚠ Point faible: &lt; 100m</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative w-12 h-12">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<polygon fill="rgba(197, 160, 101, 0.1)" points="50,10 90,50 50,90 10,50" stroke="#C5A065" strokeWidth="1.5"></polygon>
<polygon fill="rgba(197, 160, 101, 0.4)" points="50,20 80,50 50,80 20,50" stroke="#C5A065" strokeWidth="1"></polygon>
</svg>
</div>
<button className="bg-white border border-[#C5A065]/30 text-[#8A6D3B] p-2 rounded-full hover:bg-[#FDFBF7]">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="space-y-3 pt-2">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Agenda du réseau</h3>
<div className="bg-white p-4 rounded-2xl border border-[#E5E0D6] shadow-sm flex items-start gap-3">
<div className="bg-gray-100 rounded-lg p-2 shrink-0">
<i className="w-4 h-4 text-[#C5A065]" data-lucide="trophy"></i>
</div>
<div>
<p className="text-xs text-gray-800 font-medium mb-0.5">Médaille Mensuelle</p>
<p className="text-[10px] text-gray-500">Dimanche • Marc et Julie participent</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-[#E5E0D6] shadow-sm flex items-start gap-3">
<div className="bg-gray-100 rounded-lg p-2 shrink-0">
<i className="w-4 h-4 text-[#003C2E]" data-lucide="crosshair"></i>
</div>
<div>
<p className="text-xs text-gray-800 font-medium mb-0.5">Fitting Titleist</p>
<p className="text-[10px] text-gray-500">Vendredi • Lucas a rejoint</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-[#E5E0D6] shadow-sm flex items-start gap-3">
<div className="bg-gray-100 rounded-lg p-2 shrink-0">
<i className="w-4 h-4 text-gray-600" data-lucide="calendar-days"></i>
</div>
<div>
<p className="text-xs text-gray-800 font-medium mb-0.5">Partie à Saint Donat</p>
<p className="text-[10px] text-gray-500">Mercredi • Org. par Antoine</p>
</div>
</div>
<button className="w-full text-xs font-medium text-[#003C2E] py-2 text-center hover:bg-gray-50 rounded-xl">
                    Voir l’agenda de ton réseau
                </button>
</div>

<div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E0D6]">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold tracking-tight text-[#003C2E]">Autour de toi</h3>
<div className="flex items-center gap-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-bold text-green-700">4 actifs</span>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100" src="https://i.pravatar.cc/150?u=1" />
<img alt="" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100" src="https://i.pravatar.cc/150?u=2" />
<img alt="" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100" src="https://i.pravatar.cc/150?u=3" />
<div className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100 bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500">+1</div>
</img></img></img></div>
<div className="text-right">
<p className="text-[10px] text-gray-400">Dernier score</p>
<p className="text-xs font-medium text-[#003C2E]">Julien (82)</p>
</div>
</div>
<button className="w-full py-2.5 bg-[#003C2E] text-white text-xs font-medium rounded-xl shadow-lg shadow-[#003C2E]/20 hover:bg-[#002a20] transition-colors">
                    Proposer une partie
                </button>
</div>

<div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E0D6] flex items-center gap-4">
<div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
<i className="w-5 h-5 text-gray-600" data-lucide="briefcase"></i>
</div>
<div className="flex-1">
<p className="text-[10px] font-bold text-gray-400 uppercase">Sac</p>
<p className="text-sm font-semibold text-[#003C2E]">14 clubs • 153m (F7)</p>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right"></i>
</div>

<div className="bg-[#003C2E] rounded-[24px] p-5 text-white shadow-lg mb-8">
<div className="flex justify-between items-start mb-3">
<div>
<div className="flex items-center gap-2 mb-1">
<i className="text-[#C5A065] w-4 h-4 fill-current" data-lucide="zap"></i>
<h3 className="text-xs font-bold uppercase tracking-wide text-[#C5A065]">Entraînement IA</h3>
</div>
<p className="text-lg font-medium">Session Précision</p>
</div>
<span className="text-xs font-bold bg-white/10 px-2 py-1 rounded">20 min</span>
</div>
<p className="text-xs text-white/70 mb-4 leading-relaxed">
                    Optimise tes approches (100-120m) pour ta partie de demain.
                </p>
<button className="w-full py-2.5 bg-white text-[#003C2E] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors">
                    Lancer (20 min)
                </button>
</div>
</main>

<nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] max-w-[380px] bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full p-2 z-50 flex justify-between items-center px-6">
<button className="p-2 text-[#003C2E]">
<i className="w-6 h-6 stroke-[2]" data-lucide="home"></i>
</button>
<button className="p-2 text-gray-400 hover:text-[#003C2E] transition-colors">
<i className="w-6 h-6" data-lucide="calendar"></i>
</button>
<button className="bg-[#003C2E] rounded-full p-3 text-[#C5A065] shadow-lg shadow-[#003C2E]/30 -translate-y-4 hover:scale-105 transition-transform border-4 border-[#F6F3EE]">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
<button className="p-2 text-gray-400 hover:text-[#003C2E] transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</button>
<button className="p-2 text-gray-400 hover:text-[#003C2E] transition-colors">
<i className="w-6 h-6" data-lucide="user"></i>
</button>
</nav>
</div>


    </>
  );
}
