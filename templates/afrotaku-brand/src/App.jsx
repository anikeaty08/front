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
      

<nav className="fixed top-0 w-full z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#5E2B8A] to-[#E02B8A] flex items-center justify-center text-white font-display font-medium text-sm">
            a
          </div>
<span className="font-display font-medium text-lg tracking-tight text-white">
            afrotaku
          </span>
</div>
<div className="hidden md:flex gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#brand">
            Brand Identity
          </a>
<a className="hover:text-white transition-colors" href="#mascots">
            Mascottes
          </a>
<a className="hover:text-white transition-colors" href="#values">
            ADN &amp; Valeurs
          </a>
<a className="hover:text-white transition-colors" href="#app">
            App Ecosystem
          </a>
<a className="hover:text-white transition-colors" href="#cafe">
            Cafe Experience
          </a>
</div>
<button className="md:hidden text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-6">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5E2B8A]/20 rounded-full blur-[120px] -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-[400px] h-[400px] bg-[#00F0FF]/10 rounded-full blur-[100px] -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-[#00F0FF] mb-8 uppercase tracking-widest">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
        Brand Guidelines
      </div>
<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
        Cyber-Anime meets
        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E2B8A] via-[#E02B8A] to-[#00F0FF]">
          Afro-Futurisme.
        </span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-400 max-w-2xl mb-10">
        L'identité visuelle complète du projet Afrotaku Megaverse. Une fusion
        élégante, immersive et culturelle pour la communauté otaku d'Afrique de
        l'Ouest.
      </p>
</header>

<section className="max-w-7xl mx-auto px-6 py-20" id="brand">
<div className="mb-16">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          01. Identité Visuelle
        </h2>
<p className="text-slate-400 font-light text-sm">
          Logo, couleurs et typographie fondatrices.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="p-10 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col justify-center items-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#5E2B8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-center z-10">
<div className="font-display text-5xl font-medium tracking-tight text-white mb-1">
              afrotaku
            </div>
<div className="font-sans text-xs font-light tracking-[0.4em] text-slate-400">
              MEGAVERSE
            </div>
</div>
<p className="absolute bottom-6 left-6 text-xs font-light text-slate-500">
            Logo Principal
          </p>
</div>

<div className="p-10 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col justify-center items-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#E02B8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#5E2B8A] via-[#E02B8A] to-[#00F0FF] p-[2px] z-10 glow-magenta">
<div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center">
<span className="font-display text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                a
              </span>
</div>
</div>
<p className="absolute bottom-6 left-6 text-xs font-light text-slate-500">
            Icône Application
          </p>
</div>
</div>

<h3 className="font-display text-xl font-medium tracking-tight text-white mb-6">
        Palette de Couleurs
      </h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
<div className="space-y-3">
<div className="h-32 rounded-2xl bg-[#5E2B8A] border border-white/10 glow-purple"></div>
<div>
<div className="text-sm font-medium text-white">Deep Purple</div>
<div className="text-xs font-light text-slate-500">#5E2B8A</div>
</div>
</div>
<div className="space-y-3">
<div className="h-32 rounded-2xl bg-[#E02B8A] border border-white/10 glow-magenta"></div>
<div>
<div className="text-sm font-medium text-white">Magenta Pink</div>
<div className="text-xs font-light text-slate-500">#E02B8A</div>
</div>
</div>
<div className="space-y-3">
<div className="h-32 rounded-2xl bg-[#00F0FF] border border-white/10 glow-cyan"></div>
<div>
<div className="text-sm font-medium text-white">Electric Cyan</div>
<div className="text-xs font-light text-slate-500">#00F0FF</div>
</div>
</div>
<div className="space-y-3">
<div className="h-32 rounded-2xl bg-[#f8fafc] border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Off-White</div>
<div className="text-xs font-light text-slate-500">#F8FAFC</div>
</div>
</div>
<div className="space-y-3">
<div className="h-32 rounded-2xl bg-[#050505] border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Deep Black</div>
<div className="text-xs font-light text-slate-500">#050505</div>
</div>
</div>
</div>

<h3 className="font-display text-xl font-medium tracking-tight text-white mb-6">
        Typographie
      </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]">
<div className="text-xs font-medium text-[#E02B8A] mb-6 uppercase tracking-widest">
            Titres (Display)
          </div>
<div className="font-display text-4xl font-semibold tracking-tight text-white mb-4">
            Outfit Semibold
          </div>
<div className="font-display text-2xl font-medium tracking-tight text-white mb-4">
            Outfit Medium
          </div>
<div className="font-display text-lg font-light tracking-tight text-slate-300">
            Outfit Light
          </div>
</div>
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]">
<div className="text-xs font-medium text-[#00F0FF] mb-6 uppercase tracking-widest">
            Corps de texte
          </div>
<div className="font-sans text-xl font-medium text-white mb-4">
            Inter Medium
          </div>
<div className="font-sans text-base font-light text-slate-300 mb-4">
            Inter Light (Lecture fluide et propre pour l'interface).
          </div>
<div className="font-sans text-sm font-light text-slate-400">
            Inter Light Small (Détails, dates, métadonnées).
          </div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="mascots">
<div className="mb-16">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          02. Mascottes &amp; Personnages
        </h2>
<p className="text-slate-400 font-light text-sm">
          Aya et son compagnon félin, les visages dynamiques et communautaires
          du Megaverse. Concepts d'animations 2D.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-3xl border border-[#E02B8A]/20 bg-gradient-to-br from-[#0a0a0a] to-[#1a0510] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-[#5E2B8A]/30 to-transparent opacity-50"></div>
<div className="w-16 h-16 rounded-xl bg-[#E02B8A]/20 flex items-center justify-center text-[#E02B8A] mb-6 border border-[#E02B8A]/30 relative z-10 glow-magenta">
<iconify-icon className="text-3xl" icon="lucide:user-heart" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2 relative z-10">
            Aya (L'Afro-Otaku)
          </h3>
<p className="text-sm font-light text-slate-300 mb-6 relative z-10">
            Jeune fille énergique et mignonne. Cheveux longs avec mèches magenta
            et cyan, tenue hybride afro-anime aux grands yeux expressifs.
            Esthétique anime moderne premium.
          </p>
<div className="space-y-3 relative z-10">
<div className="flex items-start gap-3">
<span className="px-2 py-1 bg-white/10 rounded text-xs text-white shrink-0 mt-0.5 border border-white/10">
                Lottie / Anim
              </span>
<span className="text-sm text-slate-400 font-light">
                Idle (respiration, clignement), Joie, Surprise.
              </span>
</div>
<div className="flex items-start gap-3">
<span className="px-2 py-1 bg-white/10 rounded text-xs text-white shrink-0 mt-0.5 border border-white/10">
                PNG / Statique
              </span>
<span className="text-sm text-slate-400 font-light">
                Salutation, Écoute, Poses variées et expressions du visage.
              </span>
</div>
</div>
</div>
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-50"></div>
<div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 relative z-10">
<iconify-icon className="text-3xl" icon="lucide:cat" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2 relative z-10">
            Le Chat (Black &amp; White)
          </h3>
<p className="text-sm font-light text-slate-300 mb-6 relative z-10">
            Compagnon espiègle aux contrastes forts. Fait des apparitions
            surprises et des mouvements fluides en arrière-plan.
          </p>
<div className="space-y-3 relative z-10">
<div className="flex items-start gap-3">
<span className="px-2 py-1 bg-white/10 rounded text-xs text-white shrink-0 mt-0.5 border border-white/10">
                Micro-Interactions
              </span>
<span className="text-sm text-slate-400 font-light">
                Passe devant l'écran, s'étire sur les blocs de contenu,
                interagit avec le scroll.
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="values">
<div className="mb-12">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          L'ADN Afrotaku
        </h2>
<p className="text-slate-400 font-light text-sm">
          Les valeurs qui propulsent notre univers culturel.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors">
<iconify-icon className="text-[#E02B8A] text-3xl mb-4" icon="solar:flame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-display text-xl font-medium text-white mb-2">
            Passion Débordante
          </h3>
<p className="text-sm font-light text-slate-400">
            Une célébration authentique de la culture anime, manga et gaming,
            sans compromis sur l'intensité et la qualité.
          </p>
</div>
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors">
<iconify-icon className="text-[#00F0FF] text-3xl mb-4" icon="solar:planet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-display text-xl font-medium text-white mb-2">
            Ancrage Local
          </h3>
<p className="text-sm font-light text-slate-400">
            Fusionner les codes de la pop-culture japonaise avec la richesse
            visuelle, artistique et culturelle d'Afrique de l'Ouest.
          </p>
</div>
<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors">
<iconify-icon className="text-[#5E2B8A] text-3xl mb-4" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-display text-xl font-medium text-white mb-2">
            Communauté Unie
          </h3>
<p className="text-sm font-light text-slate-400">
            Créer des espaces physiques et virtuels sûrs et bienveillants où les
            créateurs, gamers et fans peuvent s'épanouir.
          </p>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="app">
<div className="mb-16">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          04. Site Web Vitrine
        </h2>
<p className="text-slate-400 font-light text-sm">
          UI/UX Design - Dark mode premium, navigation fluide.
        </p>
</div>
<div className="flex overflow-x-auto gap-8 pb-12 hide-scroll snap-x">

<div className="min-w-[320px] w-[320px] h-[680px] bg-[#050505] rounded-[3rem] border-[10px] border-[#1a1a1a] relative overflow-hidden flex flex-col snap-center shrink-0 shadow-2xl">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
<span className="text-[10px] font-medium text-white">9:41</span>
<div className="flex gap-1.5">
<iconify-icon className="text-white text-xs" icon="solar:cellular-network-linear"></iconify-icon>
<iconify-icon className="text-white text-xs" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-white text-xs" icon="solar:battery-linear"></iconify-icon>
</div>
</div>

<div className="px-5 pb-3 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md z-10 sticky top-0">
<div className="font-display text-lg font-medium tracking-tight text-white">
              afrotaku
            </div>
<div className="flex gap-4 text-slate-300">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scroll pb-24">

<div className="flex gap-4 px-5 py-4 overflow-x-auto hide-scroll">
<div className="flex flex-col items-center gap-1 shrink-0">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#5E2B8A] to-[#E02B8A]">
<div className="w-full h-full rounded-full bg-[#111] border-2 border-[#050505] flex items-center justify-center text-xs text-slate-500">
                    You
                  </div>
</div>
</div>
<div className="flex flex-col items-center gap-1 shrink-0">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#00F0FF] to-[#5E2B8A]">
<div className="w-full h-full rounded-full bg-slate-800 border-2 border-[#050505]"></div>
</div>
</div>
<div className="flex flex-col items-center gap-1 shrink-0">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#00F0FF] to-[#5E2B8A]">
<div className="w-full h-full rounded-full bg-slate-700 border-2 border-[#050505]"></div>
</div>
</div>
</div>

<div className="px-5 mb-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-slate-800"></div>
<div>
<div className="text-sm font-medium text-white">Kenji_Benin</div>
<div className="text-xs font-light text-slate-500">
                    Il y a 2h • Cotonou
                  </div>
</div>
</div>
<div className="w-full h-64 bg-slate-900 rounded-2xl mb-3 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-[#5E2B8A]/40 to-[#050505]"></div>
<div className="absolute bottom-4 left-4 text-xs font-medium px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-white border border-white/10">
                  Cosplay Showcase
                </div>
</div>
<p className="text-sm font-light text-slate-300 mb-4">
                Préparation pour le prochain event au café ! Nouveau masque
                inspiré de Bleach avec une touche locale. 🔥
                <span className="text-[#00F0FF]">#Afrotaku #Cosplay</span>
</p>
<div className="flex gap-6 text-slate-400">
<button className="flex items-center gap-1.5 hover:text-[#E02B8A] transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs">245</span>
</button>
<button className="flex items-center gap-1.5 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs">42</span>
</button>
<button className="flex items-center gap-1.5 hover:text-white transition-colors ml-auto">
<iconify-icon className="text-xl" icon="solar:share-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-[#050505]/80 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 pb-4">
<button className="flex flex-col items-center gap-1 text-white">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#5E2B8A] to-[#E02B8A] text-white flex items-center justify-center -translate-y-2 shadow-lg shadow-[#E02B8A]/20">
<iconify-icon className="text-2xl" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[320px] w-[320px] h-[680px] bg-[#050505] rounded-[3rem] border-[10px] border-[#1a1a1a] relative overflow-hidden flex flex-col snap-center shrink-0 shadow-2xl">

<div className="h-72 w-full bg-[#111] relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10"></div>
<div className="absolute top-12 left-5 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute top-12 right-5 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
<iconify-icon className="text-xl" icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="w-full h-full bg-gradient-to-br from-[#E02B8A]/30 to-[#00F0FF]/20 opacity-50"></div>
</div>

<div className="flex-1 px-5 -mt-10 z-20 relative overflow-y-auto hide-scroll pb-24">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5E2B8A]/20 text-[#E02B8A] text-xs font-medium mb-3 border border-[#5E2B8A]/30">
<iconify-icon icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Tournoi Gaming
            </div>
<h1 className="font-display text-2xl font-semibold tracking-tight text-white mb-2 leading-tight">
              Neon Genesis Smash Bros Tournament
            </h1>
<div className="flex items-center gap-3 text-sm text-slate-400 font-light mb-6">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                24 Oct, 18:00
              </div>
<span>•</span>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Café Afrotaku
              </div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#050505]"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#050505]"></div>
<div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#050505]"></div>
</div>
<div className="text-xs font-light text-slate-300">
<span className="font-medium text-white">+42</span>
                participants confirmés
              </div>
</div>
<h3 className="text-sm font-medium text-white mb-2">
              À propos de l'événement
            </h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-6">
              Rejoignez-nous pour le plus grand tournoi Smash de la saison.
              Setups premium, ambiance néon, et cocktails spéciaux inspirés
              d'Evangelion disponibles au bar.
            </p>
</div>

<div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-30">
<button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#5E2B8A] to-[#E02B8A] text-white font-medium text-sm shadow-lg shadow-[#5E2B8A]/30 hover:opacity-90 transition-opacity">
              Rejoindre l'événement
            </button>
</div>
</div>

<div className="min-w-[320px] w-[320px] h-[680px] bg-[#050505] rounded-[3rem] border-[10px] border-[#1a1a1a] relative overflow-hidden flex flex-col snap-center shrink-0 shadow-2xl">

<div className="h-12 w-full flex justify-end items-center px-6 pt-2 z-20 absolute top-0">
<div className="flex gap-1.5">
<iconify-icon className="text-white text-lg drop-shadow-md" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="pt-16 pb-6 flex flex-col items-center relative">
<div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#00F0FF]/20 to-transparent"></div>
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#00F0FF] to-[#E02B8A] z-10 mb-3 relative">
<div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center overflow-hidden">

</div>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-[#050505] rounded-full flex items-center justify-center">
<div className="w-4 h-4 bg-[#00F0FF] rounded-full"></div>
</div>
</div>
<h2 className="font-display text-xl font-medium text-white z-10">
              Aya_Creator
            </h2>
<p className="text-xs font-light text-[#00F0FF] z-10">
              Digital Artist &amp; Otaku
            </p>
<div className="flex gap-8 mt-6 z-10">
<div className="text-center">
<div className="font-medium text-white">1.2K</div>
<div className="text-[10px] text-slate-500 font-light">Abonnés</div>
</div>
<div className="text-center">
<div className="font-medium text-white">342</div>
<div className="text-[10px] text-slate-500 font-light">Suivis</div>
</div>
<div className="text-center">
<div className="font-medium text-white">12</div>
<div className="text-[10px] text-slate-500 font-light">
                  Produits
                </div>
</div>
</div>
</div>

<div className="flex border-b border-white/5 mb-4">
<div className="flex-1 pb-3 text-center text-sm font-medium text-slate-500 cursor-pointer">
              Posts
            </div>
<div className="flex-1 pb-3 text-center text-sm font-medium text-white border-b-2 border-[#E02B8A] cursor-pointer">
              Marketplace
            </div>
</div>

<div className="flex-1 overflow-y-auto hide-scroll px-4 pb-24 grid grid-cols-2 gap-3">
<div className="bg-[#111] rounded-2xl p-2 border border-white/5">
<div className="w-full aspect-square bg-slate-800 rounded-xl mb-2 relative">
<div className="absolute top-2 right-2 bg-black/60 rounded px-1.5 py-0.5 text-[10px] text-white">
                  15 000 FCFA
                </div>
</div>
<div className="text-xs font-medium text-white truncate">
                Print A3 "Cyber Cotonou"
              </div>
</div>
<div className="bg-[#111] rounded-2xl p-2 border border-white/5">
<div className="w-full aspect-square bg-slate-800 rounded-xl mb-2 relative">
<div className="absolute top-2 right-2 bg-black/60 rounded px-1.5 py-0.5 text-[10px] text-white">
                  8 000 FCFA
                </div>
</div>
<div className="text-xs font-medium text-white truncate">
                T-shirt Yurei
              </div>
</div>
<div className="bg-[#111] rounded-2xl p-2 border border-white/5">
<div className="w-full aspect-square bg-slate-800 rounded-xl mb-2 relative"></div>
<div className="text-xs font-medium text-white truncate">
                Sticker Pack
              </div>
</div>
<div className="bg-[#111] rounded-2xl p-2 border border-white/5">
<div className="w-full aspect-square bg-slate-800 rounded-xl mb-2 relative"></div>
<div className="text-xs font-medium text-white truncate">
                Custom Mask
              </div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-[#050505]/80 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 pb-4">
<button className="flex flex-col items-center gap-1 text-slate-500">
<iconify-icon className="text-2xl" icon="solar:home-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center -translate-y-2 border border-white/10">
<iconify-icon className="text-2xl" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 text-[#E02B8A]">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
<div className="mb-12">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          03. Site Web Vitrine
        </h2>
<p className="text-slate-400 font-light text-sm">
          Composants web réutilisables, style épuré et percutant.
        </p>
</div>

<div className="w-full rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#111]">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="ml-4 text-[10px] text-slate-500 font-light px-2 py-1 bg-black rounded border border-white/5">
            afrotaku-megaverse.bj
          </div>
</div>
<div className="px-10 py-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#5E2B8A]/20 to-transparent blur-3xl"></div>
<div className="max-w-xl relative z-10">
<div className="inline-block px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-xs font-medium text-[#00F0FF] mb-6">
              L'application est en ligne
            </div>
<h1 className="font-display text-5xl font-semibold tracking-tight text-white mb-6">
              Connecte-toi à
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                l'univers Otaku
              </span>
              béninois.
            </h1>
<p className="text-slate-400 font-light mb-8 text-lg">
              Découvre des événements, partage tes créations, rejoins le café
              physique et vis ta passion sans frontières.
            </p>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors">
                Télécharger l'App
              </button>
<button className="px-6 py-3 rounded-xl bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
                Découvrir le Café
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:flex relative z-10 w-72 h-72">
<div className="absolute inset-0 border border-white/10 rounded-3xl rotate-12 bg-black/50 backdrop-blur-sm shadow-2xl"></div>
<div className="absolute inset-0 border border-white/20 rounded-3xl -rotate-6 bg-gradient-to-br from-[#050505] to-[#111] flex items-center justify-center p-6">
<div className="w-full h-full border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500 font-light text-sm">
                [App Interface Render]
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="cafe">
<div className="mb-12">
<h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">
          05. Identité Café Thématique
        </h2>
<p className="text-slate-400 font-light text-sm">
          L'extension physique du Megaverse. Esthétique spatiale et menu.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors flex flex-col">
<div className="w-12 h-12 rounded-xl bg-[#5E2B8A]/20 flex items-center justify-center text-[#E02B8A] mb-6 border border-[#5E2B8A]/30">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-3">
            Architecture &amp; Design
          </h3>
<p className="text-sm font-light text-slate-400 flex-1 leading-relaxed">
            Une façade minimaliste noire avec des bandes néon cachées. À
            l'intérieur, du béton brut, des masques en bois sculptés éclairés
            par des LEDs cyan, et des projections murales de paysages anime. Un
            mélange parfait entre le cyber urbain et l'artisanat local.
          </p>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-colors flex flex-col">
<div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-6 border border-[#00F0FF]/20">
<iconify-icon className="text-2xl" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-3">
            Zones Immersives
          </h3>
<ul className="text-sm font-light text-slate-400 space-y-2 flex-1">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mt-1.5"></div>
              Lounge Manga: Sièges bas, tables basses lumineuses.
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#E02B8A] mt-1.5"></div>
              Gaming Pods: Setups isolés avec écrans incurvés.
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#5E2B8A] mt-1.5"></div>
              Pop-up Store: Étagères métalliques pour les créateurs de l'app.
            </li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-[#E02B8A]/20 bg-gradient-to-br from-[#0a0a0a] to-[#1a0510] flex flex-col relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-[#E02B8A]/20 rounded-full blur-2xl"></div>
<div className="w-12 h-12 rounded-xl bg-[#E02B8A]/20 flex items-center justify-center text-[#E02B8A] mb-6 border border-[#E02B8A]/30 z-10">
<iconify-icon className="text-2xl" icon="solar:cup-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-4 z-10">
            Concept Menu
          </h3>
<div className="space-y-4 z-10">
<div className="border-b border-white/5 pb-2">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">
                  Macha Afro-Latte
                </span>
<span className="text-xs text-[#00F0FF]">Signature</span>
</div>
<div className="text-xs font-light text-slate-400">
                Matcha japonais premium infusé au gingembre local.
              </div>
</div>
<div className="border-b border-white/5 pb-2">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Cyber-Bissap</span>
</div>
<div className="text-xs font-light text-slate-400">
                Bissap glacé, perles de tapioca, sirop de litchi.
              </div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Onigiri Fumé</span>
</div>
<div className="text-xs font-light text-slate-400">
                Classique japonais avec farce au poisson fumé local.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="border border-white/10 rounded-[3rem] bg-[#0a0a0a] relative overflow-hidden text-center px-6 py-24 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-[#5E2B8A]/10 via-transparent to-[#00F0FF]/10 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E02B8A]/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Prêt à entrer dans le
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#E02B8A] to-[#5E2B8A]">
              Megaverse ?
            </span>
</h2>
<p className="text-slate-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Nous cherchons des créateurs, partenaires et investisseurs pour
            donner vie au plus grand écosystème otaku d'Afrique de l'Ouest.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#5E2B8A] to-[#E02B8A] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#E02B8A]/20">
              Devenir Partenaire
            </button>
<button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
              Pitch Deck complet
            </button>
</div>
</div>
</div>
</section>
<footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white font-display font-medium text-[10px]">
          a
        </div>
<span className="font-display font-medium text-sm tracking-tight text-white">
          afrotaku
        </span>
</div>
<p className="text-xs font-light text-slate-600">
        Concept visuel généré pour le projet Afrotaku Megaverse. Benin, West
        Africa.
      </p>
</footer>

    </>
  );
}
