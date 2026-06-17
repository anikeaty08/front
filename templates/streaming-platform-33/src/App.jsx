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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="flex h-10 max-w-7xl mx-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-black">
<iconify-icon icon="solar:soundwave-square-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-widest text-white uppercase group-hover:opacity-80 transition-opacity">Échos Numériques</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="text-white" href="#">Accueil</a>
<a className="hover:text-white transition-colors" href="#">Épisodes</a>
<a className="hover:text-white transition-colors" href="#">Invités</a>
<a className="hover:text-white transition-colors" href="#">Playlists</a>
</div>

<div className="flex items-center gap-6">

<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>

<div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 live-dot"></div>
<span className="text-xs font-semibold text-red-400 tracking-wide uppercase">En Direct</span>
</div>

<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden cursor-pointer">
<img alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] flex items-end justify-start overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-50 scale-105" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24">
<div className="max-w-3xl space-y-6">
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-white/10 border border-white/10 rounded text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">Nouveau</span>
<span className="text-xs font-medium text-neutral-400 tracking-wide">Saison 4 • Épisode 12</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">
                    L'avenir de l'IA <br/> <span className="text-neutral-400">Générative</span>
</h1>
<p className="leading-relaxed text-lg font-light text-neutral-300 max-w-xl">
                    Une plongée profonde dans les modèles de langage avec notre invitée spéciale, Marie Tech, ingénieure en chef chez OpenAI. Débats, démos et prophéties.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="group flex gap-3 hover:bg-neutral-200 transition-all active:scale-95 font-medium text-black tracking-tight bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative gap-x-3 gap-y-3 items-center">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
<span className="">Regarder l'épisode</span>
</button>
<button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-full font-medium tracking-tight hover:bg-white/10 transition-all backdrop-blur-sm">
<iconify-icon icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
<span className="">Audio seulement</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all">
<iconify-icon className="" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="relative z-20 -mt-10 space-y-16 max-w-7xl mx-auto px-6">

<section className="">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-white tracking-tight">Derniers Replays</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white/50 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white/50 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">

<div className="group relative flex-none w-[300px] md:w-[400px] snap-start cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
<img alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-0" src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<video className="card-video absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10">45:20</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-4 space-y-1">
<h3 className="text-base font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-1">Web3 : Révolution ou illusion ?</h3>
<p className="text-xs text-neutral-500 font-light line-clamp-1">Invité : Thomas Chen, Crypto Analyst</p>
</div>
</div>

<div className="group relative flex-none w-[300px] md:w-[400px] snap-start cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
<img alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-0" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<video className="card-video absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-while-traveling-42502-large.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10">1:12:05</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-4 space-y-1">
<h3 className="text-base font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-1">Design Systems à grande échelle</h3>
<p className="text-xs text-neutral-500 font-light line-clamp-1">Invité : Sarah Miller, Design Lead</p>
</div>
</div>

<div className="group relative flex-none w-[300px] md:w-[400px] snap-start cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
<img alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<video className="card-video absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-graphic-designer-working-on-a-brand-identity-42503-large.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10">58:30</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="mt-4 space-y-1">
<h3 className="text-base font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-1">Le futur du Streaming</h3>
<p className="text-xs text-neutral-500 font-light line-clamp-1">Invité : Alex Tech</p>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-xl font-medium text-white tracking-tight mb-6">Shorts &amp; Moments clés</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/5 cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur mb-3 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-white leading-tight">"Le code est de la poésie"</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/5 cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur mb-3 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-white leading-tight">Le bug de l'an 2038</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/5 cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur mb-3 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-white leading-tight">L'IA va-t-elle nous remplacer ?</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/5 cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur mb-3 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-white leading-tight">Backstage : Setup Tour</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12">
<div className="flex flex-col md:flex-row gap-12">

<div className="flex-1 space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-semibold text-white tracking-tight">À propos de l'épisode</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                             Dans cet épisode exceptionnel, nous décortiquons les nouvelles API de réalité mixte. Comment le spatial computing va transformer nos interfaces ?
                         </p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-lg shadow-red-900/20">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Regarder sur YouTube</p>
<p className="text-xs text-neutral-500">Chaîne Officielle • 4K</p>
</div>
<iconify-icon className="text-neutral-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-white shadow-lg shadow-green-900/20">
<iconify-icon icon="solar:music-note-slider-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Écouter sur Spotify</p>
<p className="text-xs text-neutral-500">Audio Haute Qualité</p>
</div>
<iconify-icon className="text-neutral-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 bg-neutral-900/30 rounded-xl p-6 border border-white/5">
<h3 className="text-sm font-medium text-white uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:document-text-linear"></iconify-icon>
                        Notes de l'émission
                    </h3>
<ul className="space-y-4">
<li className="flex gap-4 items-start text-sm group cursor-pointer">
<span className="font-mono text-blue-400 text-xs mt-0.5">02:15</span>
<span className="text-neutral-400 group-hover:text-white transition-colors">Introduction et présentation des news de la semaine.</span>
</li>
<li className="flex gap-4 items-start text-sm group cursor-pointer">
<span className="font-mono text-blue-400 text-xs mt-0.5">14:30</span>
<span className="text-neutral-400 group-hover:text-white transition-colors">Démo technique du Vision Pro.</span>
</li>
<li className="flex gap-4 items-start text-sm group cursor-pointer">
<span className="font-mono text-blue-400 text-xs mt-0.5">35:45</span>
<span className="text-neutral-400 group-hover:text-white transition-colors">L'impact sur les designers UI/UX.</span>
</li>
<li className="flex gap-4 items-start text-sm group cursor-pointer">
<span className="font-mono text-blue-400 text-xs mt-0.5">58:00</span>
<span className="text-neutral-400 group-hover:text-white transition-colors">Questions / Réponses avec le chat.</span>
</li>
</ul>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 w-80 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] z-50 group transition-all hover:scale-105">

<div className="absolute inset-0 pointer-events-none rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]"></div>
<div className="relative aspect-video bg-black">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute inset-0 flex items-center justify-center">

<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-white hover:text-blue-400"><iconify-icon icon="solar:rewind-10-seconds-back-linear" width="24"></iconify-icon></button>
<button className="text-white hover:text-blue-400"><iconify-icon icon="solar:pause-linear" width="32"></iconify-icon></button>
<button className="text-white hover:text-blue-400"><iconify-icon icon="solar:rewind-10-seconds-forward-linear" width="24"></iconify-icon></button>
</div>
</div>

<button className="absolute top-2 right-2 text-white/50 hover:text-white bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="h-1 w-full bg-neutral-800">
<div className="h-full w-1/3 bg-blue-500"></div>
</div>
<div className="p-3 bg-neutral-900/90 backdrop-blur-md flex items-center justify-between">
<div className="overflow-hidden">
<p className="text-xs font-medium text-white truncate">Web3 : Révolution ou illusion ?</p>
<p className="text-[10px] text-neutral-500 truncate">Lecture en cours • 12:45 / 45:20</p>
</div>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>

    </>
  );
}
