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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
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
      

<header className="sticky top-0 z-50 bg-[#070b14]/80 backdrop-blur-md border-b border-white/5">
<nav className="max-w-[90rem] mx-auto px-6 py-5 flex items-center justify-between">

<div className="flex items-center gap-4 cursor-pointer">
<div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-amber-500/60 flex items-center justify-center relative overflow-hidden shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
<img alt="Logo Le Cercle des Consciences" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute inset-0 bg-amber-500/10 mix-blend-color"></div>
</div>
<div>
<h1 className="text-base md:text-lg font-semibold tracking-tight text-white uppercase leading-tight">
              Le Cercle Des
              <br/>
              Consciences
            </h1>
<p className="text-xs text-amber-500 mt-0.5">
              Comprendre - Réfléchir - Évoluer
            </p>
</div>
</div>

<div className="hidden xl:flex items-center gap-8 text-base">
<a className="text-white border-b-2 border-amber-500 pb-1" href="#">
            Accueil
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Qui sommes-nous ?
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#questions">
            Questions existentielles
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Les livres
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Le Cercle
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Médiathèque
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Rejoindre
          </a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
            Contact
          </a>
</div>

<button className="xl:hidden text-slate-300 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>
</header>
<main>

<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden border-b border-white/5">

<div className="absolute inset-0 z-0">
<img alt="Cosmic Background" className="w-full h-full object-cover opacity-30 mix-blend-screen" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&amp;fit=crop&amp;q=80&amp;w=2048"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>
</div>
<div className="max-w-[90rem] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="hidden lg:flex items-center justify-center relative">
<div className="relative w-full max-w-md xl:max-w-lg aspect-square">
<div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full z-0"></div>
<div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-amber-500/10">
<img alt="Cosmic Meditation and Sacred Geometry" className="w-full h-full object-cover opacity-80 mix-blend-screen" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bf200d5-c281-41c7-a7fc-69ce8a472f6b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#070b14]/80 via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-amber-500/10 mix-blend-color"></div>
</div>
</div>
</div>

<div className="flex flex-col">
<h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
              Et si le véritable problème du monde n'était pas
              <span className="text-amber-500">extérieur...</span>
              mais
              <span className="text-amber-500">intérieur ?</span>
</h2>
<p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed">
              Nous avons appris à faire évoluer la technologie, les systèmes et
              les sociétés.
              <br/>
<span className="text-amber-500 mt-2 block">
                Mais avons-nous appris à faire évoluer notre conscience ?
              </span>
</p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="bg-[#1a4589] hover:bg-[#153870] text-white px-8 py-4 rounded flex items-center justify-center gap-3 transition-colors text-base font-medium">
<i className="w-5 h-5" data-lucide="compass" strokeWidth="1.5"></i>
                Découvrir le Cercle
                <i className="w-5 h-5 ml-2" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<button className="bg-[#c26115] hover:bg-[#a65210] text-white px-8 py-4 rounded flex items-center justify-center gap-3 transition-colors text-base font-medium">
<i className="w-5 h-5" data-lucide="lightbulb" strokeWidth="1.5"></i>
                Commencer la réflexion
                <i className="w-5 h-5 ml-2" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-6 -mt-16 relative z-20 pb-20">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-[#0b1221] border border-white/10 rounded-xl p-8 shadow-2xl shadow-black/50 hover:border-white/20 transition-colors flex flex-col h-full">
<div className="flex items-center gap-4 mb-8">
<div className="bg-[#1a4589] text-white w-8 h-8 flex items-center justify-center rounded text-base font-medium shrink-0">
                1
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white uppercase">
                Les Grandes Questions
              </h3>
</div>
<ul className="space-y-6 text-base text-slate-300 flex-1">
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs text-slate-400">?</span>
</div>
<span className="leading-snug">Qui suis-je réellement ?</span>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs text-slate-400">?</span>
</div>
<span className="leading-snug">
                  Pourquoi la spiritualité continue de diviser l'humanité ?
                </span>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs text-slate-400">?</span>
</div>
<span className="leading-snug">
                  Pourquoi le monde semble reproduire les mêmes schémas mentaux
                  et tourner en rond ?
                </span>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs text-slate-400">?</span>
</div>
<span className="leading-snug">
                  Pourquoi personne ne revient après la mort ?
                </span>
</li>
<li className="flex gap-4 items-start">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-xs text-slate-400">?</span>
</div>
<span className="leading-snug">
                  Existe-t-il une évolution intérieure encore inexplorée ?
                </span>
</li>
</ul>
</div>

<div className="bg-[#0b1221] border border-white/10 rounded-xl p-8 shadow-2xl shadow-black/50 hover:border-white/20 transition-colors flex flex-col h-full relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20">
<img className="w-full h-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0b1221]/50 to-[#0b1221]"></div>
</div>
<div className="relative z-10 flex items-center gap-4 mb-8">
<div className="bg-[#1a4589] text-white w-8 h-8 flex items-center justify-center rounded text-base font-medium shrink-0">
                2
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white uppercase">
                Le Constat
              </h3>
</div>
<div className="relative z-10 flex-1 flex flex-col">
<p className="text-base text-white font-medium mb-6 leading-snug">
                Le déséquilibre du monde commence par le déséquilibre intérieur.
              </p>
<p className="text-base text-slate-300 mb-4">
                Nous ne cessons de développer l'extérieur :
              </p>
<ul className="list-disc pl-6 space-y-1 text-base text-slate-400 mb-6">
<li>science</li>
<li>technologie</li>
<li>économie</li>
<li>communication</li>
</ul>
<p className="text-base text-slate-300 mb-8">
                Mais nos peurs, nos conflits, nos illusions, nos divisions et
                nos souffrances persistent.
              </p>
<p className="text-base text-amber-500 font-medium mt-auto">
                Pourquoi l'extrême négativité domine encore le monde ?
              </p>
</div>
</div>

<div className="bg-[#0b1221] border border-white/10 rounded-xl p-8 shadow-2xl shadow-black/50 hover:border-white/20 transition-colors flex flex-col h-full text-center">
<div className="flex items-center gap-4 mb-8 text-left">
<div className="bg-[#1a4589] text-white w-8 h-8 flex items-center justify-center rounded text-base font-medium shrink-0">
                3
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white uppercase">
                Le Cercle Des Consciences
              </h3>
</div>
<p className="text-base text-white mb-8">
              Un espace de réflexion, de dialogue
              <br/>
              et d'évolution intérieure.
            </p>
<div className="grid grid-cols-3 gap-2 mb-8">
<div className="flex flex-col items-center gap-3">
<div className="relative text-slate-500">
<i className="w-8 h-8" data-lucide="book-x" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-400">sans dogme</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="relative text-slate-500">
<i className="w-8 h-8" data-lucide="user-x" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-400">sans gourou</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="relative text-slate-500">
<i className="w-8 h-8" data-lucide="flag-off" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-slate-400">sans idéologie</span>
</div>
</div>
<p className="text-base text-amber-500 mb-6">Seulement :</p>
<div className="grid grid-cols-3 gap-2 mb-8">
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-amber-600" data-lucide="eye" strokeWidth="1.5"></i>
<span className="text-xs text-slate-300">l'observation</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-amber-600" data-lucide="brain" strokeWidth="1.5"></i>
<span className="text-xs text-slate-300">la réflexion</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 text-amber-600" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs text-slate-300">le partage</span>
</div>
</div>
<div className="mt-auto rounded-lg overflow-hidden h-24 relative border border-white/5">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>

<div className="bg-[#0b1221] border border-white/10 rounded-xl p-8 shadow-2xl shadow-black/50 hover:border-white/20 transition-colors flex flex-col h-full">
<div className="flex items-center gap-4 mb-8">
<div className="bg-[#1a4589] text-white w-8 h-8 flex items-center justify-center rounded text-base font-medium shrink-0">
                4
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white uppercase">
                Les Livres
              </h3>
</div>
<p className="text-base text-slate-300 mb-6 text-center">
              Les ouvrages de Jules-César Derigent.
            </p>
<div className="grid grid-cols-3 gap-3 mb-8 flex-1">

<div className="bg-gradient-to-b from-slate-800 to-[#070b14] border border-white/10 rounded flex flex-col items-center justify-between p-2 text-center shadow-lg relative overflow-hidden group">
<div className="absolute top-0 w-full h-1/2 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
<span className="text-[0.6rem] text-slate-400 relative z-10 leading-tight mt-1">
                  Jules-César Derigent
                </span>
<span className="text-xs font-semibold tracking-tight text-amber-500 uppercase relative z-10 leading-tight">
                  La force et la faiblesse mentales
                </span>
<span className="text-[0.5rem] text-slate-500 relative z-10 mb-1">
                  NEXOR
                </span>
</div>

<div className="bg-gradient-to-b from-slate-800 to-[#070b14] border border-white/10 rounded flex flex-col items-center justify-between p-2 text-center shadow-lg relative overflow-hidden group">
<div className="absolute top-0 w-full h-1/2 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
<span className="text-[0.6rem] text-slate-400 relative z-10 leading-tight mt-1">
                  Jules-César Derigent
                </span>
<span className="text-xs font-semibold tracking-tight text-amber-500 uppercase relative z-10 leading-tight">
                  Les trois programmes liés au génome
                </span>
<span className="text-[0.5rem] text-slate-500 relative z-10 mb-1">
                  NEXOR
                </span>
</div>

<div className="bg-gradient-to-b from-slate-800 to-[#070b14] border border-white/10 rounded flex flex-col items-center justify-between p-2 text-center shadow-lg relative overflow-hidden group">
<div className="absolute top-0 w-full h-1/2 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
<span className="text-[0.6rem] text-slate-400 relative z-10 leading-tight mt-1">
                  Jules-César Derigent
                </span>
<span className="text-xs font-semibold tracking-tight text-amber-500 uppercase relative z-10 leading-tight">
                  De l'imaginaire à la réalité
                </span>
<span className="text-[0.5rem] text-slate-500 relative z-10 mb-1">
                  NEXOR
                </span>
</div>
</div>
<button className="w-full border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white px-4 py-3 rounded flex items-center justify-center gap-2 transition-colors text-base font-medium">
<i className="w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
              Découvrir les ouvrages
            </button>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-6 pb-24 text-center">
<div className="mb-16">
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-medium tracking-tight text-slate-200 mb-4">
<span className="text-amber-500 font-serif">"</span>
            La véritable évolution commence là où s'arrête le conditionnement.
            <span className="text-amber-500 font-serif">"</span>
</div>
<div className="text-amber-500 text-base font-medium">
            - Jules-César Derigent -
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left border-t border-white/10 pt-16">
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-amber-600 shrink-0" data-lucide="network" strokeWidth="1.5"></i>
<p className="text-base text-slate-300">
              Une démarche rationnelle et universelle
            </p>
</div>
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-amber-600 shrink-0" data-lucide="eye" strokeWidth="1.5"></i>
<p className="text-base text-slate-300">
              Basée sur l'observation et la réflexion
            </p>
</div>
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-amber-600 shrink-0" data-lucide="users" strokeWidth="1.5"></i>
<p className="text-base text-slate-300">
              Ouverte à tous, sans condition
            </p>
</div>
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-amber-600 shrink-0" data-lucide="globe" strokeWidth="1.5"></i>
<p className="text-base text-slate-300">
              Pour un monde plus lucide, plus conscient, plus humain.
            </p>
</div>
</div>
</section>

<section className="relative pt-24 pb-32 border-t border-white/5 bg-[#0a0f18] overflow-hidden" id="questions">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none mix-blend-screen">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0f18]/80 to-[#0a0f18]"></div>
</div>
<div className="max-w-[90rem] mx-auto px-6 relative z-10">

<div className="mb-16">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white uppercase mb-2">
              Questions
            </h2>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight text-amber-500 uppercase mb-8">
              Existentielles
            </h2>
<p className="text-xl text-slate-200 mb-4 font-medium">
              Les grandes questions qui façonnent notre quête de vérité et notre
              évolution intérieure.
            </p>
<p className="text-base text-slate-400 max-w-2xl">
              Chaque question ouvre une réflexion profonde pour mieux comprendre
              <br/>
              la nature humaine, la conscience et notre véritable nature.
            </p>
</div>

<div className="flex flex-col md:flex-row items-center gap-6 mb-12">
<div className="h-px bg-amber-500/30 flex-1 w-full md:w-auto"></div>
<div className="text-amber-500 uppercase tracking-[0.2em] text-sm font-semibold shrink-0 text-center">
              Explorer Les Grandes Questions
            </div>
<div className="h-px bg-amber-500/30 flex-1 w-full md:w-auto"></div>
</div>
<div className="text-center text-base text-slate-400 mb-12">
            Cliquez sur une question pour accéder aux articles, vidéos et
            podcasts associés.
          </div>

<div className="space-y-4 max-w-5xl mx-auto">

<div className="flex flex-col lg:flex-row items-center gap-6 p-4 rounded-xl border border-white/10 bg-[#0d1526]/80 hover:bg-[#111c33] transition-all duration-300 group">
<div className="w-full lg:w-48 h-32 lg:h-24 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 flex items-start gap-5">
<div className="w-8 h-8 rounded-full border border-amber-500 text-amber-500 flex items-center justify-center text-base font-semibold shrink-0 mt-1">
                  1
                </div>
<div>
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-white mb-2 uppercase group-hover:text-amber-500 transition-colors">
                    Qui suis-je ?
                  </h3>
<p className="text-base text-slate-400 leading-relaxed">
                    Derrière le nom, le corps, les pensées et les rôles... qui
                    est celui qui observe tout cela ?
                    <br/>
                    Découvrez une exploration profonde de votre véritable
                    identité.
                  </p>
</div>
</div>
<div className="flex items-center gap-6 px-4 shrink-0">
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Articles
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Vidéos
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Podcasts
                  </span>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-3 rounded border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium shrink-0">
                Explorer cette question
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="flex flex-col lg:flex-row items-center gap-6 p-4 rounded-xl border border-white/10 bg-[#0d1526]/80 hover:bg-[#111c33] transition-all duration-300 group">
<div className="w-full lg:w-48 h-32 lg:h-24 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 flex items-start gap-5">
<div className="w-8 h-8 rounded-full border border-amber-500 text-amber-500 flex items-center justify-center text-base font-semibold shrink-0 mt-1">
                  2
                </div>
<div>
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-white mb-2 uppercase group-hover:text-amber-500 transition-colors">
                    Pourquoi personne ne revient après la mort ?
                  </h3>
<p className="text-base text-slate-400 leading-relaxed">
                    La question que l'humanité se pose depuis toujours.
                    <br/>
                    Existe-t-il une explication logique et rationnelle à ce
                    grand mystère ?
                  </p>
</div>
</div>
<div className="flex items-center gap-6 px-4 shrink-0">
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Articles
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Vidéos
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Podcasts
                  </span>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-3 rounded border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium shrink-0">
                Explorer cette question
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="flex flex-col lg:flex-row items-center gap-6 p-4 rounded-xl border border-white/10 bg-[#0d1526]/80 hover:bg-[#111c33] transition-all duration-300 group">
<div className="w-full lg:w-48 h-32 lg:h-24 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 flex items-start gap-5">
<div className="w-8 h-8 rounded-full border border-amber-500 text-amber-500 flex items-center justify-center text-base font-semibold shrink-0 mt-1">
                  3
                </div>
<div>
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-white mb-2 uppercase group-hover:text-amber-500 transition-colors">
                    Avons-nous la possibilité d'un après sans être réellement
                    soi ?
                  </h3>
<p className="text-base text-slate-400 leading-relaxed">
                    Et si la survie ne signifiait rien sans conscience ?
                    <br/>
                    Réflexions sur ce qui continue... ou pas.
                  </p>
</div>
</div>
<div className="flex items-center gap-6 px-4 shrink-0">
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Articles
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Vidéos
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Podcasts
                  </span>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-3 rounded border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium shrink-0">
                Explorer cette question
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="flex flex-col lg:flex-row items-center gap-6 p-4 rounded-xl border border-white/10 bg-[#0d1526]/80 hover:bg-[#111c33] transition-all duration-300 group">
<div className="w-full lg:w-48 h-32 lg:h-24 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 flex items-start gap-5">
<div className="w-8 h-8 rounded-full border border-amber-500 text-amber-500 flex items-center justify-center text-base font-semibold shrink-0 mt-1">
                  4
                </div>
<div>
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-white mb-2 uppercase group-hover:text-amber-500 transition-colors">
                    L'évolution naturelle intérieure existe-t-elle ?
                  </h3>
<p className="text-base text-slate-400 leading-relaxed">
                    L'être humain peut-il évoluer par lui-même vers plus de
                    conscience, de clarté et d'amour ?
                    <br/>
                    Décryptage d'un processus souvent ignoré.
                  </p>
</div>
</div>
<div className="flex items-center gap-6 px-4 shrink-0">
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Articles
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Vidéos
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Podcasts
                  </span>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-3 rounded border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium shrink-0">
                Explorer cette question
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="flex flex-col lg:flex-row items-center gap-6 p-4 rounded-xl border border-white/10 bg-[#0d1526]/80 hover:bg-[#111c33] transition-all duration-300 group">
<div className="w-full lg:w-48 h-32 lg:h-24 rounded-lg bg-slate-800 overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 flex items-start gap-5">
<div className="w-8 h-8 rounded-full border border-amber-500 text-amber-500 flex items-center justify-center text-base font-semibold shrink-0 mt-1">
                  5
                </div>
<div>
<h3 className="text-lg lg:text-xl font-semibold tracking-tight text-white mb-2 uppercase group-hover:text-amber-500 transition-colors">
                    Qu'est-ce que la conscience supérieure ?
                  </h3>
<p className="text-base text-slate-400 leading-relaxed">
                    Existe-t-il un niveau de conscience au-delà du mental
                    ordinaire ?
                    <br/>
                    Et comment y accéder ?
                  </p>
</div>
</div>
<div className="flex items-center gap-6 px-4 shrink-0">
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Articles
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Vidéos
                  </span>
</div>
<div className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-500 cursor-pointer transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
<span className="text-[0.65rem] font-medium uppercase tracking-wider">
                    Podcasts
                  </span>
</div>
</div>
<button className="w-full lg:w-auto px-6 py-3 rounded border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium shrink-0">
                Explorer cette question
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row items-center gap-6 mb-16">
<div className="h-px bg-amber-500/30 flex-1 w-full md:w-auto"></div>
<div className="text-amber-500 uppercase tracking-[0.2em] text-sm font-semibold shrink-0 text-center">
            Chaque question vous mène plus loin
          </div>
<div className="h-px bg-amber-500/30 flex-1 w-full md:w-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

<div className="flex gap-5 items-start">
<div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-white uppercase mb-2">
                Articles approfondis
              </h4>
<p className="text-base text-slate-400 leading-snug">
                Des analyses claires et détaillées pour nourrir votre réflexion.
              </p>
</div>
</div>

<div className="flex gap-5 items-start">
<div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-white uppercase mb-2">
                Vidéos explicatives
              </h4>
<p className="text-base text-slate-400 leading-snug">
                Des contenus visuels pour mieux comprendre.
              </p>
</div>
</div>

<div className="flex gap-5 items-start">
<div className="w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-white uppercase mb-2">
                Podcasts inspirants
              </h4>
<p className="text-base text-slate-400 leading-snug">
                Des échanges et réflexions à écouter partout.
              </p>
</div>
</div>
</div>
<div className="text-center">
<div className="flex items-center justify-center gap-3 text-2xl lg:text-3xl font-medium tracking-tight text-slate-200 mb-4">
<span className="text-amber-500 font-serif">"</span>
            Le questionnement sincère est le commencement de la sagesse.
            <span className="text-amber-500 font-serif">"</span>
</div>
<div className="text-amber-500 text-base font-medium">
            - Jules-César Derigent -
          </div>
</div>
</section>
</main>


    </>
  );
}
