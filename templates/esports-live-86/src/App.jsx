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
      

<nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800/50">
<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<span className="text-[#0a0a0a] text-xs font-semibold">E</span>
</div>
                    ESPLANADE
                </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-white" href="#">Direct</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Calendrier</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Équipes</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Classement</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-xs font-medium text-red-500">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    14,592 spectateurs
                </div>
<button className="text-neutral-400 hover:text-white transition-colors p-2">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:border-neutral-500 transition-colors">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-[calc(100vh-4rem)]">

<div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6 overflow-y-auto scrollbar-hide pb-20 lg:pb-0">

<div className="relative w-full aspect-video bg-black rounded-xl border border-neutral-800/50 overflow-hidden shadow-2xl group cursor-pointer flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-linear" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-4 text-white">
<iconify-icon icon="solar:pause-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:volume-loud-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">01:24:10 / Live</span>
</div>
<div className="flex items-center gap-4 text-white">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:full-screen-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-neutral-700/50 rounded text-xs font-semibold text-white tracking-wide">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                    EN DIRECT
                </div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800/50">
<div className="flex-1">
<div className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-widest">Finale Mondiale - Manche 3</div>
<h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Cyber Ninjas vs. Titan Squad</h1>
</div>

<div className="flex items-center gap-6 bg-[#0a0a0a] px-6 py-3 rounded-lg border border-neutral-800/80 shrink-0">
<div className="flex flex-col items-center">
<span className="text-neutral-500 text-xs font-medium mb-1">CYN</span>
<span className="text-3xl font-semibold text-white tracking-tighter">2</span>
</div>
<div className="text-neutral-600 text-sm font-medium">VS</div>
<div className="flex flex-col items-center">
<span className="text-neutral-500 text-xs font-medium mb-1">TTS</span>
<span className="text-3xl font-semibold text-white tracking-tighter">1</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800/50 bg-[#0a0a0a]">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chart-square-linear"></iconify-icon>
                        Pronostic du public
                    </h2>
<span className="text-xs text-neutral-500">8,432 votes</span>
</div>
<div className="space-y-4">

<div className="relative w-full h-10 rounded-md bg-neutral-900 border border-neutral-800 overflow-hidden group cursor-pointer">
<div className="absolute top-0 left-0 h-full bg-blue-600/20 w-[68%] transition-all duration-500 ease-out"></div>
<div className="absolute top-0 left-0 h-full border-r border-blue-500 w-[68%]"></div>
<div className="relative h-full flex items-center justify-between px-4 z-10">
<span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Cyber Ninjas</span>
<span className="text-sm font-semibold text-white">68%</span>
</div>
</div>

<div className="relative w-full h-10 rounded-md bg-neutral-900 border border-neutral-800 overflow-hidden group cursor-pointer">
<div className="absolute top-0 left-0 h-full bg-red-600/20 w-[32%] transition-all duration-500 ease-out"></div>
<div className="absolute top-0 left-0 h-full border-r border-red-500 w-[32%]"></div>
<div className="relative h-full flex items-center justify-between px-4 z-10">
<span className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Titan Squad</span>
<span className="text-sm font-semibold text-white">32%</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 xl:col-span-3 h-[500px] lg:h-full flex flex-col rounded-xl border border-neutral-800/50 bg-[#0a0a0a] overflow-hidden">

<div className="px-4 py-3 border-b border-neutral-800/50 flex items-center justify-between bg-neutral-900/30">
<h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                    Chat en direct
                </h3>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide text-sm">

<div className="text-center mb-6">
<span className="text-xs text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Bienvenue dans le chat d'Esplanade</span>
</div>

<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 text-xs font-medium">A</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-purple-400">AlexGamer99</span>
<span className="text-xs text-neutral-600">14:02</span>
</div>
<p className="text-neutral-300 mt-0.5">Ce push mid était incroyable ! 🤯</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-xs font-medium">S</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-blue-400">Sarah_Wins</span>
<span className="text-xs text-neutral-600">14:02</span>
</div>
<p className="text-neutral-300 mt-0.5">Titan Squad doit se réveiller là, ils perdent trop de terrain.</p>
</div>
</div>

<div className="flex gap-3 items-start bg-blue-500/5 p-2 -mx-2 rounded border-l-2 border-blue-500">
<div className="w-6 h-6 rounded bg-yellow-500/20 text-yellow-500 flex items-center justify-center shrink-0 text-xs font-medium">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-yellow-500">Modérateur_Tom</span>
<span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/10 text-yellow-500 rounded font-medium">MOD</span>
<span className="text-xs text-neutral-600">14:03</span>
</div>
<p className="text-neutral-200 mt-0.5">Rappel : restez respectueux dans le chat s'il vous plaît !</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-medium">K</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-emerald-400">KylianFR</span>
<span className="text-xs text-neutral-600">14:03</span>
</div>
<p className="text-neutral-300 mt-0.5">GG WP CYN 🏆</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-6 h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 text-xs font-medium">Z</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-medium text-orange-400">ZetaPlayer</span>
<span className="text-xs text-neutral-600">14:04</span>
</div>
<p className="text-neutral-300 mt-0.5">J'y crois encore pour TTS, le comeback est possible</p>
</div>
</div>

</div>

<div className="p-3 border-t border-neutral-800/50 bg-neutral-900/30">
<div className="relative flex items-center">
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg py-2.5 pl-4 pr-10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" placeholder="Envoyer un message..." type="text"/>
<button className="absolute right-2 p-1.5 text-neutral-500 hover:text-white transition-colors flex items-center justify-center rounded-md hover:bg-neutral-800">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center mt-2 px-1 text-xs text-neutral-600">
<div className="flex gap-2">
<button className="hover:text-neutral-400"><iconify-icon icon="solar:smile-circle-linear" width="16"></iconify-icon></button>
<button className="hover:text-neutral-400"><iconify-icon icon="solar:settings-linear" width="16"></iconify-icon></button>
</div>
<span>Mode lent: 3s</span>
</div>
</div>
</div>
</main>

    </>
  );
}
