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
      

<header className="flex-none h-16 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-950/80 backdrop-blur-md z-20">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
                ESPT
            </a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-white transition-colors" href="#">Direct</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Tournois</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Suivis</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-neutral-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-white/10 cursor-pointer"></div>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

<main className="flex-1 overflow-y-auto flex flex-col relative z-10">
<div className="p-4 lg:p-6 lg:max-w-6xl mx-auto w-full space-y-6">

<div className="aspect-video bg-black rounded-2xl relative overflow-hidden ring-1 ring-white/10 shadow-2xl group flex flex-col justify-between">

<img alt="Stream background" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent z-10">
<div className="flex gap-3">
<span className="px-2.5 py-1 rounded-md bg-red-500 text-white text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Live
                            </span>
<span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5 ring-1 ring-white/10">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                                124 592
                            </span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
<iconify-icon className="text-white text-2xl" icon="solar:pause-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10">

<div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer relative">
<div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full w-full"></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transform translate-x-1/2"></div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-4">
<button className="hover:text-indigo-400 transition-colors"><iconify-icon className="text-xl" icon="solar:pause-linear"></iconify-icon></button>
<div className="flex items-center gap-2 group/volume">
<button className="hover:text-indigo-400 transition-colors"><iconify-icon className="text-xl" icon="solar:volume-loud-linear"></iconify-icon></button>
<div className="w-16 h-1 bg-white/20 rounded-full hidden group-hover/volume:block cursor-pointer">
<div className="w-2/3 h-full bg-white rounded-full"></div>
</div>
</div>
<span className="text-xs font-medium tabular-nums">En direct</span>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-indigo-400 transition-colors"><iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon></button>
<button className="hover:text-indigo-400 transition-colors"><iconify-icon className="text-xl" icon="solar:minimize-square-3-linear"></iconify-icon></button>
<button className="hover:text-indigo-400 transition-colors"><iconify-icon className="text-xl" icon="solar:full-screen-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col xl:flex-row gap-6">

<div className="flex-1 space-y-4">
<div className="flex items-start gap-4">
<img alt="Channel Avatar" className="w-12 h-12 rounded-full ring-2 ring-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1">
<h1 className="text-2xl font-medium text-white tracking-tight mb-1">Grande Finale - Championnat du Monde 2024</h1>
<div className="flex items-center gap-2 text-sm">
<a className="font-medium text-indigo-400 hover:underline" href="#">LeagueEsports</a>
<span className="text-neutral-600">•</span>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">League of Legends</a>
</div>
</div>
<button className="px-4 py-2 rounded-lg bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors">
                                S'abonner
                            </button>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-900 ring-1 ring-white/5 text-xs text-neutral-400">Esport</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 ring-1 ring-white/5 text-xs text-neutral-400">Tournoi</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-900 ring-1 ring-white/5 text-xs text-neutral-400">Français</span>
</div>
</div>

<div className="w-full xl:w-80 shrink-0 bg-neutral-900/40 rounded-2xl p-5 ring-1 ring-white/5 h-fit flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-sm font-medium">Sondage en direct</h3>
</div>
<span className="text-xs text-neutral-500">24s restantes</span>
</div>
<p className="text-base text-white font-medium leading-snug">Qui remportera la prochaine carte ?</p>
<div className="space-y-2">

<button className="w-full relative h-10 rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-white/5 flex items-center px-4 group hover:ring-white/20 transition-all text-left">

<div className="absolute inset-y-0 left-0 bg-indigo-500/20 w-[68%] transition-all z-0"></div>

<div className="relative z-10 flex justify-between w-full items-center">
<span className="text-sm font-medium text-white">Équipe Alpha</span>
<span className="text-xs text-neutral-400 font-medium">68%</span>
</div>
</button>

<button className="w-full relative h-10 rounded-lg overflow-hidden bg-neutral-950 ring-1 ring-white/5 flex items-center px-4 group hover:ring-white/20 transition-all text-left">
<div className="absolute inset-y-0 left-0 bg-white/5 w-[32%] transition-all z-0"></div>
<div className="relative z-10 flex justify-between w-full items-center">
<span className="text-sm font-medium text-neutral-300">Équipe Omega</span>
<span className="text-xs text-neutral-400 font-medium">32%</span>
</div>
</button>
</div>
<div className="text-xs text-center text-neutral-500 mt-2">12 402 votes totaux</div>
</div>
</div>
</div>
</main>

<aside className="w-full lg:w-[340px] shrink-0 border-t lg:border-t-0 lg:border-l border-white/5 bg-neutral-950/50 backdrop-blur-sm flex flex-col h-[50vh] lg:h-full z-20">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:chat-round-line-linear"></iconify-icon>
<h2 className="text-sm font-medium text-white">Chat en direct</h2>
</div>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">

<div className="text-xs text-center text-neutral-500 pb-2 border-b border-white/5 mb-2">
                    Bienvenue dans le chat ! Soyez respectueux envers les autres joueurs.
                </div>

<div className="text-sm leading-relaxed">
<span className="text-emerald-400 font-medium">GamerPro99</span>
<span className="text-neutral-400 ml-1">Quel move incroyable !!</span>
</div>
<div className="text-sm leading-relaxed">
<span className="text-amber-400 font-medium">NoobMaster</span>
<span className="text-neutral-400 ml-1">Il n'avait aucune chance là-dessus.</span>
</div>
<div className="text-sm leading-relaxed">
<span className="text-indigo-400 font-medium">EsportFan</span>
<span className="text-neutral-400 ml-1">Si Alpha gagne ça, le tournoi est plié.</span>
</div>
<div className="text-sm leading-relaxed bg-white/5 -mx-4 px-4 py-1 border-l-2 border-indigo-500">
<span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-medium mr-1 uppercase tracking-wider">Mod</span>
<span className="text-rose-400 font-medium">AutoBot</span>
<span className="text-neutral-300 ml-1 font-medium">N'oubliez pas de voter pour le MVP à la fin du match !</span>
</div>
<div className="text-sm leading-relaxed">
<span className="text-cyan-400 font-medium">Keziah</span>
<span className="text-neutral-400 ml-1">GG WP la remontada</span>
</div>
<div className="text-sm leading-relaxed">
<span className="text-fuchsia-400 font-medium">SlayerX</span>
<span className="text-neutral-400 ml-1">Hype !!! 🔥🔥</span>
</div>

<div className="flex-1"></div>
</div>

<div className="p-4 bg-neutral-950 border-t border-white/5 shrink-0 space-y-3">

<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-1.5 text-neutral-400 hover:text-white cursor-pointer transition-colors">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
<span>Paramètres</span>
</div>
<div className="flex items-center gap-1.5 text-indigo-400 font-medium cursor-pointer">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>450 Pts</span>
</div>
</div>

<div className="bg-neutral-900 rounded-xl flex items-end ring-1 ring-white/5 focus-within:ring-indigo-500/50 focus-within:bg-neutral-900/80 transition-all p-2 gap-2">
<textarea className="w-full bg-transparent border-none outline-none text-sm text-white resize-none max-h-24 px-2 py-1 placeholder:text-neutral-600 min-h-[32px]" placeholder="Envoyer un message..." rows="1"></textarea>
<div className="flex items-center gap-1 shrink-0 pb-1">
<button className="p-1.5 text-neutral-500 hover:text-white rounded-md hover:bg-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:emoji-keyboard-linear"></iconify-icon>
</button>
<button className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-500/20">
                            Chat
                        </button>
</div>
</div>
</div>
</aside>
</div>

    </>
  );
}
